import { TextureFormat, BufferDataType, ShaderDataType, TextureUnsizedFormat } from './enums';

// Byte alignment of elements with a given offset and stride.
export const byteAlignment = (offset: number = 0, stride: number): number => {
    let offsetAlignment = 1;
    let strideAlignment = 1;

    if (offset % 8 === 0) {
        offsetAlignment = 8;
    } else if (offset % 4 === 0) {
        offsetAlignment = 4;
    } else if (offset % 2 === 0) {
        offsetAlignment = 2;
    }

    if (stride % 8 === 0) {
        strideAlignment = 8;
    } else if (stride % 4 === 0) {
        strideAlignment = 4;
    } else if (stride % 2 === 0) {
        strideAlignment = 2;
    }

    return Math.min(offsetAlignment, strideAlignment);
};

// Unsized texture format from a given sized texture format.
export const unsizedFormat = (format: TextureFormat): TextureUnsizedFormat => {
    switch (format) {
        case TextureFormat.UN_8:
        case TextureFormat.SN_8:
        case TextureFormat.SF_16:
        case TextureFormat.SF_32:
            return TextureUnsizedFormat.F_R;
        case TextureFormat.UN_8_8:
        case TextureFormat.SN_8_8:
        case TextureFormat.SF_16_16:
        case TextureFormat.SF_32_32:
            return TextureUnsizedFormat.F_RG;
        case TextureFormat.UN_8_8_8:
        case TextureFormat.SN_8_8_8:
        case TextureFormat.SF_16_16_16:
        case TextureFormat.SF_32_32_32:
        case TextureFormat.UN_5_6_5:
        case TextureFormat.UN_S8_S8_S8:
        case TextureFormat.SF_11_11_10:
        case TextureFormat.SF_9_9_9_E5:
            return TextureUnsizedFormat.F_RGB;
        case TextureFormat.UN_8_8_8_8:
        case TextureFormat.SN_8_8_8_8:
        case TextureFormat.SF_16_16_16_16:
        case TextureFormat.SF_32_32_32_32:
        case TextureFormat.UN_4_4_4_4:
        case TextureFormat.UN_5_5_5_1:
        case TextureFormat.UN_10_10_10_2:
        case TextureFormat.UN_S8_S8_S8_8:
            return TextureUnsizedFormat.F_RGBA;
        case TextureFormat.UN_L8:
            return TextureUnsizedFormat.F_L;
        case TextureFormat.UN_A8:
            return TextureUnsizedFormat.F_A;
        case TextureFormat.UN_L8_A8:
            return TextureUnsizedFormat.F_LA;
        case TextureFormat.SI_8:
        case TextureFormat.SI_16:
        case TextureFormat.SI_32:
        case TextureFormat.UI_8:
        case TextureFormat.UI_16:
        case TextureFormat.UI_32:
            return TextureUnsizedFormat.I_R;
        case TextureFormat.SI_8_8:
        case TextureFormat.SI_16_16:
        case TextureFormat.SI_32_32:
        case TextureFormat.UI_8_8:
        case TextureFormat.UI_16_16:
        case TextureFormat.UI_32_32:
            return TextureUnsizedFormat.I_RG;
        case TextureFormat.SI_8_8_8:
        case TextureFormat.SI_16_16_16:
        case TextureFormat.SI_32_32_32:
        case TextureFormat.UI_8_8_8:
        case TextureFormat.UI_16_16_16:
        case TextureFormat.UI_32_32_32:
            return TextureUnsizedFormat.I_RGB;
        case TextureFormat.SI_8_8_8_8:
        case TextureFormat.SI_16_16_16_16:
        case TextureFormat.SI_32_32_32_32:
        case TextureFormat.UI_8_8_8_8:
        case TextureFormat.UI_16_16_16_16:
        case TextureFormat.UI_32_32_32_32:
        case TextureFormat.UI_10_10_10_2:
            return TextureUnsizedFormat.I_RGBA;
        default:
            return -1;
    }
};

