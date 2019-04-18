import {
    byteAlignment,
    unsizedFormat,
    formatByteLength,
    formatDataType,
    bufferDataTypedArray,
    bufferDataByteLength,
    bufferDataComponents,
    shaderDataComponents,
    shaderDataLocations,
    shaderDataByteLength,
    setUniformValues,
} from './utils';

import {
    Framebuffer,
    Program,
    Shader,
    Primitive,
    Accessor,
    Buffer,
    Sampler,
    Texture,
    LoadedFramebuffer,
    LoadedProgram,
    LoadedShader,
    LoadedPrimitive,
    LoadedAccessor,
    LoadedBuffer,
    LoadedSampler,
    LoadedTexture,
} from './interfaces';

import {
    ResourceType,
    ShaderType,
    PrimitiveType,
    BufferTarget,
    BufferDataType,
    ShaderDataType,
    TextureFilter,
    TextureWrapping,
    TextureType,
    TextureFormat,
} from './enums';

export * from './enums';

export type RequestResourceCallback = (resourceType: ResourceType, resourceName: string) => void;

export class LazyRenderer {
    // Render canvas.
    private readonly canvas: HTMLCanvasElement;
    // WebGL 2.0 context.
    private readonly gl: WebGL2RenderingContext;
    // Callback to request missing resources.
    private readonly requestResource: RequestResourceCallback;
    // Resources.
    private readonly framebuffers: Map<string, Framebuffer> = new Map<string, Framebuffer>();
    private readonly programs: Map<string, Program> = new Map<string, Program>();
    private readonly shaders: Map<string, Shader> = new Map<string, Shader>();
    private readonly primitives: Map<string, Primitive> = new Map<string, Primitive>();
    private readonly accessors: Map<string, Accessor> = new Map<string, Accessor>();
    private readonly buffers: Map<string, Buffer> = new Map<string, Buffer>();
    private readonly samplers: Map<string, Sampler> = new Map<string, Sampler>();
    private readonly textures: Map<string, Texture> = new Map<string, Texture>();
    // Vertex attribute locations. Used to keep consistency across programs.
    private readonly attributeLocations: Map<string, number> = new Map<string, number>();
    private nextAttributeLocation: number = 0; // Next available attribute location.

    public constructor(canvas: HTMLCanvasElement, requestResource: RequestResourceCallback) {
        this.canvas = canvas;

        const contextAttributes = {
            alpha: false,
            depth: true,
            stencil: true,
            antialias: false,
            premultipliedAlpha: true,
            preserveDrawingBuffer: true,
            powerPreference: 'default',
        };
        this.gl = canvas.getContext('webgl2', contextAttributes) as WebGL2RenderingContext;

        this.gl.clearColor(0.2, 0.4, 0.6, 1.0);
        this.gl.disable(this.gl.CULL_FACE);
        this.gl.stencilOp(this.gl.KEEP, this.gl.KEEP, this.gl.REPLACE);

        this.gl.enable(this.gl.DEPTH_TEST);

        this.gl.enable(this.gl.STENCIL_TEST);
        this.gl.stencilFunc(this.gl.ALWAYS, 1.0, 0xff);
        this.gl.stencilMask(0xff);

        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT | this.gl.STENCIL_BUFFER_BIT);

