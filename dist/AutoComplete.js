window["AutoComplete"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var letters = 'abcdefghijklmnopqrstyxwz -|';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generate(search, category) {
    var n1 = getRandomInt(0, Math.floor(letters.length / 3));
    var n2 = getRandomInt(0, Math.floor(letters.length / 3));

    var name = '';

    for (var i = 0; i < n1; i++) {
        name += letters[getRandomInt(0, letters.length)];
    }

    name += search;

    for (var _i = 0; _i < n2; _i++) {
        name += letters[getRandomInt(0, letters.length)];
    }

    return { name: name, category: category };
}

var FakeCategoryProvider = function () {
    function FakeCategoryProvider() {
        _classCallCheck(this, FakeCategoryProvider);
    }

    _createClass(FakeCategoryProvider, [{
        key: 'find',
        value: function find(search) {
            var n = getRandomInt(0, 100);
            // let n = getRandomInt(500, 3000);
            var data = [];

            for (var i = 0; i < n; i++) {
                for (var j = 0; j < 5; j++) {
                    data.push(generate(search, 'category ' + i));
                }
            }

            var storage = {
                search: search,
                next: function next() {
                    if (data.length === 0) {
                        return Promise.reject('no next items');
                    } else {
                        // return Promise.resolve(data);
                        var out = [];

                        for (var _i2 = 0; _i2 < 13 && data.length !== 0; ++_i2) {
                            out.push(data.shift());
                        }

                        return Promise.resolve(out);
                    }
                }
            };

            return Promise.resolve(storage);
        }
    }]);

    return FakeCategoryProvider;
}();

exports.default = FakeCategoryProvider;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var letters = 'abcdefghijklmnopqrstyxwz -|';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generate(search) {
    var n1 = getRandomInt(0, Math.floor(letters.length / 3));
    var n2 = getRandomInt(0, Math.floor(letters.length / 3));

    var name = '';

    for (var i = 0; i < n1; i++) {
        name += letters[getRandomInt(0, letters.length)];
    }

    name += search;

    for (var _i = 0; _i < n2; _i++) {
        name += letters[getRandomInt(0, letters.length)];
    }

    return name;
}

var FakeProvider = function () {
    function FakeProvider() {
        _classCallCheck(this, FakeProvider);
    }

    _createClass(FakeProvider, [{
        key: 'find',
        value: function find(search) {
            var n = getRandomInt(0, 100);

            var storage = {
                i: 0,
                search: search,
                next: function next() {
                    if (this.i > n) {
                        return Promise.reject('no next items');
                    } else {
                        var out = [];

                        for (var j = 0; j < 20; ++j) {
                            out.push(generate(search));
                        }

                        this.i += out.length;

                        return Promise.resolve(out);
                    }
                }
            };

            return Promise.resolve(storage);
        }
    }]);

    return FakeProvider;
}();

exports.default = FakeProvider;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NetProvider = function () {
    function NetProvider(generateUrlFn) {
        _classCallCheck(this, NetProvider);

        this._generateUrlFn = generateUrlFn;
    }

    _createClass(NetProvider, [{
        key: 'find',
        value: function find(search) {
            var storage = {
                _requestPromise: '',
                next: function next() {
                    if (this._requestPromise) {
                        return Promise.reject('no next items');
                    } else {
                        this._requestPromise = $.get(this.generateUrlFn(search));

                        return this._requestPromise;
                    }
                }
            };

            return Promise.resolve(storage);
        }
    }]);

    return NetProvider;
}();

exports.default = NetProvider;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CategoryRenderer = function () {
    function CategoryRenderer() {
        _classCallCheck(this, CategoryRenderer);

        this._prevCategory = '';
    }

    _createClass(CategoryRenderer, [{
        key: 'render',
        value: function render(search, chunk) {
            var _this = this;

            return Promise.resolve(chunk.map(function (value) {
                return _this._renderItem(search, value);
            }));
        }
    }, {
        key: '_renderItem',
        value: function _renderItem(search, _ref) {
            var name = _ref.name,
                category = _ref.category;

            var out = '';

            if (this._prevCategory !== category) {
                out += '<div class="list_category">' + category + '</div>';
                this._prevCategory = category;
            }

            var label = name.replace(search, '<span class="list_item_intersection">' + search + '</span>');

            out += '<div class="list_item" data-value="' + name + '">' + label + '</div>';

            return out;
        }
    }]);

    return CategoryRenderer;
}();

exports.default = CategoryRenderer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleRenderer = function () {
    function SimpleRenderer() {
        _classCallCheck(this, SimpleRenderer);
    }

    _createClass(SimpleRenderer, [{
        key: "render",
        value: function render(search, chunk) {
            var _this = this;

            return Promise.resolve(chunk.map(function (value) {
                return _this._renderItem(search, value);
            }));
        }
    }, {
        key: "_renderItem",
        value: function _renderItem(search, value) {
            var label = value.replace(search, "<span class=\"list_item_intersection\">" + search + "</span>");

            return "<div class=\"list_item\" data-value=\"" + value + "\">" + label + "</div>";
        }
    }]);

    return SimpleRenderer;
}();

exports.default = SimpleRenderer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _ = {};

_.now = Date.now || function () {
    return new Date().getTime();
};

_.debounce = function (func, wait, immediate) {
    var timeout = void 0,
        args = void 0,
        context = void 0,
        timestamp = void 0,
        result = void 0;

    var later = function later() {
        var last = _.now() - timestamp;

        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function () {
        context = this;
        args = arguments;
        timestamp = _.now();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
};

exports.default = _;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NetProvider = exports.CategoryRenderer = exports.FakeCategoryProvider = exports.SimpleRenderer = exports.FakeProvider = exports.AutoComplete = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FakeProvider = __webpack_require__(1);

var _FakeProvider2 = _interopRequireDefault(_FakeProvider);

var _FakeCategoryProvider = __webpack_require__(0);

var _FakeCategoryProvider2 = _interopRequireDefault(_FakeCategoryProvider);

var _SimpleRenderer = __webpack_require__(4);

var _SimpleRenderer2 = _interopRequireDefault(_SimpleRenderer);

var _CategoryRenderer = __webpack_require__(3);

var _CategoryRenderer2 = _interopRequireDefault(_CategoryRenderer);

var _NetProvider = __webpack_require__(2);

var _NetProvider2 = _interopRequireDefault(_NetProvider);

var _underscore = __webpack_require__(5);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutoComplete = function () {
    function AutoComplete(input, provider, renderer) {
        _classCallCheck(this, AutoComplete);

        this.input = input;
        this.provider = provider;
        this.renderer = renderer;

        this._list = $('<div class="list"></div>')[0];
        this._selected = null;

        this._search = '';
        this._storage = null;
        this._gettingMore = false;

        this._init();
    }

    _createClass(AutoComplete, [{
        key: '_showMore',
        value: function _showMore() {
            var _this = this;

            if (!this._gettingMore) {
                this._gettingMore = true;
                this._showSpinner();

                this._storage.next().then(function (chunk) {
                    return _this.renderer.render(_this._storage.search, chunk);
                }).then(function (html) {
                    $(_this._list).append(html);
                    _this._gettingMore = false;
                    _this._hideSpinner();
                }).catch(function (error) {
                    _this._gettingMore = false;
                    _this._hideSpinner();
                    console.error(error);
                });
            }
        }
    }, {
        key: '_showSpinner',
        value: function _showSpinner() {}
    }, {
        key: '_hideSpinner',
        value: function _hideSpinner() {}
    }, {
        key: '_selectNext',
        value: function _selectNext() {
            if (this._selected) {
                this._getNext(this._selected).forEach(function (node) {
                    return $(node).trigger('click');
                });
            } else {
                [this._list.querySelector('[data-value]')].forEach(function (node) {
                    return $(node).trigger('click');
                });
            }
        }
    }, {
        key: '_getNext',
        value: function _getNext(node) {
            var next = node.nextElementSibling;

            while (next) {
                if (next.hasAttribute('data-value')) {
                    return [next];
                }

                next = next.nextElementSibling;
            }

            return [];
        }
    }, {
        key: '_selectPrev',
        value: function _selectPrev() {
            if (this._selected) {
                this._getPrev(this._selected).forEach(function (node) {
                    return $(node).trigger('click');
                });
            } else {
                [this._list.querySelector('[data-value]')].forEach(function (node) {
                    return $(node).trigger('click');
                });
            }
        }
    }, {
        key: '_getPrev',
        value: function _getPrev(node) {
            var prev = node.previousElementSibling;

            while (prev) {
                if (prev.hasAttribute('data-value')) {
                    return [prev];
                }

                prev = prev.previousElementSibling;
            }

            return [];
        }
    }, {
        key: '_scrollToSelectedItemIfNeeded',
        value: function _scrollToSelectedItemIfNeeded(node) {
            if (node.offsetTop + node.clientHeight > this._list.scrollTop + this._list.clientHeight) {
                this._list.scrollTop = node.offsetTop + node.clientHeight - this._list.clientHeight;
            } else if (node.offsetTop < this._list.scrollTop) {
                this._list.scrollTop = node.offsetTop;
            }
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            $(window).on('click', function (e) {
                if ($(_this2._list).is(':visible') && $(e.target).closest(_this2._list).length === 0) {
                    $(_this2._list).hide();
                }
            });

            $(this.input).on('input', _underscore2.default.debounce(function (e) {
                var search = _this2.input.value;

                if (search) {
                    _this2.provider.find(search).then(function (storage) {
                        _this2._storage = storage;
                        $(_this2._list).empty().scrollTop(0).show();
                        _this2._selected = null;
                        _this2._showMore();
                    });
                } else {
                    $(_this2._list).hide().empty();
                    _this2._selected = null;
                }
            }, 500));

            $(this.input).parent().on('keydown', function (e) {
                if (e.key === 'ArrowUp') {
                    _this2._selectPrev();
                } else if (e.key === 'ArrowDown') {
                    _this2._selectNext();
                }
            });

            var scrollTimeout = void 0;

            $(this._list).hide().insertAfter(this.input).on('scroll', _underscore2.default.debounce(function (e) {
                if (_this2._list.scrollHeight - _this2._list.clientHeight - _this2._list.scrollTop < Math.max(Math.min(200, _this2._list.clientHeight * 0.2), 50)) {
                    _this2._showMore();
                }
                _this2._list.classList.add('__scrolling');
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(function () {
                    return _this2._list.classList.remove('__scrolling');
                }, 100);
            }, 50)).on('click', '[data-value]', function (e) {
                (_this2._selected ? [_this2._selected] : []).forEach(function (node) {
                    return node.classList.remove('__selected');
                });
                _this2._selected = e.currentTarget;
                _this2._selected.classList.add('__selected');
                _this2.input.value = _this2._selected.getAttribute('data-value');

                _this2._scrollToSelectedItemIfNeeded(e.currentTarget);
            });
        }
    }]);

    return AutoComplete;
}();

exports.AutoComplete = AutoComplete;
exports.FakeProvider = _FakeProvider2.default;
exports.SimpleRenderer = _SimpleRenderer2.default;
exports.FakeCategoryProvider = _FakeCategoryProvider2.default;
exports.CategoryRenderer = _CategoryRenderer2.default;
exports.NetProvider = _NetProvider2.default;

/***/ })
/******/ ]);
//# sourceMappingURL=AutoComplete.js.map