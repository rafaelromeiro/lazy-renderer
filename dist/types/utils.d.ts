/// <reference types="webgl2" />
import { TextureFormat, BufferDataType, ShaderDataType, TextureUnsizedFormat } from './enums';
export declare const byteAlignment: (offset: number | undefined, stride: number) => number;
export declare const unsizedFormat: (format: TextureFormat) => TextureUnsizedFormat;
export declare const formatByteLength: (format: TextureFormat) => number;
export declare const formatDataType: (format: TextureFormat) => BufferDataType;
export declare const bufferDataTypedArray: (dataType: BufferDataType, data: ArrayBufferView) => ArrayBufferView;
export declare const bufferDataByteLength: (dataType: BufferDataType) => number;
export declare const bufferDataComponents: (dataType: BufferDataType) => number;
export declare const shaderDataComponents: (dataType: ShaderDataType) => number;
export declare const shaderDataLocations: (dataType: ShaderDataType) => number;
export declare const shaderDataByteLength: (shaderDataType: ShaderDataType, bufferDataType: BufferDataType) => number;
export declare const setUniformValues: (gl: WebGL2RenderingContext, dataType: ShaderDataType, location: WebGLUniformLocation, data: ArrayBufferView) => void;
