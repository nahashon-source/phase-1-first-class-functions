// index.js

function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("Hello from named function!");
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("Hello from anonymous function!");
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };