exports.id = 0;
exports.modules = [
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _fs = __webpack_require__(171);

	var _fs2 = _interopRequireDefault(_fs);

	var _path = __webpack_require__(172);

	var _path2 = _interopRequireDefault(_path);

	var _appPresentation = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./appPresentation.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _appPresentation2 = _interopRequireDefault(_appPresentation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(181);

	var AppContainer = function (_React$Component) {
	  _inherits(AppContainer, _React$Component);

	  function AppContainer(props) {
	    _classCallCheck(this, AppContainer);

	    var _this = _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).call(this, props));

	    _this.state = { currentFolder: null };
	    return _this;
	  }

	  _createClass(AppContainer, [{
	    key: 'loadFolder',
	    value: function loadFolder(folderPath) {
	      this.setState({ currentFolder: folderPath });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'app-container' },
	        _react2.default.createElement(_appPresentation2.default, { folders: this.props.folders, loadFolder: this.loadFolder.bind(this), folderPath: this.state.currentFolder })
	      );
	    }
	  }]);

	  return AppContainer;
	}(_react2.default.Component);

	;

	var getFolders = function getFolders() {
	  var dirs = _fs2.default.readdirSync('Stash').filter(function (dir) {
	    if (dir === '.DS_Store' || dir === 'Me') {
	      return false;
	    } else {
	      return true;
	    }
	  });
	  console.log(dirs);
	  dirs = dirs.map(function (dir) {
	    return 'Stash/' + dir;
	  });

	  dirs.push('Stash/Me/Mine');
	  dirs.push('Stash/Me/Recommended');

	  return dirs;
	};

	(0, _reactDom.render)(_react2.default.createElement(AppContainer, { folders: getFolders() }), document.getElementById('app'));

/***/ }
];