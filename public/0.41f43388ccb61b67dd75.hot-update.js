exports.id = 0;
exports.modules = {

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _sidebarContainer = __webpack_require__(174);

	var _sidebarContainer2 = _interopRequireDefault(_sidebarContainer);

	var _articleLibraryContainer = __webpack_require__(178);

	var _articleLibraryContainer2 = _interopRequireDefault(_articleLibraryContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppPresentation = function AppPresentation(props) {

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_sidebarContainer2.default, { folders: props.folders, loadFolder: props.loadFolder }),
	    _react2.default.createElement(_articleLibraryContainer2.default, { folderPath: props.folderPath })
	  );
	};

	exports.default = AppPresentation;

/***/ }

};