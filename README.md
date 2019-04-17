# lazy-renderer
Lazy loading cached WebGL wrapper.

## Demo

A demo application is available at:

https://rafaelromeiro.github.io/lazy-renderer/

This corresponds to the *index.html* file in the root folder of this repository.

## Installation

Install this library with:
```
npm install lazy-renderer
```

To import this library as an ECMAScript module (preferred):
```javascript
import {
    LazyRenderer,
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
} from "lazy-renderer";
```

Alternatively, to import this library as a Node module (when ESM not available):
```javascript
const {
    LazyRenderer,
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
} = require("lazy-renderer");
```

## Browser

To use this library in a browser through IIFE:
```html
<script src="https://cdn.jsdelivr.net/npm/lazy-renderer/dist/lazy-renderer.iife.min.js"></script>
<script>
    const {
        LazyRenderer,
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
    } = window.LazyRenderer;
    // ...
</script>
```

## Usage

To use this library, an instance of the *LazyRenderer* class must be created:
```javascript
const lazyRenderer = new LazyRenderer(canvas, requestResource);
```
Where *canvas* must be an *HTMLCanvasElement* object and *requestResource* must be a callback of type *RequestResourceCallback*.

The callback type *RequestResourceCallback* receives a resource type (*ResourceType*) and a resource name (*string*).
It is called by the lazy-renderer every time a resource is **needed** but is not **available**.

In summary, the lazy-renderer manages named resources.
There are 8 types of resources:
* Framebuffer
* Program
* Shader
* Primitive
* Accessor
* Buffer
* Sampler
* Texture

To make a resource **available** to the lazy-renderer, it must first be registered through the appropriate *register* method.
There is a *register* method for each resource type.
A *register* method receives the name (*string*) of the resource followed by parameters specific for the resource type.
The resource information is stored in CPU memory and is not loaded into the GPU right away, hence the lazyness.

Information is loaded into the GPU only when **needed** (and **available**) inside a call to the *render* method.
The *render* method receives the names of the program (*string*), primitive (*string*) and framebuffer (*string* or *null*).
The program is **how** to render, the primitive is **what** to render and the framebuffer is **where** to render.
When passing *null* as the framebuffer name, the rendering is output to the canvas.

The user is encourage to call the *render* method without worrying about resource **availability**.
The *register* methods can be called reactively to the *requestResource* callback.

The *render* method can also receive mappings regarding uniforms and textures.
The *uniforms* (*Map<string, ArrayBufferView>*) maps a *uniform* name to an *ArrayBufferView* containing the values to be loaded into the GPU.
The *textures* (*Map<string, { textureName: string, samplerName: string}>*) maps a *uniform sampler* name to a pair of texture resource name and a sampler resource name.

Finally, buffers and textures can be written or read through the methods:
* *writeBufferData*, that writes into the buffer from an *ArrayBufferView*.
* *readBufferData*, that reads the buffer contents to an *ArrayBufferView*.
* *writeTextureURI*, that writes into the texture from an image URI.
* *readTextureURI*, that reads the texture contents to an image URI.
* *writeTextureImage*, that writes into the texture from an *HTMLImageElement*.
* *readTextureImage*, that reads the texture contents to an *HTMLImageElement*.
* *writeTextureData*, that writes into the texture from an *ArrayBufferView*.
* *readTextureData*, that reads the texture contents to an *ArrayBufferView*.

## Documentation

A more in-depth documentation is still being written.