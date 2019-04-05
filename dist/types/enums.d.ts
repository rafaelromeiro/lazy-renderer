export declare enum ResourceType {
    FRAMEBUFFER = 0,
    PROGRAM = 1,
    SHADER = 2,
    PRIMITIVE = 3,
    ACCESSOR = 4,
    BUFFER = 5,
    SAMPLER = 6,
    TEXTURE = 7
}
export declare enum ShaderType {
    FRAGMENT = 35632,
    VERTEX = 35633
}
export declare enum PrimitiveType {
    POINTS = 0,
    LINES = 1,
    LINE_LOOP = 2,
    LINE_STRIP = 3,
    TRIANGLES = 4,
    TRIANGLE_STRIP = 5,
    TRIANGLE_FAN = 6
}
export declare enum BufferTarget {
    ATTRIBUTES = 34962,
    INDICES = 34963
}
export declare enum TextureFilter {
    NEAREST = 9728,
    LINEAR = 9729,
    NEAREST_MIPMAP_NEAREST = 9984,
    LINEAR_MIPMAP_NEAREST = 9985,
    NEAREST_MIPMAP_LINEAR = 9986,
    LINEAR_MIPMAP_LINEAR = 9987
}
export declare enum TextureWrapping {
    REPEAT = 10497,
    CLAMP_TO_EDGE = 33071,
    MIRRORED_REPEAT = 33648
}
export declare enum TextureType {
    TEX_2D = 3553,
    TEX_2D_ARRAY = 35866,
    TEX_3D = 32879,
    TEX_CUBE = 34067
}
export declare enum TextureFormat {
    SI_8 = 33329,
    SI_8_8 = 33335,
    SI_8_8_8 = 36239,
    SI_8_8_8_8 = 36238,
    SI_16 = 33331,
    SI_16_16 = 33337,
    SI_16_16_16 = 36233,
    SI_16_16_16_16 = 36232,
    SI_32 = 33333,
    SI_32_32 = 33339,
    SI_32_32_32 = 36227,
    SI_32_32_32_32 = 36226,
    UI_8 = 33330,
    UI_8_8 = 33336,
    UI_8_8_8 = 36221,
    UI_8_8_8_8 = 36220,
    UI_16 = 33332,
    UI_16_16 = 33338,
    UI_16_16_16 = 36215,
    UI_16_16_16_16 = 36214,
    UI_32 = 33334,
    UI_32_32 = 33340,
    UI_32_32_32 = 36209,
    UI_32_32_32_32 = 36208,
    UN_8 = 33321,
    UN_8_8 = 33323,
    UN_8_8_8 = 32849,
    UN_8_8_8_8 = 32856,
    SN_8 = 36756,
    SN_8_8 = 36757,
    SN_8_8_8 = 36758,
    SN_8_8_8_8 = 36759,
    SF_16 = 33325,
    SF_16_16 = 33327,
    SF_16_16_16 = 34843,
    SF_16_16_16_16 = 34842,
    SF_32 = 33326,
    SF_32_32 = 33328,
    SF_32_32_32 = 34837,
    SF_32_32_32_32 = 34836,
    UI_10_10_10_2 = 36975,
    UN_5_6_5 = 36194,
    UN_4_4_4_4 = 32854,
    UN_5_5_5_1 = 32855,
    UN_10_10_10_2 = 32857,
    UN_S8_S8_S8 = 35905,
    UN_S8_S8_S8_8 = 35907,
    SF_11_11_10 = 35898,
    SF_9_9_9_E5 = 35901,
    UN_A8 = 6406,
    UN_L8 = 6409,
    UN_L8_A8 = 6410
}
export declare enum TextureUnsizedFormat {
    F_R = 6403,
    F_RG = 33319,
    F_RGB = 6407,
    F_RGBA = 6408,
    F_L = 6409,
    F_A = 6406,
    F_LA = 6410,
    I_R = 36244,
    I_RG = 33320,
    I_RGB = 36248,
    I_RGBA = 36249
}
export declare enum RenderbufferFormat {
    UN_16 = 33189,
    UN_24 = 33190,
    SF_32 = 36012,
    UN_24_8 = 35056,
    SF_32_UN_8 = 36013
}
export declare enum RenderbufferUnsizedFormat {
    DEPTH = 6402,
    DEPTH_STENCIL = 34041
}
export declare enum BufferDataType {
    UI32 = 5125,
    UI8 = 5121,
    UI16 = 5123,
    SI32 = 5124,
    SF32 = 5126,
    SI8 = 5120,
    SI16 = 5122,
    SF16 = 5131,
    UI2_UI10_UI10_UI10_REV = 33640,
    SI2_SI10_SI10_SI10_REV = 36255,
    UI5_UI6_UI5 = 33635,
    UI4_UI4_UI4_UI4 = 32819,
    UI5_UI5_UI5_UI1 = 32820,
    UI24_UI8 = 34042,
    UI5_UI9_UI9_UI9_REV = 35902,
    UF10_UF11_UF11_REV = 35899
}
export declare enum ShaderDataType {
    SI_1 = 5124,
    SI_2 = 35667,
    SI_3 = 35668,
    SI_4 = 35669,
    UI_1 = 5125,
    UI_2 = 36294,
    UI_3 = 36295,
    UI_4 = 36296,
    SF_1 = 5126,
    SF_2 = 35664,
    SF_3 = 35665,
    SF_4 = 35666,
    SF_2X2 = 35674,
    SF_2X3 = 35685,
    SF_2X4 = 35686,
    SF_3X2 = 35687,
    SF_3X3 = 35675,
    SF_3X4 = 35688,
    SF_4X2 = 35689,
    SF_4X3 = 35690,
    SF_4X4 = 35676,
    B_1 = 35670,
    B_2 = 35671,
    B_3 = 35672,
    B_4 = 35673,
    SI_TEX_2D = 36298,
    SI_TEX_2D_ARRAY = 36303,
    SI_TEX_3D = 36299,
    SI_TEX_CUBE = 36300,
    UI_TEX_2D = 36306,
    UI_TEX_2D_ARRAY = 36311,
    UI_TEX_3D = 36307,
    UI_TEX_CUBE = 36308,
    SF_TEX_2D = 35678,
    SF_TEX_2D_ARRAY = 36289,
    SF_TEX_3D = 35679,
    SF_TEX_CUBE = 35680,
    SF_TEX_2D_DEPTH = 35682,
    SF_TEX_2D_ARRAY_DEPTH = 36292,
    SF_TEX_CUBE_DEPTH = 36293
}