// Number of bytes of each texture internal format.
export const formatByteLength = (format: TextureFormat): number => {
    switch (format) {
        case TextureFormat.SI_8:
        case TextureFormat.UI_8:
        case TextureFormat.UN_8:
        case TextureFormat.SN_8:
        case TextureFormat.UN_A8:
        case TextureFormat.UN_L8:
            return 1;
        case TextureFormat.SI_8_8:
        case TextureFormat.SI_16:
        case TextureFormat.UI_8_8:
        case TextureFormat.UI_16:
        case TextureFormat.UN_8_8:
        case TextureFormat.SN_8_8:
        case TextureFormat.SF_16:
        case TextureFormat.UN_5_6_5:
        case TextureFormat.UN_4_4_4_4:
        case TextureFormat.UN_5_5_5_1:
        case TextureFormat.UN_L8_A8:
            return 2;
        case TextureFormat.SI_8_8_8:
        case TextureFormat.UI_8_8_8:
        case TextureFormat.UN_8_8_8:
        case TextureFormat.SN_8_8_8:
        case TextureFormat.UN_S8_S8_S8:
            return 3;
        case TextureFormat.SI_8_8_8_8:
        case TextureFormat.SI_16_16:
        case TextureFormat.SI_32:
        case TextureFormat.UI_8_8_8_8:
        case TextureFormat.UI_16_16:
        case TextureFormat.UI_32:
        case TextureFormat.UN_8_8_8_8:
        case TextureFormat.SN_8_8_8_8:
        case TextureFormat.SF_16_16:
        case TextureFormat.SF_32:
        case TextureFormat.UI_10_10_10_2:
        case TextureFormat.UN_10_10_10_2:
        case TextureFormat.UN_S8_S8_S8_8:
        case TextureFormat.SF_11_11_10:
        case TextureFormat.SF_9_9_9_E5:
            return 4;
        case TextureFormat.SI_16_16_16:
        case TextureFormat.UI_16_16_16:
        case TextureFormat.SF_16_16_16:
            return 6;
        case TextureFormat.SI_16_16_16_16:
        case TextureFormat.SI_32_32:
        case TextureFormat.UI_16_16_16_16:
        case TextureFormat.UI_32_32:
        case TextureFormat.SF_16_16_16_16:
        case TextureFormat.SF_32_32:
            return 8;
        case TextureFormat.SI_32_32_32:
        case TextureFormat.UI_32_32_32:
        case TextureFormat.SF_32_32_32:
            return 12;
        case TextureFormat.SI_32_32_32_32:
        case TextureFormat.UI_32_32_32_32:
        case TextureFormat.SF_32_32_32_32:
            return 16;
        default:
            return -1;
    }
};

