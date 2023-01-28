// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
// const welcome = name => {
//     const greetings = msg => {
//         console.log(`${msg}  ${name}`);
//     }
//     return greetings;
// }

// const person = welcome("Dipanshu");
// person("hie");

//rorate an array

// let arr = [1,2,3,4,5];
// let n = 3;

// const rotate = (arr, n) => {
//     for(let i = 1 ; i <= n ; i++){
//         let ele = arr.pop();
//         arr.unshift(ele);
//     }
//     return arr;
// }

// console.log(rotate(arr, n));

//comapre strings

// let str1 = "codehere";
// let str2 = "herecode";

// const compareStrings = (str1, str2) =>
//   str1.split("").sort().join("") === str2.split("").sort().join("")
//     ? true
//     : false;

// console.log(compareStrings(str1, str2));

//count strings

// let arr = ["aaa", "bbb", "ccc", "bbb", "ccc", "bbb", "aaa"];

//FindMaxChar
// let str1 = "This is javascript code and you to find max chari";

// const FindMaxChar = (str) => {
//   let lowerStr = str.toLowerCase();
//   let result = {};
//   let maxChar = "";
//   let maxCount = 0;
//   let multiMaxChar = [];

//   for (let char of lowerStr) {
//     if (char === " ") {
//       continue;
//     } else if (result.hasOwnProperty(char)) {
//       result[char] = result[char] + 1;
//     } else {
//       result[char] = 1;
//     }
//   }
//   for (let key in result) {
//     if (result[key] > maxCount) {
//       maxCount = result[key];
//       maxChar = key;
//     }
//   }
//   for (let key in result) {
//     if (result[key] === maxCount) {
//       multiMaxChar.push(key);
//     }
//   }
//   if (multiMaxChar.length > 1) {
//     return multiMaxChar.join(",");
//   } else {
//     return maxChar;
//   }
// };

// console.log(FindMaxChar(str1));

//findSimilar key and value from object

// const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
// const input2 = { a: 2, e: 12, f: 6, d: 10 };

// const output = { d: 10, e: 12 };

// const findSimilar = (obj1, obj2) => {
//   const result = {};
//   for (let key in obj1) {
//     if (obj1[key] == obj2[key]) {
//       Object.assign(result, { [key]: obj1[key] });
//     }
//   }
//   return result;
// };

// console.log(findSimilar(input1, input2));

//find second largest number in array

// const array1 = [1, 2, -2, 11, 7, 1];
// const array2 = [1, 4, 7, 2, 4];

// const secondLargest = arr1 => {
//   const newarray = arr1.sort((a, b) => b - a).filter((item, index) => arr1.indexOf(item) === index);
//   return(newarray[1]);
// };

// console.log(secondLargest(array2));

//rotate array by 2 places forword

// const input = [2, 7, 11, 4, -2];
// const input2 = [11, 4, -2, 2, 7];

// const rotateArray = (arr) => {
//   for (let i = 0; i < 2; i++) {
//     let ele = arr.shift();
//     arr.push(ele);
//   }
//   console.log(arr);
// };
// rotateArray(input);

//Count all Vowels

// const countVowels = sentence => {
//         let count  = 0;
//         const vowels = ["a", "e", "i", "o", "u"];

//         for(let char of sentence){
//             console.log(char);
//             if(vowels.includes(char.toLowerCase())){
//                 count++;
//             }
//         }
//         return count;
// }

// console.log(countVowels("Hie there my name is Dipanshu"));

//isPalindrome

// const isPalindrome = (str) => {
//   return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
// };

// console.log(isPalindrome("love"));

//Remove duplicates

// const arr = [1, 3, 4, 1, 6, 7, 3];
// //[1,1,3,3,4,6,7]
// const removeduplicates = (array) => {
//   return array.sort((a, b) => a - b).filter((item, index) => array.indexOf(item) === index);
// };

// console.log(removeduplicates(arr));
//Find Max and Min number in an array with and without method

// const arr = [1, 3, 4, 1, 6, 7, 3];
//withoutMethod
// const findMax = (array) => {
//   let max = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// };
// console.log(findMax(arr));
//withMethod
//  const array = [1, 3, 4, 1, 6, 7, 3];

//  const findMax = arr => {
//     const max = arr.reduce((acc, cur) => {
//         console.log(acc, cur);
//         return acc > cur ? acc : cur;
//     });
//     return max;
//  }
//  console.log(findMax(array));
//FindMMin
//   const arr = [1, 3, 4, 1, 6, 7, 3];
//withoutMethod
// const findMin = (array) => {
//   let max = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < max) {
//       max = array[i];
//     }
//   }
//   return max;
// };
// console.log(findMin(arr));
//withMethod

//  const findMin = arr => {
//     const max = arr.reduce((acc, cur) => {
//         console.log(acc, cur);
//         return acc < cur ? acc : cur;
//     });
//     return max;
//  }
//  console.log(findMin(arr));

//fizzBuzz
var fizzBuzz = function fizzBuzz() {
  var c3 = 0;
  var c5 = 0;
  for (var i = 1; i <= 100; i++) {
    c3++;
    c5++;
    var d = "";
    if (c3 == 3) {
      d += "fizz";
      c3 = 0;
    }
    if (c5 == 5) {
      d += "buzz";
      c5 = 0;
    }
    if (d == "") {
      console.log(i);
    } else {
      console.log(d);
    }
  }
};
fizzBuzz();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39403" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map