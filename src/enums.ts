import { WebGL2Constant } from './webGL2Constants';

// Resource types managed by the lazy-renderer.
export enum ResourceType {
    FRAMEBUFFER,
    PROGRAM,
    SHADER,
    PRIMITIVE,
    ACCESSOR,
    BUFFER,
    SAMPLER,
    TEXTURE,
}

// Shader types.
export enum ShaderType {
    FRAGMENT = WebGL2Constant.FRAGMENT_SHADER,
    VERTEX = WebGL2Constant.VERTEX_SHADER,
}

// Primitive drawing types.
export enum PrimitiveType {
    POINTS = WebGL2Constant.POINTS,
    LINES = WebGL2Constant.LINES,
    LINE_LOOP = WebGL2Constant.LINE_LOOP,
    LINE_STRIP = WebGL2Constant.LINE_STRIP,
    TRIANGLES = WebGL2Constant.TRIANGLES,
    TRIANGLE_STRIP = WebGL2Constant.TRIANGLE_STRIP,
    TRIANGLE_FAN = WebGL2Constant.TRIANGLE_FAN,
}

// Buffer binding targets.
export enum BufferTarget {
    ATTRIBUTES = WebGL2Constant.ARRAY_BUFFER,
    INDICES = WebGL2Constant.ELEMENT_ARRAY_BUFFER,
}

// Texture filtering functions.
export enum TextureFilter {
    NEAREST = WebGL2Constant.NEAREST,
    LINEAR = WebGL2Constant.LINEAR,
    NEAREST_MIPMAP_NEAREST = WebGL2Constant.NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST = WebGL2Constant.LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR = WebGL2Constant.NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR = WebGL2Constant.LINEAR_MIPMAP_LINEAR,
}

// Texture wrapping modes.
export enum TextureWrapping {
    REPEAT = WebGL2Constant.REPEAT,
    CLAMP_TO_EDGE = WebGL2Constant.CLAMP_TO_EDGE,
    MIRRORED_REPEAT = WebGL2Constant.MIRRORED_REPEAT,
}

// Texture binding targets.
export enum TextureType {
    TEX_2D = WebGL2Constant.TEXTURE_2D,
    TEX_2D_ARRAY = WebGL2Constant.TEXTURE_2D_ARRAY,
    TEX_3D = WebGL2Constant.TEXTURE_3D,
    TEX_CUBE = WebGL2Constant.TEXTURE_CUBE_MAP,
}

// Texture internal formats.
export enum TextureFormat {
    SI_8 = WebGL2Constant.R8I,
    SI_8_8 = WebGL2Constant.RG8I,
    SI_8_8_8 = WebGL2Constant.RGB8I,
    SI_8_8_8_8 = WebGL2Constant.RGBA8I,
    SI_16 = WebGL2Constant.R16I,
    SI_16_16 = WebGL2Constant.RG16I,
    SI_16_16_16 = WebGL2Constant.RGB16I,
    SI_16_16_16_16 = WebGL2Constant.RGBA16I,
    SI_32 = WebGL2Constant.R32I,
    SI_32_32 = WebGL2Constant.RG32I,
    SI_32_32_32 = WebGL2Constant.RGB32I,
    SI_32_32_32_32 = WebGL2Constant.RGBA32I,
    UI_8 = WebGL2Constant.R8UI,
    UI_8_8 = WebGL2Constant.RG8UI,
    UI_8_8_8 = WebGL2Constant.RGB8UI,
    UI_8_8_8_8 = WebGL2Constant.RGBA8UI,
    UI_16 = WebGL2Constant.R16UI,
    UI_16_16 = WebGL2Constant.RG16UI,
    UI_16_16_16 = WebGL2Constant.RGB16UI,
    UI_16_16_16_16 = WebGL2Constant.RGBA16UI,
    UI_32 = WebGL2Constant.R32UI,
    UI_32_32 = WebGL2Constant.RG32UI,
    UI_32_32_32 = WebGL2Constant.RGB32UI,
    UI_32_32_32_32 = WebGL2Constant.RGBA32UI,
    UN_8 = WebGL2Constant.R8,
    UN_8_8 = WebGL2Constant.RG8,
    UN_8_8_8 = WebGL2Constant.RGB8,
    UN_8_8_8_8 = WebGL2Constant.RGBA8,
    SN_8 = WebGL2Constant.R8_SNORM,
    SN_8_8 = WebGL2Constant.RG8_SNORM,
    SN_8_8_8 = WebGL2Constant.RGB8_SNORM,
    SN_8_8_8_8 = WebGL2Constant.RGBA8_SNORM,
    SF_16 = WebGL2Constant.R16F,
    SF_16_16 = WebGL2Constant.RG16F,
    SF_16_16_16 = WebGL2Constant.RGB16F,
    SF_16_16_16_16 = WebGL2Constant.RGBA16F,
    SF_32 = WebGL2Constant.R32F,
    SF_32_32 = WebGL2Constant.RG32F,
    SF_32_32_32 = WebGL2Constant.RGB32F,
    SF_32_32_32_32 = WebGL2Constant.RGBA32F,
    UI_10_10_10_2 = WebGL2Constant.RGB10_A2UI,
    UN_5_6_5 = WebGL2Constant.RGB565,
    UN_4_4_4_4 = WebGL2Constant.RGBA4,
    UN_5_5_5_1 = WebGL2Constant.RGB5_A1,
    UN_10_10_10_2 = WebGL2Constant.RGB10_A2,
    UN_S8_S8_S8 = WebGL2Constant.SRGB8, // sRGB space.
    UN_S8_S8_S8_8 = WebGL2Constant.SRGB8_ALPHA8, // sRGB space with linear alpha.
    SF_11_11_10 = WebGL2Constant.R11F_G11F_B10F,
    SF_9_9_9_E5 = WebGL2Constant.RGB9_E5, // Shared 5 exponent bits.
    UN_A8 = WebGL2Constant.ALPHA,
    UN_L8 = WebGL2Constant.LUMINANCE,
    UN_L8_A8 = WebGL2Constant.LUMINANCE_ALPHA,
}