// Optimal buffer data type for a given format.
export const formatDataType = (format: TextureFormat): BufferDataType => {
    switch (format) {
        case TextureFormat.UI_8:
        case TextureFormat.UI_8_8:
        case TextureFormat.UI_8_8_8:
        case TextureFormat.UI_8_8_8_8:
        case TextureFormat.UN_8:
        case TextureFormat.UN_8_8:
        case TextureFormat.UN_8_8_8:
        case TextureFormat.UN_8_8_8_8:
        case TextureFormat.UN_S8_S8_S8:
        case TextureFormat.UN_S8_S8_S8_8:
        case TextureFormat.UN_A8:
        case TextureFormat.UN_L8:
        case TextureFormat.UN_L8_A8:
            return BufferDataType.UI8;
        case TextureFormat.UI_16:
        case TextureFormat.UI_16_16:
        case TextureFormat.UI_16_16_16:
        case TextureFormat.UI_16_16_16_16:
            return BufferDataType.UI16;
        case TextureFormat.UI_32:
        case TextureFormat.UI_32_32:
        case TextureFormat.UI_32_32_32:
        case TextureFormat.UI_32_32_32_32:
            return BufferDataType.UI32;
        case TextureFormat.SI_8:
        case TextureFormat.SI_8_8:
        case TextureFormat.SI_8_8_8:
        case TextureFormat.SI_8_8_8_8:
        case TextureFormat.SN_8:
        case TextureFormat.SN_8_8:
        case TextureFormat.SN_8_8_8:
        case TextureFormat.SN_8_8_8_8:
            return BufferDataType.SI8;
        case TextureFormat.SI_16:
        case TextureFormat.SI_16_16:
        case TextureFormat.SI_16_16_16:
        case TextureFormat.SI_16_16_16_16:
            return BufferDataType.SI16;
        case TextureFormat.SI_32:
        case TextureFormat.SI_32_32:
        case TextureFormat.SI_32_32_32:
        case TextureFormat.SI_32_32_32_32:
            return BufferDataType.SI32;
        case TextureFormat.SF_16:
        case TextureFormat.SF_16_16:
        case TextureFormat.SF_16_16_16:
        case TextureFormat.SF_16_16_16_16:
            return BufferDataType.SF16;
        case TextureFormat.SF_32:
        case TextureFormat.SF_32_32:
        case TextureFormat.SF_32_32_32:
        case TextureFormat.SF_32_32_32_32:
            return BufferDataType.SF32;
        case TextureFormat.UI_10_10_10_2:
        case TextureFormat.UN_10_10_10_2:
            return BufferDataType.UI2_UI10_UI10_UI10_REV;
        case TextureFormat.UN_5_6_5:
            return BufferDataType.UI5_UI6_UI5;
        case TextureFormat.UN_4_4_4_4:
            return BufferDataType.UI4_UI4_UI4_UI4;
        case TextureFormat.UN_5_5_5_1:
            return BufferDataType.UI5_UI5_UI5_UI1;
        case TextureFormat.SF_9_9_9_E5:
            return BufferDataType.UI5_UI9_UI9_UI9_REV;
        case TextureFormat.SF_11_11_10:
            return BufferDataType.UF10_UF11_UF11_REV;
        default:
            return -1;
    }
};

// Typed array of a given array buffer for a given data type.
export const bufferDataTypedArray = (dataType: BufferDataType, data: ArrayBufferView): ArrayBufferView => {
    switch (dataType) {
        case BufferDataType.SI8:
            return new Int8Array(data.buffer, data.byteOffset, data.byteLength);
        case BufferDataType.UI8:
            return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        case BufferDataType.SI16:
            return new Int16Array(data.buffer, data.byteOffset, data.byteLength / 2);
        case BufferDataType.UI16:
        case BufferDataType.SF16:
        case BufferDataType.UI5_UI6_UI5:
        case BufferDataType.UI4_UI4_UI4_UI4:
        case BufferDataType.UI5_UI5_UI5_UI1:
            return new Uint16Array(data.buffer, data.byteOffset, data.byteLength / 2);
        case BufferDataType.SI32:
            return new Int32Array(data.buffer, data.byteOffset, data.byteLength / 4);
        case BufferDataType.UI32:
        case BufferDataType.UI2_UI10_UI10_UI10_REV:
        case BufferDataType.SI2_SI10_SI10_SI10_REV:
        case BufferDataType.UI24_UI8:
        case BufferDataType.UI5_UI9_UI9_UI9_REV:
        case BufferDataType.UF10_UF11_UF11_REV:
            return new Uint32Array(data.buffer, data.byteOffset, data.byteLength / 4);
        case BufferDataType.SF32:
            return new Float32Array(data.buffer, data.byteOffset, data.byteLength / 4);
        default:
            return data;
    }
};

