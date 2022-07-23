const PACKAGE = require('mathjax-full/components/webpack.common.js');

module.exports = PACKAGE(
  'tex2mml',                            // the name of the package to build
  '../node_modules/mathjax-full/js',    // location of the mathjax library
  [],                                   // packages to link to
  __dirname,                            // our directory
  '../bin'                              // where to put the packaged component
);

