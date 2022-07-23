//
//  Load the packages needed for MathJax
//
import {TeX} from 'mathjax-full/js/input/tex.js';
import {HTMLDocument} from 'mathjax-full/js/handlers/html/HTMLDocument.js';
import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';
import {STATE} from 'mathjax-full/js/core/MathItem.js';
import {SerializedMmlVisitor} from 'mathjax-full/js/core/MmlTree/SerializedMmlVisitor.js';

import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';

//
//  Busproofs requires an output jax, which we aren't using
//
const packages = AllPackages.filter((name) => name !== 'bussproofs');

//
//  Create the input jax
//
const tex = new TeX({packages: packages});

//
//  Create an HTML document using a LiteDocument and the input jax
//
const html = new HTMLDocument('', liteAdaptor(), {InputJax: tex});

//
//  Create a MathML serializer
//
const visitor = new SerializedMmlVisitor();
const toMathML = (node => visitor.visitTree(node, html));

const tex2mml = function(tex) {
  return toMathML(html.convert(tex, {display: true, end: STATE.CONVERT}));
};

exports.tex2mml = tex2mml;