// Number of bytes of a given buffer data type.
export const bufferDataByteLength = (dataType: BufferDataType): number => {
    switch (dataType) {
        case BufferDataType.UI8:
        case BufferDataType.SI8:
            return 1;
        case BufferDataType.UI16:
        case BufferDataType.SI16:
        case BufferDataType.SF16:
        case BufferDataType.UI5_UI6_UI5:
        case BufferDataType.UI4_UI4_UI4_UI4:
        case BufferDataType.UI5_UI5_UI5_UI1:
            return 2;
        case BufferDataType.UI32:
        case BufferDataType.SI32:
        case BufferDataType.SF32:
        case BufferDataType.UI2_UI10_UI10_UI10_REV:
        case BufferDataType.SI2_SI10_SI10_SI10_REV:
        case BufferDataType.UI24_UI8:
        case BufferDataType.UI5_UI9_UI9_UI9_REV:
        case BufferDataType.UF10_UF11_UF11_REV:
            return 4;
        default:
            return -1;
    }
};

// Number of components packed inside the same buffer data.
export const bufferDataComponents = (dataType: BufferDataType): number => {
    switch (dataType) {
        case BufferDataType.UI8:
        case BufferDataType.UI16:
        case BufferDataType.UI32:
        case BufferDataType.SI8:
        case BufferDataType.SI16:
        case BufferDataType.SI32:
        case BufferDataType.SF16:
        case BufferDataType.SF32:
            return 1;
        case BufferDataType.UI24_UI8:
            return 2;
        case BufferDataType.UI5_UI6_UI5:
        case BufferDataType.UI5_UI9_UI9_UI9_REV: // The UI5 is shared by the 3 UI9 components.
            return 3;
        case BufferDataType.UI4_UI4_UI4_UI4:
        case BufferDataType.UI5_UI5_UI5_UI1:
        case BufferDataType.UI2_UI10_UI10_UI10_REV:
        case BufferDataType.SI2_SI10_SI10_SI10_REV:
        case BufferDataType.UF10_UF11_UF11_REV:
            return 4;
        default:
            return -1;
    }
};

// Number of components of a given shader data type.
export const shaderDataComponents = (dataType: ShaderDataType): number => {
    switch (dataType) {
        case ShaderDataType.B_1:
        case ShaderDataType.SI_1:
        case ShaderDataType.UI_1:
        case ShaderDataType.SF_1:
        case ShaderDataType.SI_TEX_2D:
        case ShaderDataType.SI_TEX_2D_ARRAY:
        case ShaderDataType.SI_TEX_3D:
        case ShaderDataType.SI_TEX_CUBE:
        case ShaderDataType.UI_TEX_2D:
        case ShaderDataType.UI_TEX_2D_ARRAY:
        case ShaderDataType.UI_TEX_3D:
        case ShaderDataType.UI_TEX_CUBE:
        case ShaderDataType.SF_TEX_2D:
        case ShaderDataType.SF_TEX_2D_ARRAY:
        case ShaderDataType.SF_TEX_3D:
        case ShaderDataType.SF_TEX_CUBE:
        case ShaderDataType.SF_TEX_2D_DEPTH:
        case ShaderDataType.SF_TEX_2D_ARRAY_DEPTH:
        case ShaderDataType.SF_TEX_CUBE_DEPTH:
            return 1;
        case ShaderDataType.B_2:
        case ShaderDataType.SI_2:
        case ShaderDataType.UI_2:
        case ShaderDataType.SF_2:
        case ShaderDataType.SF_2X2:
        case ShaderDataType.SF_3X2:
        case ShaderDataType.SF_4X2:
            return 2;
        case ShaderDataType.B_3:
        case ShaderDataType.SI_3:
        case ShaderDataType.UI_3:
        case ShaderDataType.SF_3:
        case ShaderDataType.SF_2X3:
        case ShaderDataType.SF_3X3:
        case ShaderDataType.SF_4X3:
            return 3;
        case ShaderDataType.B_4:
        case ShaderDataType.SI_4:
        case ShaderDataType.UI_4:
        case ShaderDataType.SF_4:
        case ShaderDataType.SF_2X4:
        case ShaderDataType.SF_3X4:
        case ShaderDataType.SF_4X4:
            return 4;
        default:
            return -1;
    }
};

