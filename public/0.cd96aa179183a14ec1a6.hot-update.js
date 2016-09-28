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

	var _folderContainer = __webpack_require__(176);

	var _folderContainer2 = _interopRequireDefault(_folderContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SidebarPresentation = function SidebarPresentation(props) {

	  var folders = props.folders.map(function (folder, index) {
	    return _react2.default.createElement(
	      'li',
	      { className: 'folder-list-item', key: index },
	      _react2.default.createElement(_folderContainer2.default, { folder: folder, loadFolder: props.loadFolder })
	    );
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: 'easyui-panel', style: { position: 'relative', overflow: 'hidden', width: '500px', height: '300px' } },
	    folders.map(function (object, i) {
	      return _react2.default.createElement(_folderContainer2.default, { obj: object, key: i });
	    })
	  );
	};

	exports.default = SidebarPresentation;

/***/ }

};