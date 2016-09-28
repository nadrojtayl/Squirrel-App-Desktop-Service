exports.id = 0;
exports.modules = {

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _sidebarPresentation = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./sidebarPresentation.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _sidebarPresentation2 = _interopRequireDefault(_sidebarPresentation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SidebarContainer = function SidebarContainer(props) {

	  return _react2.default.createElement(_sidebarPresentation2.default, { folders: props.folders, loadFolder: props.loadFolder });
	};
	exports.default = SidebarContainer;

/***/ }

};