// Number of locations of a given shader data type.
export const shaderDataLocations = (dataType: ShaderDataType): number => {
    switch (dataType) {
        case ShaderDataType.SI_1:
        case ShaderDataType.SI_2:
        case ShaderDataType.SI_3:
        case ShaderDataType.SI_4:
        case ShaderDataType.UI_1:
        case ShaderDataType.UI_2:
        case ShaderDataType.UI_3:
        case ShaderDataType.UI_4:
        case ShaderDataType.SF_1:
        case ShaderDataType.SF_2:
        case ShaderDataType.SF_3:
        case ShaderDataType.SF_4:
        case ShaderDataType.B_1:
        case ShaderDataType.B_2:
        case ShaderDataType.B_3:
        case ShaderDataType.B_4:
        case ShaderDataType.SI_TEX_2D:
        case ShaderDataType.SI_TEX_2D_ARRAY:
        case ShaderDataType.SI_TEX_3D:
        case ShaderDataType.SI_TEX_CUBE:
        case ShaderDataType.UI_TEX_2D:
        case ShaderDataType.UI_TEX_2D_ARRAY:
        case ShaderDataType.UI_TEX_3D:
        case ShaderDataType.UI_TEX_CUBE:
        case ShaderDataType.SF_TEX_2D:
        case ShaderDataType.SF_TEX_2D_ARRAY:
        case ShaderDataType.SF_TEX_3D:
        case ShaderDataType.SF_TEX_CUBE:
        case ShaderDataType.SF_TEX_2D_DEPTH:
        case ShaderDataType.SF_TEX_2D_ARRAY_DEPTH:
        case ShaderDataType.SF_TEX_CUBE_DEPTH:
            return 1;
        case ShaderDataType.SF_2X2:
        case ShaderDataType.SF_2X3:
        case ShaderDataType.SF_2X4:
            return 2;
        case ShaderDataType.SF_3X2:
        case ShaderDataType.SF_3X3:
        case ShaderDataType.SF_3X4:
            return 3;
        case ShaderDataType.SF_4X2:
        case ShaderDataType.SF_4X3:
        case ShaderDataType.SF_4X4:
            return 4;
        default:
            return -1;
    }
};

// Number of bytes of a given shader data type backed by a given buffer data type.
export const shaderDataByteLength = (shaderDataType: ShaderDataType, bufferDataType: BufferDataType): number => {
    const numLocations = shaderDataLocations(shaderDataType);
    const numComponents = shaderDataComponents(shaderDataType);
    const dataSize = bufferDataByteLength(bufferDataType);
    const dataComponents = bufferDataComponents(bufferDataType);
    return (numLocations * numComponents * dataSize) / dataComponents;
};