        this.requestResource = requestResource;
    }

    public getResources(): Map<ResourceType, string[]> {
        const resources: Map<ResourceType, string[]> = new Map<ResourceType, string[]>();
        resources.set(ResourceType.FRAMEBUFFER, [...this.framebuffers.keys()]);
        resources.set(ResourceType.PROGRAM, [...this.programs.keys()]);
        resources.set(ResourceType.SHADER, [...this.shaders.keys()]);
        resources.set(ResourceType.PRIMITIVE, [...this.primitives.keys()]);
        resources.set(ResourceType.ACCESSOR, [...this.accessors.keys()]);
        resources.set(ResourceType.BUFFER, [...this.buffers.keys()]);
        resources.set(ResourceType.SAMPLER, [...this.samplers.keys()]);
        resources.set(ResourceType.TEXTURE, [...this.textures.keys()]);
        return resources;
    }

    public getVertexAttributes(): string[] {
        return [...this.attributeLocations.keys()];
    }

    // Register methods. #################################################################################################

    public registerFramebuffer(
        framebufferName: string,
        width: number,
        height: number,
        colorAttachments: ReadonlyMap<number, { textureName: string; layer?: number }>,
        depthAttachment: { textureName: string; layer?: number } | null = null,
        stencilAttachment: { textureName: string; layer?: number } | null = null,
    ): void {
        this.invalidateFramebuffer(framebufferName);
        this.framebuffers.set(framebufferName, {
            width,
            height,
            colorAttachments,
            depthAttachment,
            stencilAttachment,
            framebufferObject: null,
        });
    }

    public registerProgram(programName: string, shaderNames: ReadonlyArray<string>): void {
        this.invalidateProgram(programName);
        this.programs.set(programName, {
            shaderNames,
            uniforms: new Map<string, { type: ShaderDataType; locations: WebGLUniformLocation[] }>(),
            programObject: null,
        });
    }

    public registerShader(shaderName: string, source: string, type: ShaderType = ShaderType.FRAGMENT): void {
        this.invalidateShader(shaderName);
        this.shaders.set(shaderName, {
            source,
            type,
            programNames: new Set<string>(),
            shaderObject: null,
        });
    }

    public registerPrimitive(
        primitiveName: string,
        count: number = 0,
        attributes: ReadonlyMap<string, string> = new Map<string, string>(),
        indices: string | null = null,
        type: PrimitiveType = PrimitiveType.TRIANGLES,
    ): void {
        this.invalidatePrimitive(primitiveName);
        this.primitives.set(primitiveName, {
            count,
            attributes,
            indices,
            type,
            vertexArrayObject: null,
        });
    }

    public registerAccessor(
        accessorName: string,
        bufferName: string,
        shaderDataType: ShaderDataType = ShaderDataType.SF_4,
        bufferDataType: BufferDataType = BufferDataType.SF32,
        offset: number = 0,
        stride: number = 0,
        normalized: boolean = false,
    ): void {
        this.invalidateAccessor(accessorName);
        this.accessors.set(accessorName, {
            bufferName,
            offset,
            stride: stride || shaderDataByteLength(shaderDataType, bufferDataType),
            normalized,
            shaderDataType,
            bufferDataType,
            primitiveNames: new Set<string>(),
        });
    }

    public registerBuffer(
        bufferName: string,
        byteLength: number,
        target: BufferTarget = BufferTarget.ATTRIBUTES,
    ): void {
        this.invalidateBuffer(bufferName);
        this.buffers.set(bufferName, {
            target,
            byteArray: new Uint8Array(byteLength),
            accessorNames: new Set<string>(),
            bufferObject: null,
        });
    }

    public registerSampler(
        samplerName: string,
        magFilter: TextureFilter = TextureFilter.LINEAR,
        minFilter: TextureFilter = TextureFilter.LINEAR_MIPMAP_LINEAR,
        wrapS: TextureWrapping = TextureWrapping.REPEAT,
        wrapT: TextureWrapping = TextureWrapping.REPEAT,
        wrapR: TextureWrapping = TextureWrapping.REPEAT,
    ): void {
        this.invalidateSampler(samplerName);
        this.samplers.set(samplerName, {
            magFilter,
            minFilter,
            wrapS,
            wrapT,
            wrapR,
            samplerObject: null,
        });
    }

    public registerTexture(
        textureName: string,
        width: number = 1,
        height: number = 1,
        depth: number = 1,
        type: TextureType = TextureType.TEX_2D,
        format: TextureFormat = TextureFormat.UN_8_8_8_8,
    ): void {
        this.invalidateTexture(textureName);
        this.textures.set(textureName, {
            byteArray: new Uint8Array(width * height * depth * formatByteLength(format)),
            width,
            height,
            depth: type === TextureType.TEX_CUBE ? 6 : depth,
            type,
            format,
            framebufferNames: new Set<string>(),
            textureObject: null,
        });
    }

    // Delete methods. ###################################################################################################

    public deleteFramebuffer(framebufferName: string): void {
        this.invalidateFramebuffer(framebufferName);
        this.framebuffers.delete(framebufferName);
    }

    public deleteProgram(programName: string): void {
        this.invalidateProgram(programName);
        this.programs.delete(programName);
    }

    public deleteShader(shaderName: string): void {
        this.invalidateShader(shaderName);
        this.shaders.delete(shaderName);
    }

    public deletePrimitive(primitiveName: string): void {
        this.invalidatePrimitive(primitiveName);
        this.primitives.delete(primitiveName);
    }

    public deleteAccessor(accessorName: string): void {
        this.invalidateAccessor(accessorName);
        this.accessors.delete(accessorName);
    }

    public deleteBuffer(bufferName: string): void {
        this.invalidateBuffer(bufferName);
        this.buffers.delete(bufferName);
    }

    public deleteSampler(samplerName: string): void {
        this.invalidateSampler(samplerName);
        this.samplers.delete(samplerName);
    }

    public deleteTexture(textureName: string): void {
        this.invalidateTexture(textureName);
        this.textures.delete(textureName);
    }

    // Invalidate methods. ###############################################################################################

    private invalidateFramebuffer(framebufferName: string): void {
        const framebuffer = this.framebuffers.get(framebufferName);
        if (framebuffer === undefined) {
            return;
        }

        // Remove this framebuffer name from its dependency color attachment textures.
        for (const colorAttachment of framebuffer.colorAttachments.values()) {
            const texture = this.textures.get(colorAttachment.textureName);
            if (texture !== undefined) {
                texture.framebufferNames.delete(framebufferName);
            }
        }

        // Remove this framebuffer name from its dependency depth attachment texture.
        if (framebuffer.depthAttachment !== null) {
            const texture = this.textures.get(framebuffer.depthAttachment.textureName);
            if (texture !== undefined) {
                texture.framebufferNames.delete(framebufferName);
            }
        }

        // Remove this framebuffer name from its dependency stencil attachment texture.
        if (framebuffer.stencilAttachment !== null) {
            const texture = this.textures.get(framebuffer.stencilAttachment.textureName);
            if (texture !== undefined) {
                texture.framebufferNames.delete(framebufferName);
            }
        }

        // Delete the framebuffer object. Null values are silently ignored.
        this.gl.deleteFramebuffer(framebuffer.framebufferObject);
        framebuffer.framebufferObject = null;
    }

    private invalidateProgram(programName: string): void {
        const program = this.programs.get(programName);
        if (program === undefined) {
            return;
        }

        // Remove this program name from its dependency shaders.
        for (const shaderName of program.shaderNames) {
            const shader = this.shaders.get(shaderName);
            if (shader !== undefined) {
                shader.programNames.delete(programName);
            }
        }

        // Delete the program object. Null values are silently ignored.
        this.gl.deleteProgram(program.programObject);
        program.programObject = null;
    }

    private invalidateShader(shaderName: string): void {
        const shader = this.shaders.get(shaderName);
        if (shader === undefined) {
            return;
        }

        // Invalidate programs that depend on this shader.
        for (const programName of shader.programNames) {
            this.invalidateProgram(programName);
        }

        // Delete the shader object. Null values are silently ignored.
        this.gl.deleteShader(shader.shaderObject);
        shader.shaderObject = null;
    }

    private invalidatePrimitive(primitiveName: string): void {
        const primitive = this.primitives.get(primitiveName);
        if (primitive === undefined) {
            return;
        }

        // Remove this primitive name from its dependency accessors.
        const accessorNames = [...primitive.attributes.values()];
        if (primitive.indices !== null) {
            accessorNames.push(primitive.indices);
        }
        for (const accessorName of accessorNames) {
            const accessor = this.accessors.get(accessorName);
            if (accessor !== undefined) {
                accessor.primitiveNames.delete(primitiveName);
            }
        }

        // Delete the vertex array object. Null values are silently ignored.
        this.gl.deleteVertexArray(primitive.vertexArrayObject);
        primitive.vertexArrayObject = null;
    }

    private invalidateAccessor(accessorName: string): void {
        const accessor = this.accessors.get(accessorName);
        if (accessor === undefined) {
            return;
        }

        // Remove this accessor name from its dependency buffer.
        const buffer = this.buffers.get(accessor.bufferName);
        if (buffer !== undefined) {
            buffer.accessorNames.delete(accessorName);
        }

        // Invalidate primitives that depend on this accessor.
        for (const primitiveName of accessor.primitiveNames) {
            this.invalidatePrimitive(primitiveName);
        }
    }

    private invalidateBuffer(bufferName: string): void {
        const buffer = this.buffers.get(bufferName);
        if (buffer === undefined) {
            return;
        }

        // Invalidate accessors that depend on this buffer.
        for (const accessorName of buffer.accessorNames) {
            this.invalidateAccessor(accessorName);
        }

        // Store the buffer contents back to the CPU byte array.
        this.readBufferData(bufferName, buffer.byteArray);

        // Delete the buffer object. Null values are silently ignored.
        this.gl.deleteBuffer(buffer.bufferObject);
        buffer.bufferObject = null;
    }

    private invalidateSampler(samplerName: string): void {
        const sampler = this.samplers.get(samplerName);
        if (sampler === undefined) {
            return;
        }

        // Delete the sampler object. Null values are silently ignored.
        this.gl.deleteSampler(sampler.samplerObject);
        sampler.samplerObject = null;
    }

    private invalidateTexture(textureName: string): void {
        const texture = this.textures.get(textureName);
        if (texture === undefined) {
            return;
        }

        // Invalidate framebuffers that depend on this texture.
        for (const framebufferName of texture.framebufferNames) {
            this.invalidateFramebuffer(framebufferName);
        }

        // Store the texture contents back to the CPU byte array.
        this.readTextureData(textureName, texture.byteArray, texture.width, texture.height, texture.depth);

        // Delete the texture object. Null values are silently ignored.
        this.gl.deleteTexture(texture.textureObject);
        texture.textureObject = null;
    }

    // Loaded resources getter methods. ################################################################################

    private getLoadedFramebuffer(framebufferName: string): LoadedFramebuffer | undefined {
        const framebuffer = this.framebuffers.get(framebufferName);
        if (framebuffer === undefined) {
            // Unkown framebuffer name.
            this.requestResource(ResourceType.FRAMEBUFFER, framebufferName);
            return undefined;
        }

        if (framebuffer.framebufferObject !== null) {
            // Framebuffer object already loaded in GPU.
            return framebuffer as LoadedFramebuffer;
        }

        // Color, depth and stencil attachments.
        const attachments = new Map<number, { texture: LoadedTexture; layer: number }>();

        // Resolve color attachments.
        for (const [attachmentIndex, { textureName, layer = 0 }] of framebuffer.colorAttachments) {
            const texture = this.getLoadedTexture(textureName);
            if (texture !== undefined) {
                attachments.set(this.gl.COLOR_ATTACHMENT0 + attachmentIndex, { texture, layer });
            }
        }
        let numAttachments = framebuffer.colorAttachments.size;

        // Resolve depth attachment.
        if (framebuffer.depthAttachment !== null) {
            const { textureName, layer = 0 } = framebuffer.depthAttachment;
            const texture = this.getLoadedTexture(textureName);
            if (texture !== undefined) {
                attachments.set(this.gl.DEPTH_ATTACHMENT, { texture, layer });
            }
            numAttachments++;
        }

        // Resolve stencil attachment.
        if (framebuffer.stencilAttachment !== null) {
            const { textureName, layer = 0 } = framebuffer.stencilAttachment;
            const texture = this.getLoadedTexture(textureName);
            if (texture !== undefined) {
                attachments.set(this.gl.STENCIL_ATTACHMENT, { texture, layer });
            }
            numAttachments++;
        }

        if (attachments.size < numAttachments) {
            // Missing texture.
            return undefined;
        }

        // Create a new framebuffer object.
        framebuffer.framebufferObject = this.gl.createFramebuffer();
        if (framebuffer.framebufferObject === null) {
            console.error('WebGL failed to create a new framebuffer object.');
            return undefined;
        }

        // Bind the framebuffer object.
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer.framebufferObject);

        // Initialize output color attachment list with gl.NONE.
        const drawBuffers = new Array(Math.max(...framebuffer.colorAttachments.keys())).fill(this.gl.NONE);

        for (const [attachment, { texture, layer = 0 }] of attachments) {
            // Add framebuffer name to texture dependency references.
            texture.framebufferNames.add(framebufferName);

            // Bind the texture object.
            this.gl.bindTexture(texture.type, texture.textureObject);

            // Attach texture.
            switch (texture.type) {
                case TextureType.TEX_2D_ARRAY:
                case TextureType.TEX_3D:
                    this.gl.framebufferTextureLayer(this.gl.FRAMEBUFFER, attachment, texture.textureObject, 0, layer);
                    break;
                case TextureType.TEX_2D:
                    this.gl.framebufferTexture2D(
                        this.gl.FRAMEBUFFER,
                        attachment,
                        texture.type,
                        texture.textureObject,
                        0,
                    );
                    break;
                case TextureType.TEX_CUBE:
                    const target = this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + layer;
                    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachment, target, texture.textureObject, 0);
            }
        }

        // Set output color attachment list.
        this.gl.drawBuffers(drawBuffers);

        // Return successfully.
        return framebuffer as LoadedFramebuffer;
    }

    private getLoadedProgram(programName: string): LoadedProgram | undefined {
        const program = this.programs.get(programName);
        if (program === undefined) {
            // Unkown program name.
            this.requestResource(ResourceType.PROGRAM, programName);
            return undefined;
        }

        if (program.programObject !== null) {
            // Program object already loaded in GPU.
            return program as LoadedProgram;
        }

        // Resolve shaders.
        const shaders: LoadedShader[] = [];
        for (const shaderName of program.shaderNames) {
            const shader = this.getLoadedShader(shaderName);
            if (shader !== undefined) {
                shaders.push(shader);
            }
        }

        if (shaders.length < program.shaderNames.length) {
            // Missing shader.
            return undefined;
        }

        // Create a new program object.
        program.programObject = this.gl.createProgram();
        if (program.programObject === null) {
            console.error('WebGL failed to create a new program object.');
            return undefined;
        }

        // Attach shader objects.
        for (const shader of shaders) {
            this.gl.attachShader(program.programObject, shader.shaderObject);
        }

        // Link the program and check for errors.
        this.gl.linkProgram(program.programObject);
        const linkSuccess: boolean = this.gl.getProgramParameter(program.programObject, this.gl.LINK_STATUS);
        if (!linkSuccess) {
            // Link operation failed.
            console.error(this.gl.getProgramInfoLog(program.programObject));
            this.gl.deleteProgram(program.programObject);
            program.programObject = null;
            return undefined;
        }

        // Rebind the program active attributes according to the global attribute location mapping.
        const attributesDebug = [];
        const numAttributes: number = this.gl.getProgramParameter(program.programObject, this.gl.ACTIVE_ATTRIBUTES);
        for (let infoIndex = 0; infoIndex < numAttributes; infoIndex++) {
            const info = this.gl.getActiveAttrib(program.programObject, infoIndex);
            if (info !== null) {
                // Get attribute name and type.
                const attributeName = info.name;
                const shaderDataType = info.type;

                // Get attribute location.
                let attributeLocation = this.attributeLocations.get(attributeName);
                if (attributeLocation === undefined) {
                    // This is a new attribute name. Assign a new attribute location.
                    attributeLocation = this.nextAttributeLocation;
                    this.nextAttributeLocation += shaderDataLocations(shaderDataType);
                    this.attributeLocations.set(attributeName, attributeLocation);
                }
                // Bind the attribute name to the mapped location.
                this.gl.bindAttribLocation(program.programObject, attributeLocation, attributeName);

                // Debug.
                attributesDebug.push({
                    name: attributeName,
                    location: attributeLocation,
                    type: ShaderDataType[shaderDataType],
                    size: info.size,
                });
            }
        }
        console.table(attributesDebug);

        // Link the program again to apply the rebindings.
        this.gl.linkProgram(program.programObject);
        const rebindSuccess: boolean = this.gl.getProgramParameter(program.programObject, this.gl.LINK_STATUS);
        if (!rebindSuccess) {
            // Link operation failed.
            console.error(this.gl.getProgramInfoLog(program.programObject));
            this.gl.deleteProgram(program.programObject);
            program.programObject = null;
            return undefined;
        }

        // Setup uniforms.
        const uniformsDebug = [];
        const numUniforms: number = this.gl.getProgramParameter(program.programObject, this.gl.ACTIVE_UNIFORMS);
        for (let infoIndex = 0; infoIndex < numUniforms; infoIndex++) {
            const info = this.gl.getActiveUniform(program.programObject, infoIndex);
            if (info !== null) {
                // Get uniform name.
                const uniformName = info.name.endsWith('[0]') ? info.name.slice(0, -3) : info.name;

                // Get uniform locations.
                const uniformLocations: WebGLUniformLocation[] = [];
                const firstLocation = this.gl.getUniformLocation(program.programObject, uniformName);
                if (firstLocation !== null) {
                    uniformLocations.push(firstLocation);
                }
                for (let index = 1; index < info.size; index++) {
                    const location = this.gl.getUniformLocation(program.programObject, uniformName + '[' + index + ']');
                    if (location !== null) {
                        uniformLocations.push(location);
                    }
                }
                // Store uniform parameters.
                program.uniforms.set(uniformName, { type: info.type, locations: uniformLocations });

                // Debug.
                uniformsDebug.push({ name: info.name, type: ShaderDataType[info.type], size: info.size });
            }
        }
        console.table(uniformsDebug);

        // TODO: Uniform Blocks.
        // ? this.gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES
        // ? this.gl.UNIFORM_BLOCK_ACTIVE_UNIFORMS
        // Setup uniform blocks.
        const blocksDebug = [];
        const numBlocks: number = this.gl.getProgramParameter(program.programObject, this.gl.ACTIVE_UNIFORM_BLOCKS);
        for (let blockLocation = 0; blockLocation < numBlocks; blockLocation++) {
            const blockName = this.gl.getActiveUniformBlockName(program.programObject, blockLocation);
            if (blockName !== null) {
                const blockLocation2 = this.gl.getUniformBlockIndex(program.programObject, blockName);
                //this.gl.uniformBlockBinding(program.programObject, blockLocation, blockUnit);

                // Debug.
                blocksDebug.push({ location: blockLocation, location2: blockLocation2, name: blockName });
            }
        }
        console.table(blocksDebug);

        // Add program name to shaders dependency references.
        for (const shader of shaders) {
            shader.programNames.add(programName);
        }

        // Return successfully.
        return program as LoadedProgram;
    }

    private getLoadedShader(shaderName: string): LoadedShader | undefined {
        const shader = this.shaders.get(shaderName);
        if (shader === undefined) {
            // Unkown shader name.
            this.requestResource(ResourceType.SHADER, shaderName);
            return undefined;
        }

        if (shader.shaderObject !== null) {
            // Shader object already loaded in GPU.
            return shader as LoadedShader;
        }

        // Create a new shader object.
        shader.shaderObject = this.gl.createShader(shader.type);
        if (shader.shaderObject === null) {
            console.error('WebGL failed to create a new shader object.');
            return undefined;
        }

        // Set the source code and compile the shader.
        this.gl.shaderSource(shader.shaderObject, shader.source);
        this.gl.compileShader(shader.shaderObject);

        const compilationSuccess: boolean = this.gl.getShaderParameter(shader.shaderObject, this.gl.COMPILE_STATUS);
        if (!compilationSuccess) {
            // Compilation failed.
            console.error(this.gl.getShaderInfoLog(shader.shaderObject));
            this.gl.deleteShader(shader.shaderObject);
            shader.shaderObject = null;
            return undefined;
        }

        // Return successfully.
        return shader as LoadedShader;
    }

    private getLoadedPrimitive(primitiveName: string): LoadedPrimitive | undefined {
        const primitive = this.primitives.get(primitiveName);
        if (primitive === undefined) {
            // Unkown primitive name.
            this.requestResource(ResourceType.PRIMITIVE, primitiveName);
            return undefined;
        }

        if (primitive.vertexArrayObject !== null) {
            // Vertex array object already loaded in GPU.
            return primitive as LoadedPrimitive;
        }

        // Resolve attribute accessors.
        const attributes = new Map<string, LoadedAccessor>();
        for (const [attributeName, accessorName] of primitive.attributes) {
            const accessor = this.getLoadedAccessor(accessorName);
            if (accessor !== undefined) {
                attributes.set(attributeName, accessor);
            }
        }

        // Resolve indices accessor.
        const indices = primitive.indices === null ? null : this.getLoadedAccessor(primitive.indices);
        if (indices === undefined) {
            // Missing indices accessor.
            return undefined;
        }

        if (attributes.size < primitive.attributes.size) {
            // Missing attribute accessor.
            return undefined;
        }

        // Create a new vertex array object.
        primitive.vertexArrayObject = this.gl.createVertexArray();
        if (primitive.vertexArrayObject === null) {
            console.error('WebGL failed to create a new vertex array object.');
            return undefined;
        }

        // Bind the vertex array object.
        this.gl.bindVertexArray(primitive.vertexArrayObject);

        if (indices !== null) {
            // Add primitive name to accessor dependency references.
            indices.primitiveNames.add(primitiveName);
            // Bind indices buffer.
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, indices.bufferObject);
        }

        for (const [attributeName, accessor] of attributes) {
            // Add primitive name to accessor dependency references.
            accessor.primitiveNames.add(primitiveName);

            // Bind attribute buffer.
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, accessor.bufferObject);

            // Get data parameters.
            const numLocations = shaderDataLocations(accessor.shaderDataType);
            const numComponents = shaderDataComponents(accessor.shaderDataType);
            const dataSize = bufferDataByteLength(accessor.bufferDataType);
            const dataComponents = bufferDataComponents(accessor.bufferDataType);

            // Get attribute location.
            let attributeLocation = this.attributeLocations.get(attributeName);
            if (attributeLocation === undefined) {
                // This is a new attribute name. Assign a new attribute location.
                attributeLocation = this.nextAttributeLocation;
                this.nextAttributeLocation += numLocations;
                this.attributeLocations.set(attributeName, attributeLocation);
            }

            for (let subLocation = 0; subLocation < numLocations; subLocation++) {
                // Enable the location.
                this.gl.enableVertexAttribArray(attributeLocation + subLocation);
                // Bind the location to the buffer attribute pointer.
                this.gl.vertexAttribPointer(
                    attributeLocation + subLocation,
                    numComponents,
                    accessor.bufferDataType,
                    accessor.normalized,
                    accessor.stride,
                    accessor.offset + (subLocation * numComponents * dataSize) / dataComponents,
                );
            }
        }

        // Return successfully.
        return primitive as LoadedPrimitive;
    }

    private getLoadedAccessor(accessorName: string): LoadedAccessor | undefined {
        const accessor = this.accessors.get(accessorName);
        if (accessor === undefined) {
            // Unkown accessor name.
            this.requestResource(ResourceType.ACCESSOR, accessorName);
            return undefined;
        }

        const buffer = this.getLoadedBuffer(accessor.bufferName);
        if (buffer === undefined) {
            return undefined;
        }

        // Add accessor name to buffer dependency references.
        buffer.accessorNames.add(accessorName);

        // Return successfully.
        return { ...accessor, ...buffer };
    }

    private getLoadedBuffer(bufferName: string): LoadedBuffer | undefined {
        const buffer = this.buffers.get(bufferName);
        if (buffer === undefined) {
            // Unkown buffer name.
            this.requestResource(ResourceType.BUFFER, bufferName);
            return undefined;
        }

        if (buffer.bufferObject !== null) {
            // Buffer object already loaded in GPU.
            return buffer as LoadedBuffer;
        }

        // Create a new buffer object.
        buffer.bufferObject = this.gl.createBuffer();
        if (buffer.bufferObject === null) {
            console.error('WebGL failed to create a new buffer object.');
            return undefined;
        }

        // Bind the buffer object.
        this.gl.bindBuffer(buffer.target, buffer.bufferObject);
        // Load data into the buffer object.
        this.gl.bufferData(buffer.target, buffer.byteArray, this.gl.STATIC_DRAW);

        // Return successfully.
        return buffer as LoadedBuffer;
    }

    private getLoadedSampler(samplerName: string): LoadedSampler | undefined {
        const sampler = this.samplers.get(samplerName);
        if (sampler === undefined) {
            // Unkown sampler name.
            this.requestResource(ResourceType.SAMPLER, samplerName);
            return undefined;
        }

        if (sampler.samplerObject !== null) {
            // Sampler object already loaded in GPU.
            return sampler as LoadedSampler;
        }

        // Create a new sampler.
        sampler.samplerObject = this.gl.createSampler();
        if (sampler.samplerObject === null) {
            console.error('WebGL failed to create a new shader object.');
            return undefined;
        }

        // Set sampler parameters.
        this.gl.samplerParameteri(sampler.samplerObject, this.gl.TEXTURE_MAG_FILTER, sampler.magFilter);
        this.gl.samplerParameteri(sampler.samplerObject, this.gl.TEXTURE_MIN_FILTER, sampler.minFilter);
        this.gl.samplerParameteri(sampler.samplerObject, this.gl.TEXTURE_WRAP_S, sampler.wrapS);
        this.gl.samplerParameteri(sampler.samplerObject, this.gl.TEXTURE_WRAP_T, sampler.wrapT);
        this.gl.samplerParameteri(sampler.samplerObject, this.gl.TEXTURE_WRAP_R, sampler.wrapR);

        // Return successfully.
        return sampler as LoadedSampler;
    }

    private getLoadedTexture(textureName: string): LoadedTexture | undefined {
        const texture = this.textures.get(textureName);
        if (texture === undefined) {
            // Unkown texture name.
            this.requestResource(ResourceType.TEXTURE, textureName);
            return undefined;
        }

        if (texture.textureObject !== null) {
            // Texture object already loaded in GPU.
            return texture as LoadedTexture;
        }

        // Mipmap levels.
        const levels = Math.log2(Math.max(texture.width, texture.height, texture.depth));

        // Create a new texture object.
        texture.textureObject = this.gl.createTexture();
        if (texture.textureObject === null) {
            console.error('WebGL failed to create a new texture object.');
            return undefined;
        }

        // Bind the texture to its target.
        this.gl.bindTexture(texture.type, texture.textureObject);
        // Create the texture memory storage.
        if (texture.type === TextureType.TEX_2D || texture.type === TextureType.TEX_CUBE) {
            this.gl.texStorage2D(texture.type, levels, texture.format, texture.width, texture.height);
        } else {
            this.gl.texStorage3D(texture.type, levels, texture.format, texture.width, texture.height, texture.depth);
        }

        // Write the byte array into the texture object.
        this.writeTextureData(textureName, texture.byteArray);

        // Return successfully.
        return texture as LoadedTexture;
    }

    // Buffer writing methods. #########################################################################################

    public writeBufferData(
        bufferName: string,
        srcData: ArrayBufferView,
        bufferOffset: number = 0,
        srcOffset: number = 0,
        length?: number,
    ): void {
        const buffer = this.buffers.get(bufferName);
        if (buffer === undefined) {
            // Unkown buffer name.
            this.requestResource(ResourceType.BUFFER, bufferName);
            return;
        }

        // Default length.
        if (length === undefined) {
            length = Math.min(buffer.byteArray.byteLength - bufferOffset, srcData.byteLength - srcOffset);
        }

        // If the GPU buffer object is not available, write values to the CPU byte array.
        if (buffer.bufferObject === null) {
            const srcByteArray = new Uint8Array(srcData.buffer, srcData.byteOffset, srcData.byteLength);
            buffer.byteArray.set(srcByteArray.subarray(srcOffset, srcOffset + length), bufferOffset);
            return;
        }

        this.gl.bindBuffer(buffer.target, buffer.bufferObject);
        this.gl.bufferSubData(buffer.target, bufferOffset, srcData, srcOffset, length);
    }

    // Buffer reading methods. #########################################################################################

    public readBufferData(
        bufferName: string,
        dstData: ArrayBufferView,
        bufferOffset: number = 0,
        dstOffset: number = 0,
        length?: number,
    ): void {
        const buffer = this.buffers.get(bufferName);
        if (buffer === undefined) {
            // Unkown buffer name.
            this.requestResource(ResourceType.BUFFER, bufferName);
            return;
        }

        // Default length.
        if (length === undefined) {
            length = Math.min(buffer.byteArray.byteLength - bufferOffset, dstData.byteLength - dstOffset);
        }

        // If the GPU buffer object is not available, read values from the CPU byte array.
        if (buffer.bufferObject === null) {
            const dstByteArray = new Uint8Array(dstData.buffer, dstData.byteOffset, dstData.byteLength);
            dstByteArray.set(buffer.byteArray.subarray(bufferOffset, bufferOffset + length), dstOffset);
            return;
        }

        this.gl.bindBuffer(buffer.target, buffer.bufferObject);
        this.gl.getBufferSubData(buffer.target, bufferOffset, dstData, dstOffset, length);
    }

    // Texture writing methods. ########################################################################################

    public writeTextureURI(
        textureName: string,
        srcURI: string,
        srcDepth?: number,
        textureXOffset?: number,
        textureYOffset?: number,
        textureZOffset?: number,
        srcXOffset?: number,
        srcYOffset?: number,
        srcZOffset?: number,
        regionWidth?: number,
        regionHeight?: number,
        regionDepth?: number,
    ): void {
        const texture = this.textures.get(textureName);
        if (texture === undefined) {
            // Unkown texture name.
            this.requestResource(ResourceType.TEXTURE, textureName);
            return;
        }

        // Create an image from the URL.
        new Promise<HTMLImageElement>(
            (resolve, reject): void => {
                const srcImage = new Image();
                srcImage.onload = (): void => resolve(srcImage);
                srcImage.onerror = reject;
                srcImage.src = srcURI;
            },
        ).then((srcImage): void => {
            // Write source image into the texture.
            this.writeTextureImage(
                textureName,
                srcImage,
                srcDepth,
                textureXOffset,
                textureYOffset,
                textureZOffset,
                srcXOffset,
                srcYOffset,
                srcZOffset,
                regionWidth,
                regionHeight,
                regionDepth,
            );
        }, console.error);
    }

    public writeTextureImage(
        textureName: string,
        srcImage: HTMLImageElement,
        srcDepth: number = 1,
        textureXOffset?: number,
        textureYOffset?: number,
        textureZOffset?: number,
        srcXOffset?: number,
        srcYOffset?: number,
        srcZOffset?: number,
        regionWidth?: number,
        regionHeight?: number,
        regionDepth?: number,
    ): void {
        const texture = this.textures.get(textureName);
        if (texture === undefined) {
            // Unkown texture name.
            this.requestResource(ResourceType.TEXTURE, textureName);
            return;
        }

        // Create a canvas with the same width and height as the image.
        const canvas = document.createElement('canvas');
        canvas.width = srcImage.width;
        canvas.height = srcImage.height;

        // Get the 2D rendering context from the canvas.
        const canvasContext = canvas.getContext('2d');
        if (canvasContext === null) {
            console.error('Canvas failed to return a 2D context');
            return;
        }

        // Flip the canvas vertically.
        canvasContext.translate(0, srcImage.height);
        canvasContext.scale(1, -1);

        // Draw the image through the 2D context and get the resulting image data.
        canvasContext.drawImage(srcImage, 0, 0);
        const srcData = canvasContext.getImageData(0, 0, srcImage.width, srcImage.height).data;

        // Setup source dimensions.
        const srcWidth = srcImage.width;
        const srcHeight = srcImage.height / srcDepth;

        // Write source data into the texture.
        this.writeTextureData(
            textureName,
            srcData,
            srcWidth,
            srcHeight,
            srcDepth,
            textureXOffset,
            textureYOffset,
            textureZOffset,
            srcXOffset,
            srcYOffset,
            srcZOffset,
            regionWidth,
            regionHeight,
            regionDepth,
        );
    }

    public writeTextureData(
        textureName: string,
        srcData: ArrayBufferView,
        srcWidth?: number,
        srcHeight?: number,
        srcDepth?: number,
        textureXOffset: number = 0,
        textureYOffset: number = 0,
        textureZOffset: number = 0,
        srcXOffset: number = 0,
        srcYOffset: number = 0,
        srcZOffset: number = 0,
        regionWidth?: number,
        regionHeight?: number,
        regionDepth?: number,
    ): void {
        const texture = this.textures.get(textureName);
        if (texture === undefined) {
            // Unkown texture name.
            this.requestResource(ResourceType.TEXTURE, textureName);
            return;
        }

        // Default input dimensions.
        srcWidth = srcWidth === undefined ? texture.width : srcWidth;
        srcHeight = srcHeight === undefined ? texture.height : srcHeight;
        srcDepth = srcDepth === undefined ? texture.depth : srcDepth;

        // Default region dimensions.
        if (regionWidth === undefined) {
            regionWidth = Math.min(texture.width - textureXOffset, srcWidth - srcXOffset);
        }
        if (regionHeight === undefined) {
            regionHeight = Math.min(texture.height - textureYOffset, srcHeight - srcYOffset);
        }
        if (regionDepth === undefined) {
            regionDepth = Math.min(texture.depth - textureZOffset, srcDepth - srcZOffset);
        }

        // Sizes.
        const pixelSize = formatByteLength(texture.format);
        const regionRowSize = regionWidth * pixelSize;
        const dstRowSize = texture.width * pixelSize;
        const srcRowSize = srcWidth * pixelSize;
        const dstImageSize = texture.height * dstRowSize;
        const srcImageSize = srcHeight * srcRowSize;
        const dstOffset = textureZOffset * dstImageSize + textureYOffset * dstRowSize + textureXOffset * pixelSize;
        const srcOffset = srcZOffset * srcImageSize + srcYOffset * srcRowSize + srcXOffset * pixelSize;

        // If the GPU texture object is not available, write values to the CPU byte array.
        if (texture.textureObject === null) {
            const srcByteArray = new Uint8Array(srcData.buffer, srcData.byteOffset, srcData.byteLength);
            for (let image = 0; image < regionDepth; image++) {
                for (let row = 0; row < regionHeight; row++) {
                    const dstRowBegin = dstOffset + image * dstImageSize + row * dstRowSize;
                    const srcRowBegin = srcOffset + image * srcImageSize + row * srcRowSize;
                    texture.byteArray.set(srcByteArray.subarray(srcRowBegin, srcRowBegin + regionRowSize), dstRowBegin);
                }
            }
            return;
        }

        // Unbind any pixel unpack buffer object.
        this.gl.bindBuffer(this.gl.PIXEL_UNPACK_BUFFER, null);

        // Setup packing and unpacking parameters.
        this.gl.pixelStorei(this.gl.UNPACK_SKIP_PIXELS, srcXOffset);
        this.gl.pixelStorei(this.gl.UNPACK_SKIP_ROWS, srcYOffset);
        this.gl.pixelStorei(this.gl.UNPACK_SKIP_IMAGES, srcZOffset);
        this.gl.pixelStorei(this.gl.UNPACK_ROW_LENGTH, srcWidth);
        this.gl.pixelStorei(this.gl.UNPACK_IMAGE_HEIGHT, srcHeight);
        this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, byteAlignment(srcOffset, srcRowSize));
        this.gl.pixelStorei(this.gl.PACK_ALIGNMENT, byteAlignment(dstOffset, dstRowSize));

        // Get the corresponding parameters for the given texture internal format.
        const format = unsizedFormat(texture.format);
        const dataType = formatDataType(texture.format);
        const typedSrcData = bufferDataTypedArray(dataType, srcData);

        // Bind the texture object to its target.
        this.gl.bindTexture(texture.type, texture.textureObject);

        // Write data into the texture object.
        const [x, y, z] = [textureXOffset, textureYOffset, textureZOffset];
        const [w, h, d] = [regionWidth, regionHeight, regionDepth];
        switch (texture.type) {
            case TextureType.TEX_2D_ARRAY:
            case TextureType.TEX_3D:
                this.gl.texSubImage3D(texture.type, 0, x, y, z, w, h, d, format, dataType, typedSrcData);
                break;
            case TextureType.TEX_2D:
                this.gl.texSubImage2D(texture.type, 0, x, y, w, h, format, dataType, typedSrcData);
                break;
            case TextureType.TEX_CUBE:
                for (let image = 0; image < regionDepth; image++) {
                    const target = this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + textureZOffset + image;
                    this.gl.texSubImage2D(target, 0, x, y, w, h, format, dataType, typedSrcData, image * srcImageSize);
                }
        }

        // Generate mipmaps.
        this.gl.generateMipmap(texture.type);
    }

    // Texture reading methods. ########################################################################################

    public readTextureImage(
        textureName: string,
        mimeType?: string,
        dstWidth?: number,
        dstHeight?: number,
        dstDepth?: number,
        textureXOffset?: number,
        textureYOffset?: number,
        textureZOffset?: number,
        dstXOffset?: number,
        dstYOffset?: number,
        dstZOffset?: number,
        regionWidth?: number,
        regionHeight?: number,
        regionDepth?: number,
    ): Promise<HTMLImageElement> {
        const imageURI = this.readTextureURI(
            textureName,
            mimeType,
            dstWidth,
            dstHeight,
            dstDepth,
            textureXOffset,
            textureYOffset,
            textureZOffset,
            dstXOffset,
            dstYOffset,
            dstZOffset,
            regionWidth,
            regionHeight,
            regionDepth,
        );

        return new Promise<HTMLImageElement>(
            (resolve, reject): void => {
                const dstImage = new Image();
                dstImage.onload = (): void => resolve(dstImage);
                dstImage.onerror = reject;
                dstImage.src = imageURI;
            },
        );
    }

    public readTextureURI(
        textureName: string,
        mimeType?: string,
        dstWidth?: number,
        dstHeight?: number,
        dstDepth?: number,
        textureXOffset?: number,
        textureYOffset?: number,
        textureZOffset?: number,
        dstXOffset?: number,
        dstYOffset?: number,
        dstZOffset?: number,
        regionWidth?: number,
        regionHeight?: number,
        regionDepth?: number,
    ): string {
        const texture = this.textures.get(textureName);
        if (texture === undefined) {
            // Unkown texture name.
            this.requestResource(ResourceType.TEXTURE, textureName);
            return '';
        }

        // Default output dimensions.
        dstWidth = dstWidth === undefined ? texture.width : dstWidth;
        dstHeight = dstHeight === undefined ? texture.height : dstHeight;
        dstDepth = dstDepth === undefined ? texture.depth : dstDepth;

        // Create a typed array buffer to store the texture data.
        const dstData = new Uint8ClampedArray(dstWidth * dstHeight * dstDepth * 4);

        // Read data from texture.
        this.readTextureData(
            textureName,
            dstData,
            dstWidth,
            dstHeight,
            dstDepth,
            textureXOffset,
            textureYOffset,
            textureZOffset,
            dstXOffset,
            dstYOffset,
            dstZOffset,
            regionWidth,
            regionHeight,
            regionDepth,
        );

        // Create a canvas with the same width and height as the image.
        const canvas = document.createElement('canvas');
        canvas.width = dstWidth;
        canvas.height = dstHeight * dstDepth;

        // Get the 2D rendering context from the canvas.
        const canvasContext = canvas.getContext('2d');
        if (canvasContext === null) {
            console.error('Canvas failed to return a 2D context');
            return '';
        }

        // Flip the canvas vertically.
        canvasContext.translate(0, dstHeight);
        canvasContext.scale(1, -1);

        // Insert the data into the canvas.
        canvasContext.getImageData(0, 0, dstWidth, dstHeight * dstDepth).data.set(dstData);

        // ? Should it be createImageData instead of getImageData?
        // const imageData = canvasContext.createImageData(dstWidth, dstHeight * dstDepth);
        // imageData.data.set(dstData);
        // canvasContext.putImageData(imageData, 0, 0);

        // Return the canvas content as an image data URL with given mimeType.
        return canvas.toDataURL(mimeType);
    }

    public readTextureData(
        textureName: string,
        dstData: ArrayBufferView,
        dstWidth?: number,
        dstHeight?: number,
        dstDepth?: number,
        textureXOffset: number = 0,
        textureYOffset: number = 0,
        textureZOffset: number = 0,
        dstXOffset: number = 0,
        dstYOffset: number = 0,
        dstZOffset: number = 0,
        regionWidth?: number,
        regionHeight?: number,
        regionDepth?: number,
    ): void {
        const texture = this.textures.get(textureName);
        if (texture === undefined) {
            // Unkown texture name.
            this.requestResource(ResourceType.TEXTURE, textureName);
            return;
        }

        // Default output dimensions.
        dstWidth = dstWidth === undefined ? texture.width : dstWidth;
        dstHeight = dstHeight === undefined ? texture.height : dstHeight;
        dstDepth = dstDepth === undefined ? texture.depth : dstDepth;

        // Default region dimensions.
        if (regionWidth === undefined) {
            regionWidth = Math.min(texture.width - textureXOffset, dstWidth - dstXOffset);
        }
        if (regionHeight === undefined) {
            regionHeight = Math.min(texture.height - textureYOffset, dstHeight - dstYOffset);
        }
        if (regionDepth === undefined) {
            regionDepth = Math.min(texture.depth - textureZOffset, dstDepth - dstZOffset);
        }

        // Sizes.
        const pixelSize = formatByteLength(texture.format);
        const regionRowSize = regionWidth * pixelSize;
        const srcRowSize = texture.width * pixelSize;
        const dstRowSize = dstWidth * pixelSize;
        const srcImageSize = texture.height * srcRowSize;
        const dstImageSize = dstHeight * dstRowSize;
        const srcOffset = textureZOffset * srcImageSize + textureYOffset * srcRowSize + textureXOffset * pixelSize;
        const dstOffset = dstZOffset * dstImageSize + dstYOffset * dstRowSize + dstXOffset * pixelSize;

        // If the GPU texture object is not available, read values from the CPU byte array.
        if (texture.textureObject === null) {
            const dstByteArray = new Uint8Array(dstData.buffer, dstData.byteOffset, dstData.byteLength);
            for (let image = 0; image < regionDepth; image++) {
                for (let row = 0; row < regionHeight; row++) {
                    const dstRowBegin = dstOffset + image * dstImageSize + row * dstRowSize;
                    const srcRowBegin = srcOffset + image * srcImageSize + row * srcRowSize;
                    dstByteArray.set(texture.byteArray.subarray(srcRowBegin, srcRowBegin + regionRowSize), dstRowBegin);
                }
            }
            return;
        }

        // Unbind any pixel pack buffer object.
        this.gl.bindBuffer(this.gl.PIXEL_PACK_BUFFER, null);

        // Setup packing and unpacking parameters.
        this.gl.pixelStorei(this.gl.PACK_SKIP_PIXELS, dstXOffset);
        this.gl.pixelStorei(this.gl.PACK_SKIP_ROWS, dstYOffset);
        this.gl.pixelStorei(this.gl.PACK_ROW_LENGTH, dstWidth);
        this.gl.pixelStorei(this.gl.PACK_ALIGNMENT, byteAlignment(dstOffset, dstRowSize));
        this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, byteAlignment(srcOffset, srcRowSize));

        // Get the corresponding parameters for the given texture internal format.
        const format = unsizedFormat(texture.format);
        const dataType = formatDataType(texture.format);
        const typedDstData = bufferDataTypedArray(dataType, dstData);

        // Create a new framebuffer object.
        const framebufferObject = this.gl.createFramebuffer();
        if (framebufferObject === null) {
            console.error('WebGL failed to create a new framebuffer object.');
            return;
        }

        // Bind the framebuffer object and its attachment for reading.
        this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, framebufferObject);
        this.gl.readBuffer(this.gl.COLOR_ATTACHMENT0);

        // Read data from the texture object.
        const [f, a] = [this.gl.READ_FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0];
        const [x, y] = [textureXOffset, textureYOffset];
        const [w, h] = [regionWidth, regionHeight];
        switch (texture.type) {
            case TextureType.TEX_2D_ARRAY:
            case TextureType.TEX_3D:
                for (let image = 0; image < regionDepth; image++) {
                    this.gl.framebufferTextureLayer(f, a, texture.textureObject, 0, textureZOffset + image);
                    this.gl.readPixels(x, y, w, h, format, dataType, typedDstData, image * dstImageSize);
                }
                break;
            case TextureType.TEX_2D:
                this.gl.framebufferTexture2D(f, a, texture.type, texture.textureObject, 0);
                this.gl.readPixels(x, y, w, h, format, dataType, typedDstData);
                break;
            case TextureType.TEX_CUBE:
                for (let image = 0; image < regionDepth; image++) {
                    const target = this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + textureZOffset + image;
                    this.gl.framebufferTexture2D(f, a, target, texture.textureObject, 0);
                    this.gl.readPixels(x, y, w, h, format, dataType, typedDstData, image * dstImageSize);
                }
        }

        // Delete the framebuffer object.
        this.gl.deleteFramebuffer(framebufferObject);
    }

    // Render methods. #################################################################################################

    public clear(framebufferName: string | null = null): void {
        const framebuffer = framebufferName === null ? null : this.getLoadedFramebuffer(framebufferName);

        if (framebuffer === undefined) {
            // Abort clear.
            return;
        }

        // Setup framebuffer object.
        if (framebuffer === null) {
            // Bind the canvas as the render target.
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            // Set viewport to canvas size.
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        } else {
            // Bind the framebuffer as the render target.
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer.framebufferObject);
            // Set viewport to framebuffer size.
            this.gl.viewport(0, 0, framebuffer.width, framebuffer.height);
        }

        // Clear the framebuffer.
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT | this.gl.STENCIL_BUFFER_BIT);
    }

    public render(
        programName: string,
        primitiveName: string,
        uniforms?: ReadonlyMap<string, ArrayBufferView>,
        textures?: ReadonlyMap<string, { textureName: string; samplerName: string }>,
        framebufferName: string | null = null,
    ): void {
        const program = this.getLoadedProgram(programName);
        const primitive = this.getLoadedPrimitive(primitiveName);
        const framebuffer = framebufferName === null ? null : this.getLoadedFramebuffer(framebufferName);

        if (program === undefined || primitive === undefined || framebuffer === undefined) {
            // Abort rendering.
            return;
        }

        // Bind program object.
        this.gl.useProgram(program.programObject);

        // Setup framebuffer object.
        if (framebuffer === null) {
            // Bind the canvas as the render target.
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            // Set viewport to canvas size.
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        } else {
            // Bind the framebuffer as the render target.
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer.framebufferObject);
            // Set viewport to framebuffer size.
            this.gl.viewport(0, 0, framebuffer.width, framebuffer.height);
        }

        // Setup uniforms.
        if (uniforms !== undefined) {
            for (const [uniformName, data] of uniforms) {
                const uniform = program.uniforms.get(uniformName);
                if (uniform !== undefined) {
                    for (let index = 0; index < uniform.locations.length; index++) {
                        const subOffset = index * shaderDataByteLength(uniform.type, BufferDataType.SI32);
                        setUniformValues(
                            this.gl,
                            uniform.type,
                            uniform.locations[index],
                            new DataView(data.buffer, data.byteOffset + subOffset, data.byteLength - subOffset),
                        );
                    }
                }
            }
        }

        // Setup textures.
        if (textures !== undefined) {
            let textureUnit = 0;
            for (const [uniformName, { textureName, samplerName }] of textures) {
                const uniform = program.uniforms.get(uniformName);
                const texture = this.getLoadedTexture(textureName);
                const sampler = this.getLoadedSampler(samplerName);
                if (uniform !== undefined && texture !== undefined && sampler !== undefined) {
                    setUniformValues(this.gl, uniform.type, uniform.locations[0], new Int32Array([textureUnit]));
                    this.gl.activeTexture(this.gl.TEXTURE0 + textureUnit);
                    this.gl.bindTexture(texture.type, texture.textureObject);
                    this.gl.bindSampler(textureUnit, sampler.samplerObject);
                    textureUnit++;
                }
            }
        }

        // Bind vertex array object.
        this.gl.bindVertexArray(primitive.vertexArrayObject);

        if (primitive.indices === null) {
            // Non-indexed rendering.
            this.gl.drawArrays(primitive.type, 0, primitive.count);
        } else {
            // Indexed rendering.
            const indices = this.getLoadedAccessor(primitive.indices);
            if (indices !== undefined) {
                this.gl.drawElements(primitive.type, primitive.count, indices.bufferDataType, indices.offset);
            }
        }

        // Unbind vertex array object to prevent undesirable changes.
        this.gl.bindVertexArray(null);
    }
}
