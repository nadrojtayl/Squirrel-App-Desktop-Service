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

	var _fileCardContainer = __webpack_require__(180);

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
	    { style: { display: 'inline-block' } },
	    fileCards
	  );
	};

	exports.default = ArticleLibraryPresentation;

/***/ }

};