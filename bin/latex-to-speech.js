//
//  Load the packages needed for MathJax
//
let {tex2mml} = require('./tex2mml');
let SRE = require('speech-rule-engine');

let latexToSpeech = async function(exprs, options) {
  await SRE.setupEngine(options);
  return exprs.map(x => SRE.toSpeech(tex2mml(x)));
};

exports.latexToSpeech = latexToSpeech;


