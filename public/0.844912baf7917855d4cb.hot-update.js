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
	    { width: '30%', style: { display: 'inline-block' } },
	    _react2.default.createElement('img', { width: '30%', src: 'client/assets/Folder-icon.png', onDrop: function onDrop(event) {
	        drop(event);
	      }, onDragOver: function onDragOver(event) {
	        allowDrop(event);
	      } })
	  );
	};

	exports.default = FolderPresentation;

/***/ }

};