// Sets values to a uniform through the appropriate context uniform method.
export const setUniformValues = (
    gl: WebGL2RenderingContext,
    dataType: ShaderDataType,
    location: WebGLUniformLocation,
    data: ArrayBufferView,
): void => {
    let typedData: Uint32Array | Int32Array | Float32Array;
    switch (dataType) {
        case ShaderDataType.B_1:
        case ShaderDataType.SI_1:
        case ShaderDataType.SI_TEX_2D:
        case ShaderDataType.SI_TEX_2D_ARRAY:
        case ShaderDataType.SI_TEX_3D:
        case ShaderDataType.SI_TEX_CUBE:
        case ShaderDataType.UI_TEX_2D:
        case ShaderDataType.UI_TEX_2D_ARRAY:
        case ShaderDataType.UI_TEX_3D:
        case ShaderDataType.UI_TEX_CUBE:
        case ShaderDataType.SF_TEX_2D:
        case ShaderDataType.SF_TEX_2D_ARRAY:
        case ShaderDataType.SF_TEX_3D:
        case ShaderDataType.SF_TEX_CUBE:
        case ShaderDataType.SF_TEX_2D_DEPTH:
        case ShaderDataType.SF_TEX_2D_ARRAY_DEPTH:
        case ShaderDataType.SF_TEX_CUBE_DEPTH:
            typedData = new Int32Array(data.buffer, data.byteOffset, 1);
            return gl.uniform1iv(location, typedData);
        case ShaderDataType.B_2:
        case ShaderDataType.SI_2:
            typedData = new Int32Array(data.buffer, data.byteOffset, 2);
            return gl.uniform2iv(location, typedData);
        case ShaderDataType.B_3:
        case ShaderDataType.SI_3:
            typedData = new Int32Array(data.buffer, data.byteOffset, 3);
            return gl.uniform3iv(location, typedData);
        case ShaderDataType.B_4:
        case ShaderDataType.SI_4:
            typedData = new Int32Array(data.buffer, data.byteOffset, 4);
            return gl.uniform4iv(location, typedData);
        case ShaderDataType.UI_1:
            typedData = new Uint32Array(data.buffer, data.byteOffset, 1);
            return gl.uniform1uiv(location, typedData);
        case ShaderDataType.UI_2:
            typedData = new Uint32Array(data.buffer, data.byteOffset, 2);
            return gl.uniform2uiv(location, typedData);
        case ShaderDataType.UI_3:
            typedData = new Uint32Array(data.buffer, data.byteOffset, 3);
            return gl.uniform3uiv(location, typedData);
        case ShaderDataType.UI_4:
            typedData = new Uint32Array(data.buffer, data.byteOffset, 4);
            return gl.uniform4uiv(location, typedData);
        case ShaderDataType.SF_1:
            typedData = new Float32Array(data.buffer, data.byteOffset, 1);
            return gl.uniform1fv(location, typedData);
        case ShaderDataType.SF_2:
            typedData = new Float32Array(data.buffer, data.byteOffset, 2);
            return gl.uniform2fv(location, typedData);
        case ShaderDataType.SF_3:
            typedData = new Float32Array(data.buffer, data.byteOffset, 3);
            return gl.uniform3fv(location, typedData);
        case ShaderDataType.SF_4:
            typedData = new Float32Array(data.buffer, data.byteOffset, 4);
            return gl.uniform4fv(location, typedData);
        case ShaderDataType.SF_2X2:
            typedData = new Float32Array(data.buffer, data.byteOffset, 4);
            return gl.uniformMatrix2fv(location, false, typedData);
        case ShaderDataType.SF_2X3:
            typedData = new Float32Array(data.buffer, data.byteOffset, 6);
            return gl.uniformMatrix2x3fv(location, false, typedData);
        case ShaderDataType.SF_2X4:
            typedData = new Float32Array(data.buffer, data.byteOffset, 8);
            return gl.uniformMatrix2x4fv(location, false, typedData);
        case ShaderDataType.SF_3X2:
            typedData = new Float32Array(data.buffer, data.byteOffset, 6);
            return gl.uniformMatrix3x2fv(location, false, typedData);
        case ShaderDataType.SF_3X3:
            typedData = new Float32Array(data.buffer, data.byteOffset, 9);
            return gl.uniformMatrix3fv(location, false, typedData);
        case ShaderDataType.SF_3X4:
            typedData = new Float32Array(data.buffer, data.byteOffset, 12);
            return gl.uniformMatrix3x4fv(location, false, typedData);
        case ShaderDataType.SF_4X2:
            typedData = new Float32Array(data.buffer, data.byteOffset, 8);
            return gl.uniformMatrix4x2fv(location, false, typedData);
        case ShaderDataType.SF_4X3:
            typedData = new Float32Array(data.buffer, data.byteOffset, 12);
            return gl.uniformMatrix4x3fv(location, false, typedData);
        case ShaderDataType.SF_4X4:
            typedData = new Float32Array(data.buffer, data.byteOffset, 16);
            return gl.uniformMatrix4fv(location, false, typedData);
    }
};
