exports.id = 0;
exports.modules = {

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _fileCardContainer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./fileCard/fileCardContainer.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _fileCardContainer2 = _interopRequireDefault(_fileCardContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArticleLibraryPresentation = function ArticleLibraryPresentation(_ref) {
	  var filePaths = _ref.filePaths;


	  var fileCards = filePaths.map(function (filePath, i) {
	    return _react2.default.createElement(
	      'li',
	      { key: i },
	      _react2.default.createElement(_fileCardContainer2.default, { path: filePath })
	    );
	  });

	  return _react2.default.createElement(
	    'div',
	    { width: '45%', className: 'articleLibrary easyui-panel' },
	    fileCards
	  );
	};

	exports.default = ArticleLibraryPresentation;

/***/ }

};