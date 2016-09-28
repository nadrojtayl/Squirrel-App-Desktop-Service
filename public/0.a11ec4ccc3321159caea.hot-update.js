exports.id = 0;
exports.modules = {

/***/ 0:
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

	var _appPresentation = __webpack_require__(173);

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

/***/ },

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
	    _react2.default.createElement(_sidebarContainer2.default, { className: 'col-2 sidebar', folders: props.folders, loadFolder: props.loadFolder }),
	    _react2.default.createElement(_articleLibraryContainer2.default, { className: 'col-9', folderPath: props.folderPath })
	  );
	};

	exports.default = AppPresentation;

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _sidebarPresentation = __webpack_require__(175);

	var _sidebarPresentation2 = _interopRequireDefault(_sidebarPresentation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SidebarContainer = function SidebarContainer(props) {

	  return _react2.default.createElement(_sidebarPresentation2.default, { folders: props.folders, loadFolder: props.loadFolder });
	};
	exports.default = SidebarContainer;

/***/ },

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
	    { className: 'easyui-panel', style: { width: '500px', height: '600px' } },
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
	  return _react2.default.createElement(
	    'div',
	    { width: '30%', className: 'easyui-draggable', 'data-options': 'onDrag:onDrag', onClick: function onClick() {
	        return props.loadFolder(props.folder);
	      } },
	    _react2.default.createElement(_folderPresentation2.default, { folder: props.folder })
	  );
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

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _articleLibraryPresentation = __webpack_require__(179);

	var _articleLibraryPresentation2 = _interopRequireDefault(_articleLibraryPresentation);

	var _fs = __webpack_require__(171);

	var _fs2 = _interopRequireDefault(_fs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArticleLibraryContainer = function ArticleLibraryContainer(_ref) {
	  var folderPath = _ref.folderPath;


	  var filePaths = [];

	  if (folderPath) {
	    _fs2.default.readdirSync(folderPath).forEach(function (fileName) {
	      var filePath = folderPath + '/' + fileName;
	      filePaths.push(filePath);
	    });
	  }

	  console.log(filePaths);

	  return _react2.default.createElement(_articleLibraryPresentation2.default, { filePaths: filePaths.filter(function (path) {
	      return path.indexOf('.DS') === -1;
	    }) });
	};

	exports.default = ArticleLibraryContainer;

/***/ },

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
	    { width: '45%', className: 'articleLibrary', style: { display: 'inline-block', float: 'left' } },
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
	        null,
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