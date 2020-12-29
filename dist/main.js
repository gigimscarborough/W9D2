/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(obj) {\n    this.pos = obj.pos;\n    this.vel = obj.vel;\n    this.radius = obj.radius;\n    this.color = obj.color;\n}\n\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 6.3, false );\n    ctx.fillStyle = this.color\n    // ctx.stroke();\n    ctx.fill()\n}\n\nMovingObject.prototype.move = function(ctx) {\n    // debugger;\n    const that = this;\n    // console.log(that);\n    // console.log(ctx);\n    function myMove() {\n        // debugger;\n        that.pos[0] += that.vel[0];\n        that.pos[1] += that.vel[1];\n        // ctx.arc((that.pos[0] += ), (that.pos[1] += that.vel[1]), that.radius, 0, 6.3, false);\n        that.draw(ctx);\n    }\n    return setInterval(myMove, 100);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    \n    canvas = document.getElementById(\"game-canvas\");\n    window.ctx = canvas.getContext(\"2d\");\n    \n    ctx.fillStyle = \"black\"\n    ctx.fillRect(20, 15, 500, 500);\n    // console.log(newObj);\n\n    const newObj = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    })\n    newObj.draw(ctx);\n    debugger;\n    newObj.move(ctx);\n})\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;