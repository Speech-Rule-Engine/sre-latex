//
//  Load the packages needed for MathJax
//
let {tex2mml} = require('./tex2mml');
let SRE = require('speech-rule-engine');

let latexToSpeech = async function(exprs, options) {
  await SRE.setupEngine(options);
  for (let expr of exprs) {
    console.log(SRE.toSpeech(tex2mml(expr)));
  }
};

exports.latexToSpeech = latexToSpeech;


