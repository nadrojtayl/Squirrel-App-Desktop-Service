exports.id = 0;
exports.modules = {

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _articleLibraryPresentation = __webpack_require__(179);

	var _articleLibraryPresentation2 = _interopRequireDefault(_articleLibraryPresentation);

	var _fs = __webpack_require__(171);

	var _fs2 = _interopRequireDefault(_fs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArticleLibraryContainer = function ArticleLibraryContainer(_ref) {
	  var folderPath = _ref.folderPath;


	  var filePaths = [];

	  if (folderPath) {
	    _fs2.default.readdirSync(folderPath).forEach(function (fileName) {
	      var filePath = folderPath + '/' + fileName;
	      filePaths.push(filePath);
	    });
	  }

	  console.log(filePaths);

	  return _react2.default.createElement(_articleLibraryPresentation2.default, { filePaths: filePaths.filter(function (path) {
	      path.indexOf('.DS') === -1;
	    }) });
	};

	exports.default = ArticleLibraryContainer;

/***/ }

};