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
	    null,
	    fileCards
	  );
	};

	exports.default = ArticleLibraryPresentation;

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FileCardContainer = function (_React$Component) {
	  _inherits(FileCardContainer, _React$Component);

	  function FileCardContainer(props) {
	    _classCallCheck(this, FileCardContainer);

	    return _possibleConstructorReturn(this, (FileCardContainer.__proto__ || Object.getPrototypeOf(FileCardContainer)).call(this, props));
	  }

	  _createClass(FileCardContainer, [{
	    key: 'expand',
	    value: function expand(url) {
	      console.log('expanding');
	      var remote = __webpack_require__(185).remote;
	      var BrowserWindow = remote.BrowserWindow;

	      var win = new BrowserWindow({ width: 800, height: 600 });
	      console.log('NEW');
	      win.loadURL('https://www.nytimes.com');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('button', { onClick: this.expand.bind(this) });
	    }
	  }]);

	  return FileCardContainer;
	}(_react2.default.Component);

	;

	exports.default = FileCardContainer;

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {var fs = __webpack_require__(171)
	var path = __webpack_require__(172)

	module.exports = path.join(__dirname, fs.readFileSync(path.join(__dirname, 'path.txt'), 'utf-8'))

	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }

};