// Texture unsized formats.
export enum TextureUnsizedFormat {
    F_R = WebGL2Constant.RED, // (R, 0.0, 0.0, 1.0).
    F_RG = WebGL2Constant.RG, // (R, G, 0.0, 1.0).
    F_RGB = WebGL2Constant.RGB, // (R, G, B, 1.0).
    F_RGBA = WebGL2Constant.RGBA, // (R, G, B, A).
    F_L = WebGL2Constant.LUMINANCE, // (L, L, L, 1.0).
    F_A = WebGL2Constant.ALPHA, // (0.0, 0.0, 0.0, A).
    F_LA = WebGL2Constant.LUMINANCE_ALPHA, // (L, L, L, A).
    I_R = WebGL2Constant.RED_INTEGER, // (R, 0, 0, 1).
    I_RG = WebGL2Constant.RG_INTEGER, // (R, G, 0, 1).
    I_RGB = WebGL2Constant.RGB_INTEGER, // (R, G, B, 1).
    I_RGBA = WebGL2Constant.RGBA_INTEGER, // (R, G, B, A).
}

//
export enum RenderbufferFormat {
    UN_16 = WebGL2Constant.DEPTH_COMPONENT16,
    UN_24 = WebGL2Constant.DEPTH_COMPONENT24,
    SF_32 = WebGL2Constant.DEPTH_COMPONENT32F,
    UN_24_8 = WebGL2Constant.DEPTH24_STENCIL8,
    SF_32_UN_8 = WebGL2Constant.DEPTH32F_STENCIL8,
}

export enum RenderbufferUnsizedFormat {
    DEPTH = WebGL2Constant.DEPTH_COMPONENT,
    DEPTH_STENCIL = WebGL2Constant.DEPTH_STENCIL,
}

