# lazy-renderer
Lazy loading cached WebGL wrapper.

## Demo

A demo application is available at:

https://rafaelromeiro.github.io/lazy-renderer/

This corresponds to the *index.html* file in the root folder of this repository.

## Installation
This library is not yet available as a package in a repository.
For now, you can clone (or download) this library from GitHub and then create a symbolic link.

First, inside the library folder (.../lazy-renderer/) call:
```
npm link
```
This will create a global reference in your npm installation.

Then, inside your project folder (.../your-project/) you can install this library with:
```
npm link @brl-seismic-viewer/lazy-renderer
```
This will add a symbolic link inside the *node_modules* folder of your project.

To import this library as an ECMAScript module (preferred):
```javascript
import { LazyRenderer } from "@brl-seismic-viewer/lazy-renderer";
```

Alternatively, to import this library as a Node module (when ESM not available):
```javascript
const { LazyRenderer } = require("@brl-seismic-viewer/lazy-renderer");
```

## Build

The *dist* folder is already included in the GitHub repository.
Then, there is no need to build the library to use it.
Just follow the installation steps above.

If you want to make changes to the library, you need to install the dev dependencies which can be accomplished running inside the library folder (.../lazy-renderer/) the command:
```
npm install
```

Then, to build the library you can call:
```
npm run build
```
This will typecheck and export types with TypeScript, transpile the code with Babel and create the ESM and CJS modules with Rollup.

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
* *writeTextureBlob*, that writes into the texture from an image *Blob*.
* *writeTextureImage*, that writes into the texture from an *HTMLImageElement*.
* *writeTextureData*, that writes into the texture from an *ArrayBufferView*.
* *readTextureImage*, that reads the texture contents to an *HTMLImageElement*.
* *readTextureURL*, that reads the texture contents to an image data URL.
* *readTextureData*, that reads the texture contents to an *ArrayBufferView*.

## Documentation

A more in-depth documentation is still being written.