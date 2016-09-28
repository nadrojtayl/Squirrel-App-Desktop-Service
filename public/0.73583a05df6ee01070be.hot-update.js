exports.id = 0;
exports.modules = {

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

	var findsecondslash = function findsecondslash(string) {
	  var foundone = 0;
	  var indextoreturn;
	  string.split('').forEach(function (char, index) {
	    if (char === "/") {
	      if (foundone === 0) {
	        foundone = 1;
	      } else {
	        indextoreturn = index;
	      }
	    }
	  });
	  return indextoreturn + 1;
	};

	var FileCardContainer = function (_React$Component) {
	  _inherits(FileCardContainer, _React$Component);

	  function FileCardContainer(props) {
	    _classCallCheck(this, FileCardContainer);

	    return _possibleConstructorReturn(this, (FileCardContainer.__proto__ || Object.getPrototypeOf(FileCardContainer)).call(this, props));
	  }

	  _createClass(FileCardContainer, [{
	    key: 'expand',
	    value: function expand(url) {
	      console.log(url);
	      //const remote = require('electron').remote;
	      var BrowserWindow = remote.BrowserWindow;

	      var win = new BrowserWindow({ width: 800, height: 600 });
	      console.log('NEW');
	      var toload = 'file://' + topleveldir + '/' + url;
	      console.log(toload);
	      win.loadURL(toload);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { teal: true, 'lighten-2': true },
	        _react2.default.createElement('img', { draggable: 'true', onDragStart: function onDragStart(event) {
	            drag(event);
	          }, id: 'hello', style: { display: 'inline' }, className: 'Acorns', width: '10%', src: 'client/assets/acorn.png', onClick: function onClick() {
	            _this2.expand.bind(_this2)(_this2.props.path);
	          } }),
	        _react2.default.createElement(
	          'div',
	          { style: { display: 'inline' }, className: 'vAlign' },
	          _react2.default.createElement(
	            'h5',
	            { className: 'titles', style: { display: 'inline' } },
	            this.props.path.slice(findsecondslash(this.props.path)).replace('.html', "")
	          )
	        )
	      );
	    }
	  }]);

	  return FileCardContainer;
	}(_react2.default.Component);

	;

	exports.default = FileCardContainer;

/***/ }

};