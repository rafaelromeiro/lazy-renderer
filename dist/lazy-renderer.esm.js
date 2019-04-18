function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/* eslint-disable @typescript-eslint/camelcase */
var WebGL2Constant;

(function (WebGL2Constant) {
  WebGL2Constant[WebGL2Constant["DEPTH_BUFFER_BIT"] = 256] = "DEPTH_BUFFER_BIT";
  WebGL2Constant[WebGL2Constant["STENCIL_BUFFER_BIT"] = 1024] = "STENCIL_BUFFER_BIT";
  WebGL2Constant[WebGL2Constant["COLOR_BUFFER_BIT"] = 16384] = "COLOR_BUFFER_BIT";
  WebGL2Constant[WebGL2Constant["POINTS"] = 0] = "POINTS";
  WebGL2Constant[WebGL2Constant["LINES"] = 1] = "LINES";
  WebGL2Constant[WebGL2Constant["LINE_LOOP"] = 2] = "LINE_LOOP";
  WebGL2Constant[WebGL2Constant["LINE_STRIP"] = 3] = "LINE_STRIP";
  WebGL2Constant[WebGL2Constant["TRIANGLES"] = 4] = "TRIANGLES";
  WebGL2Constant[WebGL2Constant["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
  WebGL2Constant[WebGL2Constant["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
  WebGL2Constant[WebGL2Constant["ZERO"] = 0] = "ZERO";
  WebGL2Constant[WebGL2Constant["ONE"] = 1] = "ONE";
  WebGL2Constant[WebGL2Constant["SRC_COLOR"] = 768] = "SRC_COLOR";
  WebGL2Constant[WebGL2Constant["ONE_MINUS_SRC_COLOR"] = 769] = "ONE_MINUS_SRC_COLOR";
  WebGL2Constant[WebGL2Constant["SRC_ALPHA"] = 770] = "SRC_ALPHA";
  WebGL2Constant[WebGL2Constant["ONE_MINUS_SRC_ALPHA"] = 771] = "ONE_MINUS_SRC_ALPHA";
  WebGL2Constant[WebGL2Constant["DST_ALPHA"] = 772] = "DST_ALPHA";
  WebGL2Constant[WebGL2Constant["ONE_MINUS_DST_ALPHA"] = 773] = "ONE_MINUS_DST_ALPHA";
  WebGL2Constant[WebGL2Constant["DST_COLOR"] = 774] = "DST_COLOR";
  WebGL2Constant[WebGL2Constant["ONE_MINUS_DST_COLOR"] = 775] = "ONE_MINUS_DST_COLOR";
  WebGL2Constant[WebGL2Constant["SRC_ALPHA_SATURATE"] = 776] = "SRC_ALPHA_SATURATE";
  WebGL2Constant[WebGL2Constant["FUNC_ADD"] = 32774] = "FUNC_ADD";
  WebGL2Constant[WebGL2Constant["BLEND_EQUATION"] = 32777] = "BLEND_EQUATION";
  WebGL2Constant[WebGL2Constant["BLEND_EQUATION_RGB"] = 32777] = "BLEND_EQUATION_RGB";
  WebGL2Constant[WebGL2Constant["BLEND_EQUATION_ALPHA"] = 34877] = "BLEND_EQUATION_ALPHA";
  WebGL2Constant[WebGL2Constant["FUNC_SUBTRACT"] = 32778] = "FUNC_SUBTRACT";
  WebGL2Constant[WebGL2Constant["FUNC_REVERSE_SUBTRACT"] = 32779] = "FUNC_REVERSE_SUBTRACT";
  WebGL2Constant[WebGL2Constant["BLEND_DST_RGB"] = 32968] = "BLEND_DST_RGB";
  WebGL2Constant[WebGL2Constant["BLEND_SRC_RGB"] = 32969] = "BLEND_SRC_RGB";
  WebGL2Constant[WebGL2Constant["BLEND_DST_ALPHA"] = 32970] = "BLEND_DST_ALPHA";
  WebGL2Constant[WebGL2Constant["BLEND_SRC_ALPHA"] = 32971] = "BLEND_SRC_ALPHA";
  WebGL2Constant[WebGL2Constant["CONSTANT_COLOR"] = 32769] = "CONSTANT_COLOR";
  WebGL2Constant[WebGL2Constant["ONE_MINUS_CONSTANT_COLOR"] = 32770] = "ONE_MINUS_CONSTANT_COLOR";
  WebGL2Constant[WebGL2Constant["CONSTANT_ALPHA"] = 32771] = "CONSTANT_ALPHA";
  WebGL2Constant[WebGL2Constant["ONE_MINUS_CONSTANT_ALPHA"] = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
  WebGL2Constant[WebGL2Constant["BLEND_COLOR"] = 32773] = "BLEND_COLOR";
  WebGL2Constant[WebGL2Constant["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
  WebGL2Constant[WebGL2Constant["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
  WebGL2Constant[WebGL2Constant["ARRAY_BUFFER_BINDING"] = 34964] = "ARRAY_BUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["ELEMENT_ARRAY_BUFFER_BINDING"] = 34965] = "ELEMENT_ARRAY_BUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["STREAM_DRAW"] = 35040] = "STREAM_DRAW";
  WebGL2Constant[WebGL2Constant["STATIC_DRAW"] = 35044] = "STATIC_DRAW";
  WebGL2Constant[WebGL2Constant["DYNAMIC_DRAW"] = 35048] = "DYNAMIC_DRAW";
  WebGL2Constant[WebGL2Constant["BUFFER_SIZE"] = 34660] = "BUFFER_SIZE";
  WebGL2Constant[WebGL2Constant["BUFFER_USAGE"] = 34661] = "BUFFER_USAGE";
  WebGL2Constant[WebGL2Constant["CURRENT_VERTEX_ATTRIB"] = 34342] = "CURRENT_VERTEX_ATTRIB";
  WebGL2Constant[WebGL2Constant["FRONT"] = 1028] = "FRONT";
  WebGL2Constant[WebGL2Constant["BACK"] = 1029] = "BACK";
  WebGL2Constant[WebGL2Constant["FRONT_AND_BACK"] = 1032] = "FRONT_AND_BACK";
  WebGL2Constant[WebGL2Constant["CULL_FACE"] = 2884] = "CULL_FACE";
  WebGL2Constant[WebGL2Constant["BLEND"] = 3042] = "BLEND";
  WebGL2Constant[WebGL2Constant["DITHER"] = 3024] = "DITHER";
  WebGL2Constant[WebGL2Constant["STENCIL_TEST"] = 2960] = "STENCIL_TEST";
  WebGL2Constant[WebGL2Constant["DEPTH_TEST"] = 2929] = "DEPTH_TEST";
  WebGL2Constant[WebGL2Constant["SCISSOR_TEST"] = 3089] = "SCISSOR_TEST";
  WebGL2Constant[WebGL2Constant["POLYGON_OFFSET_FILL"] = 32823] = "POLYGON_OFFSET_FILL";
  WebGL2Constant[WebGL2Constant["SAMPLE_ALPHA_TO_COVERAGE"] = 32926] = "SAMPLE_ALPHA_TO_COVERAGE";
  WebGL2Constant[WebGL2Constant["SAMPLE_COVERAGE"] = 32928] = "SAMPLE_COVERAGE";
  WebGL2Constant[WebGL2Constant["NO_ERROR"] = 0] = "NO_ERROR";
  WebGL2Constant[WebGL2Constant["INVALID_ENUM"] = 1280] = "INVALID_ENUM";
  WebGL2Constant[WebGL2Constant["INVALID_VALUE"] = 1281] = "INVALID_VALUE";
  WebGL2Constant[WebGL2Constant["INVALID_OPERATION"] = 1282] = "INVALID_OPERATION";
  WebGL2Constant[WebGL2Constant["OUT_OF_MEMORY"] = 1285] = "OUT_OF_MEMORY";
  WebGL2Constant[WebGL2Constant["CW"] = 2304] = "CW";
  WebGL2Constant[WebGL2Constant["CCW"] = 2305] = "CCW";
  WebGL2Constant[WebGL2Constant["LINE_WIDTH"] = 2849] = "LINE_WIDTH";
  WebGL2Constant[WebGL2Constant["ALIASED_POINT_SIZE_RANGE"] = 33901] = "ALIASED_POINT_SIZE_RANGE";
  WebGL2Constant[WebGL2Constant["ALIASED_LINE_WIDTH_RANGE"] = 33902] = "ALIASED_LINE_WIDTH_RANGE";
  WebGL2Constant[WebGL2Constant["CULL_FACE_MODE"] = 2885] = "CULL_FACE_MODE";
  WebGL2Constant[WebGL2Constant["FRONT_FACE"] = 2886] = "FRONT_FACE";
  WebGL2Constant[WebGL2Constant["DEPTH_RANGE"] = 2928] = "DEPTH_RANGE";
  WebGL2Constant[WebGL2Constant["DEPTH_WRITEMASK"] = 2930] = "DEPTH_WRITEMASK";
  WebGL2Constant[WebGL2Constant["DEPTH_CLEAR_VALUE"] = 2931] = "DEPTH_CLEAR_VALUE";
  WebGL2Constant[WebGL2Constant["DEPTH_FUNC"] = 2932] = "DEPTH_FUNC";
  WebGL2Constant[WebGL2Constant["STENCIL_CLEAR_VALUE"] = 2961] = "STENCIL_CLEAR_VALUE";
  WebGL2Constant[WebGL2Constant["STENCIL_FUNC"] = 2962] = "STENCIL_FUNC";
  WebGL2Constant[WebGL2Constant["STENCIL_FAIL"] = 2964] = "STENCIL_FAIL";
  WebGL2Constant[WebGL2Constant["STENCIL_PASS_DEPTH_FAIL"] = 2965] = "STENCIL_PASS_DEPTH_FAIL";
  WebGL2Constant[WebGL2Constant["STENCIL_PASS_DEPTH_PASS"] = 2966] = "STENCIL_PASS_DEPTH_PASS";
  WebGL2Constant[WebGL2Constant["STENCIL_REF"] = 2967] = "STENCIL_REF";
  WebGL2Constant[WebGL2Constant["STENCIL_VALUE_MASK"] = 2963] = "STENCIL_VALUE_MASK";
  WebGL2Constant[WebGL2Constant["STENCIL_WRITEMASK"] = 2968] = "STENCIL_WRITEMASK";
  WebGL2Constant[WebGL2Constant["STENCIL_BACK_FUNC"] = 34816] = "STENCIL_BACK_FUNC";
  WebGL2Constant[WebGL2Constant["STENCIL_BACK_FAIL"] = 34817] = "STENCIL_BACK_FAIL";
  WebGL2Constant[WebGL2Constant["STENCIL_BACK_PASS_DEPTH_FAIL"] = 34818] = "STENCIL_BACK_PASS_DEPTH_FAIL";
  WebGL2Constant[WebGL2Constant["STENCIL_BACK_PASS_DEPTH_PASS"] = 34819] = "STENCIL_BACK_PASS_DEPTH_PASS";
  WebGL2Constant[WebGL2Constant["STENCIL_BACK_REF"] = 36003] = "STENCIL_BACK_REF";
  WebGL2Constant[WebGL2Constant["STENCIL_BACK_VALUE_MASK"] = 36004] = "STENCIL_BACK_VALUE_MASK";
  WebGL2Constant[WebGL2Constant["STENCIL_BACK_WRITEMASK"] = 36005] = "STENCIL_BACK_WRITEMASK";
  WebGL2Constant[WebGL2Constant["VIEWPORT"] = 2978] = "VIEWPORT";
  WebGL2Constant[WebGL2Constant["SCISSOR_BOX"] = 3088] = "SCISSOR_BOX";
  WebGL2Constant[WebGL2Constant["COLOR_CLEAR_VALUE"] = 3106] = "COLOR_CLEAR_VALUE";
  WebGL2Constant[WebGL2Constant["COLOR_WRITEMASK"] = 3107] = "COLOR_WRITEMASK";
  WebGL2Constant[WebGL2Constant["UNPACK_ALIGNMENT"] = 3317] = "UNPACK_ALIGNMENT";
  WebGL2Constant[WebGL2Constant["PACK_ALIGNMENT"] = 3333] = "PACK_ALIGNMENT";
  WebGL2Constant[WebGL2Constant["MAX_TEXTURE_SIZE"] = 3379] = "MAX_TEXTURE_SIZE";
  WebGL2Constant[WebGL2Constant["MAX_VIEWPORT_DIMS"] = 3386] = "MAX_VIEWPORT_DIMS";
  WebGL2Constant[WebGL2Constant["SUBPIXEL_BITS"] = 3408] = "SUBPIXEL_BITS";
  WebGL2Constant[WebGL2Constant["RED_BITS"] = 3410] = "RED_BITS";
  WebGL2Constant[WebGL2Constant["GREEN_BITS"] = 3411] = "GREEN_BITS";
  WebGL2Constant[WebGL2Constant["BLUE_BITS"] = 3412] = "BLUE_BITS";
  WebGL2Constant[WebGL2Constant["ALPHA_BITS"] = 3413] = "ALPHA_BITS";
  WebGL2Constant[WebGL2Constant["DEPTH_BITS"] = 3414] = "DEPTH_BITS";
  WebGL2Constant[WebGL2Constant["STENCIL_BITS"] = 3415] = "STENCIL_BITS";
  WebGL2Constant[WebGL2Constant["POLYGON_OFFSET_UNITS"] = 10752] = "POLYGON_OFFSET_UNITS";
  WebGL2Constant[WebGL2Constant["POLYGON_OFFSET_FACTOR"] = 32824] = "POLYGON_OFFSET_FACTOR";
  WebGL2Constant[WebGL2Constant["TEXTURE_BINDING_2D"] = 32873] = "TEXTURE_BINDING_2D";
  WebGL2Constant[WebGL2Constant["SAMPLE_BUFFERS"] = 32936] = "SAMPLE_BUFFERS";
  WebGL2Constant[WebGL2Constant["SAMPLES"] = 32937] = "SAMPLES";
  WebGL2Constant[WebGL2Constant["SAMPLE_COVERAGE_VALUE"] = 32938] = "SAMPLE_COVERAGE_VALUE";
  WebGL2Constant[WebGL2Constant["SAMPLE_COVERAGE_INVERT"] = 32939] = "SAMPLE_COVERAGE_INVERT";
  WebGL2Constant[WebGL2Constant["COMPRESSED_TEXTURE_FORMATS"] = 34467] = "COMPRESSED_TEXTURE_FORMATS";
  WebGL2Constant[WebGL2Constant["DONT_CARE"] = 4352] = "DONT_CARE";
  WebGL2Constant[WebGL2Constant["FASTEST"] = 4353] = "FASTEST";
  WebGL2Constant[WebGL2Constant["NICEST"] = 4354] = "NICEST";
  WebGL2Constant[WebGL2Constant["GENERATE_MIPMAP_HINT"] = 33170] = "GENERATE_MIPMAP_HINT";
  WebGL2Constant[WebGL2Constant["BYTE"] = 5120] = "BYTE";
  WebGL2Constant[WebGL2Constant["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  WebGL2Constant[WebGL2Constant["SHORT"] = 5122] = "SHORT";
  WebGL2Constant[WebGL2Constant["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  WebGL2Constant[WebGL2Constant["INT"] = 5124] = "INT";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
  WebGL2Constant[WebGL2Constant["FLOAT"] = 5126] = "FLOAT";
  WebGL2Constant[WebGL2Constant["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
  WebGL2Constant[WebGL2Constant["ALPHA"] = 6406] = "ALPHA";
  WebGL2Constant[WebGL2Constant["RGB"] = 6407] = "RGB";
  WebGL2Constant[WebGL2Constant["RGBA"] = 6408] = "RGBA";
  WebGL2Constant[WebGL2Constant["LUMINANCE"] = 6409] = "LUMINANCE";
  WebGL2Constant[WebGL2Constant["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
  WebGL2Constant[WebGL2Constant["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  WebGL2Constant[WebGL2Constant["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  WebGL2Constant[WebGL2Constant["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
  WebGL2Constant[WebGL2Constant["FRAGMENT_SHADER"] = 35632] = "FRAGMENT_SHADER";
  WebGL2Constant[WebGL2Constant["VERTEX_SHADER"] = 35633] = "VERTEX_SHADER";
  WebGL2Constant[WebGL2Constant["MAX_VERTEX_ATTRIBS"] = 34921] = "MAX_VERTEX_ATTRIBS";
  WebGL2Constant[WebGL2Constant["MAX_VERTEX_UNIFORM_VECTORS"] = 36347] = "MAX_VERTEX_UNIFORM_VECTORS";
  WebGL2Constant[WebGL2Constant["MAX_VARYING_VECTORS"] = 36348] = "MAX_VARYING_VECTORS";
  WebGL2Constant[WebGL2Constant["MAX_COMBINED_TEXTURE_IMAGE_UNITS"] = 35661] = "MAX_COMBINED_TEXTURE_IMAGE_UNITS";
  WebGL2Constant[WebGL2Constant["MAX_VERTEX_TEXTURE_IMAGE_UNITS"] = 35660] = "MAX_VERTEX_TEXTURE_IMAGE_UNITS";
  WebGL2Constant[WebGL2Constant["MAX_TEXTURE_IMAGE_UNITS"] = 34930] = "MAX_TEXTURE_IMAGE_UNITS";
  WebGL2Constant[WebGL2Constant["MAX_FRAGMENT_UNIFORM_VECTORS"] = 36349] = "MAX_FRAGMENT_UNIFORM_VECTORS";
  WebGL2Constant[WebGL2Constant["SHADER_TYPE"] = 35663] = "SHADER_TYPE";
  WebGL2Constant[WebGL2Constant["DELETE_STATUS"] = 35712] = "DELETE_STATUS";
  WebGL2Constant[WebGL2Constant["LINK_STATUS"] = 35714] = "LINK_STATUS";
  WebGL2Constant[WebGL2Constant["VALIDATE_STATUS"] = 35715] = "VALIDATE_STATUS";
  WebGL2Constant[WebGL2Constant["ATTACHED_SHADERS"] = 35717] = "ATTACHED_SHADERS";
  WebGL2Constant[WebGL2Constant["ACTIVE_UNIFORMS"] = 35718] = "ACTIVE_UNIFORMS";
  WebGL2Constant[WebGL2Constant["ACTIVE_ATTRIBUTES"] = 35721] = "ACTIVE_ATTRIBUTES";
  WebGL2Constant[WebGL2Constant["SHADING_LANGUAGE_VERSION"] = 35724] = "SHADING_LANGUAGE_VERSION";
  WebGL2Constant[WebGL2Constant["CURRENT_PROGRAM"] = 35725] = "CURRENT_PROGRAM";
  WebGL2Constant[WebGL2Constant["NEVER"] = 512] = "NEVER";
  WebGL2Constant[WebGL2Constant["LESS"] = 513] = "LESS";
  WebGL2Constant[WebGL2Constant["EQUAL"] = 514] = "EQUAL";
  WebGL2Constant[WebGL2Constant["LEQUAL"] = 515] = "LEQUAL";
  WebGL2Constant[WebGL2Constant["GREATER"] = 516] = "GREATER";
  WebGL2Constant[WebGL2Constant["NOTEQUAL"] = 517] = "NOTEQUAL";
  WebGL2Constant[WebGL2Constant["GEQUAL"] = 518] = "GEQUAL";
  WebGL2Constant[WebGL2Constant["ALWAYS"] = 519] = "ALWAYS";
  WebGL2Constant[WebGL2Constant["KEEP"] = 7680] = "KEEP";
  WebGL2Constant[WebGL2Constant["REPLACE"] = 7681] = "REPLACE";
  WebGL2Constant[WebGL2Constant["INCR"] = 7682] = "INCR";
  WebGL2Constant[WebGL2Constant["DECR"] = 7683] = "DECR";
  WebGL2Constant[WebGL2Constant["INVERT"] = 5386] = "INVERT";
  WebGL2Constant[WebGL2Constant["INCR_WRAP"] = 34055] = "INCR_WRAP";
  WebGL2Constant[WebGL2Constant["DECR_WRAP"] = 34056] = "DECR_WRAP";
  WebGL2Constant[WebGL2Constant["VENDOR"] = 7936] = "VENDOR";
  WebGL2Constant[WebGL2Constant["RENDERER"] = 7937] = "RENDERER";
  WebGL2Constant[WebGL2Constant["VERSION"] = 7938] = "VERSION";
  WebGL2Constant[WebGL2Constant["NEAREST"] = 9728] = "NEAREST";
  WebGL2Constant[WebGL2Constant["LINEAR"] = 9729] = "LINEAR";
  WebGL2Constant[WebGL2Constant["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
  WebGL2Constant[WebGL2Constant["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
  WebGL2Constant[WebGL2Constant["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
  WebGL2Constant[WebGL2Constant["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
  WebGL2Constant[WebGL2Constant["TEXTURE_MAG_FILTER"] = 10240] = "TEXTURE_MAG_FILTER";
  WebGL2Constant[WebGL2Constant["TEXTURE_MIN_FILTER"] = 10241] = "TEXTURE_MIN_FILTER";
  WebGL2Constant[WebGL2Constant["TEXTURE_WRAP_S"] = 10242] = "TEXTURE_WRAP_S";
  WebGL2Constant[WebGL2Constant["TEXTURE_WRAP_T"] = 10243] = "TEXTURE_WRAP_T";
  WebGL2Constant[WebGL2Constant["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
  WebGL2Constant[WebGL2Constant["TEXTURE"] = 5890] = "TEXTURE";
  WebGL2Constant[WebGL2Constant["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
  WebGL2Constant[WebGL2Constant["TEXTURE_BINDING_CUBE_MAP"] = 34068] = "TEXTURE_BINDING_CUBE_MAP";
  WebGL2Constant[WebGL2Constant["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
  WebGL2Constant[WebGL2Constant["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
  WebGL2Constant[WebGL2Constant["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
  WebGL2Constant[WebGL2Constant["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
  WebGL2Constant[WebGL2Constant["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
  WebGL2Constant[WebGL2Constant["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
  WebGL2Constant[WebGL2Constant["MAX_CUBE_MAP_TEXTURE_SIZE"] = 34076] = "MAX_CUBE_MAP_TEXTURE_SIZE";
  WebGL2Constant[WebGL2Constant["TEXTURE0"] = 33984] = "TEXTURE0";
  WebGL2Constant[WebGL2Constant["TEXTURE1"] = 33985] = "TEXTURE1";
  WebGL2Constant[WebGL2Constant["TEXTURE2"] = 33986] = "TEXTURE2";
  WebGL2Constant[WebGL2Constant["TEXTURE3"] = 33987] = "TEXTURE3";
  WebGL2Constant[WebGL2Constant["TEXTURE4"] = 33988] = "TEXTURE4";
  WebGL2Constant[WebGL2Constant["TEXTURE5"] = 33989] = "TEXTURE5";
  WebGL2Constant[WebGL2Constant["TEXTURE6"] = 33990] = "TEXTURE6";
  WebGL2Constant[WebGL2Constant["TEXTURE7"] = 33991] = "TEXTURE7";
  WebGL2Constant[WebGL2Constant["TEXTURE8"] = 33992] = "TEXTURE8";
  WebGL2Constant[WebGL2Constant["TEXTURE9"] = 33993] = "TEXTURE9";
  WebGL2Constant[WebGL2Constant["TEXTURE10"] = 33994] = "TEXTURE10";
  WebGL2Constant[WebGL2Constant["TEXTURE11"] = 33995] = "TEXTURE11";
  WebGL2Constant[WebGL2Constant["TEXTURE12"] = 33996] = "TEXTURE12";
  WebGL2Constant[WebGL2Constant["TEXTURE13"] = 33997] = "TEXTURE13";
  WebGL2Constant[WebGL2Constant["TEXTURE14"] = 33998] = "TEXTURE14";
  WebGL2Constant[WebGL2Constant["TEXTURE15"] = 33999] = "TEXTURE15";
  WebGL2Constant[WebGL2Constant["TEXTURE16"] = 34000] = "TEXTURE16";
  WebGL2Constant[WebGL2Constant["TEXTURE17"] = 34001] = "TEXTURE17";
  WebGL2Constant[WebGL2Constant["TEXTURE18"] = 34002] = "TEXTURE18";
  WebGL2Constant[WebGL2Constant["TEXTURE19"] = 34003] = "TEXTURE19";
  WebGL2Constant[WebGL2Constant["TEXTURE20"] = 34004] = "TEXTURE20";
  WebGL2Constant[WebGL2Constant["TEXTURE21"] = 34005] = "TEXTURE21";
  WebGL2Constant[WebGL2Constant["TEXTURE22"] = 34006] = "TEXTURE22";
  WebGL2Constant[WebGL2Constant["TEXTURE23"] = 34007] = "TEXTURE23";
  WebGL2Constant[WebGL2Constant["TEXTURE24"] = 34008] = "TEXTURE24";
  WebGL2Constant[WebGL2Constant["TEXTURE25"] = 34009] = "TEXTURE25";
  WebGL2Constant[WebGL2Constant["TEXTURE26"] = 34010] = "TEXTURE26";
  WebGL2Constant[WebGL2Constant["TEXTURE27"] = 34011] = "TEXTURE27";
  WebGL2Constant[WebGL2Constant["TEXTURE28"] = 34012] = "TEXTURE28";
  WebGL2Constant[WebGL2Constant["TEXTURE29"] = 34013] = "TEXTURE29";
  WebGL2Constant[WebGL2Constant["TEXTURE30"] = 34014] = "TEXTURE30";
  WebGL2Constant[WebGL2Constant["TEXTURE31"] = 34015] = "TEXTURE31";
  WebGL2Constant[WebGL2Constant["ACTIVE_TEXTURE"] = 34016] = "ACTIVE_TEXTURE";
  WebGL2Constant[WebGL2Constant["REPEAT"] = 10497] = "REPEAT";
  WebGL2Constant[WebGL2Constant["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
  WebGL2Constant[WebGL2Constant["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
  WebGL2Constant[WebGL2Constant["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
  WebGL2Constant[WebGL2Constant["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
  WebGL2Constant[WebGL2Constant["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
  WebGL2Constant[WebGL2Constant["INT_VEC2"] = 35667] = "INT_VEC2";
  WebGL2Constant[WebGL2Constant["INT_VEC3"] = 35668] = "INT_VEC3";
  WebGL2Constant[WebGL2Constant["INT_VEC4"] = 35669] = "INT_VEC4";
  WebGL2Constant[WebGL2Constant["BOOL"] = 35670] = "BOOL";
  WebGL2Constant[WebGL2Constant["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
  WebGL2Constant[WebGL2Constant["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
  WebGL2Constant[WebGL2Constant["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
  WebGL2Constant[WebGL2Constant["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
  WebGL2Constant[WebGL2Constant["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
  WebGL2Constant[WebGL2Constant["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
  WebGL2Constant[WebGL2Constant["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
  WebGL2Constant[WebGL2Constant["SAMPLER_CUBE"] = 35680] = "SAMPLER_CUBE";
  WebGL2Constant[WebGL2Constant["VERTEX_ATTRIB_ARRAY_ENABLED"] = 34338] = "VERTEX_ATTRIB_ARRAY_ENABLED";
  WebGL2Constant[WebGL2Constant["VERTEX_ATTRIB_ARRAY_SIZE"] = 34339] = "VERTEX_ATTRIB_ARRAY_SIZE";
  WebGL2Constant[WebGL2Constant["VERTEX_ATTRIB_ARRAY_STRIDE"] = 34340] = "VERTEX_ATTRIB_ARRAY_STRIDE";
  WebGL2Constant[WebGL2Constant["VERTEX_ATTRIB_ARRAY_TYPE"] = 34341] = "VERTEX_ATTRIB_ARRAY_TYPE";
  WebGL2Constant[WebGL2Constant["VERTEX_ATTRIB_ARRAY_NORMALIZED"] = 34922] = "VERTEX_ATTRIB_ARRAY_NORMALIZED";
  WebGL2Constant[WebGL2Constant["VERTEX_ATTRIB_ARRAY_POINTER"] = 34373] = "VERTEX_ATTRIB_ARRAY_POINTER";
  WebGL2Constant[WebGL2Constant["VERTEX_ATTRIB_ARRAY_BUFFER_BINDING"] = 34975] = "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["COMPILE_STATUS"] = 35713] = "COMPILE_STATUS";
  WebGL2Constant[WebGL2Constant["LOW_FLOAT"] = 36336] = "LOW_FLOAT";
  WebGL2Constant[WebGL2Constant["MEDIUM_FLOAT"] = 36337] = "MEDIUM_FLOAT";
  WebGL2Constant[WebGL2Constant["HIGH_FLOAT"] = 36338] = "HIGH_FLOAT";
  WebGL2Constant[WebGL2Constant["LOW_INT"] = 36339] = "LOW_INT";
  WebGL2Constant[WebGL2Constant["MEDIUM_INT"] = 36340] = "MEDIUM_INT";
  WebGL2Constant[WebGL2Constant["HIGH_INT"] = 36341] = "HIGH_INT";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER"] = 36160] = "FRAMEBUFFER";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER"] = 36161] = "RENDERBUFFER";
  WebGL2Constant[WebGL2Constant["RGBA4"] = 32854] = "RGBA4";
  WebGL2Constant[WebGL2Constant["RGB5_A1"] = 32855] = "RGB5_A1";
  WebGL2Constant[WebGL2Constant["RGB565"] = 36194] = "RGB565";
  WebGL2Constant[WebGL2Constant["DEPTH_COMPONENT16"] = 33189] = "DEPTH_COMPONENT16";
  WebGL2Constant[WebGL2Constant["STENCIL_INDEX8"] = 36168] = "STENCIL_INDEX8";
  WebGL2Constant[WebGL2Constant["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER_WIDTH"] = 36162] = "RENDERBUFFER_WIDTH";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER_HEIGHT"] = 36163] = "RENDERBUFFER_HEIGHT";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER_INTERNAL_FORMAT"] = 36164] = "RENDERBUFFER_INTERNAL_FORMAT";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER_RED_SIZE"] = 36176] = "RENDERBUFFER_RED_SIZE";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER_GREEN_SIZE"] = 36177] = "RENDERBUFFER_GREEN_SIZE";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER_BLUE_SIZE"] = 36178] = "RENDERBUFFER_BLUE_SIZE";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER_ALPHA_SIZE"] = 36179] = "RENDERBUFFER_ALPHA_SIZE";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER_DEPTH_SIZE"] = 36180] = "RENDERBUFFER_DEPTH_SIZE";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER_STENCIL_SIZE"] = 36181] = "RENDERBUFFER_STENCIL_SIZE";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE"] = 36048] = "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_OBJECT_NAME"] = 36049] = "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL"] = 36050] = "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE"] = 36051] = "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT0"] = 36064] = "COLOR_ATTACHMENT0";
  WebGL2Constant[WebGL2Constant["DEPTH_ATTACHMENT"] = 36096] = "DEPTH_ATTACHMENT";
  WebGL2Constant[WebGL2Constant["STENCIL_ATTACHMENT"] = 36128] = "STENCIL_ATTACHMENT";
  WebGL2Constant[WebGL2Constant["DEPTH_STENCIL_ATTACHMENT"] = 33306] = "DEPTH_STENCIL_ATTACHMENT";
  WebGL2Constant[WebGL2Constant["NONE"] = 0] = "NONE";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_COMPLETE"] = 36053] = "FRAMEBUFFER_COMPLETE";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_INCOMPLETE_ATTACHMENT"] = 36054] = "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"] = 36055] = "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_INCOMPLETE_DIMENSIONS"] = 36057] = "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_UNSUPPORTED"] = 36061] = "FRAMEBUFFER_UNSUPPORTED";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_BINDING"] = 36006] = "FRAMEBUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER_BINDING"] = 36007] = "RENDERBUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["MAX_RENDERBUFFER_SIZE"] = 34024] = "MAX_RENDERBUFFER_SIZE";
  WebGL2Constant[WebGL2Constant["INVALID_FRAMEBUFFER_OPERATION"] = 1286] = "INVALID_FRAMEBUFFER_OPERATION";
  WebGL2Constant[WebGL2Constant["IMPLEMENTATION_COLOR_READ_TYPE"] = 35738] = "IMPLEMENTATION_COLOR_READ_TYPE";
  WebGL2Constant[WebGL2Constant["IMPLEMENTATION_COLOR_READ_FORMAT"] = 35739] = "IMPLEMENTATION_COLOR_READ_FORMAT";
  WebGL2Constant[WebGL2Constant["UNPACK_FLIP_Y_WEBGL"] = 37440] = "UNPACK_FLIP_Y_WEBGL";
  WebGL2Constant[WebGL2Constant["UNPACK_PREMULTIPLY_ALPHA_WEBGL"] = 37441] = "UNPACK_PREMULTIPLY_ALPHA_WEBGL";
  WebGL2Constant[WebGL2Constant["CONTEXT_LOST_WEBGL"] = 37442] = "CONTEXT_LOST_WEBGL";
  WebGL2Constant[WebGL2Constant["UNPACK_COLORSPACE_CONVERSION_WEBGL"] = 37443] = "UNPACK_COLORSPACE_CONVERSION_WEBGL";
  WebGL2Constant[WebGL2Constant["BROWSER_DEFAULT_WEBGL"] = 37444] = "BROWSER_DEFAULT_WEBGL";
  WebGL2Constant[WebGL2Constant["READ_BUFFER"] = 3074] = "READ_BUFFER";
  WebGL2Constant[WebGL2Constant["UNPACK_ROW_LENGTH"] = 3314] = "UNPACK_ROW_LENGTH";
  WebGL2Constant[WebGL2Constant["UNPACK_SKIP_ROWS"] = 3315] = "UNPACK_SKIP_ROWS";
  WebGL2Constant[WebGL2Constant["UNPACK_SKIP_PIXELS"] = 3316] = "UNPACK_SKIP_PIXELS";
  WebGL2Constant[WebGL2Constant["PACK_ROW_LENGTH"] = 3330] = "PACK_ROW_LENGTH";
  WebGL2Constant[WebGL2Constant["PACK_SKIP_ROWS"] = 3331] = "PACK_SKIP_ROWS";
  WebGL2Constant[WebGL2Constant["PACK_SKIP_PIXELS"] = 3332] = "PACK_SKIP_PIXELS";
  WebGL2Constant[WebGL2Constant["COLOR"] = 6144] = "COLOR";
  WebGL2Constant[WebGL2Constant["DEPTH"] = 6145] = "DEPTH";
  WebGL2Constant[WebGL2Constant["STENCIL"] = 6146] = "STENCIL";
  WebGL2Constant[WebGL2Constant["RED"] = 6403] = "RED";
  WebGL2Constant[WebGL2Constant["RGB8"] = 32849] = "RGB8";
  WebGL2Constant[WebGL2Constant["RGBA8"] = 32856] = "RGBA8";
  WebGL2Constant[WebGL2Constant["RGB10_A2"] = 32857] = "RGB10_A2";
  WebGL2Constant[WebGL2Constant["TEXTURE_BINDING_3D"] = 32874] = "TEXTURE_BINDING_3D";
  WebGL2Constant[WebGL2Constant["UNPACK_SKIP_IMAGES"] = 32877] = "UNPACK_SKIP_IMAGES";
  WebGL2Constant[WebGL2Constant["UNPACK_IMAGE_HEIGHT"] = 32878] = "UNPACK_IMAGE_HEIGHT";
  WebGL2Constant[WebGL2Constant["TEXTURE_3D"] = 32879] = "TEXTURE_3D";
  WebGL2Constant[WebGL2Constant["TEXTURE_WRAP_R"] = 32882] = "TEXTURE_WRAP_R";
  WebGL2Constant[WebGL2Constant["MAX_3D_TEXTURE_SIZE"] = 32883] = "MAX_3D_TEXTURE_SIZE";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
  WebGL2Constant[WebGL2Constant["MAX_ELEMENTS_VERTICES"] = 33000] = "MAX_ELEMENTS_VERTICES";
  WebGL2Constant[WebGL2Constant["MAX_ELEMENTS_INDICES"] = 33001] = "MAX_ELEMENTS_INDICES";
  WebGL2Constant[WebGL2Constant["TEXTURE_MIN_LOD"] = 33082] = "TEXTURE_MIN_LOD";
  WebGL2Constant[WebGL2Constant["TEXTURE_MAX_LOD"] = 33083] = "TEXTURE_MAX_LOD";
  WebGL2Constant[WebGL2Constant["TEXTURE_BASE_LEVEL"] = 33084] = "TEXTURE_BASE_LEVEL";
  WebGL2Constant[WebGL2Constant["TEXTURE_MAX_LEVEL"] = 33085] = "TEXTURE_MAX_LEVEL";
  WebGL2Constant[WebGL2Constant["MIN"] = 32775] = "MIN";
  WebGL2Constant[WebGL2Constant["MAX"] = 32776] = "MAX";
  WebGL2Constant[WebGL2Constant["DEPTH_COMPONENT24"] = 33190] = "DEPTH_COMPONENT24";
  WebGL2Constant[WebGL2Constant["MAX_TEXTURE_LOD_BIAS"] = 34045] = "MAX_TEXTURE_LOD_BIAS";
  WebGL2Constant[WebGL2Constant["TEXTURE_COMPARE_MODE"] = 34892] = "TEXTURE_COMPARE_MODE";
  WebGL2Constant[WebGL2Constant["TEXTURE_COMPARE_FUNC"] = 34893] = "TEXTURE_COMPARE_FUNC";
  WebGL2Constant[WebGL2Constant["CURRENT_QUERY"] = 34917] = "CURRENT_QUERY";
  WebGL2Constant[WebGL2Constant["QUERY_RESULT"] = 34918] = "QUERY_RESULT";
  WebGL2Constant[WebGL2Constant["QUERY_RESULT_AVAILABLE"] = 34919] = "QUERY_RESULT_AVAILABLE";
  WebGL2Constant[WebGL2Constant["STREAM_READ"] = 35041] = "STREAM_READ";
  WebGL2Constant[WebGL2Constant["STREAM_COPY"] = 35042] = "STREAM_COPY";
  WebGL2Constant[WebGL2Constant["STATIC_READ"] = 35045] = "STATIC_READ";
  WebGL2Constant[WebGL2Constant["STATIC_COPY"] = 35046] = "STATIC_COPY";
  WebGL2Constant[WebGL2Constant["DYNAMIC_READ"] = 35049] = "DYNAMIC_READ";
  WebGL2Constant[WebGL2Constant["DYNAMIC_COPY"] = 35050] = "DYNAMIC_COPY";
  WebGL2Constant[WebGL2Constant["MAX_DRAW_BUFFERS"] = 34852] = "MAX_DRAW_BUFFERS";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER0"] = 34853] = "DRAW_BUFFER0";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER1"] = 34854] = "DRAW_BUFFER1";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER2"] = 34855] = "DRAW_BUFFER2";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER3"] = 34856] = "DRAW_BUFFER3";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER4"] = 34857] = "DRAW_BUFFER4";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER5"] = 34858] = "DRAW_BUFFER5";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER6"] = 34859] = "DRAW_BUFFER6";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER7"] = 34860] = "DRAW_BUFFER7";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER8"] = 34861] = "DRAW_BUFFER8";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER9"] = 34862] = "DRAW_BUFFER9";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER10"] = 34863] = "DRAW_BUFFER10";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER11"] = 34864] = "DRAW_BUFFER11";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER12"] = 34865] = "DRAW_BUFFER12";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER13"] = 34866] = "DRAW_BUFFER13";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER14"] = 34867] = "DRAW_BUFFER14";
  WebGL2Constant[WebGL2Constant["DRAW_BUFFER15"] = 34868] = "DRAW_BUFFER15";
  WebGL2Constant[WebGL2Constant["MAX_FRAGMENT_UNIFORM_COMPONENTS"] = 35657] = "MAX_FRAGMENT_UNIFORM_COMPONENTS";
  WebGL2Constant[WebGL2Constant["MAX_VERTEX_UNIFORM_COMPONENTS"] = 35658] = "MAX_VERTEX_UNIFORM_COMPONENTS";
  WebGL2Constant[WebGL2Constant["SAMPLER_3D"] = 35679] = "SAMPLER_3D";
  WebGL2Constant[WebGL2Constant["SAMPLER_2D_SHADOW"] = 35682] = "SAMPLER_2D_SHADOW";
  WebGL2Constant[WebGL2Constant["FRAGMENT_SHADER_DERIVATIVE_HINT"] = 35723] = "FRAGMENT_SHADER_DERIVATIVE_HINT";
  WebGL2Constant[WebGL2Constant["PIXEL_PACK_BUFFER"] = 35051] = "PIXEL_PACK_BUFFER";
  WebGL2Constant[WebGL2Constant["PIXEL_UNPACK_BUFFER"] = 35052] = "PIXEL_UNPACK_BUFFER";
  WebGL2Constant[WebGL2Constant["PIXEL_PACK_BUFFER_BINDING"] = 35053] = "PIXEL_PACK_BUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["PIXEL_UNPACK_BUFFER_BINDING"] = 35055] = "PIXEL_UNPACK_BUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["FLOAT_MAT2x3"] = 35685] = "FLOAT_MAT2x3";
  WebGL2Constant[WebGL2Constant["FLOAT_MAT2x4"] = 35686] = "FLOAT_MAT2x4";
  WebGL2Constant[WebGL2Constant["FLOAT_MAT3x2"] = 35687] = "FLOAT_MAT3x2";
  WebGL2Constant[WebGL2Constant["FLOAT_MAT3x4"] = 35688] = "FLOAT_MAT3x4";
  WebGL2Constant[WebGL2Constant["FLOAT_MAT4x2"] = 35689] = "FLOAT_MAT4x2";
  WebGL2Constant[WebGL2Constant["FLOAT_MAT4x3"] = 35690] = "FLOAT_MAT4x3";
  WebGL2Constant[WebGL2Constant["SRGB"] = 35904] = "SRGB";
  WebGL2Constant[WebGL2Constant["SRGB8"] = 35905] = "SRGB8";
  WebGL2Constant[WebGL2Constant["SRGB8_ALPHA8"] = 35907] = "SRGB8_ALPHA8";
  WebGL2Constant[WebGL2Constant["COMPARE_REF_TO_TEXTURE"] = 34894] = "COMPARE_REF_TO_TEXTURE";
  WebGL2Constant[WebGL2Constant["RGBA32F"] = 34836] = "RGBA32F";
  WebGL2Constant[WebGL2Constant["RGB32F"] = 34837] = "RGB32F";
  WebGL2Constant[WebGL2Constant["RGBA16F"] = 34842] = "RGBA16F";
  WebGL2Constant[WebGL2Constant["RGB16F"] = 34843] = "RGB16F";
  WebGL2Constant[WebGL2Constant["VERTEX_ATTRIB_ARRAY_INTEGER"] = 35069] = "VERTEX_ATTRIB_ARRAY_INTEGER";
  WebGL2Constant[WebGL2Constant["MAX_ARRAY_TEXTURE_LAYERS"] = 35071] = "MAX_ARRAY_TEXTURE_LAYERS";
  WebGL2Constant[WebGL2Constant["MIN_PROGRAM_TEXEL_OFFSET"] = 35076] = "MIN_PROGRAM_TEXEL_OFFSET";
  WebGL2Constant[WebGL2Constant["MAX_PROGRAM_TEXEL_OFFSET"] = 35077] = "MAX_PROGRAM_TEXEL_OFFSET";
  WebGL2Constant[WebGL2Constant["MAX_VARYING_COMPONENTS"] = 35659] = "MAX_VARYING_COMPONENTS";
  WebGL2Constant[WebGL2Constant["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
  WebGL2Constant[WebGL2Constant["TEXTURE_BINDING_2D_ARRAY"] = 35869] = "TEXTURE_BINDING_2D_ARRAY";
  WebGL2Constant[WebGL2Constant["R11F_G11F_B10F"] = 35898] = "R11F_G11F_B10F";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
  WebGL2Constant[WebGL2Constant["RGB9_E5"] = 35901] = "RGB9_E5";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
  WebGL2Constant[WebGL2Constant["TRANSFORM_FEEDBACK_BUFFER_MODE"] = 35967] = "TRANSFORM_FEEDBACK_BUFFER_MODE";
  WebGL2Constant[WebGL2Constant["MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS"] = 35968] = "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS";
  WebGL2Constant[WebGL2Constant["TRANSFORM_FEEDBACK_VARYINGS"] = 35971] = "TRANSFORM_FEEDBACK_VARYINGS";
  WebGL2Constant[WebGL2Constant["TRANSFORM_FEEDBACK_BUFFER_START"] = 35972] = "TRANSFORM_FEEDBACK_BUFFER_START";
  WebGL2Constant[WebGL2Constant["TRANSFORM_FEEDBACK_BUFFER_SIZE"] = 35973] = "TRANSFORM_FEEDBACK_BUFFER_SIZE";
  WebGL2Constant[WebGL2Constant["TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN"] = 35976] = "TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN";
  WebGL2Constant[WebGL2Constant["RASTERIZER_DISCARD"] = 35977] = "RASTERIZER_DISCARD";
  WebGL2Constant[WebGL2Constant["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS"] = 35978] = "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS";
  WebGL2Constant[WebGL2Constant["MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS"] = 35979] = "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS";
  WebGL2Constant[WebGL2Constant["INTERLEAVED_ATTRIBS"] = 35980] = "INTERLEAVED_ATTRIBS";
  WebGL2Constant[WebGL2Constant["SEPARATE_ATTRIBS"] = 35981] = "SEPARATE_ATTRIBS";
  WebGL2Constant[WebGL2Constant["TRANSFORM_FEEDBACK_BUFFER"] = 35982] = "TRANSFORM_FEEDBACK_BUFFER";
  WebGL2Constant[WebGL2Constant["TRANSFORM_FEEDBACK_BUFFER_BINDING"] = 35983] = "TRANSFORM_FEEDBACK_BUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["RGBA32UI"] = 36208] = "RGBA32UI";
  WebGL2Constant[WebGL2Constant["RGB32UI"] = 36209] = "RGB32UI";
  WebGL2Constant[WebGL2Constant["RGBA16UI"] = 36214] = "RGBA16UI";
  WebGL2Constant[WebGL2Constant["RGB16UI"] = 36215] = "RGB16UI";
  WebGL2Constant[WebGL2Constant["RGBA8UI"] = 36220] = "RGBA8UI";
  WebGL2Constant[WebGL2Constant["RGB8UI"] = 36221] = "RGB8UI";
  WebGL2Constant[WebGL2Constant["RGBA32I"] = 36226] = "RGBA32I";
  WebGL2Constant[WebGL2Constant["RGB32I"] = 36227] = "RGB32I";
  WebGL2Constant[WebGL2Constant["RGBA16I"] = 36232] = "RGBA16I";
  WebGL2Constant[WebGL2Constant["RGB16I"] = 36233] = "RGB16I";
  WebGL2Constant[WebGL2Constant["RGBA8I"] = 36238] = "RGBA8I";
  WebGL2Constant[WebGL2Constant["RGB8I"] = 36239] = "RGB8I";
  WebGL2Constant[WebGL2Constant["RED_INTEGER"] = 36244] = "RED_INTEGER";
  WebGL2Constant[WebGL2Constant["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
  WebGL2Constant[WebGL2Constant["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
  WebGL2Constant[WebGL2Constant["SAMPLER_2D_ARRAY"] = 36289] = "SAMPLER_2D_ARRAY";
  WebGL2Constant[WebGL2Constant["SAMPLER_2D_ARRAY_SHADOW"] = 36292] = "SAMPLER_2D_ARRAY_SHADOW";
  WebGL2Constant[WebGL2Constant["SAMPLER_CUBE_SHADOW"] = 36293] = "SAMPLER_CUBE_SHADOW";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT_VEC2"] = 36294] = "UNSIGNED_INT_VEC2";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT_VEC3"] = 36295] = "UNSIGNED_INT_VEC3";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT_VEC4"] = 36296] = "UNSIGNED_INT_VEC4";
  WebGL2Constant[WebGL2Constant["INT_SAMPLER_2D"] = 36298] = "INT_SAMPLER_2D";
  WebGL2Constant[WebGL2Constant["INT_SAMPLER_3D"] = 36299] = "INT_SAMPLER_3D";
  WebGL2Constant[WebGL2Constant["INT_SAMPLER_CUBE"] = 36300] = "INT_SAMPLER_CUBE";
  WebGL2Constant[WebGL2Constant["INT_SAMPLER_2D_ARRAY"] = 36303] = "INT_SAMPLER_2D_ARRAY";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT_SAMPLER_2D"] = 36306] = "UNSIGNED_INT_SAMPLER_2D";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT_SAMPLER_3D"] = 36307] = "UNSIGNED_INT_SAMPLER_3D";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT_SAMPLER_CUBE"] = 36308] = "UNSIGNED_INT_SAMPLER_CUBE";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT_SAMPLER_2D_ARRAY"] = 36311] = "UNSIGNED_INT_SAMPLER_2D_ARRAY";
  WebGL2Constant[WebGL2Constant["DEPTH_COMPONENT32F"] = 36012] = "DEPTH_COMPONENT32F";
  WebGL2Constant[WebGL2Constant["DEPTH32F_STENCIL8"] = 36013] = "DEPTH32F_STENCIL8";
  WebGL2Constant[WebGL2Constant["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING"] = 33296] = "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE"] = 33297] = "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_RED_SIZE"] = 33298] = "FRAMEBUFFER_ATTACHMENT_RED_SIZE";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_GREEN_SIZE"] = 33299] = "FRAMEBUFFER_ATTACHMENT_GREEN_SIZE";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_BLUE_SIZE"] = 33300] = "FRAMEBUFFER_ATTACHMENT_BLUE_SIZE";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE"] = 33301] = "FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE"] = 33302] = "FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE"] = 33303] = "FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_DEFAULT"] = 33304] = "FRAMEBUFFER_DEFAULT";
  WebGL2Constant[WebGL2Constant["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
  WebGL2Constant[WebGL2Constant["DEPTH24_STENCIL8"] = 35056] = "DEPTH24_STENCIL8";
  WebGL2Constant[WebGL2Constant["UNSIGNED_NORMALIZED"] = 35863] = "UNSIGNED_NORMALIZED";
  WebGL2Constant[WebGL2Constant["DRAW_FRAMEBUFFER_BINDING"] = 36006] = "DRAW_FRAMEBUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["READ_FRAMEBUFFER"] = 36008] = "READ_FRAMEBUFFER";
  WebGL2Constant[WebGL2Constant["DRAW_FRAMEBUFFER"] = 36009] = "DRAW_FRAMEBUFFER";
  WebGL2Constant[WebGL2Constant["READ_FRAMEBUFFER_BINDING"] = 36010] = "READ_FRAMEBUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["RENDERBUFFER_SAMPLES"] = 36011] = "RENDERBUFFER_SAMPLES";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER"] = 36052] = "FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER";
  WebGL2Constant[WebGL2Constant["MAX_COLOR_ATTACHMENTS"] = 36063] = "MAX_COLOR_ATTACHMENTS";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT1"] = 36065] = "COLOR_ATTACHMENT1";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT2"] = 36066] = "COLOR_ATTACHMENT2";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT3"] = 36067] = "COLOR_ATTACHMENT3";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT4"] = 36068] = "COLOR_ATTACHMENT4";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT5"] = 36069] = "COLOR_ATTACHMENT5";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT6"] = 36070] = "COLOR_ATTACHMENT6";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT7"] = 36071] = "COLOR_ATTACHMENT7";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT8"] = 36072] = "COLOR_ATTACHMENT8";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT9"] = 36073] = "COLOR_ATTACHMENT9";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT10"] = 36074] = "COLOR_ATTACHMENT10";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT11"] = 36075] = "COLOR_ATTACHMENT11";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT12"] = 36076] = "COLOR_ATTACHMENT12";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT13"] = 36077] = "COLOR_ATTACHMENT13";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT14"] = 36078] = "COLOR_ATTACHMENT14";
  WebGL2Constant[WebGL2Constant["COLOR_ATTACHMENT15"] = 36079] = "COLOR_ATTACHMENT15";
  WebGL2Constant[WebGL2Constant["FRAMEBUFFER_INCOMPLETE_MULTISAMPLE"] = 36182] = "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";
  WebGL2Constant[WebGL2Constant["MAX_SAMPLES"] = 36183] = "MAX_SAMPLES";
  WebGL2Constant[WebGL2Constant["HALF_FLOAT"] = 5131] = "HALF_FLOAT";
  WebGL2Constant[WebGL2Constant["RG"] = 33319] = "RG";
  WebGL2Constant[WebGL2Constant["RG_INTEGER"] = 33320] = "RG_INTEGER";
  WebGL2Constant[WebGL2Constant["R8"] = 33321] = "R8";
  WebGL2Constant[WebGL2Constant["RG8"] = 33323] = "RG8";
  WebGL2Constant[WebGL2Constant["R16F"] = 33325] = "R16F";
  WebGL2Constant[WebGL2Constant["R32F"] = 33326] = "R32F";
  WebGL2Constant[WebGL2Constant["RG16F"] = 33327] = "RG16F";
  WebGL2Constant[WebGL2Constant["RG32F"] = 33328] = "RG32F";
  WebGL2Constant[WebGL2Constant["R8I"] = 33329] = "R8I";
  WebGL2Constant[WebGL2Constant["R8UI"] = 33330] = "R8UI";
  WebGL2Constant[WebGL2Constant["R16I"] = 33331] = "R16I";
  WebGL2Constant[WebGL2Constant["R16UI"] = 33332] = "R16UI";
  WebGL2Constant[WebGL2Constant["R32I"] = 33333] = "R32I";
  WebGL2Constant[WebGL2Constant["R32UI"] = 33334] = "R32UI";
  WebGL2Constant[WebGL2Constant["RG8I"] = 33335] = "RG8I";
  WebGL2Constant[WebGL2Constant["RG8UI"] = 33336] = "RG8UI";
  WebGL2Constant[WebGL2Constant["RG16I"] = 33337] = "RG16I";
  WebGL2Constant[WebGL2Constant["RG16UI"] = 33338] = "RG16UI";
  WebGL2Constant[WebGL2Constant["RG32I"] = 33339] = "RG32I";
  WebGL2Constant[WebGL2Constant["RG32UI"] = 33340] = "RG32UI";
  WebGL2Constant[WebGL2Constant["VERTEX_ARRAY_BINDING"] = 34229] = "VERTEX_ARRAY_BINDING";
  WebGL2Constant[WebGL2Constant["R8_SNORM"] = 36756] = "R8_SNORM";
  WebGL2Constant[WebGL2Constant["RG8_SNORM"] = 36757] = "RG8_SNORM";
  WebGL2Constant[WebGL2Constant["RGB8_SNORM"] = 36758] = "RGB8_SNORM";
  WebGL2Constant[WebGL2Constant["RGBA8_SNORM"] = 36759] = "RGBA8_SNORM";
  WebGL2Constant[WebGL2Constant["SIGNED_NORMALIZED"] = 36764] = "SIGNED_NORMALIZED";
  WebGL2Constant[WebGL2Constant["COPY_READ_BUFFER"] = 36662] = "COPY_READ_BUFFER";
  WebGL2Constant[WebGL2Constant["COPY_WRITE_BUFFER"] = 36663] = "COPY_WRITE_BUFFER";
  WebGL2Constant[WebGL2Constant["COPY_READ_BUFFER_BINDING"] = 36662] = "COPY_READ_BUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["COPY_WRITE_BUFFER_BINDING"] = 36663] = "COPY_WRITE_BUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
  WebGL2Constant[WebGL2Constant["UNIFORM_BUFFER_BINDING"] = 35368] = "UNIFORM_BUFFER_BINDING";
  WebGL2Constant[WebGL2Constant["UNIFORM_BUFFER_START"] = 35369] = "UNIFORM_BUFFER_START";
  WebGL2Constant[WebGL2Constant["UNIFORM_BUFFER_SIZE"] = 35370] = "UNIFORM_BUFFER_SIZE";
  WebGL2Constant[WebGL2Constant["MAX_VERTEX_UNIFORM_BLOCKS"] = 35371] = "MAX_VERTEX_UNIFORM_BLOCKS";
  WebGL2Constant[WebGL2Constant["MAX_FRAGMENT_UNIFORM_BLOCKS"] = 35373] = "MAX_FRAGMENT_UNIFORM_BLOCKS";
  WebGL2Constant[WebGL2Constant["MAX_COMBINED_UNIFORM_BLOCKS"] = 35374] = "MAX_COMBINED_UNIFORM_BLOCKS";
  WebGL2Constant[WebGL2Constant["MAX_UNIFORM_BUFFER_BINDINGS"] = 35375] = "MAX_UNIFORM_BUFFER_BINDINGS";
  WebGL2Constant[WebGL2Constant["MAX_UNIFORM_BLOCK_SIZE"] = 35376] = "MAX_UNIFORM_BLOCK_SIZE";
  WebGL2Constant[WebGL2Constant["MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS"] = 35377] = "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS";
  WebGL2Constant[WebGL2Constant["MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS"] = 35379] = "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS";
  WebGL2Constant[WebGL2Constant["UNIFORM_BUFFER_OFFSET_ALIGNMENT"] = 35380] = "UNIFORM_BUFFER_OFFSET_ALIGNMENT";
  WebGL2Constant[WebGL2Constant["ACTIVE_UNIFORM_BLOCKS"] = 35382] = "ACTIVE_UNIFORM_BLOCKS";
  WebGL2Constant[WebGL2Constant["UNIFORM_TYPE"] = 35383] = "UNIFORM_TYPE";
  WebGL2Constant[WebGL2Constant["UNIFORM_SIZE"] = 35384] = "UNIFORM_SIZE";
  WebGL2Constant[WebGL2Constant["UNIFORM_BLOCK_INDEX"] = 35386] = "UNIFORM_BLOCK_INDEX";
  WebGL2Constant[WebGL2Constant["UNIFORM_OFFSET"] = 35387] = "UNIFORM_OFFSET";
  WebGL2Constant[WebGL2Constant["UNIFORM_ARRAY_STRIDE"] = 35388] = "UNIFORM_ARRAY_STRIDE";
  WebGL2Constant[WebGL2Constant["UNIFORM_MATRIX_STRIDE"] = 35389] = "UNIFORM_MATRIX_STRIDE";
  WebGL2Constant[WebGL2Constant["UNIFORM_IS_ROW_MAJOR"] = 35390] = "UNIFORM_IS_ROW_MAJOR";
  WebGL2Constant[WebGL2Constant["UNIFORM_BLOCK_BINDING"] = 35391] = "UNIFORM_BLOCK_BINDING";
  WebGL2Constant[WebGL2Constant["UNIFORM_BLOCK_DATA_SIZE"] = 35392] = "UNIFORM_BLOCK_DATA_SIZE";
  WebGL2Constant[WebGL2Constant["UNIFORM_BLOCK_ACTIVE_UNIFORMS"] = 35394] = "UNIFORM_BLOCK_ACTIVE_UNIFORMS";
  WebGL2Constant[WebGL2Constant["UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES"] = 35395] = "UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES";
  WebGL2Constant[WebGL2Constant["UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER"] = 35396] = "UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER";
  WebGL2Constant[WebGL2Constant["UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER"] = 35398] = "UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER";
  WebGL2Constant[WebGL2Constant["INVALID_INDEX"] = 4294967295] = "INVALID_INDEX";
  WebGL2Constant[WebGL2Constant["MAX_VERTEX_OUTPUT_COMPONENTS"] = 37154] = "MAX_VERTEX_OUTPUT_COMPONENTS";
  WebGL2Constant[WebGL2Constant["MAX_FRAGMENT_INPUT_COMPONENTS"] = 37157] = "MAX_FRAGMENT_INPUT_COMPONENTS";
  WebGL2Constant[WebGL2Constant["MAX_SERVER_WAIT_TIMEOUT"] = 37137] = "MAX_SERVER_WAIT_TIMEOUT";
  WebGL2Constant[WebGL2Constant["OBJECT_TYPE"] = 37138] = "OBJECT_TYPE";
  WebGL2Constant[WebGL2Constant["SYNC_CONDITION"] = 37139] = "SYNC_CONDITION";
  WebGL2Constant[WebGL2Constant["SYNC_STATUS"] = 37140] = "SYNC_STATUS";
  WebGL2Constant[WebGL2Constant["SYNC_FLAGS"] = 37141] = "SYNC_FLAGS";
  WebGL2Constant[WebGL2Constant["SYNC_FENCE"] = 37142] = "SYNC_FENCE";
  WebGL2Constant[WebGL2Constant["SYNC_GPU_COMMANDS_COMPLETE"] = 37143] = "SYNC_GPU_COMMANDS_COMPLETE";
  WebGL2Constant[WebGL2Constant["UNSIGNALED"] = 37144] = "UNSIGNALED";
  WebGL2Constant[WebGL2Constant["SIGNALED"] = 37145] = "SIGNALED";
  WebGL2Constant[WebGL2Constant["ALREADY_SIGNALED"] = 37146] = "ALREADY_SIGNALED";
  WebGL2Constant[WebGL2Constant["TIMEOUT_EXPIRED"] = 37147] = "TIMEOUT_EXPIRED";
  WebGL2Constant[WebGL2Constant["CONDITION_SATISFIED"] = 37148] = "CONDITION_SATISFIED";
  WebGL2Constant[WebGL2Constant["WAIT_FAILED"] = 37149] = "WAIT_FAILED";
  WebGL2Constant[WebGL2Constant["SYNC_FLUSH_COMMANDS_BIT"] = 1] = "SYNC_FLUSH_COMMANDS_BIT";
  WebGL2Constant[WebGL2Constant["TIMEOUT_IGNORED"] = -1] = "TIMEOUT_IGNORED";
  WebGL2Constant[WebGL2Constant["VERTEX_ATTRIB_ARRAY_DIVISOR"] = 35070] = "VERTEX_ATTRIB_ARRAY_DIVISOR";
  WebGL2Constant[WebGL2Constant["ANY_SAMPLES_PASSED"] = 35887] = "ANY_SAMPLES_PASSED";
  WebGL2Constant[WebGL2Constant["ANY_SAMPLES_PASSED_CONSERVATIVE"] = 36202] = "ANY_SAMPLES_PASSED_CONSERVATIVE";
  WebGL2Constant[WebGL2Constant["SAMPLER_BINDING"] = 35097] = "SAMPLER_BINDING";
  WebGL2Constant[WebGL2Constant["RGB10_A2UI"] = 36975] = "RGB10_A2UI";
  WebGL2Constant[WebGL2Constant["INT_2_10_10_10_REV"] = 36255] = "INT_2_10_10_10_REV";
  WebGL2Constant[WebGL2Constant["TRANSFORM_FEEDBACK"] = 36386] = "TRANSFORM_FEEDBACK";
  WebGL2Constant[WebGL2Constant["TRANSFORM_FEEDBACK_PAUSED"] = 36387] = "TRANSFORM_FEEDBACK_PAUSED";
  WebGL2Constant[WebGL2Constant["TRANSFORM_FEEDBACK_ACTIVE"] = 36388] = "TRANSFORM_FEEDBACK_ACTIVE";
  WebGL2Constant[WebGL2Constant["TRANSFORM_FEEDBACK_BINDING"] = 36389] = "TRANSFORM_FEEDBACK_BINDING";
  WebGL2Constant[WebGL2Constant["TEXTURE_IMMUTABLE_FORMAT"] = 37167] = "TEXTURE_IMMUTABLE_FORMAT";
  WebGL2Constant[WebGL2Constant["MAX_ELEMENT_INDEX"] = 36203] = "MAX_ELEMENT_INDEX";
  WebGL2Constant[WebGL2Constant["TEXTURE_IMMUTABLE_LEVELS"] = 33503] = "TEXTURE_IMMUTABLE_LEVELS";
  WebGL2Constant[WebGL2Constant["MAX_CLIENT_WAIT_TIMEOUT_WEBGL"] = 37447] = "MAX_CLIENT_WAIT_TIMEOUT_WEBGL";
})(WebGL2Constant || (WebGL2Constant = {}));

var ResourceType; // Shader types.

(function (ResourceType) {
  ResourceType[ResourceType["FRAMEBUFFER"] = 0] = "FRAMEBUFFER";
  ResourceType[ResourceType["PROGRAM"] = 1] = "PROGRAM";
  ResourceType[ResourceType["SHADER"] = 2] = "SHADER";
  ResourceType[ResourceType["PRIMITIVE"] = 3] = "PRIMITIVE";
  ResourceType[ResourceType["ACCESSOR"] = 4] = "ACCESSOR";
  ResourceType[ResourceType["BUFFER"] = 5] = "BUFFER";
  ResourceType[ResourceType["SAMPLER"] = 6] = "SAMPLER";
  ResourceType[ResourceType["TEXTURE"] = 7] = "TEXTURE";
})(ResourceType || (ResourceType = {}));

var ShaderType; // Primitive drawing types.

(function (ShaderType) {
  ShaderType[ShaderType["FRAGMENT"] = WebGL2Constant.FRAGMENT_SHADER] = "FRAGMENT";
  ShaderType[ShaderType["VERTEX"] = WebGL2Constant.VERTEX_SHADER] = "VERTEX";
})(ShaderType || (ShaderType = {}));

var PrimitiveType; // Buffer binding targets.

(function (PrimitiveType) {
  PrimitiveType[PrimitiveType["POINTS"] = WebGL2Constant.POINTS] = "POINTS";
  PrimitiveType[PrimitiveType["LINES"] = WebGL2Constant.LINES] = "LINES";
  PrimitiveType[PrimitiveType["LINE_LOOP"] = WebGL2Constant.LINE_LOOP] = "LINE_LOOP";
  PrimitiveType[PrimitiveType["LINE_STRIP"] = WebGL2Constant.LINE_STRIP] = "LINE_STRIP";
  PrimitiveType[PrimitiveType["TRIANGLES"] = WebGL2Constant.TRIANGLES] = "TRIANGLES";
  PrimitiveType[PrimitiveType["TRIANGLE_STRIP"] = WebGL2Constant.TRIANGLE_STRIP] = "TRIANGLE_STRIP";
  PrimitiveType[PrimitiveType["TRIANGLE_FAN"] = WebGL2Constant.TRIANGLE_FAN] = "TRIANGLE_FAN";
})(PrimitiveType || (PrimitiveType = {}));

var BufferTarget; // Texture filtering functions.

(function (BufferTarget) {
  BufferTarget[BufferTarget["ATTRIBUTES"] = WebGL2Constant.ARRAY_BUFFER] = "ATTRIBUTES";
  BufferTarget[BufferTarget["INDICES"] = WebGL2Constant.ELEMENT_ARRAY_BUFFER] = "INDICES";
})(BufferTarget || (BufferTarget = {}));

var TextureFilter; // Texture wrapping modes.

(function (TextureFilter) {
  TextureFilter[TextureFilter["NEAREST"] = WebGL2Constant.NEAREST] = "NEAREST";
  TextureFilter[TextureFilter["LINEAR"] = WebGL2Constant.LINEAR] = "LINEAR";
  TextureFilter[TextureFilter["NEAREST_MIPMAP_NEAREST"] = WebGL2Constant.NEAREST_MIPMAP_NEAREST] = "NEAREST_MIPMAP_NEAREST";
  TextureFilter[TextureFilter["LINEAR_MIPMAP_NEAREST"] = WebGL2Constant.LINEAR_MIPMAP_NEAREST] = "LINEAR_MIPMAP_NEAREST";
  TextureFilter[TextureFilter["NEAREST_MIPMAP_LINEAR"] = WebGL2Constant.NEAREST_MIPMAP_LINEAR] = "NEAREST_MIPMAP_LINEAR";
  TextureFilter[TextureFilter["LINEAR_MIPMAP_LINEAR"] = WebGL2Constant.LINEAR_MIPMAP_LINEAR] = "LINEAR_MIPMAP_LINEAR";
})(TextureFilter || (TextureFilter = {}));

var TextureWrapping; // Texture binding targets.

(function (TextureWrapping) {
  TextureWrapping[TextureWrapping["REPEAT"] = WebGL2Constant.REPEAT] = "REPEAT";
  TextureWrapping[TextureWrapping["CLAMP_TO_EDGE"] = WebGL2Constant.CLAMP_TO_EDGE] = "CLAMP_TO_EDGE";
  TextureWrapping[TextureWrapping["MIRRORED_REPEAT"] = WebGL2Constant.MIRRORED_REPEAT] = "MIRRORED_REPEAT";
})(TextureWrapping || (TextureWrapping = {}));

var TextureType; // Texture internal formats.

(function (TextureType) {
  TextureType[TextureType["TEX_2D"] = WebGL2Constant.TEXTURE_2D] = "TEX_2D";
  TextureType[TextureType["TEX_2D_ARRAY"] = WebGL2Constant.TEXTURE_2D_ARRAY] = "TEX_2D_ARRAY";
  TextureType[TextureType["TEX_3D"] = WebGL2Constant.TEXTURE_3D] = "TEX_3D";
  TextureType[TextureType["TEX_CUBE"] = WebGL2Constant.TEXTURE_CUBE_MAP] = "TEX_CUBE";
})(TextureType || (TextureType = {}));

var TextureFormat; // Texture unsized formats.

(function (TextureFormat) {
  TextureFormat[TextureFormat["SI_8"] = WebGL2Constant.R8I] = "SI_8";
  TextureFormat[TextureFormat["SI_8_8"] = WebGL2Constant.RG8I] = "SI_8_8";
  TextureFormat[TextureFormat["SI_8_8_8"] = WebGL2Constant.RGB8I] = "SI_8_8_8";
  TextureFormat[TextureFormat["SI_8_8_8_8"] = WebGL2Constant.RGBA8I] = "SI_8_8_8_8";
  TextureFormat[TextureFormat["SI_16"] = WebGL2Constant.R16I] = "SI_16";
  TextureFormat[TextureFormat["SI_16_16"] = WebGL2Constant.RG16I] = "SI_16_16";
  TextureFormat[TextureFormat["SI_16_16_16"] = WebGL2Constant.RGB16I] = "SI_16_16_16";
  TextureFormat[TextureFormat["SI_16_16_16_16"] = WebGL2Constant.RGBA16I] = "SI_16_16_16_16";
  TextureFormat[TextureFormat["SI_32"] = WebGL2Constant.R32I] = "SI_32";
  TextureFormat[TextureFormat["SI_32_32"] = WebGL2Constant.RG32I] = "SI_32_32";
  TextureFormat[TextureFormat["SI_32_32_32"] = WebGL2Constant.RGB32I] = "SI_32_32_32";
  TextureFormat[TextureFormat["SI_32_32_32_32"] = WebGL2Constant.RGBA32I] = "SI_32_32_32_32";
  TextureFormat[TextureFormat["UI_8"] = WebGL2Constant.R8UI] = "UI_8";
  TextureFormat[TextureFormat["UI_8_8"] = WebGL2Constant.RG8UI] = "UI_8_8";
  TextureFormat[TextureFormat["UI_8_8_8"] = WebGL2Constant.RGB8UI] = "UI_8_8_8";
  TextureFormat[TextureFormat["UI_8_8_8_8"] = WebGL2Constant.RGBA8UI] = "UI_8_8_8_8";
  TextureFormat[TextureFormat["UI_16"] = WebGL2Constant.R16UI] = "UI_16";
  TextureFormat[TextureFormat["UI_16_16"] = WebGL2Constant.RG16UI] = "UI_16_16";
  TextureFormat[TextureFormat["UI_16_16_16"] = WebGL2Constant.RGB16UI] = "UI_16_16_16";
  TextureFormat[TextureFormat["UI_16_16_16_16"] = WebGL2Constant.RGBA16UI] = "UI_16_16_16_16";
  TextureFormat[TextureFormat["UI_32"] = WebGL2Constant.R32UI] = "UI_32";
  TextureFormat[TextureFormat["UI_32_32"] = WebGL2Constant.RG32UI] = "UI_32_32";
  TextureFormat[TextureFormat["UI_32_32_32"] = WebGL2Constant.RGB32UI] = "UI_32_32_32";
  TextureFormat[TextureFormat["UI_32_32_32_32"] = WebGL2Constant.RGBA32UI] = "UI_32_32_32_32";
  TextureFormat[TextureFormat["UN_8"] = WebGL2Constant.R8] = "UN_8";
  TextureFormat[TextureFormat["UN_8_8"] = WebGL2Constant.RG8] = "UN_8_8";
  TextureFormat[TextureFormat["UN_8_8_8"] = WebGL2Constant.RGB8] = "UN_8_8_8";
  TextureFormat[TextureFormat["UN_8_8_8_8"] = WebGL2Constant.RGBA8] = "UN_8_8_8_8";
  TextureFormat[TextureFormat["SN_8"] = WebGL2Constant.R8_SNORM] = "SN_8";
  TextureFormat[TextureFormat["SN_8_8"] = WebGL2Constant.RG8_SNORM] = "SN_8_8";
  TextureFormat[TextureFormat["SN_8_8_8"] = WebGL2Constant.RGB8_SNORM] = "SN_8_8_8";
  TextureFormat[TextureFormat["SN_8_8_8_8"] = WebGL2Constant.RGBA8_SNORM] = "SN_8_8_8_8";
  TextureFormat[TextureFormat["SF_16"] = WebGL2Constant.R16F] = "SF_16";
  TextureFormat[TextureFormat["SF_16_16"] = WebGL2Constant.RG16F] = "SF_16_16";
  TextureFormat[TextureFormat["SF_16_16_16"] = WebGL2Constant.RGB16F] = "SF_16_16_16";
  TextureFormat[TextureFormat["SF_16_16_16_16"] = WebGL2Constant.RGBA16F] = "SF_16_16_16_16";
  TextureFormat[TextureFormat["SF_32"] = WebGL2Constant.R32F] = "SF_32";
  TextureFormat[TextureFormat["SF_32_32"] = WebGL2Constant.RG32F] = "SF_32_32";
  TextureFormat[TextureFormat["SF_32_32_32"] = WebGL2Constant.RGB32F] = "SF_32_32_32";
  TextureFormat[TextureFormat["SF_32_32_32_32"] = WebGL2Constant.RGBA32F] = "SF_32_32_32_32";
  TextureFormat[TextureFormat["UI_10_10_10_2"] = WebGL2Constant.RGB10_A2UI] = "UI_10_10_10_2";
  TextureFormat[TextureFormat["UN_5_6_5"] = WebGL2Constant.RGB565] = "UN_5_6_5";
  TextureFormat[TextureFormat["UN_4_4_4_4"] = WebGL2Constant.RGBA4] = "UN_4_4_4_4";
  TextureFormat[TextureFormat["UN_5_5_5_1"] = WebGL2Constant.RGB5_A1] = "UN_5_5_5_1";
  TextureFormat[TextureFormat["UN_10_10_10_2"] = WebGL2Constant.RGB10_A2] = "UN_10_10_10_2";
  TextureFormat[TextureFormat["UN_S8_S8_S8"] = WebGL2Constant.SRGB8] = "UN_S8_S8_S8";
  TextureFormat[TextureFormat["UN_S8_S8_S8_8"] = WebGL2Constant.SRGB8_ALPHA8] = "UN_S8_S8_S8_8";
  TextureFormat[TextureFormat["SF_11_11_10"] = WebGL2Constant.R11F_G11F_B10F] = "SF_11_11_10";
  TextureFormat[TextureFormat["SF_9_9_9_E5"] = WebGL2Constant.RGB9_E5] = "SF_9_9_9_E5";
  TextureFormat[TextureFormat["UN_A8"] = WebGL2Constant.ALPHA] = "UN_A8";
  TextureFormat[TextureFormat["UN_L8"] = WebGL2Constant.LUMINANCE] = "UN_L8";
  TextureFormat[TextureFormat["UN_L8_A8"] = WebGL2Constant.LUMINANCE_ALPHA] = "UN_L8_A8";
})(TextureFormat || (TextureFormat = {}));

var TextureUnsizedFormat;

(function (TextureUnsizedFormat) {
  TextureUnsizedFormat[TextureUnsizedFormat["F_R"] = WebGL2Constant.RED] = "F_R";
  TextureUnsizedFormat[TextureUnsizedFormat["F_RG"] = WebGL2Constant.RG] = "F_RG";
  TextureUnsizedFormat[TextureUnsizedFormat["F_RGB"] = WebGL2Constant.RGB] = "F_RGB";
  TextureUnsizedFormat[TextureUnsizedFormat["F_RGBA"] = WebGL2Constant.RGBA] = "F_RGBA";
  TextureUnsizedFormat[TextureUnsizedFormat["F_L"] = WebGL2Constant.LUMINANCE] = "F_L";
  TextureUnsizedFormat[TextureUnsizedFormat["F_A"] = WebGL2Constant.ALPHA] = "F_A";
  TextureUnsizedFormat[TextureUnsizedFormat["F_LA"] = WebGL2Constant.LUMINANCE_ALPHA] = "F_LA";
  TextureUnsizedFormat[TextureUnsizedFormat["I_R"] = WebGL2Constant.RED_INTEGER] = "I_R";
  TextureUnsizedFormat[TextureUnsizedFormat["I_RG"] = WebGL2Constant.RG_INTEGER] = "I_RG";
  TextureUnsizedFormat[TextureUnsizedFormat["I_RGB"] = WebGL2Constant.RGB_INTEGER] = "I_RGB";
  TextureUnsizedFormat[TextureUnsizedFormat["I_RGBA"] = WebGL2Constant.RGBA_INTEGER] = "I_RGBA";
})(TextureUnsizedFormat || (TextureUnsizedFormat = {}));

//
var RenderbufferFormat;

(function (RenderbufferFormat) {
  RenderbufferFormat[RenderbufferFormat["UN_16"] = WebGL2Constant.DEPTH_COMPONENT16] = "UN_16";
  RenderbufferFormat[RenderbufferFormat["UN_24"] = WebGL2Constant.DEPTH_COMPONENT24] = "UN_24";
  RenderbufferFormat[RenderbufferFormat["SF_32"] = WebGL2Constant.DEPTH_COMPONENT32F] = "SF_32";
  RenderbufferFormat[RenderbufferFormat["UN_24_8"] = WebGL2Constant.DEPTH24_STENCIL8] = "UN_24_8";
  RenderbufferFormat[RenderbufferFormat["SF_32_UN_8"] = WebGL2Constant.DEPTH32F_STENCIL8] = "SF_32_UN_8";
})(RenderbufferFormat || (RenderbufferFormat = {}));

var RenderbufferUnsizedFormat; // Data types used inside a buffer.

(function (RenderbufferUnsizedFormat) {
  RenderbufferUnsizedFormat[RenderbufferUnsizedFormat["DEPTH"] = WebGL2Constant.DEPTH_COMPONENT] = "DEPTH";
  RenderbufferUnsizedFormat[RenderbufferUnsizedFormat["DEPTH_STENCIL"] = WebGL2Constant.DEPTH_STENCIL] = "DEPTH_STENCIL";
})(RenderbufferUnsizedFormat || (RenderbufferUnsizedFormat = {}));

var BufferDataType; // Data types used inside a shader.

(function (BufferDataType) {
  BufferDataType[BufferDataType["UI32"] = WebGL2Constant.UNSIGNED_INT] = "UI32";
  BufferDataType[BufferDataType["UI8"] = WebGL2Constant.UNSIGNED_BYTE] = "UI8";
  BufferDataType[BufferDataType["UI16"] = WebGL2Constant.UNSIGNED_SHORT] = "UI16";
  BufferDataType[BufferDataType["SI32"] = WebGL2Constant.INT] = "SI32";
  BufferDataType[BufferDataType["SF32"] = WebGL2Constant.FLOAT] = "SF32";
  BufferDataType[BufferDataType["SI8"] = WebGL2Constant.BYTE] = "SI8";
  BufferDataType[BufferDataType["SI16"] = WebGL2Constant.SHORT] = "SI16";
  BufferDataType[BufferDataType["SF16"] = WebGL2Constant.HALF_FLOAT] = "SF16";
  BufferDataType[BufferDataType["UI2_UI10_UI10_UI10_REV"] = WebGL2Constant.UNSIGNED_INT_2_10_10_10_REV] = "UI2_UI10_UI10_UI10_REV";
  BufferDataType[BufferDataType["SI2_SI10_SI10_SI10_REV"] = WebGL2Constant.INT_2_10_10_10_REV] = "SI2_SI10_SI10_SI10_REV";
  BufferDataType[BufferDataType["UI5_UI6_UI5"] = WebGL2Constant.UNSIGNED_SHORT_5_6_5] = "UI5_UI6_UI5";
  BufferDataType[BufferDataType["UI4_UI4_UI4_UI4"] = WebGL2Constant.UNSIGNED_SHORT_4_4_4_4] = "UI4_UI4_UI4_UI4";
  BufferDataType[BufferDataType["UI5_UI5_UI5_UI1"] = WebGL2Constant.UNSIGNED_SHORT_5_5_5_1] = "UI5_UI5_UI5_UI1";
  BufferDataType[BufferDataType["UI24_UI8"] = WebGL2Constant.UNSIGNED_INT_24_8] = "UI24_UI8";
  BufferDataType[BufferDataType["UI5_UI9_UI9_UI9_REV"] = WebGL2Constant.UNSIGNED_INT_5_9_9_9_REV] = "UI5_UI9_UI9_UI9_REV";
  BufferDataType[BufferDataType["UF10_UF11_UF11_REV"] = WebGL2Constant.UNSIGNED_INT_10F_11F_11F_REV] = "UF10_UF11_UF11_REV";
})(BufferDataType || (BufferDataType = {}));

var ShaderDataType;

(function (ShaderDataType) {
  ShaderDataType[ShaderDataType["SI_1"] = WebGL2Constant.INT] = "SI_1";
  ShaderDataType[ShaderDataType["SI_2"] = WebGL2Constant.INT_VEC2] = "SI_2";
  ShaderDataType[ShaderDataType["SI_3"] = WebGL2Constant.INT_VEC3] = "SI_3";
  ShaderDataType[ShaderDataType["SI_4"] = WebGL2Constant.INT_VEC4] = "SI_4";
  ShaderDataType[ShaderDataType["UI_1"] = WebGL2Constant.UNSIGNED_INT] = "UI_1";
  ShaderDataType[ShaderDataType["UI_2"] = WebGL2Constant.UNSIGNED_INT_VEC2] = "UI_2";
  ShaderDataType[ShaderDataType["UI_3"] = WebGL2Constant.UNSIGNED_INT_VEC3] = "UI_3";
  ShaderDataType[ShaderDataType["UI_4"] = WebGL2Constant.UNSIGNED_INT_VEC4] = "UI_4";
  ShaderDataType[ShaderDataType["SF_1"] = WebGL2Constant.FLOAT] = "SF_1";
  ShaderDataType[ShaderDataType["SF_2"] = WebGL2Constant.FLOAT_VEC2] = "SF_2";
  ShaderDataType[ShaderDataType["SF_3"] = WebGL2Constant.FLOAT_VEC3] = "SF_3";
  ShaderDataType[ShaderDataType["SF_4"] = WebGL2Constant.FLOAT_VEC4] = "SF_4";
  ShaderDataType[ShaderDataType["SF_2X2"] = WebGL2Constant.FLOAT_MAT2] = "SF_2X2";
  ShaderDataType[ShaderDataType["SF_2X3"] = WebGL2Constant.FLOAT_MAT2x3] = "SF_2X3";
  ShaderDataType[ShaderDataType["SF_2X4"] = WebGL2Constant.FLOAT_MAT2x4] = "SF_2X4";
  ShaderDataType[ShaderDataType["SF_3X2"] = WebGL2Constant.FLOAT_MAT3x2] = "SF_3X2";
  ShaderDataType[ShaderDataType["SF_3X3"] = WebGL2Constant.FLOAT_MAT3] = "SF_3X3";
  ShaderDataType[ShaderDataType["SF_3X4"] = WebGL2Constant.FLOAT_MAT3x4] = "SF_3X4";
  ShaderDataType[ShaderDataType["SF_4X2"] = WebGL2Constant.FLOAT_MAT4x2] = "SF_4X2";
  ShaderDataType[ShaderDataType["SF_4X3"] = WebGL2Constant.FLOAT_MAT4x3] = "SF_4X3";
  ShaderDataType[ShaderDataType["SF_4X4"] = WebGL2Constant.FLOAT_MAT4] = "SF_4X4";
  ShaderDataType[ShaderDataType["B_1"] = WebGL2Constant.BOOL] = "B_1";
  ShaderDataType[ShaderDataType["B_2"] = WebGL2Constant.BOOL_VEC2] = "B_2";
  ShaderDataType[ShaderDataType["B_3"] = WebGL2Constant.BOOL_VEC3] = "B_3";
  ShaderDataType[ShaderDataType["B_4"] = WebGL2Constant.BOOL_VEC4] = "B_4";
  ShaderDataType[ShaderDataType["SI_TEX_2D"] = WebGL2Constant.INT_SAMPLER_2D] = "SI_TEX_2D";
  ShaderDataType[ShaderDataType["SI_TEX_2D_ARRAY"] = WebGL2Constant.INT_SAMPLER_2D_ARRAY] = "SI_TEX_2D_ARRAY";
  ShaderDataType[ShaderDataType["SI_TEX_3D"] = WebGL2Constant.INT_SAMPLER_3D] = "SI_TEX_3D";
  ShaderDataType[ShaderDataType["SI_TEX_CUBE"] = WebGL2Constant.INT_SAMPLER_CUBE] = "SI_TEX_CUBE";
  ShaderDataType[ShaderDataType["UI_TEX_2D"] = WebGL2Constant.UNSIGNED_INT_SAMPLER_2D] = "UI_TEX_2D";
  ShaderDataType[ShaderDataType["UI_TEX_2D_ARRAY"] = WebGL2Constant.UNSIGNED_INT_SAMPLER_2D_ARRAY] = "UI_TEX_2D_ARRAY";
  ShaderDataType[ShaderDataType["UI_TEX_3D"] = WebGL2Constant.UNSIGNED_INT_SAMPLER_3D] = "UI_TEX_3D";
  ShaderDataType[ShaderDataType["UI_TEX_CUBE"] = WebGL2Constant.UNSIGNED_INT_SAMPLER_CUBE] = "UI_TEX_CUBE";
  ShaderDataType[ShaderDataType["SF_TEX_2D"] = WebGL2Constant.SAMPLER_2D] = "SF_TEX_2D";
  ShaderDataType[ShaderDataType["SF_TEX_2D_ARRAY"] = WebGL2Constant.SAMPLER_2D_ARRAY] = "SF_TEX_2D_ARRAY";
  ShaderDataType[ShaderDataType["SF_TEX_3D"] = WebGL2Constant.SAMPLER_3D] = "SF_TEX_3D";
  ShaderDataType[ShaderDataType["SF_TEX_CUBE"] = WebGL2Constant.SAMPLER_CUBE] = "SF_TEX_CUBE";
  ShaderDataType[ShaderDataType["SF_TEX_2D_DEPTH"] = WebGL2Constant.SAMPLER_2D_SHADOW] = "SF_TEX_2D_DEPTH";
  ShaderDataType[ShaderDataType["SF_TEX_2D_ARRAY_DEPTH"] = WebGL2Constant.SAMPLER_2D_ARRAY_SHADOW] = "SF_TEX_2D_ARRAY_DEPTH";
  ShaderDataType[ShaderDataType["SF_TEX_CUBE_DEPTH"] = WebGL2Constant.SAMPLER_CUBE_SHADOW] = "SF_TEX_CUBE_DEPTH";
})(ShaderDataType || (ShaderDataType = {}));

var byteAlignment = function byteAlignment() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stride = arguments.length > 1 ? arguments[1] : undefined;
  var offsetAlignment = 1;
  var strideAlignment = 1;

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
}; // Unsized texture format from a given sized texture format.

var unsizedFormat = function unsizedFormat(format) {
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
}; // Number of bytes of each texture internal format.

var formatByteLength = function formatByteLength(format) {
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
}; // Optimal buffer data type for a given format.

var formatDataType = function formatDataType(format) {
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
}; // Typed array of a given array buffer for a given data type.

var bufferDataTypedArray = function bufferDataTypedArray(dataType, data) {
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
}; // Number of bytes of a given buffer data type.

var bufferDataByteLength = function bufferDataByteLength(dataType) {
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
}; // Number of components packed inside the same buffer data.

var bufferDataComponents = function bufferDataComponents(dataType) {
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
    case BufferDataType.UI5_UI9_UI9_UI9_REV:
      // The UI5 is shared by the 3 UI9 components.
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
}; // Number of components of a given shader data type.

var shaderDataComponents = function shaderDataComponents(dataType) {
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
}; // Number of locations of a given shader data type.

var shaderDataLocations = function shaderDataLocations(dataType) {
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
}; // Number of bytes of a given shader data type backed by a given buffer data type.

var shaderDataByteLength = function shaderDataByteLength(shaderDataType, bufferDataType) {
  var numLocations = shaderDataLocations(shaderDataType);
  var numComponents = shaderDataComponents(shaderDataType);
  var dataSize = bufferDataByteLength(bufferDataType);
  var dataComponents = bufferDataComponents(bufferDataType);
  return numLocations * numComponents * dataSize / dataComponents;
}; // Sets values to a uniform through the appropriate context uniform method.

var setUniformValues = function setUniformValues(gl, dataType, location, data) {
  var typedData;

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

var LazyRenderer =
/*#__PURE__*/
function () {
  // Render canvas.
  // WebGL 2.0 context.
  // Callback to request missing resources.
  // Resources.
  // Vertex attribute locations. Used to keep consistency across programs.
  // Next available attribute location.
  function LazyRenderer(canvas, requestResource) {
    _classCallCheck(this, LazyRenderer);

    _defineProperty(this, "canvas", void 0);

    _defineProperty(this, "gl", void 0);

    _defineProperty(this, "requestResource", void 0);

    _defineProperty(this, "framebuffers", new Map());

    _defineProperty(this, "programs", new Map());

    _defineProperty(this, "shaders", new Map());

    _defineProperty(this, "primitives", new Map());

    _defineProperty(this, "accessors", new Map());

    _defineProperty(this, "buffers", new Map());

    _defineProperty(this, "samplers", new Map());

    _defineProperty(this, "textures", new Map());

    _defineProperty(this, "attributeLocations", new Map());

    _defineProperty(this, "nextAttributeLocation", 0);

    this.canvas = canvas;
    var contextAttributes = {
      alpha: false,
      depth: true,
      stencil: true,
      antialias: false,
      premultipliedAlpha: true,
      preserveDrawingBuffer: true,
      powerPreference: 'default'
    };
    this.gl = canvas.getContext('webgl2', contextAttributes);
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

  _createClass(LazyRenderer, [{
    key: "getResources",
    value: function getResources() {
      var resources = new Map();
      resources.set(ResourceType.FRAMEBUFFER, _toConsumableArray(this.framebuffers.keys()));
      resources.set(ResourceType.PROGRAM, _toConsumableArray(this.programs.keys()));
      resources.set(ResourceType.SHADER, _toConsumableArray(this.shaders.keys()));
      resources.set(ResourceType.PRIMITIVE, _toConsumableArray(this.primitives.keys()));
      resources.set(ResourceType.ACCESSOR, _toConsumableArray(this.accessors.keys()));
      resources.set(ResourceType.BUFFER, _toConsumableArray(this.buffers.keys()));
      resources.set(ResourceType.SAMPLER, _toConsumableArray(this.samplers.keys()));
      resources.set(ResourceType.TEXTURE, _toConsumableArray(this.textures.keys()));
      return resources;
    }
  }, {
    key: "getVertexAttributes",
    value: function getVertexAttributes() {
      return _toConsumableArray(this.attributeLocations.keys());
    } // Register methods. #################################################################################################

  }, {
    key: "registerFramebuffer",
    value: function registerFramebuffer(framebufferName, width, height, colorAttachments) {
      var depthAttachment = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var stencilAttachment = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      this.invalidateFramebuffer(framebufferName);
      this.framebuffers.set(framebufferName, {
        width: width,
        height: height,
        colorAttachments: colorAttachments,
        depthAttachment: depthAttachment,
        stencilAttachment: stencilAttachment,
        framebufferObject: null
      });
    }
  }, {
    key: "registerProgram",
    value: function registerProgram(programName, shaderNames) {
      this.invalidateProgram(programName);
      this.programs.set(programName, {
        shaderNames: shaderNames,
        uniforms: new Map(),
        programObject: null
      });
    }
  }, {
    key: "registerShader",
    value: function registerShader(shaderName, source) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ShaderType.FRAGMENT;
      this.invalidateShader(shaderName);
      this.shaders.set(shaderName, {
        source: source,
        type: type,
        programNames: new Set(),
        shaderObject: null
      });
    }
  }, {
    key: "registerPrimitive",
    value: function registerPrimitive(primitiveName) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Map();
      var indices = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : PrimitiveType.TRIANGLES;
      this.invalidatePrimitive(primitiveName);
      this.primitives.set(primitiveName, {
        count: count,
        attributes: attributes,
        indices: indices,
        type: type,
        vertexArrayObject: null
      });
    }
  }, {
    key: "registerAccessor",
    value: function registerAccessor(accessorName, bufferName) {
      var shaderDataType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ShaderDataType.SF_4;
      var bufferDataType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : BufferDataType.SF32;
      var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var stride = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var normalized = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      this.invalidateAccessor(accessorName);
      this.accessors.set(accessorName, {
        bufferName: bufferName,
        offset: offset,
        stride: stride || shaderDataByteLength(shaderDataType, bufferDataType),
        normalized: normalized,
        shaderDataType: shaderDataType,
        bufferDataType: bufferDataType,
        primitiveNames: new Set()
      });
    }
  }, {
    key: "registerBuffer",
    value: function registerBuffer(bufferName, byteLength) {
      var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : BufferTarget.ATTRIBUTES;
      this.invalidateBuffer(bufferName);
      this.buffers.set(bufferName, {
        target: target,
        byteArray: new Uint8Array(byteLength),
        accessorNames: new Set(),
        bufferObject: null
      });
    }
  }, {
    key: "registerSampler",
    value: function registerSampler(samplerName) {
      var magFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TextureFilter.LINEAR;
      var minFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TextureFilter.LINEAR_MIPMAP_LINEAR;
      var wrapS = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : TextureWrapping.REPEAT;
      var wrapT = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : TextureWrapping.REPEAT;
      var wrapR = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : TextureWrapping.REPEAT;
      this.invalidateSampler(samplerName);
      this.samplers.set(samplerName, {
        magFilter: magFilter,
        minFilter: minFilter,
        wrapS: wrapS,
        wrapT: wrapT,
        wrapR: wrapR,
        samplerObject: null
      });
    }
  }, {
    key: "registerTexture",
    value: function registerTexture(textureName) {
      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : TextureType.TEX_2D;
      var format = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : TextureFormat.UN_8_8_8_8;
      this.invalidateTexture(textureName);
      this.textures.set(textureName, {
        byteArray: new Uint8Array(width * height * depth * formatByteLength(format)),
        width: width,
        height: height,
        depth: type === TextureType.TEX_CUBE ? 6 : depth,
        type: type,
        format: format,
        framebufferNames: new Set(),
        textureObject: null
      });
    } // Delete methods. ###################################################################################################

  }, {
    key: "deleteFramebuffer",
    value: function deleteFramebuffer(framebufferName) {
      this.invalidateFramebuffer(framebufferName);
      this.framebuffers["delete"](framebufferName);
    }
  }, {
    key: "deleteProgram",
    value: function deleteProgram(programName) {
      this.invalidateProgram(programName);
      this.programs["delete"](programName);
    }
  }, {
    key: "deleteShader",
    value: function deleteShader(shaderName) {
      this.invalidateShader(shaderName);
      this.shaders["delete"](shaderName);
    }
  }, {
    key: "deletePrimitive",
    value: function deletePrimitive(primitiveName) {
      this.invalidatePrimitive(primitiveName);
      this.primitives["delete"](primitiveName);
    }
  }, {
    key: "deleteAccessor",
    value: function deleteAccessor(accessorName) {
      this.invalidateAccessor(accessorName);
      this.accessors["delete"](accessorName);
    }
  }, {
    key: "deleteBuffer",
    value: function deleteBuffer(bufferName) {
      this.invalidateBuffer(bufferName);
      this.buffers["delete"](bufferName);
    }
  }, {
    key: "deleteSampler",
    value: function deleteSampler(samplerName) {
      this.invalidateSampler(samplerName);
      this.samplers["delete"](samplerName);
    }
  }, {
    key: "deleteTexture",
    value: function deleteTexture(textureName) {
      this.invalidateTexture(textureName);
      this.textures["delete"](textureName);
    } // Invalidate methods. ###############################################################################################

  }, {
    key: "invalidateFramebuffer",
    value: function invalidateFramebuffer(framebufferName) {
      var framebuffer = this.framebuffers.get(framebufferName);

      if (framebuffer === undefined) {
        return;
      } // Remove this framebuffer name from its dependency color attachment textures.


      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = framebuffer.colorAttachments.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var colorAttachment = _step.value;

          var _texture2 = this.textures.get(colorAttachment.textureName);

          if (_texture2 !== undefined) {
            _texture2.framebufferNames["delete"](framebufferName);
          }
        } // Remove this framebuffer name from its dependency depth attachment texture.

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (framebuffer.depthAttachment !== null) {
        var texture = this.textures.get(framebuffer.depthAttachment.textureName);

        if (texture !== undefined) {
          texture.framebufferNames["delete"](framebufferName);
        }
      } // Remove this framebuffer name from its dependency stencil attachment texture.


      if (framebuffer.stencilAttachment !== null) {
        var _texture = this.textures.get(framebuffer.stencilAttachment.textureName);

        if (_texture !== undefined) {
          _texture.framebufferNames["delete"](framebufferName);
        }
      } // Delete the framebuffer object. Null values are silently ignored.


      this.gl.deleteFramebuffer(framebuffer.framebufferObject);
      framebuffer.framebufferObject = null;
    }
  }, {
    key: "invalidateProgram",
    value: function invalidateProgram(programName) {
      var program = this.programs.get(programName);

      if (program === undefined) {
        return;
      } // Remove this program name from its dependency shaders.


      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = program.shaderNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var shaderName = _step2.value;
          var shader = this.shaders.get(shaderName);

          if (shader !== undefined) {
            shader.programNames["delete"](programName);
          }
        } // Delete the program object. Null values are silently ignored.

      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.gl.deleteProgram(program.programObject);
      program.programObject = null;
    }
  }, {
    key: "invalidateShader",
    value: function invalidateShader(shaderName) {
      var shader = this.shaders.get(shaderName);

      if (shader === undefined) {
        return;
      } // Invalidate programs that depend on this shader.


      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = shader.programNames[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var programName = _step3.value;
          this.invalidateProgram(programName);
        } // Delete the shader object. Null values are silently ignored.

      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this.gl.deleteShader(shader.shaderObject);
      shader.shaderObject = null;
    }
  }, {
    key: "invalidatePrimitive",
    value: function invalidatePrimitive(primitiveName) {
      var primitive = this.primitives.get(primitiveName);

      if (primitive === undefined) {
        return;
      } // Remove this primitive name from its dependency accessors.


      var accessorNames = _toConsumableArray(primitive.attributes.values());

      if (primitive.indices !== null) {
        accessorNames.push(primitive.indices);
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = accessorNames[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var accessorName = _step4.value;
          var accessor = this.accessors.get(accessorName);

          if (accessor !== undefined) {
            accessor.primitiveNames["delete"](primitiveName);
          }
        } // Delete the vertex array object. Null values are silently ignored.

      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this.gl.deleteVertexArray(primitive.vertexArrayObject);
      primitive.vertexArrayObject = null;
    }
  }, {
    key: "invalidateAccessor",
    value: function invalidateAccessor(accessorName) {
      var accessor = this.accessors.get(accessorName);

      if (accessor === undefined) {
        return;
      } // Remove this accessor name from its dependency buffer.


      var buffer = this.buffers.get(accessor.bufferName);

      if (buffer !== undefined) {
        buffer.accessorNames["delete"](accessorName);
      } // Invalidate primitives that depend on this accessor.


      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = accessor.primitiveNames[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var primitiveName = _step5.value;
          this.invalidatePrimitive(primitiveName);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }, {
    key: "invalidateBuffer",
    value: function invalidateBuffer(bufferName) {
      var buffer = this.buffers.get(bufferName);

      if (buffer === undefined) {
        return;
      } // Invalidate accessors that depend on this buffer.


      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = buffer.accessorNames[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var accessorName = _step6.value;
          this.invalidateAccessor(accessorName);
        } // Store the buffer contents back to the CPU byte array.

      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      this.readBufferData(bufferName, buffer.byteArray); // Delete the buffer object. Null values are silently ignored.

      this.gl.deleteBuffer(buffer.bufferObject);
      buffer.bufferObject = null;
    }
  }, {
    key: "invalidateSampler",
    value: function invalidateSampler(samplerName) {
      var sampler = this.samplers.get(samplerName);

      if (sampler === undefined) {
        return;
      } // Delete the sampler object. Null values are silently ignored.


      this.gl.deleteSampler(sampler.samplerObject);
      sampler.samplerObject = null;
    }
  }, {
    key: "invalidateTexture",
    value: function invalidateTexture(textureName) {
      var texture = this.textures.get(textureName);

      if (texture === undefined) {
        return;
      } // Invalidate framebuffers that depend on this texture.


      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = texture.framebufferNames[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var framebufferName = _step7.value;
          this.invalidateFramebuffer(framebufferName);
        } // Store the texture contents back to the CPU byte array.

      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      this.readTextureData(textureName, texture.byteArray, texture.width, texture.height, texture.depth); // Delete the texture object. Null values are silently ignored.

      this.gl.deleteTexture(texture.textureObject);
      texture.textureObject = null;
    } // Loaded resources getter methods. ################################################################################

  }, {
    key: "getLoadedFramebuffer",
    value: function getLoadedFramebuffer(framebufferName) {
      var framebuffer = this.framebuffers.get(framebufferName);

      if (framebuffer === undefined) {
        // Unkown framebuffer name.
        this.requestResource(ResourceType.FRAMEBUFFER, framebufferName);
        return undefined;
      }

      if (framebuffer.framebufferObject !== null) {
        // Framebuffer object already loaded in GPU.
        return framebuffer;
      } // Color, depth and stencil attachments.


      var attachments = new Map(); // Resolve color attachments.

      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = framebuffer.colorAttachments[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var _step8$value = _slicedToArray(_step8.value, 2),
              attachmentIndex = _step8$value[0],
              _step8$value$ = _step8$value[1],
              _textureName2 = _step8$value$.textureName,
              _step8$value$$layer = _step8$value$.layer,
              _layer2 = _step8$value$$layer === void 0 ? 0 : _step8$value$$layer;

          var _texture4 = this.getLoadedTexture(_textureName2);

          if (_texture4 !== undefined) {
            attachments.set(this.gl.COLOR_ATTACHMENT0 + attachmentIndex, {
              texture: _texture4,
              layer: _layer2
            });
          }
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
            _iterator8["return"]();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      var numAttachments = framebuffer.colorAttachments.size; // Resolve depth attachment.

      if (framebuffer.depthAttachment !== null) {
        var _framebuffer$depthAtt = framebuffer.depthAttachment,
            textureName = _framebuffer$depthAtt.textureName,
            _framebuffer$depthAtt2 = _framebuffer$depthAtt.layer,
            layer = _framebuffer$depthAtt2 === void 0 ? 0 : _framebuffer$depthAtt2;
        var texture = this.getLoadedTexture(textureName);

        if (texture !== undefined) {
          attachments.set(this.gl.DEPTH_ATTACHMENT, {
            texture: texture,
            layer: layer
          });
        }

        numAttachments++;
      } // Resolve stencil attachment.


      if (framebuffer.stencilAttachment !== null) {
        var _framebuffer$stencilA = framebuffer.stencilAttachment,
            _textureName = _framebuffer$stencilA.textureName,
            _framebuffer$stencilA2 = _framebuffer$stencilA.layer,
            _layer = _framebuffer$stencilA2 === void 0 ? 0 : _framebuffer$stencilA2;

        var _texture3 = this.getLoadedTexture(_textureName);

        if (_texture3 !== undefined) {
          attachments.set(this.gl.STENCIL_ATTACHMENT, {
            texture: _texture3,
            layer: _layer
          });
        }

        numAttachments++;
      }

      if (attachments.size < numAttachments) {
        // Missing texture.
        return undefined;
      } // Create a new framebuffer object.


      framebuffer.framebufferObject = this.gl.createFramebuffer();

      if (framebuffer.framebufferObject === null) {
        console.error('WebGL failed to create a new framebuffer object.');
        return undefined;
      } // Bind the framebuffer object.


      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer.framebufferObject); // Initialize output color attachment list with gl.NONE.

      var drawBuffers = new Array(Math.max.apply(Math, _toConsumableArray(framebuffer.colorAttachments.keys()))).fill(this.gl.NONE);
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = attachments[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var _step9$value = _slicedToArray(_step9.value, 2),
              attachment = _step9$value[0],
              _step9$value$ = _step9$value[1],
              _texture5 = _step9$value$.texture,
              _step9$value$$layer = _step9$value$.layer,
              _layer3 = _step9$value$$layer === void 0 ? 0 : _step9$value$$layer;

          // Add framebuffer name to texture dependency references.
          _texture5.framebufferNames.add(framebufferName); // Bind the texture object.


          this.gl.bindTexture(_texture5.type, _texture5.textureObject); // Attach texture.

          switch (_texture5.type) {
            case TextureType.TEX_2D_ARRAY:
            case TextureType.TEX_3D:
              this.gl.framebufferTextureLayer(this.gl.FRAMEBUFFER, attachment, _texture5.textureObject, 0, _layer3);
              break;

            case TextureType.TEX_2D:
              this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachment, _texture5.type, _texture5.textureObject, 0);
              break;

            case TextureType.TEX_CUBE:
              var target = this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + _layer3;
              this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, attachment, target, _texture5.textureObject, 0);
          }
        } // Set output color attachment list.

      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
            _iterator9["return"]();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }

      this.gl.drawBuffers(drawBuffers); // Return successfully.

      return framebuffer;
    }
  }, {
    key: "getLoadedProgram",
    value: function getLoadedProgram(programName) {
      var program = this.programs.get(programName);

      if (program === undefined) {
        // Unkown program name.
        this.requestResource(ResourceType.PROGRAM, programName);
        return undefined;
      }

      if (program.programObject !== null) {
        // Program object already loaded in GPU.
        return program;
      } // Resolve shaders.


      var shaders = [];
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = program.shaderNames[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var shaderName = _step10.value;
          var shader = this.getLoadedShader(shaderName);

          if (shader !== undefined) {
            shaders.push(shader);
          }
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
            _iterator10["return"]();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }

      if (shaders.length < program.shaderNames.length) {
        // Missing shader.
        return undefined;
      } // Create a new program object.


      program.programObject = this.gl.createProgram();

      if (program.programObject === null) {
        console.error('WebGL failed to create a new program object.');
        return undefined;
      } // Attach shader objects.


      for (var _i = 0, _shaders = shaders; _i < _shaders.length; _i++) {
        var _shader = _shaders[_i];
        this.gl.attachShader(program.programObject, _shader.shaderObject);
      } // Link the program and check for errors.


      this.gl.linkProgram(program.programObject);
      var linkSuccess = this.gl.getProgramParameter(program.programObject, this.gl.LINK_STATUS);

      if (!linkSuccess) {
        // Link operation failed.
        console.error(this.gl.getProgramInfoLog(program.programObject));
        this.gl.deleteProgram(program.programObject);
        program.programObject = null;
        return undefined;
      } // Rebind the program active attributes according to the global attribute location mapping.


      var attributesDebug = [];
      var numAttributes = this.gl.getProgramParameter(program.programObject, this.gl.ACTIVE_ATTRIBUTES);

      for (var infoIndex = 0; infoIndex < numAttributes; infoIndex++) {
        var info = this.gl.getActiveAttrib(program.programObject, infoIndex);

        if (info !== null) {
          // Get attribute name and type.
          var attributeName = info.name;
          var shaderDataType = info.type; // Get attribute location.

          var attributeLocation = this.attributeLocations.get(attributeName);

          if (attributeLocation === undefined) {
            // This is a new attribute name. Assign a new attribute location.
            attributeLocation = this.nextAttributeLocation;
            this.nextAttributeLocation += shaderDataLocations(shaderDataType);
            this.attributeLocations.set(attributeName, attributeLocation);
          } // Bind the attribute name to the mapped location.


          this.gl.bindAttribLocation(program.programObject, attributeLocation, attributeName); // Debug.

          attributesDebug.push({
            name: attributeName,
            location: attributeLocation,
            type: ShaderDataType[shaderDataType],
            size: info.size
          });
        }
      }

      console.table(attributesDebug); // Link the program again to apply the rebindings.

      this.gl.linkProgram(program.programObject);
      var rebindSuccess = this.gl.getProgramParameter(program.programObject, this.gl.LINK_STATUS);

      if (!rebindSuccess) {
        // Link operation failed.
        console.error(this.gl.getProgramInfoLog(program.programObject));
        this.gl.deleteProgram(program.programObject);
        program.programObject = null;
        return undefined;
      } // Setup uniforms.


      var uniformsDebug = [];
      var numUniforms = this.gl.getProgramParameter(program.programObject, this.gl.ACTIVE_UNIFORMS);

      for (var _infoIndex = 0; _infoIndex < numUniforms; _infoIndex++) {
        var _info = this.gl.getActiveUniform(program.programObject, _infoIndex);

        if (_info !== null) {
          // Get uniform name.
          var uniformName = _info.name.endsWith('[0]') ? _info.name.slice(0, -3) : _info.name; // Get uniform locations.

          var uniformLocations = [];
          var firstLocation = this.gl.getUniformLocation(program.programObject, uniformName);

          if (firstLocation !== null) {
            uniformLocations.push(firstLocation);
          }

          for (var index = 1; index < _info.size; index++) {
            var location = this.gl.getUniformLocation(program.programObject, uniformName + '[' + index + ']');

            if (location !== null) {
              uniformLocations.push(location);
            }
          } // Store uniform parameters.


          program.uniforms.set(uniformName, {
            type: _info.type,
            locations: uniformLocations
          }); // Debug.

          uniformsDebug.push({
            name: _info.name,
            type: ShaderDataType[_info.type],
            size: _info.size
          });
        }
      }

      console.table(uniformsDebug); // TODO: Uniform Blocks.
      // ? this.gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES
      // ? this.gl.UNIFORM_BLOCK_ACTIVE_UNIFORMS
      // Setup uniform blocks.

      var blocksDebug = [];
      var numBlocks = this.gl.getProgramParameter(program.programObject, this.gl.ACTIVE_UNIFORM_BLOCKS);

      for (var blockLocation = 0; blockLocation < numBlocks; blockLocation++) {
        var blockName = this.gl.getActiveUniformBlockName(program.programObject, blockLocation);

        if (blockName !== null) {
          var blockLocation2 = this.gl.getUniformBlockIndex(program.programObject, blockName); //this.gl.uniformBlockBinding(program.programObject, blockLocation, blockUnit);
          // Debug.

          blocksDebug.push({
            location: blockLocation,
            location2: blockLocation2,
            name: blockName
          });
        }
      }

      console.table(blocksDebug); // Add program name to shaders dependency references.

      for (var _i2 = 0, _shaders2 = shaders; _i2 < _shaders2.length; _i2++) {
        var _shader2 = _shaders2[_i2];

        _shader2.programNames.add(programName);
      } // Return successfully.


      return program;
    }
  }, {
    key: "getLoadedShader",
    value: function getLoadedShader(shaderName) {
      var shader = this.shaders.get(shaderName);

      if (shader === undefined) {
        // Unkown shader name.
        this.requestResource(ResourceType.SHADER, shaderName);
        return undefined;
      }

      if (shader.shaderObject !== null) {
        // Shader object already loaded in GPU.
        return shader;
      } // Create a new shader object.


      shader.shaderObject = this.gl.createShader(shader.type);

      if (shader.shaderObject === null) {
        console.error('WebGL failed to create a new shader object.');
        return undefined;
      } // Set the source code and compile the shader.


      this.gl.shaderSource(shader.shaderObject, shader.source);
      this.gl.compileShader(shader.shaderObject);
      var compilationSuccess = this.gl.getShaderParameter(shader.shaderObject, this.gl.COMPILE_STATUS);

      if (!compilationSuccess) {
        // Compilation failed.
        console.error(this.gl.getShaderInfoLog(shader.shaderObject));
        this.gl.deleteShader(shader.shaderObject);
        shader.shaderObject = null;
        return undefined;
      } // Return successfully.


      return shader;
    }
  }, {
    key: "getLoadedPrimitive",
    value: function getLoadedPrimitive(primitiveName) {
      var primitive = this.primitives.get(primitiveName);

      if (primitive === undefined) {
        // Unkown primitive name.
        this.requestResource(ResourceType.PRIMITIVE, primitiveName);
        return undefined;
      }

      if (primitive.vertexArrayObject !== null) {
        // Vertex array object already loaded in GPU.
        return primitive;
      } // Resolve attribute accessors.


      var attributes = new Map();
      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = primitive.attributes[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var _step11$value = _slicedToArray(_step11.value, 2),
              attributeName = _step11$value[0],
              accessorName = _step11$value[1];

          var accessor = this.getLoadedAccessor(accessorName);

          if (accessor !== undefined) {
            attributes.set(attributeName, accessor);
          }
        } // Resolve indices accessor.

      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
            _iterator11["return"]();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }

      var indices = primitive.indices === null ? null : this.getLoadedAccessor(primitive.indices);

      if (indices === undefined) {
        // Missing indices accessor.
        return undefined;
      }

      if (attributes.size < primitive.attributes.size) {
        // Missing attribute accessor.
        return undefined;
      } // Create a new vertex array object.


      primitive.vertexArrayObject = this.gl.createVertexArray();

      if (primitive.vertexArrayObject === null) {
        console.error('WebGL failed to create a new vertex array object.');
        return undefined;
      } // Bind the vertex array object.


      this.gl.bindVertexArray(primitive.vertexArrayObject);

      if (indices !== null) {
        // Add primitive name to accessor dependency references.
        indices.primitiveNames.add(primitiveName); // Bind indices buffer.

        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, indices.bufferObject);
      }

      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = attributes[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var _step12$value = _slicedToArray(_step12.value, 2),
              attributeName = _step12$value[0],
              _accessor = _step12$value[1];

          // Add primitive name to accessor dependency references.
          _accessor.primitiveNames.add(primitiveName); // Bind attribute buffer.


          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, _accessor.bufferObject); // Get data parameters.

          var numLocations = shaderDataLocations(_accessor.shaderDataType);
          var numComponents = shaderDataComponents(_accessor.shaderDataType);
          var dataSize = bufferDataByteLength(_accessor.bufferDataType);
          var dataComponents = bufferDataComponents(_accessor.bufferDataType); // Get attribute location.

          var attributeLocation = this.attributeLocations.get(attributeName);

          if (attributeLocation === undefined) {
            // This is a new attribute name. Assign a new attribute location.
            attributeLocation = this.nextAttributeLocation;
            this.nextAttributeLocation += numLocations;
            this.attributeLocations.set(attributeName, attributeLocation);
          }

          for (var subLocation = 0; subLocation < numLocations; subLocation++) {
            // Enable the location.
            this.gl.enableVertexAttribArray(attributeLocation + subLocation); // Bind the location to the buffer attribute pointer.

            this.gl.vertexAttribPointer(attributeLocation + subLocation, numComponents, _accessor.bufferDataType, _accessor.normalized, _accessor.stride, _accessor.offset + subLocation * numComponents * dataSize / dataComponents);
          }
        } // Return successfully.

      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
            _iterator12["return"]();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }

      return primitive;
    }
  }, {
    key: "getLoadedAccessor",
    value: function getLoadedAccessor(accessorName) {
      var accessor = this.accessors.get(accessorName);

      if (accessor === undefined) {
        // Unkown accessor name.
        this.requestResource(ResourceType.ACCESSOR, accessorName);
        return undefined;
      }

      var buffer = this.getLoadedBuffer(accessor.bufferName);

      if (buffer === undefined) {
        return undefined;
      } // Add accessor name to buffer dependency references.


      buffer.accessorNames.add(accessorName); // Return successfully.

      return _objectSpread({}, accessor, buffer);
    }
  }, {
    key: "getLoadedBuffer",
    value: function getLoadedBuffer(bufferName) {
      var buffer = this.buffers.get(bufferName);

      if (buffer === undefined) {
        // Unkown buffer name.
        this.requestResource(ResourceType.BUFFER, bufferName);
        return undefined;
      }

      if (buffer.bufferObject !== null) {
        // Buffer object already loaded in GPU.
        return buffer;
      } // Create a new buffer object.


      buffer.bufferObject = this.gl.createBuffer();

      if (buffer.bufferObject === null) {
        console.error('WebGL failed to create a new buffer object.');
        return undefined;
      } // Bind the buffer object.


      this.gl.bindBuffer(buffer.target, buffer.bufferObject); // Load data into the buffer object.

      this.gl.bufferData(buffer.target, buffer.byteArray, this.gl.STATIC_DRAW); // Return successfully.

      return buffer;
    }
  }, {
    key: "getLoadedSampler",
    value: function getLoadedSampler(samplerName) {
      var sampler = this.samplers.get(samplerName);

      if (sampler === undefined) {
        // Unkown sampler name.
        this.requestResource(ResourceType.SAMPLER, samplerName);
        return undefined;
      }

      if (sampler.samplerObject !== null) {
        // Sampler object already loaded in GPU.
        return sampler;
      } // Create a new sampler.


      sampler.samplerObject = this.gl.createSampler();

      if (sampler.samplerObject === null) {
        console.error('WebGL failed to create a new shader object.');
        return undefined;
      } // Set sampler parameters.


      this.gl.samplerParameteri(sampler.samplerObject, this.gl.TEXTURE_MAG_FILTER, sampler.magFilter);
      this.gl.samplerParameteri(sampler.samplerObject, this.gl.TEXTURE_MIN_FILTER, sampler.minFilter);
      this.gl.samplerParameteri(sampler.samplerObject, this.gl.TEXTURE_WRAP_S, sampler.wrapS);
      this.gl.samplerParameteri(sampler.samplerObject, this.gl.TEXTURE_WRAP_T, sampler.wrapT);
      this.gl.samplerParameteri(sampler.samplerObject, this.gl.TEXTURE_WRAP_R, sampler.wrapR); // Return successfully.

      return sampler;
    }
  }, {
    key: "getLoadedTexture",
    value: function getLoadedTexture(textureName) {
      var texture = this.textures.get(textureName);

      if (texture === undefined) {
        // Unkown texture name.
        this.requestResource(ResourceType.TEXTURE, textureName);
        return undefined;
      }

      if (texture.textureObject !== null) {
        // Texture object already loaded in GPU.
        return texture;
      } // Mipmap levels.


      var levels = Math.log2(Math.max(texture.width, texture.height, texture.depth)); // Create a new texture object.

      texture.textureObject = this.gl.createTexture();

      if (texture.textureObject === null) {
        console.error('WebGL failed to create a new texture object.');
        return undefined;
      } // Bind the texture to its target.


      this.gl.bindTexture(texture.type, texture.textureObject); // Create the texture memory storage.

      if (texture.type === TextureType.TEX_2D || texture.type === TextureType.TEX_CUBE) {
        this.gl.texStorage2D(texture.type, levels, texture.format, texture.width, texture.height);
      } else {
        this.gl.texStorage3D(texture.type, levels, texture.format, texture.width, texture.height, texture.depth);
      } // Write the byte array into the texture object.


      this.writeTextureData(textureName, texture.byteArray); // Return successfully.

      return texture;
    } // Buffer writing methods. #########################################################################################

  }, {
    key: "writeBufferData",
    value: function writeBufferData(bufferName, srcData) {
      var bufferOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var srcOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var length = arguments.length > 4 ? arguments[4] : undefined;
      var buffer = this.buffers.get(bufferName);

      if (buffer === undefined) {
        // Unkown buffer name.
        this.requestResource(ResourceType.BUFFER, bufferName);
        return;
      } // Default length.


      if (length === undefined) {
        length = Math.min(buffer.byteArray.byteLength - bufferOffset, srcData.byteLength - srcOffset);
      } // If the GPU buffer object is not available, write values to the CPU byte array.


      if (buffer.bufferObject === null) {
        var srcByteArray = new Uint8Array(srcData.buffer, srcData.byteOffset, srcData.byteLength);
        buffer.byteArray.set(srcByteArray.subarray(srcOffset, srcOffset + length), bufferOffset);
        return;
      }

      this.gl.bindBuffer(buffer.target, buffer.bufferObject);
      this.gl.bufferSubData(buffer.target, bufferOffset, srcData, srcOffset, length);
    } // Buffer reading methods. #########################################################################################

  }, {
    key: "readBufferData",
    value: function readBufferData(bufferName, dstData) {
      var bufferOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var dstOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var length = arguments.length > 4 ? arguments[4] : undefined;
      var buffer = this.buffers.get(bufferName);

      if (buffer === undefined) {
        // Unkown buffer name.
        this.requestResource(ResourceType.BUFFER, bufferName);
        return;
      } // Default length.


      if (length === undefined) {
        length = Math.min(buffer.byteArray.byteLength - bufferOffset, dstData.byteLength - dstOffset);
      } // If the GPU buffer object is not available, read values from the CPU byte array.


      if (buffer.bufferObject === null) {
        var dstByteArray = new Uint8Array(dstData.buffer, dstData.byteOffset, dstData.byteLength);
        dstByteArray.set(buffer.byteArray.subarray(bufferOffset, bufferOffset + length), dstOffset);
        return;
      }

      this.gl.bindBuffer(buffer.target, buffer.bufferObject);
      this.gl.getBufferSubData(buffer.target, bufferOffset, dstData, dstOffset, length);
    } // Texture writing methods. ########################################################################################

  }, {
    key: "writeTextureURI",
    value: function writeTextureURI(textureName, srcURI, srcDepth, textureXOffset, textureYOffset, textureZOffset, srcXOffset, srcYOffset, srcZOffset, regionWidth, regionHeight, regionDepth) {
      var _this = this;

      var texture = this.textures.get(textureName);

      if (texture === undefined) {
        // Unkown texture name.
        this.requestResource(ResourceType.TEXTURE, textureName);
        return;
      } // Create an image from the URL.


      new Promise(function (resolve, reject) {
        var srcImage = new Image();

        srcImage.onload = function () {
          return resolve(srcImage);
        };

        srcImage.onerror = reject;
        srcImage.src = srcURI;
      }).then(function (srcImage) {
        // Write source image into the texture.
        _this.writeTextureImage(textureName, srcImage, srcDepth, textureXOffset, textureYOffset, textureZOffset, srcXOffset, srcYOffset, srcZOffset, regionWidth, regionHeight, regionDepth);
      }, console.error);
    }
  }, {
    key: "writeTextureImage",
    value: function writeTextureImage(textureName, srcImage) {
      var srcDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var textureXOffset = arguments.length > 3 ? arguments[3] : undefined;
      var textureYOffset = arguments.length > 4 ? arguments[4] : undefined;
      var textureZOffset = arguments.length > 5 ? arguments[5] : undefined;
      var srcXOffset = arguments.length > 6 ? arguments[6] : undefined;
      var srcYOffset = arguments.length > 7 ? arguments[7] : undefined;
      var srcZOffset = arguments.length > 8 ? arguments[8] : undefined;
      var regionWidth = arguments.length > 9 ? arguments[9] : undefined;
      var regionHeight = arguments.length > 10 ? arguments[10] : undefined;
      var regionDepth = arguments.length > 11 ? arguments[11] : undefined;
      var texture = this.textures.get(textureName);

      if (texture === undefined) {
        // Unkown texture name.
        this.requestResource(ResourceType.TEXTURE, textureName);
        return;
      } // Create a canvas with the same width and height as the image.


      var canvas = document.createElement('canvas');
      canvas.width = srcImage.width;
      canvas.height = srcImage.height; // Get the 2D rendering context from the canvas.

      var canvasContext = canvas.getContext('2d');

      if (canvasContext === null) {
        console.error('Canvas failed to return a 2D context');
        return;
      } // Flip the canvas vertically.


      canvasContext.translate(0, srcImage.height);
      canvasContext.scale(1, -1); // Draw the image through the 2D context and get the resulting image data.

      canvasContext.drawImage(srcImage, 0, 0);
      var srcData = canvasContext.getImageData(0, 0, srcImage.width, srcImage.height).data; // Setup source dimensions.

      var srcWidth = srcImage.width;
      var srcHeight = srcImage.height / srcDepth; // Write source data into the texture.

      this.writeTextureData(textureName, srcData, srcWidth, srcHeight, srcDepth, textureXOffset, textureYOffset, textureZOffset, srcXOffset, srcYOffset, srcZOffset, regionWidth, regionHeight, regionDepth);
    }
  }, {
    key: "writeTextureData",
    value: function writeTextureData(textureName, srcData, srcWidth, srcHeight, srcDepth) {
      var textureXOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var textureYOffset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var textureZOffset = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var srcXOffset = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var srcYOffset = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var srcZOffset = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
      var regionWidth = arguments.length > 11 ? arguments[11] : undefined;
      var regionHeight = arguments.length > 12 ? arguments[12] : undefined;
      var regionDepth = arguments.length > 13 ? arguments[13] : undefined;
      var texture = this.textures.get(textureName);

      if (texture === undefined) {
        // Unkown texture name.
        this.requestResource(ResourceType.TEXTURE, textureName);
        return;
      } // Default input dimensions.


      srcWidth = srcWidth === undefined ? texture.width : srcWidth;
      srcHeight = srcHeight === undefined ? texture.height : srcHeight;
      srcDepth = srcDepth === undefined ? texture.depth : srcDepth; // Default region dimensions.

      if (regionWidth === undefined) {
        regionWidth = Math.min(texture.width - textureXOffset, srcWidth - srcXOffset);
      }

      if (regionHeight === undefined) {
        regionHeight = Math.min(texture.height - textureYOffset, srcHeight - srcYOffset);
      }

      if (regionDepth === undefined) {
        regionDepth = Math.min(texture.depth - textureZOffset, srcDepth - srcZOffset);
      } // Sizes.


      var pixelSize = formatByteLength(texture.format);
      var regionRowSize = regionWidth * pixelSize;
      var dstRowSize = texture.width * pixelSize;
      var srcRowSize = srcWidth * pixelSize;
      var dstImageSize = texture.height * dstRowSize;
      var srcImageSize = srcHeight * srcRowSize;
      var dstOffset = textureZOffset * dstImageSize + textureYOffset * dstRowSize + textureXOffset * pixelSize;
      var srcOffset = srcZOffset * srcImageSize + srcYOffset * srcRowSize + srcXOffset * pixelSize; // If the GPU texture object is not available, write values to the CPU byte array.

      if (texture.textureObject === null) {
        var srcByteArray = new Uint8Array(srcData.buffer, srcData.byteOffset, srcData.byteLength);

        for (var image = 0; image < regionDepth; image++) {
          for (var row = 0; row < regionHeight; row++) {
            var dstRowBegin = dstOffset + image * dstImageSize + row * dstRowSize;
            var srcRowBegin = srcOffset + image * srcImageSize + row * srcRowSize;
            texture.byteArray.set(srcByteArray.subarray(srcRowBegin, srcRowBegin + regionRowSize), dstRowBegin);
          }
        }

        return;
      } // Unbind any pixel unpack buffer object.


      this.gl.bindBuffer(this.gl.PIXEL_UNPACK_BUFFER, null); // Setup packing and unpacking parameters.

      this.gl.pixelStorei(this.gl.UNPACK_SKIP_PIXELS, srcXOffset);
      this.gl.pixelStorei(this.gl.UNPACK_SKIP_ROWS, srcYOffset);
      this.gl.pixelStorei(this.gl.UNPACK_SKIP_IMAGES, srcZOffset);
      this.gl.pixelStorei(this.gl.UNPACK_ROW_LENGTH, srcWidth);
      this.gl.pixelStorei(this.gl.UNPACK_IMAGE_HEIGHT, srcHeight);
      this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, byteAlignment(srcOffset, srcRowSize));
      this.gl.pixelStorei(this.gl.PACK_ALIGNMENT, byteAlignment(dstOffset, dstRowSize)); // Get the corresponding parameters for the given texture internal format.

      var format = unsizedFormat(texture.format);
      var dataType = formatDataType(texture.format);
      var typedSrcData = bufferDataTypedArray(dataType, srcData); // Bind the texture object to its target.

      this.gl.bindTexture(texture.type, texture.textureObject); // Write data into the texture object.

      var x = textureXOffset,
          y = textureYOffset,
          z = textureZOffset;
      var w = regionWidth,
          h = regionHeight,
          d = regionDepth;

      switch (texture.type) {
        case TextureType.TEX_2D_ARRAY:
        case TextureType.TEX_3D:
          this.gl.texSubImage3D(texture.type, 0, x, y, z, w, h, d, format, dataType, typedSrcData);
          break;

        case TextureType.TEX_2D:
          this.gl.texSubImage2D(texture.type, 0, x, y, w, h, format, dataType, typedSrcData);
          break;

        case TextureType.TEX_CUBE:
          for (var _image = 0; _image < regionDepth; _image++) {
            var target = this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + textureZOffset + _image;
            this.gl.texSubImage2D(target, 0, x, y, w, h, format, dataType, typedSrcData, _image * srcImageSize);
          }

      } // Generate mipmaps.


      this.gl.generateMipmap(texture.type);
    } // Texture reading methods. ########################################################################################

  }, {
    key: "readTextureImage",
    value: function readTextureImage(textureName, mimeType, dstWidth, dstHeight, dstDepth, textureXOffset, textureYOffset, textureZOffset, dstXOffset, dstYOffset, dstZOffset, regionWidth, regionHeight, regionDepth) {
      var imageURI = this.readTextureURI(textureName, mimeType, dstWidth, dstHeight, dstDepth, textureXOffset, textureYOffset, textureZOffset, dstXOffset, dstYOffset, dstZOffset, regionWidth, regionHeight, regionDepth);
      return new Promise(function (resolve, reject) {
        var dstImage = new Image();

        dstImage.onload = function () {
          return resolve(dstImage);
        };

        dstImage.onerror = reject;
        dstImage.src = imageURI;
      });
    }
  }, {
    key: "readTextureURI",
    value: function readTextureURI(textureName, mimeType, dstWidth, dstHeight, dstDepth, textureXOffset, textureYOffset, textureZOffset, dstXOffset, dstYOffset, dstZOffset, regionWidth, regionHeight, regionDepth) {
      var texture = this.textures.get(textureName);

      if (texture === undefined) {
        // Unkown texture name.
        this.requestResource(ResourceType.TEXTURE, textureName);
        return '';
      } // Default output dimensions.


      dstWidth = dstWidth === undefined ? texture.width : dstWidth;
      dstHeight = dstHeight === undefined ? texture.height : dstHeight;
      dstDepth = dstDepth === undefined ? texture.depth : dstDepth; // Create a typed array buffer to store the texture data.

      var dstData = new Uint8ClampedArray(dstWidth * dstHeight * dstDepth * 4); // Read data from texture.

      this.readTextureData(textureName, dstData, dstWidth, dstHeight, dstDepth, textureXOffset, textureYOffset, textureZOffset, dstXOffset, dstYOffset, dstZOffset, regionWidth, regionHeight, regionDepth); // Create a canvas with the same width and height as the image.

      var canvas = document.createElement('canvas');
      canvas.width = dstWidth;
      canvas.height = dstHeight * dstDepth; // Get the 2D rendering context from the canvas.

      var canvasContext = canvas.getContext('2d');

      if (canvasContext === null) {
        console.error('Canvas failed to return a 2D context');
        return '';
      } // Flip the canvas vertically.


      canvasContext.translate(0, dstHeight);
      canvasContext.scale(1, -1); // Insert the data into the canvas.

      canvasContext.getImageData(0, 0, dstWidth, dstHeight * dstDepth).data.set(dstData); // ? Should it be createImageData instead of getImageData?
      // const imageData = canvasContext.createImageData(dstWidth, dstHeight * dstDepth);
      // imageData.data.set(dstData);
      // canvasContext.putImageData(imageData, 0, 0);
      // Return the canvas content as an image data URL with given mimeType.

      return canvas.toDataURL(mimeType);
    }
  }, {
    key: "readTextureData",
    value: function readTextureData(textureName, dstData, dstWidth, dstHeight, dstDepth) {
      var textureXOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var textureYOffset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var textureZOffset = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var dstXOffset = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var dstYOffset = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var dstZOffset = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
      var regionWidth = arguments.length > 11 ? arguments[11] : undefined;
      var regionHeight = arguments.length > 12 ? arguments[12] : undefined;
      var regionDepth = arguments.length > 13 ? arguments[13] : undefined;
      var texture = this.textures.get(textureName);

      if (texture === undefined) {
        // Unkown texture name.
        this.requestResource(ResourceType.TEXTURE, textureName);
        return;
      } // Default output dimensions.


      dstWidth = dstWidth === undefined ? texture.width : dstWidth;
      dstHeight = dstHeight === undefined ? texture.height : dstHeight;
      dstDepth = dstDepth === undefined ? texture.depth : dstDepth; // Default region dimensions.

      if (regionWidth === undefined) {
        regionWidth = Math.min(texture.width - textureXOffset, dstWidth - dstXOffset);
      }

      if (regionHeight === undefined) {
        regionHeight = Math.min(texture.height - textureYOffset, dstHeight - dstYOffset);
      }

      if (regionDepth === undefined) {
        regionDepth = Math.min(texture.depth - textureZOffset, dstDepth - dstZOffset);
      } // Sizes.


      var pixelSize = formatByteLength(texture.format);
      var regionRowSize = regionWidth * pixelSize;
      var srcRowSize = texture.width * pixelSize;
      var dstRowSize = dstWidth * pixelSize;
      var srcImageSize = texture.height * srcRowSize;
      var dstImageSize = dstHeight * dstRowSize;
      var srcOffset = textureZOffset * srcImageSize + textureYOffset * srcRowSize + textureXOffset * pixelSize;
      var dstOffset = dstZOffset * dstImageSize + dstYOffset * dstRowSize + dstXOffset * pixelSize; // If the GPU texture object is not available, read values from the CPU byte array.

      if (texture.textureObject === null) {
        var dstByteArray = new Uint8Array(dstData.buffer, dstData.byteOffset, dstData.byteLength);

        for (var image = 0; image < regionDepth; image++) {
          for (var row = 0; row < regionHeight; row++) {
            var dstRowBegin = dstOffset + image * dstImageSize + row * dstRowSize;
            var srcRowBegin = srcOffset + image * srcImageSize + row * srcRowSize;
            dstByteArray.set(texture.byteArray.subarray(srcRowBegin, srcRowBegin + regionRowSize), dstRowBegin);
          }
        }

        return;
      } // Unbind any pixel pack buffer object.


      this.gl.bindBuffer(this.gl.PIXEL_PACK_BUFFER, null); // Setup packing and unpacking parameters.

      this.gl.pixelStorei(this.gl.PACK_SKIP_PIXELS, dstXOffset);
      this.gl.pixelStorei(this.gl.PACK_SKIP_ROWS, dstYOffset);
      this.gl.pixelStorei(this.gl.PACK_ROW_LENGTH, dstWidth);
      this.gl.pixelStorei(this.gl.PACK_ALIGNMENT, byteAlignment(dstOffset, dstRowSize));
      this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, byteAlignment(srcOffset, srcRowSize)); // Get the corresponding parameters for the given texture internal format.

      var format = unsizedFormat(texture.format);
      var dataType = formatDataType(texture.format);
      var typedDstData = bufferDataTypedArray(dataType, dstData); // Create a new framebuffer object.

      var framebufferObject = this.gl.createFramebuffer();

      if (framebufferObject === null) {
        console.error('WebGL failed to create a new framebuffer object.');
        return;
      } // Bind the framebuffer object and its attachment for reading.


      this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, framebufferObject);
      this.gl.readBuffer(this.gl.COLOR_ATTACHMENT0); // Read data from the texture object.

      var _ref = [this.gl.READ_FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0],
          f = _ref[0],
          a = _ref[1];
      var x = textureXOffset,
          y = textureYOffset;
      var w = regionWidth,
          h = regionHeight;

      switch (texture.type) {
        case TextureType.TEX_2D_ARRAY:
        case TextureType.TEX_3D:
          for (var _image2 = 0; _image2 < regionDepth; _image2++) {
            this.gl.framebufferTextureLayer(f, a, texture.textureObject, 0, textureZOffset + _image2);
            this.gl.readPixels(x, y, w, h, format, dataType, typedDstData, _image2 * dstImageSize);
          }

          break;

        case TextureType.TEX_2D:
          this.gl.framebufferTexture2D(f, a, texture.type, texture.textureObject, 0);
          this.gl.readPixels(x, y, w, h, format, dataType, typedDstData);
          break;

        case TextureType.TEX_CUBE:
          for (var _image3 = 0; _image3 < regionDepth; _image3++) {
            var target = this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + textureZOffset + _image3;
            this.gl.framebufferTexture2D(f, a, target, texture.textureObject, 0);
            this.gl.readPixels(x, y, w, h, format, dataType, typedDstData, _image3 * dstImageSize);
          }

      } // Delete the framebuffer object.


      this.gl.deleteFramebuffer(framebufferObject);
    } // Render methods. #################################################################################################

  }, {
    key: "clear",
    value: function clear() {
      var framebufferName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var framebuffer = framebufferName === null ? null : this.getLoadedFramebuffer(framebufferName);

      if (framebuffer === undefined) {
        // Abort clear.
        return;
      } // Setup framebuffer object.


      if (framebuffer === null) {
        // Bind the canvas as the render target.
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null); // Set viewport to canvas size.

        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
      } else {
        // Bind the framebuffer as the render target.
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer.framebufferObject); // Set viewport to framebuffer size.

        this.gl.viewport(0, 0, framebuffer.width, framebuffer.height);
      } // Clear the framebuffer.


      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT | this.gl.STENCIL_BUFFER_BIT);
    }
  }, {
    key: "render",
    value: function render(programName, primitiveName, uniforms, textures) {
      var framebufferName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var program = this.getLoadedProgram(programName);
      var primitive = this.getLoadedPrimitive(primitiveName);
      var framebuffer = framebufferName === null ? null : this.getLoadedFramebuffer(framebufferName);

      if (program === undefined || primitive === undefined || framebuffer === undefined) {
        // Abort rendering.
        return;
      } // Bind program object.


      this.gl.useProgram(program.programObject); // Setup framebuffer object.

      if (framebuffer === null) {
        // Bind the canvas as the render target.
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null); // Set viewport to canvas size.

        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
      } else {
        // Bind the framebuffer as the render target.
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer.framebufferObject); // Set viewport to framebuffer size.

        this.gl.viewport(0, 0, framebuffer.width, framebuffer.height);
      } // Setup uniforms.


      if (uniforms !== undefined) {
        var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
          for (var _iterator13 = uniforms[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var _step13$value = _slicedToArray(_step13.value, 2),
                uniformName = _step13$value[0],
                data = _step13$value[1];

            var uniform = program.uniforms.get(uniformName);

            if (uniform !== undefined) {
              for (var index = 0; index < uniform.locations.length; index++) {
                var subOffset = index * shaderDataByteLength(uniform.type, BufferDataType.SI32);
                setUniformValues(this.gl, uniform.type, uniform.locations[index], new DataView(data.buffer, data.byteOffset + subOffset, data.byteLength - subOffset));
              }
            }
          }
        } catch (err) {
          _didIteratorError13 = true;
          _iteratorError13 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
              _iterator13["return"]();
            }
          } finally {
            if (_didIteratorError13) {
              throw _iteratorError13;
            }
          }
        }
      } // Setup textures.


      if (textures !== undefined) {
        var textureUnit = 0;
        var _iteratorNormalCompletion14 = true;
        var _didIteratorError14 = false;
        var _iteratorError14 = undefined;

        try {
          for (var _iterator14 = textures[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
            var _step14$value = _slicedToArray(_step14.value, 2),
                uniformName = _step14$value[0],
                _step14$value$ = _step14$value[1],
                textureName = _step14$value$.textureName,
                samplerName = _step14$value$.samplerName;

            var _uniform = program.uniforms.get(uniformName);

            var texture = this.getLoadedTexture(textureName);
            var sampler = this.getLoadedSampler(samplerName);

            if (_uniform !== undefined && texture !== undefined && sampler !== undefined) {
              setUniformValues(this.gl, _uniform.type, _uniform.locations[0], new Int32Array([textureUnit]));
              this.gl.activeTexture(this.gl.TEXTURE0 + textureUnit);
              this.gl.bindTexture(texture.type, texture.textureObject);
              this.gl.bindSampler(textureUnit, sampler.samplerObject);
              textureUnit++;
            }
          }
        } catch (err) {
          _didIteratorError14 = true;
          _iteratorError14 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
              _iterator14["return"]();
            }
          } finally {
            if (_didIteratorError14) {
              throw _iteratorError14;
            }
          }
        }
      } // Bind vertex array object.


      this.gl.bindVertexArray(primitive.vertexArrayObject);

      if (primitive.indices === null) {
        // Non-indexed rendering.
        this.gl.drawArrays(primitive.type, 0, primitive.count);
      } else {
        // Indexed rendering.
        var indices = this.getLoadedAccessor(primitive.indices);

        if (indices !== undefined) {
          this.gl.drawElements(primitive.type, primitive.count, indices.bufferDataType, indices.offset);
        }
      } // Unbind vertex array object to prevent undesirable changes.


      this.gl.bindVertexArray(null);
    }
  }]);

  return LazyRenderer;
}();

export { BufferDataType, BufferTarget, LazyRenderer, PrimitiveType, RenderbufferFormat, RenderbufferUnsizedFormat, ResourceType, ShaderDataType, ShaderType, TextureFilter, TextureFormat, TextureType, TextureUnsizedFormat, TextureWrapping };
