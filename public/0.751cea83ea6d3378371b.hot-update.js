exports.id = 0;
exports.modules = {

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FolderPresentation = function FolderPresentation(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'easyui-draggable', style: { width: '100px', height: '100px' }, 'data-options': 'onDrag:onDrag', onClick: function onClick() {
	        return props.loadFolder(props.folder);
	      } },
	    _react2.default.createElement('img', { width: '500px', src: 'client/assets/Folder-icon.png', onDrop: function onDrop(event) {
	        drop(event);
	      }, onDragOver: function onDragOver(event) {
	        allowDrop(event);
	      } }),
	    _react2.default.createElement(
	      'p',
	      { width: '100%' },
	      props.folder.replace('Stash/', "")
	    )
	  );
	};

	exports.default = FolderPresentation;

/***/ }

};