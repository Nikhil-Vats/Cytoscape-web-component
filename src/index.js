import {
  define
} from 'hybrids';
import styles from '../dist/style.css';
import cytoscape from '../component-dist/cytoscape.cjs.min.js';
/* Add any additional library imports you may need here. */


/**
 * === Don't remove this method or styles will break.
 * We directly insert a style element into the document head
 * in order to embed styles.
 **/
function styleTemplate() {
  var myStyle = document.createElement("style");
  myStyle.setAttribute("id", "CytoscapeWebComponentStyle");
  myStyle.setAttribute("type", "text/css");
  myStyle.innerHTML = styles.toString();
  return myStyle;
}

/**
 * === Don't remove this method or styles will break.
 * Check if there is already a style element for this component and add if not.
 * Useful in cases where this component might be initialised more than once.
 **/
function addStylesIfNeeded() {
  if (!document.getElementById("CytoscapeWebComponentStyle")) {
    document.head.appendChild(styleTemplate());
  }
}

/**
 * initialises an existing library, called inside the web component wrapper.
 **/
function initComponent(options) {
  return {
    get: (host, v) => v, // required to be recognized as property descriptor,
    set: () => {}, //required to stop TypeError: setting getter-only property "x"
    connect: (host, key) => {
      host[key] = cytoscape({

        container: host, // container to render in
      
        elements: [ // list of graph elements to start with
          { // node a
            data: { id: host.getAttribute("data-a") }
          },
          { // node b
            data: { id: host.getAttribute("data-b") }
          },
          { // edge ab
            data: { id: 'ab', source: 'a', target: 'b' }
          }
        ],
      
        style: [ // the stylesheet for the graph
          {
            selector: 'node',
            style: {
              'background-color': '#666',
              'label': 'data(id)'
            }
          },
      
          {
            selector: 'edge',
            style: {
              'width': 3,
              'line-color': '#ccc',
              'target-arrow-color': '#ccc',
              'target-arrow-shape': 'triangle'
            }
          }
        ],
      
        layout: {
          name: 'grid',
          rows: 1
        }
      
      });
      /**********************************************************/
      /************************ GUIDANCE ************************/
      /**********************************************************/
      /** If your component uses a traditional approach of     **/
      /** accepting an element and updating its content,       **/
      /** initialise it here and pass `host` as the argument   **/
      /** for the element that would normally be passed to     **/
      /** your script. If you are creating your element from   **/
      /** scratch, see the hybrids.js docs and maybe delete    **/
      /** this method and follow the hybrids examples instead  **/
      /** https://github.com/hybridsjs/hybrids                 **/
      /**                                                      **/
      /** See also this example component for guidance:        **/
      /* https://github.com/yochannah/biojs-webcomponent-prototype
      /** or admire the minimal demo below                     **/
      /**                                                      **/
      /**********************************************************/
      /****** WRITE CODE TO INITIALISE YOUR COMPONENT HERE ******/
      /**********************************************************/

      /** If you need to pass in a parameter - e.g. perhaps    **/
      /** you have a gene visualisation so you want a gene id  **/
      /** as a parameter, set the parameter as an attribute,   **/
      /** and then get the attribute from host, like this:     **/
      // var myGeneId = host.getAttribute("geneId");
      /** The line above would return BRCA1 if you've left the **/
      /** default settings. Delete if needed. **/

      // host.innerHTML = "<div>A placeholder for a pretty" +
      //   " visualisation for " + myGeneId + ".</div>";


      //leave this line here. Deleting it will result in your css going AWOL.
      addStylesIfNeeded();
    }
  }
}

/**
 * This is where we place the bulk of the code, wrapping an existing BioJS component
 * or where we might initialise a component written from scratch. Needs to be
 * paired with a `define` method call - see end of the page.
 **/
export const CytoscapeWebComponent = {
  init: initComponent()
};

// this line connects the html element in index.html with the javascript defined above.
define('cytoscape-web', CytoscapeWebComponent);
