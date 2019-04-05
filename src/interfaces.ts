import {
    ShaderType,
    PrimitiveType,
    BufferTarget,
    TextureFilter,
    TextureWrapping,
    BufferDataType,
    ShaderDataType,
    TextureType,
    TextureFormat,
} from './enums';

// A framebuffer to hold render results.
export interface Framebuffer {
    readonly width: number; // Width of the framebuffer.
    readonly height: number; // Height of the framebuffer.
    readonly colorAttachments: ReadonlyMap<number, { textureName: string; layer?: number }>; // Maps an attachment index to a texture name and layer.
    readonly depthAttachment: { textureName: string; layer?: number } | null;
    readonly stencilAttachment: { textureName: string; layer?: number } | null;
    framebufferObject: WebGLFramebuffer | null; // Reference to the framebuffer object. Null means not loaded in GPU.
}

// GPU program.
export interface Program {
    readonly shaderNames: ReadonlyArray<string>; // List of shader names.
    readonly uniforms: Map<string, { type: ShaderDataType; locations: WebGLUniformLocation[] }>; // Uniforms.
    programObject: WebGLProgram | null; // Reference to the program object. Null means not loaded in GPU.
}

// GPU shader.
export interface Shader {
    readonly source: string; // Source code of the shader.
    readonly type: ShaderType; // Fragment shader or vertex shader.
    readonly programNames: Set<string>; // Names of the programs that depend on this shader.
    shaderObject: WebGLShader | null; // Reference to the shader object. Null means not loaded in GPU.
}

// A renderable geometry primitive.
export interface Primitive {
    readonly count: number; // Number of indices (or number of vertices if not indexed).
    readonly attributes: ReadonlyMap<string, string>; // Maps an attribute name to an accessor name.
    readonly indices: string | null; // An accessor name (indexed) or null (not indexed).
    readonly type: PrimitiveType; // Rendering mode.
    vertexArrayObject: WebGLVertexArrayObject | null; // Reference to the vertex array object. Null means not loaded in GPU.
}

// A typed strided view into a buffer.
export interface Accessor {
    readonly bufferName: string; // Name of the buffer containing the data.
    readonly offset: number; // Offset in bytes for the first element inside the buffer.
    readonly stride: number; // Offset in bytes between consecutive elements.
    readonly normalized: boolean; // Whether the values should be normalized to [0, 1] float (to [-1, 1] for signed types).
    readonly shaderDataType: ShaderDataType; // Destination shader data type.
    readonly bufferDataType: BufferDataType; // Source buffer data type.
    readonly primitiveNames: Set<string>; // Names of the primitives that depend on this accessor.
}

// A buffer with raw binary data stored in GPU memory.
export interface Buffer {
    readonly target: BufferTarget; // Binding target.
    readonly byteArray: Uint8Array; // CPU byte array with the buffer data.
    readonly accessorNames: Set<string>; // Names of the accessors that depend on this buffer view.
    bufferObject: WebGLBuffer | null; // Reference to the buffer object. Null means not loaded in GPU.
}

// A texture sampler.
export interface Sampler {
    readonly magFilter: TextureFilter; // Texture magnification filter.
    readonly minFilter: TextureFilter; // Texture minification filter.
    readonly wrapS: TextureWrapping; // Wrapping function for s coordinate.
    readonly wrapT: TextureWrapping; // Wrapping function for t coordinate.
    readonly wrapR: TextureWrapping; // Wrapping function for r coordinate.
    samplerObject: WebGLSampler | null; // Reference to the sampler object. Null means not loaded in GPU.
}

// A texture.
export interface Texture {
    readonly byteArray: Uint8Array; // CPU byte array with the texture data.
    readonly width: number; // Texture width in pixels.
    readonly height: number; // Texture height in pixels.
    readonly depth: number; // Texture depth in pixels (for 2D array and 3D textures).
    readonly type: TextureType; // Texture type.
    readonly format: TextureFormat; // Texture internal format.
    readonly framebufferNames: Set<string>; // Names of the framebuffers that depend on this texture.
    textureObject: WebGLTexture | null; // Reference to the texture object. Null means not loaded in GPU.
}

// 'Loaded' interfaces overriding gpu object references as non-nullable.
export interface LoadedFramebuffer extends Framebuffer {
    framebufferObject: WebGLFramebuffer;
}
export interface LoadedProgram extends Program {
    programObject: WebGLProgram;
}
export interface LoadedShader extends Shader {
    shaderObject: WebGLShader;
}
export interface LoadedPrimitive extends Primitive {
    vertexArrayObject: WebGLVertexArrayObject;
}
export interface LoadedBuffer extends Buffer {
    bufferObject: WebGLBuffer;
}
export interface LoadedSampler extends Sampler {
    samplerObject: WebGLSampler;
}
export interface LoadedTexture extends Texture {
    textureObject: WebGLTexture;
}

// 'Loaded' accessor resolved with corresponding buffer.
export type LoadedAccessor = Accessor & LoadedBuffer;
