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
	    return _react2.default.createElement(_folderContainer2.default, { folder: folder, loadFolder: props.loadFolder });
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: 'easyui-panel', style: { width: '500px', height: '600px', position: 'relative' } },
	    folders
	  );
	};

	exports.default = SidebarPresentation;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _folderPresentation = __webpack_require__(177);

	var _folderPresentation2 = _interopRequireDefault(_folderPresentation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FolderContainer = function FolderContainer(props) {
		return _react2.default.createElement('div', { className: 'easyui-draggable', 'data-options': 'onDrag:onDrag', style: { width: '100px', height: '100px', background: '#fafafa', border: '1px solid #ccc' } });
	};

	exports.default = FolderContainer;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FolderPresentation = function FolderPresentation(props) {
	  return _react2.default.createElement(
	    "div",
	    { width: "30%" },
	    _react2.default.createElement("img", { width: "30%", src: "client/assets/Folder-icon.png", onDrop: function onDrop(event) {
	        drop(event);
	      }, onDragOver: function onDragOver(event) {
	        allowDrop(event);
	      } }),
	    _react2.default.createElement(
	      "p",
	      { width: "30%" },
	      props.folder.replace('Stash/', "")
	    )
	  );
	};

	exports.default = FolderPresentation;

/***/ }

};