// Data types used inside a buffer.
export enum BufferDataType {
    // * Data type for indices, attributes, uniforms and textures.
    UI32 = WebGL2Constant.UNSIGNED_INT,
    // * Data types for indices, attributes and textures. Not uniforms.
    UI8 = WebGL2Constant.UNSIGNED_BYTE,
    UI16 = WebGL2Constant.UNSIGNED_SHORT,
    // * Data types for attributes, uniforms and textures. Not indices.
    SI32 = WebGL2Constant.INT,
    SF32 = WebGL2Constant.FLOAT,
    // * Data types for attributes and textures. Neither indices nor uniforms
    SI8 = WebGL2Constant.BYTE,
    SI16 = WebGL2Constant.SHORT,
    SF16 = WebGL2Constant.HALF_FLOAT,
    UI2_UI10_UI10_UI10_REV = WebGL2Constant.UNSIGNED_INT_2_10_10_10_REV,
    // * Data type for attributes only.
    SI2_SI10_SI10_SI10_REV = WebGL2Constant.INT_2_10_10_10_REV,
    // * Data types for textures only.
    UI5_UI6_UI5 = WebGL2Constant.UNSIGNED_SHORT_5_6_5,
    UI4_UI4_UI4_UI4 = WebGL2Constant.UNSIGNED_SHORT_4_4_4_4,
    UI5_UI5_UI5_UI1 = WebGL2Constant.UNSIGNED_SHORT_5_5_5_1,
    UI24_UI8 = WebGL2Constant.UNSIGNED_INT_24_8,
    UI5_UI9_UI9_UI9_REV = WebGL2Constant.UNSIGNED_INT_5_9_9_9_REV,
    UF10_UF11_UF11_REV = WebGL2Constant.UNSIGNED_INT_10F_11F_11F_REV,
}

// Data types used inside a shader.
export enum ShaderDataType {
    // * Data types for attributes and uniforms.
    SI_1 = WebGL2Constant.INT,
    SI_2 = WebGL2Constant.INT_VEC2,
    SI_3 = WebGL2Constant.INT_VEC3,
    SI_4 = WebGL2Constant.INT_VEC4,
    UI_1 = WebGL2Constant.UNSIGNED_INT,
    UI_2 = WebGL2Constant.UNSIGNED_INT_VEC2,
    UI_3 = WebGL2Constant.UNSIGNED_INT_VEC3,
    UI_4 = WebGL2Constant.UNSIGNED_INT_VEC4,
    SF_1 = WebGL2Constant.FLOAT,
    SF_2 = WebGL2Constant.FLOAT_VEC2,
    SF_3 = WebGL2Constant.FLOAT_VEC3,
    SF_4 = WebGL2Constant.FLOAT_VEC4,
    SF_2X2 = WebGL2Constant.FLOAT_MAT2,
    SF_2X3 = WebGL2Constant.FLOAT_MAT2x3,
    SF_2X4 = WebGL2Constant.FLOAT_MAT2x4,
    SF_3X2 = WebGL2Constant.FLOAT_MAT3x2,
    SF_3X3 = WebGL2Constant.FLOAT_MAT3,
    SF_3X4 = WebGL2Constant.FLOAT_MAT3x4,
    SF_4X2 = WebGL2Constant.FLOAT_MAT4x2,
    SF_4X3 = WebGL2Constant.FLOAT_MAT4x3,
    SF_4X4 = WebGL2Constant.FLOAT_MAT4,
    // * Data types for uniforms only.
    B_1 = WebGL2Constant.BOOL,
    B_2 = WebGL2Constant.BOOL_VEC2,
    B_3 = WebGL2Constant.BOOL_VEC3,
    B_4 = WebGL2Constant.BOOL_VEC4,
    SI_TEX_2D = WebGL2Constant.INT_SAMPLER_2D,
    SI_TEX_2D_ARRAY = WebGL2Constant.INT_SAMPLER_2D_ARRAY,
    SI_TEX_3D = WebGL2Constant.INT_SAMPLER_3D,
    SI_TEX_CUBE = WebGL2Constant.INT_SAMPLER_CUBE,
    UI_TEX_2D = WebGL2Constant.UNSIGNED_INT_SAMPLER_2D,
    UI_TEX_2D_ARRAY = WebGL2Constant.UNSIGNED_INT_SAMPLER_2D_ARRAY,
    UI_TEX_3D = WebGL2Constant.UNSIGNED_INT_SAMPLER_3D,
    UI_TEX_CUBE = WebGL2Constant.UNSIGNED_INT_SAMPLER_CUBE,
    SF_TEX_2D = WebGL2Constant.SAMPLER_2D,
    SF_TEX_2D_ARRAY = WebGL2Constant.SAMPLER_2D_ARRAY,
    SF_TEX_3D = WebGL2Constant.SAMPLER_3D,
    SF_TEX_CUBE = WebGL2Constant.SAMPLER_CUBE,
    SF_TEX_2D_DEPTH = WebGL2Constant.SAMPLER_2D_SHADOW,
    SF_TEX_2D_ARRAY_DEPTH = WebGL2Constant.SAMPLER_2D_ARRAY_SHADOW,
    SF_TEX_CUBE_DEPTH = WebGL2Constant.SAMPLER_CUBE_SHADOW,
}
