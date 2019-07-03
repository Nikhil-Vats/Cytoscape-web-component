#  Cytoscape Web Component

Implements [Cytoscape]() as a web component.

Graph theory (network) library for visualisation and analysis : http://js.cytoscape.org

## Component user docs: adding this component to your webpage

Hey! If you'd like to use this component on your webpage, please do the following:

Quickstart: There's a demo of this component [here](https://nikhil-vats.github.io/Cytoscape-web-component/examples/index.html). The complete method is given below -

### In the `<head>`, add:

The bundle.js file is in the dist folder of this repository. You can download it in your project using [curl](https://curl.haxx.se/download.html) -

```bash
curl -O https://github.com/Nikhil-Vats/Cytoscape-web-component/blob/master/dist/bundle.js
```
```html
<!-- the library for the webcomponent -->
<script src="dist/bundle.js" type="module"></script>
```

This links to the relevant scripts to define the component and fetch data.

### In the `<body>`

Where you want your WebComponent to appear, add the following:

```html
<cytoscape-web attribute="value">
 </cytoscape-web>
```

## Developer docs

### To set up locally for development

1. Clone the repo
2. `cd cytoscape-web` and then `npm install` to install dependencies.

All of the editable source files for css and js are in `src`. To bundle for prod, run the following commands:

#### CSS

Assuming [less](http://lesscss.org/) is installed globally:

```
npm run less
```

#### JS

Assuming [webpack](https://webpack.js.org/) is installed globally:

##### Single build:
```
npm run build
```

##### Developing:
Run each of these commands in separate terminals:

To rebuild your js every time you save:

```bash
npm run dev
```

To serve your page at [http://localhost:3456](http://localhost:3456):
```bash
npm run server
```
#### Example component
To see a demo component implemented similarly to this component, visit
[biojs-webcomponent-prototype](https://github.com/yochannah/biojs-webcomponent-prototype).

This uses [hybrids.js](https://github.com/hybridsjs/hybrids) to implement webcomponents easily.
