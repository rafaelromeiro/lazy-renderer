/// <reference types="webgl2" />
import { ShaderType, PrimitiveType, BufferTarget, TextureFilter, TextureWrapping, BufferDataType, ShaderDataType, TextureType, TextureFormat } from './enums';
export interface Framebuffer {
    readonly width: number;
    readonly height: number;
    readonly colorAttachments: ReadonlyMap<number, {
        textureName: string;
        layer?: number;
    }>;
    readonly depthAttachment: {
        textureName: string;
        layer?: number;
    } | null;
    readonly stencilAttachment: {
        textureName: string;
        layer?: number;
    } | null;
    framebufferObject: WebGLFramebuffer | null;
}
export interface Program {
    readonly shaderNames: ReadonlyArray<string>;
    readonly uniforms: Map<string, {
        type: ShaderDataType;
        locations: WebGLUniformLocation[];
    }>;
    programObject: WebGLProgram | null;
}
export interface Shader {
    readonly source: string;
    readonly type: ShaderType;
    readonly programNames: Set<string>;
    shaderObject: WebGLShader | null;
}
export interface Primitive {
    readonly count: number;
    readonly attributes: ReadonlyMap<string, string>;
    readonly indices: string | null;
    readonly type: PrimitiveType;
    vertexArrayObject: WebGLVertexArrayObject | null;
}
export interface Accessor {
    readonly bufferName: string;
    readonly offset: number;
    readonly stride: number;
    readonly normalized: boolean;
    readonly shaderDataType: ShaderDataType;
    readonly bufferDataType: BufferDataType;
    readonly primitiveNames: Set<string>;
}
export interface Buffer {
    readonly target: BufferTarget;
    readonly byteArray: Uint8Array;
    readonly accessorNames: Set<string>;
    bufferObject: WebGLBuffer | null;
}
export interface Sampler {
    readonly magFilter: TextureFilter;
    readonly minFilter: TextureFilter;
    readonly wrapS: TextureWrapping;
    readonly wrapT: TextureWrapping;
    readonly wrapR: TextureWrapping;
    samplerObject: WebGLSampler | null;
}
export interface Texture {
    readonly byteArray: Uint8Array;
    readonly width: number;
    readonly height: number;
    readonly depth: number;
    readonly type: TextureType;
    readonly format: TextureFormat;
    readonly framebufferNames: Set<string>;
    textureObject: WebGLTexture | null;
}
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
export declare type LoadedAccessor = Accessor & LoadedBuffer;
