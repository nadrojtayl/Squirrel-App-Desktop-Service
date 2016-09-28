exports.id = 0;
exports.modules = {

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _folderContainer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./folder/folderContainer.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _folderContainer2 = _interopRequireDefault(_folderContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SidebarPresentation = function SidebarPresentation(props) {

	  var folders = props.folders.map(function (folder, index) {
	    return _react2.default.createElement(_folderContainer2.default, { folder: folder, loadFolder: props.loadFolder });
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: 'easyui-panel', style: { width: '500px', height: '600px', position: 'relative' } },
	    folders
	  );
	};

	exports.default = SidebarPresentation;

/***/ }

};