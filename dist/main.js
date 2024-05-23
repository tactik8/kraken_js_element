var $gXNCa$krakenthing = require("krakenthing");
var $gXNCa$liquidjs = require("liquidjs");
var $gXNCa$krakenschema = require("krakenschema");

"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.KrElements = void 0;
var $49a0e07071a6b84f$exports = {};
"use strict";
Object.defineProperty($49a0e07071a6b84f$exports, "__esModule", {
    value: true
});
$49a0e07071a6b84f$exports.KrStateElement = void 0;

function $49a0e07071a6b84f$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $49a0e07071a6b84f$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $49a0e07071a6b84f$var$_typeof(o);
}
function $49a0e07071a6b84f$var$_createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = $49a0e07071a6b84f$var$_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function $49a0e07071a6b84f$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $49a0e07071a6b84f$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $49a0e07071a6b84f$var$_arrayLikeToArray(o, minLen);
}
function $49a0e07071a6b84f$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $49a0e07071a6b84f$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $49a0e07071a6b84f$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $49a0e07071a6b84f$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($49a0e07071a6b84f$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $49a0e07071a6b84f$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $49a0e07071a6b84f$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $49a0e07071a6b84f$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $49a0e07071a6b84f$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $49a0e07071a6b84f$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $49a0e07071a6b84f$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $49a0e07071a6b84f$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $49a0e07071a6b84f$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $49a0e07071a6b84f$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $49a0e07071a6b84f$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $49a0e07071a6b84f$var$_toPropertyKey(t) {
    var i = $49a0e07071a6b84f$var$_toPrimitive(t, "string");
    return "symbol" == $49a0e07071a6b84f$var$_typeof(i) ? i : i + "";
}
function $49a0e07071a6b84f$var$_toPrimitive(t, r) {
    if ("object" != $49a0e07071a6b84f$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $49a0e07071a6b84f$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $49a0e07071a6b84f$var$_callSuper(t, o, e) {
    return o = $49a0e07071a6b84f$var$_getPrototypeOf(o), $49a0e07071a6b84f$var$_possibleConstructorReturn(t, $49a0e07071a6b84f$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $49a0e07071a6b84f$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $49a0e07071a6b84f$var$_possibleConstructorReturn(self, call) {
    if (call && ($49a0e07071a6b84f$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $49a0e07071a6b84f$var$_assertThisInitialized(self);
}
function $49a0e07071a6b84f$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $49a0e07071a6b84f$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $49a0e07071a6b84f$var$_setPrototypeOf(subClass, superClass);
}
function $49a0e07071a6b84f$var$_wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    $49a0e07071a6b84f$var$_wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !$49a0e07071a6b84f$var$_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return $49a0e07071a6b84f$var$_construct(Class, arguments, $49a0e07071a6b84f$var$_getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return $49a0e07071a6b84f$var$_setPrototypeOf(Wrapper, Class);
    };
    return $49a0e07071a6b84f$var$_wrapNativeSuper(Class);
}
function $49a0e07071a6b84f$var$_construct(t, e, r) {
    if ($49a0e07071a6b84f$var$_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [
        null
    ];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && $49a0e07071a6b84f$var$_setPrototypeOf(p, r.prototype), p;
}
function $49a0e07071a6b84f$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($49a0e07071a6b84f$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $49a0e07071a6b84f$var$_isNativeFunction(fn) {
    try {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
        return typeof fn === "function";
    }
}
function $49a0e07071a6b84f$var$_setPrototypeOf(o, p) {
    $49a0e07071a6b84f$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $49a0e07071a6b84f$var$_setPrototypeOf(o, p);
}
function $49a0e07071a6b84f$var$_getPrototypeOf(o) {
    $49a0e07071a6b84f$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $49a0e07071a6b84f$var$_getPrototypeOf(o);
}
var $49a0e07071a6b84f$var$KrStateElement = $49a0e07071a6b84f$exports.KrStateElement = /*#__PURE__*/ function(_HTMLElement) {
    /**
   * State manager 
   */ function KrStateElement() {
        var _this;
        $49a0e07071a6b84f$var$_classCallCheck(this, KrStateElement);
        _this = $49a0e07071a6b84f$var$_callSuper(this, KrStateElement);
        _this._db = [];
        _this.record_type = "ItemList";
        _this.record_id = String(crypto.randomUUID());
        _this.record_ref = {
            "@type": _this.record_type,
            "@id": _this.record_id
        };
        return _this;
    }
    $49a0e07071a6b84f$var$_inherits(KrStateElement, _HTMLElement);
    return $49a0e07071a6b84f$var$_createClass(KrStateElement, [
        {
            key: "initObject",
            value: function() {
                var _initObject = $49a0e07071a6b84f$var$_asyncToGenerator(/*#__PURE__*/ $49a0e07071a6b84f$var$_regeneratorRuntime().mark(function _callee() {
                    return $49a0e07071a6b84f$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                this.setDefaultId();
                                //this.contentElement.contentEditable = true
                                this.setMutationObserver();
                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }() // -----------------------------------------------------
        },
        {
            key: "setDefaultId",
            value: function setDefaultId() {
                if (!this.id || this.id == null) this.id = String(crypto.randomUUID());
            }
        },
        {
            key: "getThing",
            value: function getThing(record_type, record_id) {
                if (record_type && record_type != null) {
                    if (record_id && record_id != null) return this._get_record(record_type, record_id);
                    else return this._get_records_for_type(record_type);
                } else return this._get_records_all();
            }
        },
        {
            key: "_get_records_all",
            value: function _get_records_all() {
                var results = [];
                var _iterator = $49a0e07071a6b84f$var$_createForOfIteratorHelper(this._db), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var t = _step.value;
                        results.push(t);
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
                return results;
            }
        },
        {
            key: "_get_records_for_type",
            value: function _get_records_for_type(record_type) {
                var results = [];
                var _iterator2 = $49a0e07071a6b84f$var$_createForOfIteratorHelper(this._db), _step2;
                try {
                    for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                        var t = _step2.value;
                        if (t.record_type == record_type) results.push(t);
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally{
                    _iterator2.f();
                }
                return results;
            }
        },
        {
            key: "_get_record",
            value: function _get_record(record_type, record_id) {
                var _iterator3 = $49a0e07071a6b84f$var$_createForOfIteratorHelper(this._db), _step3;
                try {
                    for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                        var t = _step3.value;
                        if (t.record_type == record_type && t.record_id == record_id) return t;
                    }
                } catch (err) {
                    _iterator3.e(err);
                } finally{
                    _iterator3.f();
                }
                return null;
            }
        },
        {
            key: "setThing",
            value: function setThing(record) {
                if (!(record instanceof $gXNCa$krakenthing.KrThing)) {
                    var v = new $gXNCa$krakenthing.KrThing();
                    v.record = record;
                    record = v;
                }
                this._db.push(record);
                this.setListenerOnThing(record);
                var _iterator4 = $49a0e07071a6b84f$var$_createForOfIteratorHelper(record.things), _step4;
                try {
                    for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                        var r = _step4.value;
                        if (record.record_id != r.record_id) this.setThing(r);
                    }
                } catch (err) {
                    _iterator4.e(err);
                } finally{
                    _iterator4.f();
                }
                return record;
            }
        },
        {
            key: "setListenerOnThing",
            value: function setListenerOnThing(thing) {
                thing.addEventListener("all", function(event) {
                    var t = event.target;
                //console.log('Saving thing', t.record_type, t.record_id, t)
                //t.api_post()
                });
            }
        },
        {
            key: "dispatchAddAction",
            value: function dispatchAddAction(record) {
                var eventRecord = {
                    "@type": "addAction",
                    "@id": String(crypto.randomUUID()),
                    "targetCollection": this.record_ref,
                    "object": record,
                    "actionStatus": "completedActionStatus",
                    "timeStart": new Date(),
                    "timeEnd": new Date()
                };
                var newEvent = new CustomEvent("kr-addAction", {
                    detail: eventRecord
                });
                this.dispatchEvent(newEvent);
                var newEventAll = new CustomEvent("kr-all", {
                    detail: eventRecord
                });
                this.dispatchEvent(newEventAll);
            }
        },
        {
            key: "dispatchDeleteAction",
            value: function dispatchDeleteAction(record) {
                var eventRecord = {
                    "@type": "deleteAction",
                    "@id": String(crypto.randomUUID()),
                    "targetCollection": this.record_ref,
                    "object": record,
                    "actionStatus": "completedActionStatus",
                    "timeStart": new Date(),
                    "timeEnd": new Date()
                };
                var newEvent = new CustomEvent("kr-deleteAction", {
                    detail: eventRecord
                });
                this.dispatchEvent(newEvent);
                var newEventAll = new CustomEvent("kr-all", {
                    detail: eventRecord
                });
                this.dispatchEvent(newEventAll);
            }
        },
        {
            key: "dispatchUpdateAction",
            value: function dispatchUpdateAction(record) {
                var eventRecord = {
                    "@type": "updateAction",
                    "@id": String(crypto.randomUUID()),
                    "targetCollection": this.record_ref,
                    "object": record,
                    "actionStatus": "completedActionStatus",
                    "timeStart": new Date(),
                    "timeEnd": new Date()
                };
                var newEvent = new CustomEvent("kr-updateAction", {
                    detail: eventRecord
                });
                this.dispatchEvent(newEvent);
                var newEventAll = new CustomEvent("kr-all", {
                    detail: eventRecord
                });
                this.dispatchEvent(newEventAll);
            }
        },
        {
            key: "setMutationObserver",
            value: function setMutationObserver() {
                var callback = function callback(mutationList, observer) {
                    var _iterator5 = $49a0e07071a6b84f$var$_createForOfIteratorHelper(mutationList), _step5;
                    try {
                        for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                            var mutation = _step5.value;
                            mutation.type;
                        }
                    } catch (err) {
                        _iterator5.e(err);
                    } finally{
                        _iterator5.f();
                    }
                };
                // Create an observer instance linked to the callback function
                var observer = new MutationObserver(callback);
                var config = {
                    attributes: true,
                    attributeOldValue: true,
                    childList: true,
                    subtree: true
                };
                // Start observing the target node for configured mutations
                observer.observe(this, config);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.classList.add("kr-state");
                this.initObject();
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {}
        },
        {
            key: "adoptedCallback",
            value: function adoptedCallback() {}
        },
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(name, oldValue, newValue) {}
        }
    ]);
}(/*#__PURE__*/ $49a0e07071a6b84f$var$_wrapNativeSuper(HTMLElement));
customElements.define("kr-state", $49a0e07071a6b84f$var$KrStateElement);
function $49a0e07071a6b84f$var$flattenThings(record) {
    var results = [];
    if (Array.isArray(record)) {
        var _iterator6 = $49a0e07071a6b84f$var$_createForOfIteratorHelper(record), _step6;
        try {
            for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                var r = _step6.value;
                results = results.concat($49a0e07071a6b84f$var$flattenThings(r));
            }
        } catch (err) {
            _iterator6.e(err);
        } finally{
            _iterator6.f();
        }
    } else if ($49a0e07071a6b84f$var$_typeof(record) === "object") {
        if (record["@type"]) results.push(record);
        for(var k in record)results = results.concat($49a0e07071a6b84f$var$flattenThings(record[k]));
    }
    return results;
}


var $db973782a6c0d45e$exports = {};
"use strict";
Object.defineProperty($db973782a6c0d45e$exports, "__esModule", {
    value: true
});
$db973782a6c0d45e$exports.KrThingElement = $db973782a6c0d45e$exports.KrCard = void 0;

var $61aa29d80cca8e8c$exports = {};
"use strict";
Object.defineProperty($61aa29d80cca8e8c$exports, "__esModule", {
    value: true
});
$61aa29d80cca8e8c$exports.card = $61aa29d80cca8e8c$var$card;
function $61aa29d80cca8e8c$var$card() {
    return '\n        <div class="card mb-3 bg-transparent" style="max-width: 300px;">\n            <div class="row g-0">\n\n\n\n                <div class="col col-sm-4 align-self-center">\n                    <a href="#" class="btn h-100" data-bs-toggle="modal" data-bs-target="#modalID">\n                        <img src="{{item.image.contentUrl}}" class="img-fluid rounded-start" alt="..." onerror=\'this.style.display = "none"\'>\n                    </a>\n                </div>\n\n\n\n                <div class="col pt-0 col-sm-8 align-self-top">\n                    <div class="row  mt-0 me-1">\n                        <span\n                            class="mt-0 mb-1 align-self-end text-end justify-content-end kr-action">{{kr-action}}</span>\n                    </div>\n                    <div class="card-body">\n\n                        <div class="row align-self-center">\n                            <h5 class="card-title">\n                                <font size="-1">{{item.name}}</font>\n                            </h5>\n                            <p class="card-text">\n                                <font size="-1">{{item.url}}</font>\n                            </p>\n\n                        </div>\n                    </div>\n\n\n                    {% for c in parent %}\n\n                        <div class="row me-1 mt-0 text-end justify-content-end">\n                            <p class="card-text"><small class="text-body-secondary">\n                                    <font size="-1">{{ c.name }}</font>\n                                </small></p>\n                        </div>\n\n                    {% endfor %}\n\n\n\n                    {% for c in children %}\n\n                        <div class="row me-1 mt-0 text-end justify-content-end">\n                            <p class="card-text"><small class="text-body-secondary">\n                                    <font size="-1">{{ c.name }}</font>\n                                </small></p>\n                        </div>\n\n                    {% endfor %}\n\n                </div>\n            </div>\n        </div>\n\n        <div class="modal fade" id="modalID" tabindex="-1" aria-labelledby="modalIDLabel" aria-hidden="true">\n            <div class="modal-dialog modal-xl">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h1 class="modal-title fs-5" id="exampleModalLabel">{{heading1}}</h1>\n                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n                    </div>\n                    <div class="modal-body">\n                        {{ content }}\n                    </div>\n\n                </div>\n            </div>\n        </div>';
}


var $8e91878aa98c6fde$exports = {};
"use strict";
Object.defineProperty($8e91878aa98c6fde$exports, "__esModule", {
    value: true
});
$8e91878aa98c6fde$exports.record = $8e91878aa98c6fde$var$record;
function $8e91878aa98c6fde$var$record() {
    return '<div class="container">\n        <h1>Record: {{ item.name }}</h1>\n        <h2>{{ item["@type"] }}</h2>\n\n\n        {% if item.contentUrl %}\n\n            <img src="{{ item.contentUrl }}" class="img-fluid rounded-start" alt="..." onerror=\'this.style.display = "none"\'>\n\n        {% endif %}\n\n        {% if item.image and image.contentUrl  %}\n        \n            <img src="{{ item.image.contentUrl }}" class="img-fluid rounded-start" alt="..." onerror=\'this.style.display = "none"\'>\n        \n        {% endif %}\n        \n        Values:\n        \n\n\n        <kr-action-status></kr-action-status>\n        \n        {% for pair in item %} \n            {% assign key = pair[0] %} \n            {% assign value = pair[1] %} \n            \n            \n            <div class="row">\n                <div class="col col-3">\n                   {{ key }}:\n                </div>\n        \n                <div class="col col-9">\n\n                    {% if value[\'@type\'] %}\n\n                        {{value.name}}\n                        {{value.givenName}} {{value.familyName}}\n                        {{value.url}}\n                        {{value.contentUrl}}\n                    \n                    {% elsif value.first %}\n\n                        {% for v in value %}\n\n                            {% if v[\'@type\'] %}\n                            \n                                {{v.name}}\n                                {{v.givenName}} {{v.familyName}}\n                                {{v.url}}\n                                {{v.contentUrl}}\n\n                            {% else  %}\n                                 {{ v }}\n                            {% endif %}\n                            \n                        {% endfor %}\n                    \n                    \n                    {% else  %}\n                         {{ value}}\n                    {% endif %}\n                \n                  \n                </div>\n        \n            </div>\n        {% endfor %}\n\n    </div>\n    ';
}



var $db973782a6c0d45e$var$liquidjs = $db973782a6c0d45e$var$_interopRequireWildcard($gXNCa$liquidjs);
function $db973782a6c0d45e$var$_getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return ($db973782a6c0d45e$var$_getRequireWildcardCache = function _getRequireWildcardCache(e) {
        return e ? t : r;
    })(e);
}
function $db973782a6c0d45e$var$_interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != $db973782a6c0d45e$var$_typeof(e) && "function" != typeof e) return {
        "default": e
    };
    var t = $db973782a6c0d45e$var$_getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n["default"] = e, t && t.set(e, n), n;
}
function $db973782a6c0d45e$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $db973782a6c0d45e$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $db973782a6c0d45e$var$_typeof(o);
}
function $db973782a6c0d45e$var$_createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = $db973782a6c0d45e$var$_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function $db973782a6c0d45e$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $db973782a6c0d45e$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $db973782a6c0d45e$var$_arrayLikeToArray(o, minLen);
}
function $db973782a6c0d45e$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $db973782a6c0d45e$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $db973782a6c0d45e$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $db973782a6c0d45e$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($db973782a6c0d45e$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $db973782a6c0d45e$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $db973782a6c0d45e$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $db973782a6c0d45e$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $db973782a6c0d45e$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $db973782a6c0d45e$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $db973782a6c0d45e$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $db973782a6c0d45e$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $db973782a6c0d45e$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $db973782a6c0d45e$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $db973782a6c0d45e$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $db973782a6c0d45e$var$_toPropertyKey(t) {
    var i = $db973782a6c0d45e$var$_toPrimitive(t, "string");
    return "symbol" == $db973782a6c0d45e$var$_typeof(i) ? i : i + "";
}
function $db973782a6c0d45e$var$_toPrimitive(t, r) {
    if ("object" != $db973782a6c0d45e$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $db973782a6c0d45e$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $db973782a6c0d45e$var$_callSuper(t, o, e) {
    return o = $db973782a6c0d45e$var$_getPrototypeOf(o), $db973782a6c0d45e$var$_possibleConstructorReturn(t, $db973782a6c0d45e$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $db973782a6c0d45e$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $db973782a6c0d45e$var$_possibleConstructorReturn(self, call) {
    if (call && ($db973782a6c0d45e$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $db973782a6c0d45e$var$_assertThisInitialized(self);
}
function $db973782a6c0d45e$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $db973782a6c0d45e$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $db973782a6c0d45e$var$_setPrototypeOf(subClass, superClass);
}
function $db973782a6c0d45e$var$_wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    $db973782a6c0d45e$var$_wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !$db973782a6c0d45e$var$_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return $db973782a6c0d45e$var$_construct(Class, arguments, $db973782a6c0d45e$var$_getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return $db973782a6c0d45e$var$_setPrototypeOf(Wrapper, Class);
    };
    return $db973782a6c0d45e$var$_wrapNativeSuper(Class);
}
function $db973782a6c0d45e$var$_construct(t, e, r) {
    if ($db973782a6c0d45e$var$_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [
        null
    ];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && $db973782a6c0d45e$var$_setPrototypeOf(p, r.prototype), p;
}
function $db973782a6c0d45e$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($db973782a6c0d45e$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $db973782a6c0d45e$var$_isNativeFunction(fn) {
    try {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
        return typeof fn === "function";
    }
}
function $db973782a6c0d45e$var$_setPrototypeOf(o, p) {
    $db973782a6c0d45e$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $db973782a6c0d45e$var$_setPrototypeOf(o, p);
}
function $db973782a6c0d45e$var$_getPrototypeOf(o) {
    $db973782a6c0d45e$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $db973782a6c0d45e$var$_getPrototypeOf(o);
}
var $db973782a6c0d45e$var$engine = new $db973782a6c0d45e$var$liquidjs.Liquid();
var $db973782a6c0d45e$var$KrThingElement = $db973782a6c0d45e$exports.KrThingElement = /*#__PURE__*/ function(_HTMLElement) {
    function KrThingElement() {
        var _this;
        $db973782a6c0d45e$var$_classCallCheck(this, KrThingElement);
        _this = $db973782a6c0d45e$var$_callSuper(this, KrThingElement);
        _this._thing = null;
        _this._record = null;
        _this.htmlTemplate = (0, $61aa29d80cca8e8c$exports.card)(); // HTML content as template
        _this.htmlContent = null; // Actual HTML content
        _this.config = {};
        _this.useBestRecord = false;
        return _this;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    $db973782a6c0d45e$var$_inherits(KrThingElement, _HTMLElement);
    return $db973782a6c0d45e$var$_createClass(KrThingElement, [
        {
            key: "initObject",
            value: function() {
                var _initObject = $db973782a6c0d45e$var$_asyncToGenerator(/*#__PURE__*/ $db973782a6c0d45e$var$_regeneratorRuntime().mark(function _callee() {
                    return $db973782a6c0d45e$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                this.initKrState();
                                this.setDefaultId();
                                _context.next = 4;
                                return this.renderHTML();
                            case 4:
                                this.showContent();
                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }()
        },
        {
            key: "setDefaultId",
            value: function setDefaultId() {
                if (!this.id || this.id == null) this.id = String(crypto.randomUUID());
            }
        },
        {
            key: "setTemplate",
            value: function setTemplate(templateID) {
                if (templateID == "card") this.htmlTemplate = (0, $61aa29d80cca8e8c$exports.card)();
                if (templateID == "record") this.htmlTemplate = (0, $8e91878aa98c6fde$exports.record)();
            }
        },
        {
            key: "initKrState",
            value: function initKrState() {
                var krState = document.getElementsByClassName("KR-STATE");
                if (!krState) document.body.appendChild(document.createElement("KR-STATE"));
            }
        },
        {
            key: "loadRecordFromAttribute",
            value: function loadRecordFromAttribute() {
                if (this.dataset.record) this.record = JSON.parse(this.dataset.record);
                if (this.dataset.recordType) this.record_type = this.dataset.recordType;
                if (this.dataset.recordId) this.record_id = this.dataset.recordId;
            }
        },
        {
            key: "loadRecordFromValueElement",
            value: function loadRecordFromValueElement() {
                if (this.closest(".kr-value")) {
                    var _this$closest;
                    this.record = (_this$closest = this.closest(".kr-value")) === null || _this$closest === void 0 ? void 0 : _this$closest.value;
                }
            }
        },
        {
            key: "elementRecord",
            get: function get() {
                // Record with added 
                if (!this.thing) return {};
                var elementRecord = this.thing.record || {};
                //elementRecord.potentialAction = this.potentialActions
                return elementRecord;
            }
        },
        {
            key: "renderHTML",
            value: function() {
                var _renderHTML = $db973782a6c0d45e$var$_asyncToGenerator(/*#__PURE__*/ $db973782a6c0d45e$var$_regeneratorRuntime().mark(function _callee2() {
                    var tpl;
                    return $db973782a6c0d45e$var$_regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                console.log(this.record_type, this.elementRecord);
                                _context2.next = 3;
                                return $db973782a6c0d45e$var$engine.parse(this.htmlTemplate);
                            case 3:
                                tpl = _context2.sent;
                                _context2.next = 6;
                                return $db973782a6c0d45e$var$engine.render(tpl, {
                                    item: this.elementRecord,
                                    config: this.config
                                });
                            case 6:
                                this.htmlContent = _context2.sent;
                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function renderHTML() {
                    return _renderHTML.apply(this, arguments);
                }
                return renderHTML;
            }()
        },
        {
            key: "showContent",
            value: function showContent() {
                this.innerHTML = this.htmlContent;
            }
        },
        {
            key: "krState",
            get: function get() {
                var _document$getElements;
                var krState = (_document$getElements = document.getElementsByTagName("KR-STATE")) === null || _document$getElements === void 0 ? void 0 : _document$getElements[0];
                if (!krState || krState == null) krState = document.body.appendChild(document.createElement("KR-STATE"));
                return krState;
            }
        },
        {
            key: "record_type",
            get: function get() {
                return this.getAttribute("data-record-type") || null;
            },
            set: function set(value) {
                this._record_type = value;
                this.setAttribute("data-record-type", value);
            }
        },
        {
            key: "record_id",
            get: function get() {
                return this.getAttribute("data-record-id") || null;
            },
            set: function set(value) {
                this._record_id = value;
                this.setAttribute("data-record-id", value);
            }
        },
        {
            key: "record",
            get: function get() {
                if (!this.thing) return {};
                this._record = this.thing.record;
                return $db973782a6c0d45e$var$simplify(this.thing.record);
            },
            set: function set(value) {
                if (!value || value == null) return;
                if (!this.thing) {
                    var thing = new $gXNCa$krakenthing.KrThing();
                    thing.record = value;
                    this.thing = thing;
                }
                if (!value["@type"]) value["@type"] = "Thing";
                this.thing.record = value;
                this.record_type = this.thing.record_type;
                this.record_id = this.thing.record_id;
                this.initObject();
            }
        },
        {
            key: "thing",
            get: function get() {
                console.log("get thing", this.record_type);
                if (!this.record_type || this.record_type == null) return null;
                if (!this.record_id || this.record_id == null) return null;
                return this.krState.getThing(this.record_type, this.record_id);
            },
            set: function set(value) {
                var _this2 = this;
                if (!(value instanceof $gXNCa$krakenthing.KrThing)) {
                    var k = new $gXNCa$krakenthing.KrThing();
                    k.record = value;
                    value = k;
                }
                this._thing = value;
                this.krState.setThing(value);
                this.record_type = value.record_type;
                this.record_id = value.record_id;
                value.addEventListener("all", function(event) {
                    if (_this2._record != value.record) {
                        _this2._record = value.record;
                        _this2.initObject();
                    }
                });
            }
        },
        {
            key: "getValues",
            value: function getValues(propertyID) {
                var _this$thing$record;
                if (!this.thing) return [];
                var values = ((_this$thing$record = this.thing.record) === null || _this$thing$record === void 0 ? void 0 : _this$thing$record[propertyID]) || [];
                values = $db973782a6c0d45e$var$ensureArray(values);
                return values;
            }
        },
        {
            key: "getProperty",
            value: function getProperty(propertyID) {
                if (!this.thing) return [];
                return this.thing.getProperty(propertyID);
            }
        },
        {
            key: "setProperty",
            value: function setProperty(propertyID, value) {
                return this.thing.replaceProperty(propertyID, null, value);
            }
        },
        {
            key: "replaceProperty",
            value: function replaceProperty(propertyID, oldValue, newValue) {
                var refreshFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
                if (this.thing) return this.thing.replaceProperty(propertyID, oldValue, newValue);
                else return null;
            }
        },
        {
            key: "addProperty",
            value: function addProperty(propertyID, value) {
                if (this.thing) return this.thing.addProperty(propertyID, value);
                else return null;
            }
        },
        {
            key: "deleteProperty",
            value: function deleteProperty(propertyID, value) {
                if (this.thing) return this.thing.deleteProperty(propertyID, value);
                else return null;
            }
        },
        {
            key: "findPotentialAction",
            value: function findPotentialAction(actionID) {
                var _iterator = $db973782a6c0d45e$var$_createForOfIteratorHelper(this.potentialActions), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var i = _step.value;
                        if ((i === null || i === void 0 ? void 0 : i["@id"]) == actionID) return i;
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
                return null;
            }
        },
        {
            key: "potentialActions",
            get: function get() {
                var actions = [];
                actions.push(this.deleteAction);
                return actions;
            }
        },
        {
            key: "deleteAction",
            value: function deleteAction() {}
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.classList.add("kr-thing");
                this.style.display = "block";
                this.loadRecordFromAttribute();
                this.loadRecordFromValueElement();
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {}
        },
        {
            key: "adoptedCallback",
            value: function adoptedCallback() {}
        },
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(name, oldValue, newValue) {
                [
                    "data-record-type",
                    "data-record-id"
                ].includes(name);
            }
        }
    ]);
}(/*#__PURE__*/ $db973782a6c0d45e$var$_wrapNativeSuper(HTMLElement));
customElements.define("kr-thing", $db973782a6c0d45e$var$KrThingElement);
// -----------------------------------------------------
//  Card 
// -----------------------------------------------------
var $db973782a6c0d45e$var$KrCard = $db973782a6c0d45e$exports.KrCard = /*#__PURE__*/ function(_KrThingElement) {
    function KrCard() {
        var _this3;
        $db973782a6c0d45e$var$_classCallCheck(this, KrCard);
        _this3 = $db973782a6c0d45e$var$_callSuper(this, KrCard);
        _this3.htmlTemplate = (0, $61aa29d80cca8e8c$exports.card)();
        return _this3;
    }
    $db973782a6c0d45e$var$_inherits(KrCard, _KrThingElement);
    return $db973782a6c0d45e$var$_createClass(KrCard);
}($db973782a6c0d45e$var$KrThingElement);
customElements.define("kr-card", $db973782a6c0d45e$var$KrCard);
function $db973782a6c0d45e$var$simplify(data) {
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var origData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (origData == null) origData = data;
    //return data
    // Remove arrays of 1
    if (Array.isArray(data)) {
        // If the array has exactly one element, return that element
        if (data.length === 1) return $db973782a6c0d45e$var$simplify(data[0], count + 1, origData);
        else // Otherwise, process each element in the array
        return data.map($db973782a6c0d45e$var$simplify);
    } else if (data !== null && $db973782a6c0d45e$var$_typeof(data) === "object") {
        // If the data is an object, process each key
        var newData = {};
        for(var key in data)if (data.hasOwnProperty(key)) newData[key] = $db973782a6c0d45e$var$simplify(data[key], count + 1, origData);
        return newData;
    } else // If the data is neither an array nor an object, return it as is
    return data;
}
function $db973782a6c0d45e$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


var $f13991e94eb8dbdc$exports = {};
"use strict";
function $f13991e94eb8dbdc$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $f13991e94eb8dbdc$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $f13991e94eb8dbdc$var$_typeof(o);
}
Object.defineProperty($f13991e94eb8dbdc$exports, "__esModule", {
    value: true
});
$f13991e94eb8dbdc$exports.KrThingsElement = void 0;

var $ef8b182ab08fd038$exports = {};
"use strict";
Object.defineProperty($ef8b182ab08fd038$exports, "__esModule", {
    value: true
});
$ef8b182ab08fd038$exports.baseTemplate = $ef8b182ab08fd038$var$baseTemplate;
function $ef8b182ab08fd038$var$baseTemplate() {
    return '\n        <!-- Title -->\n        <div class="row border p-3">\n            <div class="col">\n                 <h1>List {{ name }} </h1>\n            </div>\n        \n        </div>\n\n        \n        <div class="row border p-3">\n\n            <!-- Selection -->\n            <div class="col col-1">\n                <kr-select-all>\n                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">\n                </kr-select-all>\n            </div>\n\n\n            <!-- TBD -->\n            <div class="col col-1">\n                        P\n            </div>\n\n\n            <!-- Items -->\n            <div class="col col-9">\n            </div>\n\n\n\n            <!-- Actions -->\n            <div class="col col-1 ">\n\n\n                <kr-action-menu>\n                </kr-action-menu>\n               \n            </div>\n\n            \n        </div>\n        \n        \n        <div class="row border ">\n\n            <div class="col m-0 p-0">\n                {{ itemListElement }}\n            </div>\n\n        </div>';
}



var $f13991e94eb8dbdc$var$liquidjs = $f13991e94eb8dbdc$var$_interopRequireWildcard($gXNCa$liquidjs);
function $f13991e94eb8dbdc$var$_getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return ($f13991e94eb8dbdc$var$_getRequireWildcardCache = function _getRequireWildcardCache(e) {
        return e ? t : r;
    })(e);
}
function $f13991e94eb8dbdc$var$_interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != $f13991e94eb8dbdc$var$_typeof(e) && "function" != typeof e) return {
        "default": e
    };
    var t = $f13991e94eb8dbdc$var$_getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n["default"] = e, t && t.set(e, n), n;
}
function $f13991e94eb8dbdc$var$_createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = $f13991e94eb8dbdc$var$_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function $f13991e94eb8dbdc$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $f13991e94eb8dbdc$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $f13991e94eb8dbdc$var$_arrayLikeToArray(o, minLen);
}
function $f13991e94eb8dbdc$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $f13991e94eb8dbdc$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $f13991e94eb8dbdc$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $f13991e94eb8dbdc$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($f13991e94eb8dbdc$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $f13991e94eb8dbdc$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $f13991e94eb8dbdc$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $f13991e94eb8dbdc$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $f13991e94eb8dbdc$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $f13991e94eb8dbdc$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $f13991e94eb8dbdc$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $f13991e94eb8dbdc$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $f13991e94eb8dbdc$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $f13991e94eb8dbdc$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $f13991e94eb8dbdc$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $f13991e94eb8dbdc$var$_toPropertyKey(t) {
    var i = $f13991e94eb8dbdc$var$_toPrimitive(t, "string");
    return "symbol" == $f13991e94eb8dbdc$var$_typeof(i) ? i : i + "";
}
function $f13991e94eb8dbdc$var$_toPrimitive(t, r) {
    if ("object" != $f13991e94eb8dbdc$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $f13991e94eb8dbdc$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $f13991e94eb8dbdc$var$_callSuper(t, o, e) {
    return o = $f13991e94eb8dbdc$var$_getPrototypeOf(o), $f13991e94eb8dbdc$var$_possibleConstructorReturn(t, $f13991e94eb8dbdc$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $f13991e94eb8dbdc$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $f13991e94eb8dbdc$var$_possibleConstructorReturn(self, call) {
    if (call && ($f13991e94eb8dbdc$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $f13991e94eb8dbdc$var$_assertThisInitialized(self);
}
function $f13991e94eb8dbdc$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $f13991e94eb8dbdc$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($f13991e94eb8dbdc$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $f13991e94eb8dbdc$var$_get() {
    if (typeof Reflect !== "undefined" && Reflect.get) $f13991e94eb8dbdc$var$_get = Reflect.get.bind();
    else $f13991e94eb8dbdc$var$_get = function _get(target, property, receiver) {
        var base = $f13991e94eb8dbdc$var$_superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $f13991e94eb8dbdc$var$_get.apply(this, arguments);
}
function $f13991e94eb8dbdc$var$_superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $f13991e94eb8dbdc$var$_getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function $f13991e94eb8dbdc$var$_getPrototypeOf(o) {
    $f13991e94eb8dbdc$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $f13991e94eb8dbdc$var$_getPrototypeOf(o);
}
function $f13991e94eb8dbdc$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $f13991e94eb8dbdc$var$_setPrototypeOf(subClass, superClass);
}
function $f13991e94eb8dbdc$var$_setPrototypeOf(o, p) {
    $f13991e94eb8dbdc$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $f13991e94eb8dbdc$var$_setPrototypeOf(o, p);
}
//import { Liquid } from 'liquidjs'
var $f13991e94eb8dbdc$var$engine = new $f13991e94eb8dbdc$var$liquidjs.Liquid();
var $f13991e94eb8dbdc$var$KrThingsElement = $f13991e94eb8dbdc$exports.KrThingsElement = /*#__PURE__*/ function(_KrThingElement) {
    function KrThingsElement() {
        var _this;
        $f13991e94eb8dbdc$var$_classCallCheck(this, KrThingsElement);
        _this = $f13991e94eb8dbdc$var$_callSuper(this, KrThingsElement);
        // Set template and content for list
        _this.htmlTemplate = (0, $ef8b182ab08fd038$exports.baseTemplate)();
        // Set template for listItems
        _this.listItemTemplate = null;
        _this.listItemRecordTemplate = null; // Template record for new list items elements
        // Set template for listItem.item content
        _this.listItem_itemTemplate = null;
        // Set options
        _this.showSelect = true;
        _this.showPosition = true;
        return _this;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    $f13991e94eb8dbdc$var$_inherits(KrThingsElement, _KrThingElement);
    return $f13991e94eb8dbdc$var$_createClass(KrThingsElement, [
        {
            key: "initObject",
            value: function() {
                var _initObject = $f13991e94eb8dbdc$var$_asyncToGenerator(/*#__PURE__*/ $f13991e94eb8dbdc$var$_regeneratorRuntime().mark(function _callee() {
                    return $f13991e94eb8dbdc$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                _context.next = 2;
                                return $f13991e94eb8dbdc$var$_get($f13991e94eb8dbdc$var$_getPrototypeOf(KrThingsElement.prototype), "initObject", this).call(this);
                            case 2:
                                this.loadRecords();
                                this.setEventListenerSelect();
                                this.setEventListenerDrop();
                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }()
        },
        {
            key: "loadRecords",
            value: function loadRecords() {
                if (!this.records) return;
                var _iterator = $f13991e94eb8dbdc$var$_createForOfIteratorHelper($f13991e94eb8dbdc$var$ensureArray(this.records)), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var record = _step.value;
                        this.upsertItemElement(record);
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
            }
        },
        {
            key: "krItemListElement",
            get: function get() {
                return this.querySelector(".krItemListElement");
            }
        },
        {
            key: "renderHTML",
            value: function() {
                var _renderHTML = $f13991e94eb8dbdc$var$_asyncToGenerator(/*#__PURE__*/ $f13991e94eb8dbdc$var$_regeneratorRuntime().mark(function _callee2() {
                    var tpl, r;
                    return $f13991e94eb8dbdc$var$_regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.next = 2;
                                return $f13991e94eb8dbdc$var$engine.parse(this.htmlTemplate);
                            case 2:
                                tpl = _context2.sent;
                                r = JSON.parse(JSON.stringify(this.elementRecord));
                                r["itemListElement"] = '<span class="krItemListElement"></span>';
                                _context2.next = 7;
                                return $f13991e94eb8dbdc$var$engine.render(tpl, r);
                            case 7:
                                this.htmlContent = _context2.sent;
                            case 8:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function renderHTML() {
                    return _renderHTML.apply(this, arguments);
                }
                return renderHTML;
            }() // -----------------------------------------------------
        },
        {
            key: "getSelecteditems",
            value: function getSelecteditems() {
                var items = [];
                var _iterator2 = $f13991e94eb8dbdc$var$_createForOfIteratorHelper(this.krItemListElement.children), _step2;
                try {
                    for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                        var e = _step2.value;
                        if (e.isSelected == true) items.push(e);
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally{
                    _iterator2.f();
                }
                return items;
            }
        },
        {
            key: "KrSelect",
            get: function get() {
                return this.querySelector("kr-select-all > input");
            }
        },
        {
            key: "isSelected",
            get: function get() {
                return this.KrSelect.checked;
            },
            set: function set(value) {
                this.KrSelect.checked = value;
            }
        },
        {
            key: "selectAll",
            value: function selectAll() {
                var _iterator3 = $f13991e94eb8dbdc$var$_createForOfIteratorHelper(this.krItemListElement.children), _step3;
                try {
                    for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                        var e = _step3.value;
                        if (e.isSelected == false) e.isSelected = true;
                    }
                } catch (err) {
                    _iterator3.e(err);
                } finally{
                    _iterator3.f();
                }
            }
        },
        {
            key: "selectNone",
            value: function selectNone() {
                var _iterator4 = $f13991e94eb8dbdc$var$_createForOfIteratorHelper(this.krItemListElement.children), _step4;
                try {
                    for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                        var e = _step4.value;
                        if (e.isSelected == true) e.isSelected = false;
                    }
                } catch (err) {
                    _iterator4.e(err);
                } finally{
                    _iterator4.f();
                }
            }
        },
        {
            key: "setEventListenerSelect",
            value: function setEventListenerSelect() {
                var _this2 = this;
                var m = this;
                this.KrSelect.addEventListener("click", function(event) {
                    if (m.isSelected == true) _this2.selectAll();
                    else _this2.selectNone();
                });
            }
        },
        {
            key: "setEventListenerDrop",
            value: function setEventListenerDrop() {
                var _this3 = this;
                this.addEventListener("dragover", function(event) {
                    event.preventDefault();
                });
                this.addEventListener("drop", function(event) {
                    var elementID = event.dataTransfer.getData("text/plain");
                    var element = document.getElementById(elementID);
                    if (element.tagName == "KR-LIST-ITEM" && element.things.record_id != _this3.record_id) {
                        var itemDrop = event.target.closest("KR-LIST-ITEM");
                        // Add record
                        _this3.record.itemListElement.push(element.record);
                        // Create new element
                        var newElement = _this3.upsertItemElement(element.record);
                        // Insert before other item if dropped on one
                        if (itemDrop) {
                            itemDrop.before(newElement);
                            newElement.resetPosition();
                        }
                    }
                });
            }
        },
        {
            key: "createItemElement",
            value: function createItemElement(record) {
                record = this.recordToListItem(record);
                var newItem = document.createElement(this.listItemTemplate);
                newItem.itemTemplate = this.listItem_itemTemplate;
                newItem.record = record;
                this.setItemEventListeners(newItem);
                this.krItemListElement.appendChild(newItem);
                return newItem;
            }
        },
        {
            key: "getItemRecord",
            value: function getItemRecord(record_id) {
                for(var r in this.record.itemListElement){
                    if ((r === null || r === void 0 ? void 0 : r["@id"]) == record_id) return r;
                }
                return null;
            }
        },
        {
            key: "getItemElement",
            value: function getItemElement(record_type, record_id) {
                var _this$krItemListEleme;
                var _iterator5 = $f13991e94eb8dbdc$var$_createForOfIteratorHelper(((_this$krItemListEleme = this.krItemListElement) === null || _this$krItemListEleme === void 0 ? void 0 : _this$krItemListEleme.children) || []), _step5;
                try {
                    for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                        var i = _step5.value;
                        if (i.record_type == record_type && i.record_id == record_id) return i;
                    }
                } catch (err) {
                    _iterator5.e(err);
                } finally{
                    _iterator5.f();
                }
                return null;
            }
        },
        {
            key: "updateItemElement",
            value: function updateItemElement(record) {
                var itemElement = this.getItemElement(record["@type"], record["@id"]);
                itemElement.record = record;
                return itemElement;
            }
        },
        {
            key: "upsertItemElement",
            value: function upsertItemElement(record) {
                var itemElement = this.getItemElement(record["@type"], record["@id"]);
                if (itemElement && itemElement != null) return this.updateItemElement(record);
                else return this.createItemElement(record);
            }
        },
        {
            key: "deleteItemRecord",
            value: function deleteItemRecord(record_ID) {
                this.record.itemListElement = this.record.itemListElement.filter(function(item) {
                    return (item === null || item === void 0 ? void 0 : item["@id"]) != record_ID;
                });
            }
        },
        {
            key: "deleteItemElement",
            value: function deleteItemElement(record) {
                var itemElement = this.getItemElement(record["@type"], record["@id"]);
                itemElement.remove();
            }
        },
        {
            key: "recordToListItem",
            value: function recordToListItem(record) {
                var _this$krItemListEleme2;
                if (record["@type"] == "ListItem") return record;
                var listItem = {
                    "@type": "ListItem",
                    "@id": String(crypto.randomUUID()),
                    "item": record,
                    "position": ((_this$krItemListEleme2 = this.krItemListElement) === null || _this$krItemListEleme2 === void 0 ? void 0 : _this$krItemListEleme2.children.length) || 0
                };
                return listItem;
            }
        },
        {
            key: "setItemEventListeners",
            value: function setItemEventListeners(item) {
                var _this4 = this;
                item.addEventListener("kr-click", function(event) {
                    var detail = event.detail;
                    var newEvent = new CustomEvent("kr-click", {
                        detail: detail
                    });
                    _this4.dispatchEvent(newEvent);
                });
                item.addEventListener("kr-select", function(event) {
                    var newEvent = new CustomEvent("kr-select", {
                        detail: event.detail
                    });
                    _this4.dispatchEvent(newEvent);
                });
            }
        },
        {
            key: "executeAddAction",
            value: function executeAddAction() {
                var _this$record;
                (_this$record = this.record) !== null && _this$record !== void 0 && _this$record.listItemElement;
                this.record.listItemElement = [];
                var element = this.createItemElement(this.listItemRecordTemplate);
                this.record.listItemElement.push(element);
            }
        },
        {
            key: "executeDeleteAction",
            value: function executeDeleteAction() {
                var _iterator6 = $f13991e94eb8dbdc$var$_createForOfIteratorHelper(this.getSelecteditems()), _step6;
                try {
                    for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                        var i = _step6.value;
                        this.deleteItemElement(i.record);
                    }
                } catch (err) {
                    _iterator6.e(err);
                } finally{
                    _iterator6.f();
                }
                this.isSelected = false;
            }
        },
        {
            key: "findAction",
            value: function findAction(actionID) {
                var _iterator7 = $f13991e94eb8dbdc$var$_createForOfIteratorHelper(this.potentialActions), _step7;
                try {
                    for(_iterator7.s(); !(_step7 = _iterator7.n()).done;){
                        var i = _step7.value;
                        if ((i === null || i === void 0 ? void 0 : i["@id"]) == actionID) return i;
                    }
                } catch (err) {
                    _iterator7.e(err);
                } finally{
                    _iterator7.f();
                }
                return null;
            }
        },
        {
            key: "potentialActions",
            get: function get() {
                var actions = [];
                actions.push(this.addAction);
                actions.push(this.deleteAction);
                return actions;
            }
        },
        {
            key: "addAction",
            get: function get() {
                var item = this;
                var record = {
                    "@type": "addAction",
                    "@id": "addAction",
                    "name": "add",
                    "image": {
                        "@type": "ImageObject",
                        "contentUrl": "./icons/plus.svg"
                    },
                    "object": this.listItemRecordTemplate,
                    "url": "",
                    "actionStatus": "potentialActionStatus",
                    "targetCollection": "listItemElement",
                    "target": "executeAddAction"
                };
                return record;
            }
        },
        {
            key: "deleteAction",
            get: function get() {
                var item = this;
                var record = {
                    "@type": "deleteAction",
                    "@id": "deleteAction",
                    "name": "delete",
                    "image": {
                        "@type": "ImageObject",
                        "contentUrl": "./icons/delete.svg"
                    },
                    "object": "",
                    "url": "",
                    "actionStatus": "potentialActionStatus",
                    "targetCollection": "listItemElement",
                    "target": "executeDeleteAction"
                };
                return record;
            }
        },
        {
            key: "itemListElement",
            get: function get() {
                var _this$_record;
                return ((_this$_record = this._record) === null || _this$_record === void 0 ? void 0 : _this$_record.itemListElement) || [];
            },
            set: function set(value) {
                this._record.itemListElement = value;
            }
        },
        {
            key: "records",
            get: function get() {
                return this.itemListElement;
            },
            set: function set(value) {
                this._record = this.recordToList(value);
            }
        },
        {
            key: "recordToList",
            value: function recordToList(record) {
                if (Array.isArray(record)) record = {
                    "@type": "ItemList",
                    "@id": String(crypto.randomUUID()),
                    "name": "untitledlist",
                    "itemListElement": record
                };
                return record;
            }
        }
    ]);
}($db973782a6c0d45e$exports.KrThingElement);
customElements.define("kr-things", $f13991e94eb8dbdc$var$KrThingsElement);
function $f13991e94eb8dbdc$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


var $c6920fc5fd7b8375$exports = {};
"use strict";
function $c6920fc5fd7b8375$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $c6920fc5fd7b8375$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $c6920fc5fd7b8375$var$_typeof(o);
}
Object.defineProperty($c6920fc5fd7b8375$exports, "__esModule", {
    value: true
});
$c6920fc5fd7b8375$exports.KrPropertyElement = void 0;


var $c6920fc5fd7b8375$var$liquidjs = $c6920fc5fd7b8375$var$_interopRequireWildcard($gXNCa$liquidjs);
function $c6920fc5fd7b8375$var$_getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return ($c6920fc5fd7b8375$var$_getRequireWildcardCache = function _getRequireWildcardCache(e) {
        return e ? t : r;
    })(e);
}
function $c6920fc5fd7b8375$var$_interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != $c6920fc5fd7b8375$var$_typeof(e) && "function" != typeof e) return {
        "default": e
    };
    var t = $c6920fc5fd7b8375$var$_getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n["default"] = e, t && t.set(e, n), n;
}
function $c6920fc5fd7b8375$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $c6920fc5fd7b8375$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $c6920fc5fd7b8375$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($c6920fc5fd7b8375$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $c6920fc5fd7b8375$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $c6920fc5fd7b8375$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $c6920fc5fd7b8375$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $c6920fc5fd7b8375$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $c6920fc5fd7b8375$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $c6920fc5fd7b8375$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $c6920fc5fd7b8375$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $c6920fc5fd7b8375$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $c6920fc5fd7b8375$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $c6920fc5fd7b8375$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $c6920fc5fd7b8375$var$_toPropertyKey(t) {
    var i = $c6920fc5fd7b8375$var$_toPrimitive(t, "string");
    return "symbol" == $c6920fc5fd7b8375$var$_typeof(i) ? i : i + "";
}
function $c6920fc5fd7b8375$var$_toPrimitive(t, r) {
    if ("object" != $c6920fc5fd7b8375$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $c6920fc5fd7b8375$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $c6920fc5fd7b8375$var$_callSuper(t, o, e) {
    return o = $c6920fc5fd7b8375$var$_getPrototypeOf(o), $c6920fc5fd7b8375$var$_possibleConstructorReturn(t, $c6920fc5fd7b8375$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $c6920fc5fd7b8375$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $c6920fc5fd7b8375$var$_possibleConstructorReturn(self, call) {
    if (call && ($c6920fc5fd7b8375$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $c6920fc5fd7b8375$var$_assertThisInitialized(self);
}
function $c6920fc5fd7b8375$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $c6920fc5fd7b8375$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $c6920fc5fd7b8375$var$_setPrototypeOf(subClass, superClass);
}
function $c6920fc5fd7b8375$var$_wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    $c6920fc5fd7b8375$var$_wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !$c6920fc5fd7b8375$var$_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return $c6920fc5fd7b8375$var$_construct(Class, arguments, $c6920fc5fd7b8375$var$_getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return $c6920fc5fd7b8375$var$_setPrototypeOf(Wrapper, Class);
    };
    return $c6920fc5fd7b8375$var$_wrapNativeSuper(Class);
}
function $c6920fc5fd7b8375$var$_construct(t, e, r) {
    if ($c6920fc5fd7b8375$var$_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [
        null
    ];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && $c6920fc5fd7b8375$var$_setPrototypeOf(p, r.prototype), p;
}
function $c6920fc5fd7b8375$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($c6920fc5fd7b8375$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $c6920fc5fd7b8375$var$_isNativeFunction(fn) {
    try {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
        return typeof fn === "function";
    }
}
function $c6920fc5fd7b8375$var$_setPrototypeOf(o, p) {
    $c6920fc5fd7b8375$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $c6920fc5fd7b8375$var$_setPrototypeOf(o, p);
}
function $c6920fc5fd7b8375$var$_getPrototypeOf(o) {
    $c6920fc5fd7b8375$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $c6920fc5fd7b8375$var$_getPrototypeOf(o);
}
var $c6920fc5fd7b8375$var$engine = new $c6920fc5fd7b8375$var$liquidjs.Liquid();
var $c6920fc5fd7b8375$var$KrPropertyElement = $c6920fc5fd7b8375$exports.KrPropertyElement = /*#__PURE__*/ function(_HTMLElement) {
    function KrPropertyElement() {
        var _this;
        $c6920fc5fd7b8375$var$_classCallCheck(this, KrPropertyElement);
        _this = $c6920fc5fd7b8375$var$_callSuper(this, KrPropertyElement);
        _this.htmlTemplate = ""; // HTML content as template
        _this.htmlContent = null; // Actual HTML content
        _this.config = {};
        _this.values = null;
        return _this;
    }
    $c6920fc5fd7b8375$var$_inherits(KrPropertyElement, _HTMLElement);
    return $c6920fc5fd7b8375$var$_createClass(KrPropertyElement, [
        {
            key: "initObject",
            value: function() {
                var _initObject = $c6920fc5fd7b8375$var$_asyncToGenerator(/*#__PURE__*/ $c6920fc5fd7b8375$var$_regeneratorRuntime().mark(function _callee() {
                    return $c6920fc5fd7b8375$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                this.setDefaultId();
                                this.config.propertyID = this.propertyID;
                                this.krakenSchema = $gXNCa$krakenschema.KrakenSchemas.get(this.propertyID);
                                _context.next = 5;
                                return this.renderHTML();
                            case 5:
                                this.showContent();
                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }() // -----------------------------------------------------
        },
        {
            key: "setDefaultId",
            value: function setDefaultId() {
                if (!this.id || this.id == null) this.id = String(crypto.randomUUID());
            }
        },
        {
            key: "renderHTML",
            value: function() {
                var _renderHTML = $c6920fc5fd7b8375$var$_asyncToGenerator(/*#__PURE__*/ $c6920fc5fd7b8375$var$_regeneratorRuntime().mark(function _callee2() {
                    var tpl;
                    return $c6920fc5fd7b8375$var$_regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                if (!this.thing) {
                                    _context2.next = 7;
                                    break;
                                }
                                _context2.next = 3;
                                return $c6920fc5fd7b8375$var$engine.parse(this.htmlTemplate);
                            case 3:
                                tpl = _context2.sent;
                                _context2.next = 6;
                                return $c6920fc5fd7b8375$var$engine.render(tpl, {
                                    item: this.values,
                                    config: this.config
                                });
                            case 6:
                                this.htmlContent = _context2.sent;
                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function renderHTML() {
                    return _renderHTML.apply(this, arguments);
                }
                return renderHTML;
            }()
        },
        {
            key: "showContent",
            value: function showContent() {
                this.innerHTML = this.htmlContent;
            }
        },
        {
            key: "addPropertyValueAction",
            value: function addPropertyValueAction(value) {
                // Get current value
                if (!this.thing) return;
                if (!value || value == null) {
                    var _this$krakenSchema;
                    if (((_this$krakenSchema = this.krakenSchema) === null || _this$krakenSchema === void 0 || (_this$krakenSchema = _this$krakenSchema.expectedType) === null || _this$krakenSchema === void 0 ? void 0 : _this$krakenSchema.htmlType) == "object") {
                        var _this$krakenSchema2;
                        value = {
                            "@type": (_this$krakenSchema2 = this.krakenSchema) === null || _this$krakenSchema2 === void 0 || (_this$krakenSchema2 = _this$krakenSchema2.expectedType) === null || _this$krakenSchema2 === void 0 ? void 0 : _this$krakenSchema2.record_id,
                            "@id": String(crypto.randomUUID())
                        };
                    } else value = "test";
                }
                this.thing.thing.addProperty(this.propertyID, value);
            }
        },
        {
            key: "thing",
            get: function get() {
                var t = this.closest(".kr-thing");
                return t;
            }
        },
        {
            key: "record",
            get: function get() {
                return this.thing.record;
            }
        },
        {
            key: "elementRecord",
            get: function get() {
                return this.thing.elementRecord;
            }
        },
        {
            key: "propertyID",
            get: function get() {
                return this.getAttribute("data-property-id");
            },
            set: function set(value) {
                return this.setAttribute("data-property-id", value);
            }
        },
        {
            key: "values",
            get: function get() {
                if (!this.thing) return null;
                var values = this.thing.getValues(this.propertyID);
                return values;
            },
            set: function set(value) {
                return this.setAttribute("data-value", value);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.classList.add("kr-property");
                this.initObject();
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {}
        },
        {
            key: "adoptedCallback",
            value: function adoptedCallback() {}
        },
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(name, oldValue, newValue) {}
        }
    ]);
}(/*#__PURE__*/ $c6920fc5fd7b8375$var$_wrapNativeSuper(HTMLElement));
customElements.define("kr-property", $c6920fc5fd7b8375$var$KrPropertyElement);


var $b1c6f16ebbba8785$exports = {};
"use strict";
function $b1c6f16ebbba8785$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $b1c6f16ebbba8785$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $b1c6f16ebbba8785$var$_typeof(o);
}
Object.defineProperty($b1c6f16ebbba8785$exports, "__esModule", {
    value: true
});
$b1c6f16ebbba8785$exports.KrValueElement = void 0;
function $b1c6f16ebbba8785$var$_createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = $b1c6f16ebbba8785$var$_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function $b1c6f16ebbba8785$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $b1c6f16ebbba8785$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $b1c6f16ebbba8785$var$_arrayLikeToArray(o, minLen);
}
function $b1c6f16ebbba8785$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $b1c6f16ebbba8785$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $b1c6f16ebbba8785$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $b1c6f16ebbba8785$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($b1c6f16ebbba8785$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $b1c6f16ebbba8785$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $b1c6f16ebbba8785$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $b1c6f16ebbba8785$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $b1c6f16ebbba8785$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $b1c6f16ebbba8785$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $b1c6f16ebbba8785$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $b1c6f16ebbba8785$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $b1c6f16ebbba8785$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $b1c6f16ebbba8785$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $b1c6f16ebbba8785$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $b1c6f16ebbba8785$var$_toPropertyKey(t) {
    var i = $b1c6f16ebbba8785$var$_toPrimitive(t, "string");
    return "symbol" == $b1c6f16ebbba8785$var$_typeof(i) ? i : i + "";
}
function $b1c6f16ebbba8785$var$_toPrimitive(t, r) {
    if ("object" != $b1c6f16ebbba8785$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $b1c6f16ebbba8785$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $b1c6f16ebbba8785$var$_callSuper(t, o, e) {
    return o = $b1c6f16ebbba8785$var$_getPrototypeOf(o), $b1c6f16ebbba8785$var$_possibleConstructorReturn(t, $b1c6f16ebbba8785$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $b1c6f16ebbba8785$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $b1c6f16ebbba8785$var$_possibleConstructorReturn(self, call) {
    if (call && ($b1c6f16ebbba8785$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $b1c6f16ebbba8785$var$_assertThisInitialized(self);
}
function $b1c6f16ebbba8785$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $b1c6f16ebbba8785$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $b1c6f16ebbba8785$var$_setPrototypeOf(subClass, superClass);
}
function $b1c6f16ebbba8785$var$_wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    $b1c6f16ebbba8785$var$_wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !$b1c6f16ebbba8785$var$_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return $b1c6f16ebbba8785$var$_construct(Class, arguments, $b1c6f16ebbba8785$var$_getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return $b1c6f16ebbba8785$var$_setPrototypeOf(Wrapper, Class);
    };
    return $b1c6f16ebbba8785$var$_wrapNativeSuper(Class);
}
function $b1c6f16ebbba8785$var$_construct(t, e, r) {
    if ($b1c6f16ebbba8785$var$_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [
        null
    ];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && $b1c6f16ebbba8785$var$_setPrototypeOf(p, r.prototype), p;
}
function $b1c6f16ebbba8785$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($b1c6f16ebbba8785$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $b1c6f16ebbba8785$var$_isNativeFunction(fn) {
    try {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
        return typeof fn === "function";
    }
}
function $b1c6f16ebbba8785$var$_setPrototypeOf(o, p) {
    $b1c6f16ebbba8785$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $b1c6f16ebbba8785$var$_setPrototypeOf(o, p);
}
function $b1c6f16ebbba8785$var$_getPrototypeOf(o) {
    $b1c6f16ebbba8785$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $b1c6f16ebbba8785$var$_getPrototypeOf(o);
}
var $b1c6f16ebbba8785$var$KrValueElement = $b1c6f16ebbba8785$exports.KrValueElement = /*#__PURE__*/ function(_HTMLElement) {
    function KrValueElement() {
        var _this;
        $b1c6f16ebbba8785$var$_classCallCheck(this, KrValueElement);
        _this = $b1c6f16ebbba8785$var$_callSuper(this, KrValueElement);
        _this._value = null;
        //this.position = 0
        return _this;
    }
    $b1c6f16ebbba8785$var$_inherits(KrValueElement, _HTMLElement);
    return $b1c6f16ebbba8785$var$_createClass(KrValueElement, [
        {
            key: "initObject",
            value: function() {
                var _initObject = $b1c6f16ebbba8785$var$_asyncToGenerator(/*#__PURE__*/ $b1c6f16ebbba8785$var$_regeneratorRuntime().mark(function _callee() {
                    return $b1c6f16ebbba8785$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                this.setDefaultId();
                                this.setMutationObserver();
                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }() // -----------------------------------------------------
        },
        {
            key: "setDefaultId",
            value: function setDefaultId() {
                if (!this.id || this.id == null) this.id = String(crypto.randomUUID());
            }
        },
        {
            key: "loadValueFromAttribute",
            value: function loadValueFromAttribute() {
                if (this.dataset.value && this.dataset.value != null && this.dataset.value != "") this.value = JSON.parse(this.dataset.value);
            }
        },
        {
            key: "contentElement",
            get: function get() {
                if (!this.children || this.children.length == 0) {
                    var contentElement = document.createElement("div");
                    this.appendChild(contentElement);
                    contentElement.classList.add("kr-value-span");
                }
                var element = this.querySelector(".kr-value-span");
                return element;
            }
        },
        {
            key: "thing",
            get: function get() {
                return this.closest(".kr-thing");
            }
        },
        {
            key: "record",
            get: function get() {
                return this.thing.record;
            }
        },
        {
            key: "propertyID",
            get: function get() {
                return this.getAttribute("data-property-id");
            },
            set: function set(value) {
                return this.setAttribute("data-property-id", value);
            }
        },
        {
            key: "property",
            get: function get() {
                return this.closest(".kr-property");
            }
        },
        {
            key: "position",
            get: function get() {
                return this.getAttribute("data-position");
            },
            set: function set(value) {
                return this.setAttribute("data-position", value);
            }
        },
        {
            key: "values",
            get: function get() {
                var _this$property;
                var values = (_this$property = this.property) === null || _this$property === void 0 ? void 0 : _this$property.values;
                return values;
            },
            set: function set(value) {
                this._value = value;
            }
        },
        {
            key: "value",
            get: function get() {
                var values = this.values;
                if (Array.isArray(values)) return values === null || values === void 0 ? void 0 : values[Number(this.position)];
                else {
                    if (Number(this.position) == 0 || !this.position || this.position == "") return values;
                    else return null;
                }
            },
            set: function set(value) {
                this._value = value;
            }
        },
        {
            key: "valueElement",
            get: function get() {
                return this.contentElement.innerText;
            },
            set: function set(value) {
                this.contentElement.innerText = value;
            }
        },
        {
            key: "addPropertyValueAction",
            value: function addPropertyValueAction(value) {
                this.thing.addProperty(this.propertyID, value);
                this.value = value;
            }
        },
        {
            key: "replacePropertyValueAction",
            value: function replacePropertyValueAction(value) {
                var refreshFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                if (this.value != value) this.thing.replaceProperty(this.propertyID, this.value, value, refreshFlag);
            }
        },
        {
            key: "deletePropertyValueAction",
            value: function deletePropertyValueAction(value) {
                this.thing.removeProperty(this.propertyID, value);
                this.value = null;
                this.remove();
            }
        },
        {
            key: "setMutationObserver",
            value: function setMutationObserver() {
                var _this2 = this;
                var callback = function callback(mutationList, observer) {
                    var _iterator = $b1c6f16ebbba8785$var$_createForOfIteratorHelper(mutationList), _step;
                    try {
                        for(_iterator.s(); !(_step = _iterator.n()).done;){
                            var mutation = _step.value;
                            if (mutation.type === "childList") ;
                            else if (mutation.type === "attributes") ;
                            else if (mutation.type === "characterData") _this2.thing.record[_this2.propertyID] = mutation.target.innerText;
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally{
                        _iterator.f();
                    }
                };
                // Create an observer instance linked to the callback function
                var observer = new MutationObserver(callback);
                var config = {
                    attributes: true,
                    attributeOldValue: true,
                    characterData: true,
                    characterDataOldValue: true,
                    childList: true,
                    subtree: true
                };
                // Start observing the target node for configured mutations
                observer.observe(this, config);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.classList.add("kr-value");
                this.loadValueFromAttribute();
                this.initObject();
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {}
        },
        {
            key: "adoptedCallback",
            value: function adoptedCallback() {}
        },
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(name, oldValue, newValue) {}
        }
    ]);
}(/*#__PURE__*/ $b1c6f16ebbba8785$var$_wrapNativeSuper(HTMLElement));
customElements.define("kr-value", $b1c6f16ebbba8785$var$KrValueElement);


var $aaa8970ead9f25bb$exports = {};
"use strict";
function $aaa8970ead9f25bb$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $aaa8970ead9f25bb$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $aaa8970ead9f25bb$var$_typeof(o);
}
Object.defineProperty($aaa8970ead9f25bb$exports, "__esModule", {
    value: true
});
$aaa8970ead9f25bb$exports.KrListItemElement = void 0;
var $723bb70a88fd0ed2$exports = {};
"use strict";
Object.defineProperty($723bb70a88fd0ed2$exports, "__esModule", {
    value: true
});
$723bb70a88fd0ed2$exports.card = $723bb70a88fd0ed2$var$card;
function $723bb70a88fd0ed2$var$card() {
    return '\n    <div class="row border ps-3 pe-3 pt-0 pb-0 hover m-0">\n        \n        <div class="col col-1 mt-3">\n            <kr-select>\n                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">\n            </kr-select>\n         </div>\n        \n        <div class="col col-1 mt-3">\n            <p>{{ position | default: "" }}</p>\n        </div>\n\n        <div class="col col-12 col-md-9 pt-0 pb-0">\n            {{ item }}\n        </div>\n        <div class="col col-1 p-1 ">\n            <kr-potential-actions style="visibility: hidden"> \n\n                <kr-action-menu>\n               \n                </kr-action-menu>\n            \n            </kr-potential-actions>\n        </div>\n\n    </div>';
}



var $aaa8970ead9f25bb$var$liquidjs = $aaa8970ead9f25bb$var$_interopRequireWildcard($gXNCa$liquidjs);

function $aaa8970ead9f25bb$var$_getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return ($aaa8970ead9f25bb$var$_getRequireWildcardCache = function _getRequireWildcardCache(e) {
        return e ? t : r;
    })(e);
}
function $aaa8970ead9f25bb$var$_interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != $aaa8970ead9f25bb$var$_typeof(e) && "function" != typeof e) return {
        "default": e
    };
    var t = $aaa8970ead9f25bb$var$_getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n["default"] = e, t && t.set(e, n), n;
}
function $aaa8970ead9f25bb$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $aaa8970ead9f25bb$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $aaa8970ead9f25bb$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($aaa8970ead9f25bb$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $aaa8970ead9f25bb$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $aaa8970ead9f25bb$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $aaa8970ead9f25bb$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $aaa8970ead9f25bb$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $aaa8970ead9f25bb$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $aaa8970ead9f25bb$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $aaa8970ead9f25bb$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $aaa8970ead9f25bb$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $aaa8970ead9f25bb$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $aaa8970ead9f25bb$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $aaa8970ead9f25bb$var$_toPropertyKey(t) {
    var i = $aaa8970ead9f25bb$var$_toPrimitive(t, "string");
    return "symbol" == $aaa8970ead9f25bb$var$_typeof(i) ? i : i + "";
}
function $aaa8970ead9f25bb$var$_toPrimitive(t, r) {
    if ("object" != $aaa8970ead9f25bb$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $aaa8970ead9f25bb$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $aaa8970ead9f25bb$var$_callSuper(t, o, e) {
    return o = $aaa8970ead9f25bb$var$_getPrototypeOf(o), $aaa8970ead9f25bb$var$_possibleConstructorReturn(t, $aaa8970ead9f25bb$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $aaa8970ead9f25bb$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $aaa8970ead9f25bb$var$_possibleConstructorReturn(self, call) {
    if (call && ($aaa8970ead9f25bb$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $aaa8970ead9f25bb$var$_assertThisInitialized(self);
}
function $aaa8970ead9f25bb$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $aaa8970ead9f25bb$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($aaa8970ead9f25bb$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $aaa8970ead9f25bb$var$_get() {
    if (typeof Reflect !== "undefined" && Reflect.get) $aaa8970ead9f25bb$var$_get = Reflect.get.bind();
    else $aaa8970ead9f25bb$var$_get = function _get(target, property, receiver) {
        var base = $aaa8970ead9f25bb$var$_superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $aaa8970ead9f25bb$var$_get.apply(this, arguments);
}
function $aaa8970ead9f25bb$var$_superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $aaa8970ead9f25bb$var$_getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function $aaa8970ead9f25bb$var$_getPrototypeOf(o) {
    $aaa8970ead9f25bb$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $aaa8970ead9f25bb$var$_getPrototypeOf(o);
}
function $aaa8970ead9f25bb$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $aaa8970ead9f25bb$var$_setPrototypeOf(subClass, superClass);
}
function $aaa8970ead9f25bb$var$_setPrototypeOf(o, p) {
    $aaa8970ead9f25bb$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $aaa8970ead9f25bb$var$_setPrototypeOf(o, p);
}
var $aaa8970ead9f25bb$var$engine = new $aaa8970ead9f25bb$var$liquidjs.Liquid();
var $aaa8970ead9f25bb$var$KrListItemElement = $aaa8970ead9f25bb$exports.KrListItemElement = /*#__PURE__*/ function(_KrThingElement) {
    function KrListItemElement() {
        var _this;
        $aaa8970ead9f25bb$var$_classCallCheck(this, KrListItemElement);
        _this = $aaa8970ead9f25bb$var$_callSuper(this, KrListItemElement);
        // Override template
        _this.htmlTemplate = (0, $723bb70a88fd0ed2$exports.card)();
        // Set template for item content
        _this.itemTemplate = null;
        // 
        _this._isSelected = false;
        return _this;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    $aaa8970ead9f25bb$var$_inherits(KrListItemElement, _KrThingElement);
    return $aaa8970ead9f25bb$var$_createClass(KrListItemElement, [
        {
            key: "initObject",
            value: function() {
                var _initObject = $aaa8970ead9f25bb$var$_asyncToGenerator(/*#__PURE__*/ $aaa8970ead9f25bb$var$_regeneratorRuntime().mark(function _callee() {
                    return $aaa8970ead9f25bb$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                _context.next = 2;
                                return $aaa8970ead9f25bb$var$_get($aaa8970ead9f25bb$var$_getPrototypeOf(KrListItemElement.prototype), "initObject", this).call(this);
                            case 2:
                                this.showItemContent();
                                this.setEventListenerPotentialActions();
                                this.setEventListenerSelect();
                                this.setEventListenerClick();
                                this.setEventListenerReorder();
                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }()
        },
        {
            key: "refreshObject",
            value: function() {
                var _refreshObject = $aaa8970ead9f25bb$var$_asyncToGenerator(/*#__PURE__*/ $aaa8970ead9f25bb$var$_regeneratorRuntime().mark(function _callee2() {
                    return $aaa8970ead9f25bb$var$_regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.next = 2;
                                return this.initObject();
                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function refreshObject() {
                    return _refreshObject.apply(this, arguments);
                }
                return refreshObject;
            }()
        },
        {
            key: "resetPosition",
            value: function resetPosition() {
                var oldValue = this.record.position;
                var newValue = this.position;
                if (oldValue != newValue) {
                    this.record.position = this.position;
                    if (this.thing) this.thing.replaceProperty("position", this.position);
                    this.refreshObject();
                }
                if (this.nextItem) this.nextItem.resetPosition();
            }
        },
        {
            key: "krItemElement",
            get: function get() {
                return this.querySelector(".krItemElement");
            }
        },
        {
            key: "KrPotentialActions",
            get: function get() {
                return this.querySelector("kr-potential-actions");
            }
        },
        {
            key: "KrSelect",
            get: function get() {
                return this.querySelector("kr-select > input");
            }
        },
        {
            key: "renderHTML",
            value: function() {
                var _renderHTML = $aaa8970ead9f25bb$var$_asyncToGenerator(/*#__PURE__*/ $aaa8970ead9f25bb$var$_regeneratorRuntime().mark(function _callee3() {
                    var tpl, r;
                    return $aaa8970ead9f25bb$var$_regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while(true)switch(_context3.prev = _context3.next){
                            case 0:
                                _context3.next = 2;
                                return $aaa8970ead9f25bb$var$engine.parse(this.htmlTemplate);
                            case 2:
                                tpl = _context3.sent;
                                r = JSON.parse(JSON.stringify(this.record));
                                r["item"] = '<span class="krItemElement"></span>';
                                _context3.next = 7;
                                return $aaa8970ead9f25bb$var$engine.render(tpl, r);
                            case 7:
                                this.htmlContent = _context3.sent;
                            case 8:
                            case "end":
                                return _context3.stop();
                        }
                    }, _callee3, this);
                }));
                function renderHTML() {
                    return _renderHTML.apply(this, arguments);
                }
                return renderHTML;
            }()
        },
        {
            key: "showItemContent",
            value: function showItemContent() {
                var _this$record;
                var itemElement = document.createElement(this.itemTemplate);
                itemElement.record = (_this$record = this.record) === null || _this$record === void 0 ? void 0 : _this$record.item;
                this.krItemElement.innerHTML = "";
                this.krItemElement.appendChild(itemElement);
            }
        },
        {
            key: "isSelected",
            get: // -----------------------------------------------------
            //  Attributes 
            // -----------------------------------------------------
            function get() {
                return this._isSelected;
            },
            set: function set(value) {
                var oldValue = this._isSelected;
                this._isSelected = value;
                if (value != oldValue) {
                    var event = new CustomEvent("kr-select", {
                        detail: this.record
                    });
                    this.dispatchEvent(event);
                    this.KrSelect.checked = value;
                }
            }
        },
        {
            key: "setEventListenerSelect",
            value: function setEventListenerSelect() {
                var _this2 = this;
                var m = this;
                this.KrSelect.addEventListener("click", function(event) {
                    if (m.isSelected == true) {
                        m.firstElementChild.classList.add("bg-body-tertiary");
                        _this2.isSelected = true;
                    } else {
                        m.firstElementChild.classList.remove("bg-body-tertiary");
                        _this2.isSelected = false;
                    }
                });
            }
        },
        {
            key: "setEventListenerClick",
            value: function setEventListenerClick() {
                var _this3 = this;
                var m = this;
                this.addEventListener("click", function(event) {
                    _this3.isClicked();
                });
            }
        },
        {
            key: "setEventListenerPotentialActions",
            value: function setEventListenerPotentialActions() {
                var _this4 = this;
                var m = this;
                this.addEventListener("mouseenter", function(event) {
                    m.KrPotentialActions.style.visibility = "visible";
                    m.firstElementChild.classList.add("bg-body-tertiary");
                    m.addEventListener("mouseleave", function(event) {
                        m.KrPotentialActions.style.visibility = "hidden";
                        if (_this4.isSelected == false) m.firstElementChild.classList.remove("bg-body-tertiary");
                    });
                });
            }
        },
        {
            key: "recordToListItem",
            value: function recordToListItem(record) {
                if (record["@type"] == "ListItem") return record;
                var listItem = {
                    "@type": "ListItem",
                    "@id": String(crypto.randomUUID()),
                    "item": record
                };
                return listItem;
            }
        },
        {
            key: "position",
            get: function get() {
                if (this.previousItem == null) return 0;
                else return this.previousItem.position + 1;
            }
        },
        {
            key: "firstItem",
            get: function get() {
                var item = this;
                while(item.previousItem)item = item.previousItem;
                return item;
            }
        },
        {
            key: "previousItem",
            get: function get() {
                var item = this.previousSibling;
                while(item && item.tagName != this.tagName)item = item.previousSibling || null;
                return item;
            }
        },
        {
            key: "nextItem",
            get: function get() {
                var item = this.nextSibling;
                while(item && item.tagName != this.tagName)item = item.nextSibling || null;
                return item;
            }
        },
        {
            key: "things",
            get: function get() {
                return this.closest("kr-things");
            }
        },
        {
            key: "setEventListenerReorder",
            value: function setEventListenerReorder() {
                var _this5 = this;
                this.draggable = "true";
                this.addEventListener("dragstart", function(event) {
                    event.dataTransfer.setData("text/plain", event.currentTarget.id);
                    event.currentTarget.classList.add("dragging");
                });
                this.addEventListener("dragend", function(event) {
                    event.currentTarget.classList.remove("dragging");
                });
                this.addEventListener("dragenter", function(event) {});
                this.addEventListener("dragleave", function(event) {});
                this.addEventListener("dragover", function(event) {
                    event.preventDefault();
                });
                this.addEventListener("drop", function(event) {
                    event.preventDefault();
                    var elementID = event.dataTransfer.getData("text/plain");
                    var element = document.getElementById(elementID);
                    // If not same list
                    if (element.things.record_id != event.currentTarget.things.record_id) return;
                    //             
                    event.currentTarget.before(element);
                    // Reset positions
                    _this5.firstItem.resetPosition();
                    // Broadcast event
                    var newEvent = new CustomEvent("kr-reorder", {
                        detail: _this5.record
                    });
                    _this5.dispatchEvent(newEvent);
                });
            }
        },
        {
            key: "isClicked",
            value: function isClicked() {
                var event = new CustomEvent("kr-click", {
                    detail: this.record
                });
                this.dispatchEvent(event);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
            //console.log("Custom element added to page.");
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
            //console.log("Custom element removed from page.");
            }
        },
        {
            key: "adoptedCallback",
            value: function adoptedCallback() {
            // console.log("Custom element moved to new page.");
            }
        },
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(name, oldValue, newValue) {
            //console.log(`Attribute ${name} has changed krListItem.`);
            }
        }
    ]);
}($db973782a6c0d45e$exports.KrThingElement);
customElements.define("kr-list-item", $aaa8970ead9f25bb$var$KrListItemElement);


var $0ba2e00fbae926d6$exports = {};
"use strict";
function $0ba2e00fbae926d6$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $0ba2e00fbae926d6$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $0ba2e00fbae926d6$var$_typeof(o);
}
Object.defineProperty($0ba2e00fbae926d6$exports, "__esModule", {
    value: true
});
$0ba2e00fbae926d6$exports.KrActionElement = void 0;

var $13575106a6ca6fe6$exports = {};
"use strict";
Object.defineProperty($13575106a6ca6fe6$exports, "__esModule", {
    value: true
});
$13575106a6ca6fe6$exports.icon = $13575106a6ca6fe6$var$icon;
function $13575106a6ca6fe6$var$icon() {
    return '\n\n{{item | json }}\n        <span>\n            <span>\n                \n                    <img src="{{ item.image.contentUrl }}" width="32px" height="32px" class="" alt="..." onerror=\'this.style.display="none"\'> \n    \n    \n            </span>\n    \n            <span>\n    \n    \n                {{ item.name }}\n    \n            </span>\n        </span>\n    ';
}


function $0ba2e00fbae926d6$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $0ba2e00fbae926d6$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $0ba2e00fbae926d6$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $0ba2e00fbae926d6$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $0ba2e00fbae926d6$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $0ba2e00fbae926d6$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $0ba2e00fbae926d6$var$_toPropertyKey(t) {
    var i = $0ba2e00fbae926d6$var$_toPrimitive(t, "string");
    return "symbol" == $0ba2e00fbae926d6$var$_typeof(i) ? i : i + "";
}
function $0ba2e00fbae926d6$var$_toPrimitive(t, r) {
    if ("object" != $0ba2e00fbae926d6$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $0ba2e00fbae926d6$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $0ba2e00fbae926d6$var$_callSuper(t, o, e) {
    return o = $0ba2e00fbae926d6$var$_getPrototypeOf(o), $0ba2e00fbae926d6$var$_possibleConstructorReturn(t, $0ba2e00fbae926d6$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $0ba2e00fbae926d6$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $0ba2e00fbae926d6$var$_possibleConstructorReturn(self, call) {
    if (call && ($0ba2e00fbae926d6$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $0ba2e00fbae926d6$var$_assertThisInitialized(self);
}
function $0ba2e00fbae926d6$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $0ba2e00fbae926d6$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($0ba2e00fbae926d6$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $0ba2e00fbae926d6$var$_get() {
    if (typeof Reflect !== "undefined" && Reflect.get) $0ba2e00fbae926d6$var$_get = Reflect.get.bind();
    else $0ba2e00fbae926d6$var$_get = function _get(target, property, receiver) {
        var base = $0ba2e00fbae926d6$var$_superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $0ba2e00fbae926d6$var$_get.apply(this, arguments);
}
function $0ba2e00fbae926d6$var$_superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $0ba2e00fbae926d6$var$_getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function $0ba2e00fbae926d6$var$_getPrototypeOf(o) {
    $0ba2e00fbae926d6$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $0ba2e00fbae926d6$var$_getPrototypeOf(o);
}
function $0ba2e00fbae926d6$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $0ba2e00fbae926d6$var$_setPrototypeOf(subClass, superClass);
}
function $0ba2e00fbae926d6$var$_setPrototypeOf(o, p) {
    $0ba2e00fbae926d6$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $0ba2e00fbae926d6$var$_setPrototypeOf(o, p);
}
var $0ba2e00fbae926d6$var$KrActionElement = $0ba2e00fbae926d6$exports.KrActionElement = /*#__PURE__*/ function(_KrThingElement) {
    function KrActionElement() {
        var _this;
        $0ba2e00fbae926d6$var$_classCallCheck(this, KrActionElement);
        _this = $0ba2e00fbae926d6$var$_callSuper(this, KrActionElement);
        _this.htmlTemplate = (0, $13575106a6ca6fe6$exports.icon)();
        _this.initialized = false;
        return _this;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    $0ba2e00fbae926d6$var$_inherits(KrActionElement, _KrThingElement);
    return $0ba2e00fbae926d6$var$_createClass(KrActionElement, [
        {
            key: "initObject",
            value: function initObject() {
                $0ba2e00fbae926d6$var$_get($0ba2e00fbae926d6$var$_getPrototypeOf(KrActionElement.prototype), "initObject", this).call(this);
                this.initEventListeners();
            }
        },
        {
            key: "getPropertiesfromAttributes",
            value: function getPropertiesfromAttributes() {
                var actionName = this.getAttribute("data-action-name");
                //this.thing = this.krState.getThing(this.record_type, this.record_id)
                var record2 = {
                    "@type": actionName,
                    "@id": String(crypto.randomUUID()),
                    "name": actionName,
                    "image": {
                        "@type": "ImageObject",
                        "contentUrl": this.getIcon(actionName)
                    },
                    "url": "",
                    "actionStatus": "potentialActionStatus"
                };
            //this.record = record
            }
        },
        {
            key: "getIcon",
            value: function getIcon(actionName) {
                switch(actionName){
                    case "addAction":
                        return "./icons/plus.svg";
                    case "addPropertyValueAction":
                        return "./icons/plus.svg";
                    case "deletePropertyValueAction":
                        return "./icons/delete.svg";
                    default:
                        return "./icons/test.svg";
                }
            }
        },
        {
            key: "initEventListeners",
            value: function initEventListeners() {
                var _this2 = this;
                if (this.initialized == false) {
                    this.addEventListener("click", function(event) {
                        console.log("click action", _this2.id);
                        _this2.actionExecute();
                    });
                    this.initialized = true;
                }
            }
        },
        {
            key: "actionExecute",
            value: function actionExecute() {
                if (this.record_type == "addAction") this.executeAddAction();
                else {
                    var actionName = this.getAttribute("data-action-name");
                    var property = this.closest(".kr-property");
                    switch(actionName){
                        case "addAction":
                            this.thing.addAction();
                        case "addPropertyValueAction":
                            property.addPropertyValueAction();
                    }
                }
            }
        },
        {
            key: "executeAddAction",
            value: function executeAddAction() {
                console.log("add", this.record_type);
                var o = this.thing.getProperty("object").value;
                var collection = this.thing.getProperty("targetCollection").value;
                var collectionObject = this.krState.getThing(collection.record_type, collection.record_id);
                collectionObject.addProperty("itemListElement", o);
            }
        },
        {
            key: "executeDeleteAction",
            value: function executeDeleteAction() {}
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.initObject();
                this.getPropertiesfromAttributes();
            }
        }
    ]);
}($db973782a6c0d45e$exports.KrThingElement);
customElements.define("kr-action", $0ba2e00fbae926d6$var$KrActionElement);


var $61e5f24d0f746261$exports = {};
"use strict";
function $61e5f24d0f746261$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $61e5f24d0f746261$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $61e5f24d0f746261$var$_typeof(o);
}
Object.defineProperty($61e5f24d0f746261$exports, "__esModule", {
    value: true
});
$61e5f24d0f746261$exports.KrActionMenuElement = void 0;

var $9344623304b9c11c$exports = {};
"use strict";
Object.defineProperty($9344623304b9c11c$exports, "__esModule", {
    value: true
});
$9344623304b9c11c$exports.menu = $9344623304b9c11c$var$menu;
function $9344623304b9c11c$var$menu() {
    return '\n    <div class="btn-group p-0 m-0">\n\n      <a href="#" role="button"  class="btn  p-0" data-bs-toggle="dropdown" aria-expanded="false">\n     \n        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">\n          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>\n        </svg>\n      </a>\n\n     \n      <ul class="dropdown-menu">\n\n\n        {% for action in item %}\n        <li class="dropdown-item">\n        \n          <kr-action data-record-type="{{ action[\'@type\'] }}" data-record-id="{{ action[\'@id\'] }}">\n          </kr-action>\n        \n        </li>\n\n        {% endfor %}\n\n        \n      </ul>\n</div>';
}


function $61e5f24d0f746261$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $61e5f24d0f746261$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $61e5f24d0f746261$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $61e5f24d0f746261$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $61e5f24d0f746261$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $61e5f24d0f746261$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $61e5f24d0f746261$var$_toPropertyKey(t) {
    var i = $61e5f24d0f746261$var$_toPrimitive(t, "string");
    return "symbol" == $61e5f24d0f746261$var$_typeof(i) ? i : i + "";
}
function $61e5f24d0f746261$var$_toPrimitive(t, r) {
    if ("object" != $61e5f24d0f746261$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $61e5f24d0f746261$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $61e5f24d0f746261$var$_callSuper(t, o, e) {
    return o = $61e5f24d0f746261$var$_getPrototypeOf(o), $61e5f24d0f746261$var$_possibleConstructorReturn(t, $61e5f24d0f746261$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $61e5f24d0f746261$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $61e5f24d0f746261$var$_possibleConstructorReturn(self, call) {
    if (call && ($61e5f24d0f746261$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $61e5f24d0f746261$var$_assertThisInitialized(self);
}
function $61e5f24d0f746261$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $61e5f24d0f746261$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($61e5f24d0f746261$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $61e5f24d0f746261$var$_get() {
    if (typeof Reflect !== "undefined" && Reflect.get) $61e5f24d0f746261$var$_get = Reflect.get.bind();
    else $61e5f24d0f746261$var$_get = function _get(target, property, receiver) {
        var base = $61e5f24d0f746261$var$_superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $61e5f24d0f746261$var$_get.apply(this, arguments);
}
function $61e5f24d0f746261$var$_superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $61e5f24d0f746261$var$_getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function $61e5f24d0f746261$var$_getPrototypeOf(o) {
    $61e5f24d0f746261$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $61e5f24d0f746261$var$_getPrototypeOf(o);
}
function $61e5f24d0f746261$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $61e5f24d0f746261$var$_setPrototypeOf(subClass, superClass);
}
function $61e5f24d0f746261$var$_setPrototypeOf(o, p) {
    $61e5f24d0f746261$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $61e5f24d0f746261$var$_setPrototypeOf(o, p);
}
var $61e5f24d0f746261$var$KrActionMenuElement = $61e5f24d0f746261$exports.KrActionMenuElement = /*#__PURE__*/ function(_KrPropertyElement) {
    function KrActionMenuElement() {
        var _this;
        $61e5f24d0f746261$var$_classCallCheck(this, KrActionMenuElement);
        _this = $61e5f24d0f746261$var$_callSuper(this, KrActionMenuElement);
        _this.htmlTemplate = (0, $9344623304b9c11c$exports.menu)();
        return _this;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    $61e5f24d0f746261$var$_inherits(KrActionMenuElement, _KrPropertyElement);
    return $61e5f24d0f746261$var$_createClass(KrActionMenuElement, [
        {
            key: "initObject",
            value: function initObject() {
                this.propertyID = "potentialAction";
                $61e5f24d0f746261$var$_get($61e5f24d0f746261$var$_getPrototypeOf(KrActionMenuElement.prototype), "initObject", this).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.initObject();
            }
        }
    ]);
}($c6920fc5fd7b8375$exports.KrPropertyElement);
customElements.define("kr-action-menu", $61e5f24d0f746261$var$KrActionMenuElement);


var $f529ce2a62665979$exports = {};
"use strict";
function $f529ce2a62665979$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $f529ce2a62665979$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $f529ce2a62665979$var$_typeof(o);
}
Object.defineProperty($f529ce2a62665979$exports, "__esModule", {
    value: true
});
$f529ce2a62665979$exports.KrActionStatusElement = void 0;

function $f529ce2a62665979$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $f529ce2a62665979$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $f529ce2a62665979$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $f529ce2a62665979$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $f529ce2a62665979$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $f529ce2a62665979$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $f529ce2a62665979$var$_toPropertyKey(t) {
    var i = $f529ce2a62665979$var$_toPrimitive(t, "string");
    return "symbol" == $f529ce2a62665979$var$_typeof(i) ? i : i + "";
}
function $f529ce2a62665979$var$_toPrimitive(t, r) {
    if ("object" != $f529ce2a62665979$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $f529ce2a62665979$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $f529ce2a62665979$var$_callSuper(t, o, e) {
    return o = $f529ce2a62665979$var$_getPrototypeOf(o), $f529ce2a62665979$var$_possibleConstructorReturn(t, $f529ce2a62665979$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $f529ce2a62665979$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $f529ce2a62665979$var$_possibleConstructorReturn(self, call) {
    if (call && ($f529ce2a62665979$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $f529ce2a62665979$var$_assertThisInitialized(self);
}
function $f529ce2a62665979$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $f529ce2a62665979$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($f529ce2a62665979$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $f529ce2a62665979$var$_get() {
    if (typeof Reflect !== "undefined" && Reflect.get) $f529ce2a62665979$var$_get = Reflect.get.bind();
    else $f529ce2a62665979$var$_get = function _get(target, property, receiver) {
        var base = $f529ce2a62665979$var$_superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $f529ce2a62665979$var$_get.apply(this, arguments);
}
function $f529ce2a62665979$var$_superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $f529ce2a62665979$var$_getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function $f529ce2a62665979$var$_getPrototypeOf(o) {
    $f529ce2a62665979$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $f529ce2a62665979$var$_getPrototypeOf(o);
}
function $f529ce2a62665979$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $f529ce2a62665979$var$_setPrototypeOf(subClass, superClass);
}
function $f529ce2a62665979$var$_setPrototypeOf(o, p) {
    $f529ce2a62665979$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $f529ce2a62665979$var$_setPrototypeOf(o, p);
}
//import { status } from './template/status.js'
var $f529ce2a62665979$var$KrActionStatusElement = $f529ce2a62665979$exports.KrActionStatusElement = /*#__PURE__*/ function(_KrValueElement) {
    function KrActionStatusElement() {
        var _this;
        $f529ce2a62665979$var$_classCallCheck(this, KrActionStatusElement);
        _this = $f529ce2a62665979$var$_callSuper(this, KrActionStatusElement);
        // Override template
        _this.setEventListenerClick();
        return _this;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    // -----------------------------------------------------
    //  Set listener 
    // -----------------------------------------------------
    $f529ce2a62665979$var$_inherits(KrActionStatusElement, _KrValueElement);
    return $f529ce2a62665979$var$_createClass(KrActionStatusElement, [
        {
            key: "setEventListenerClick",
            value: function setEventListenerClick() {
                var _this2 = this;
                this.addEventListener("click", function(event) {
                    _this2.isClicked();
                });
            }
        },
        {
            key: "assignNextStatus",
            value: function assignNextStatus() {
                if (this._value == "potentialActionStatus") this.setCompletedActionStatus();
                else if (this._value == "completedActionStatus") this.setActiveActionStatus();
                else if (this._value == "activeActionStatus") this.setFailedActionStatus();
                else if (this._value == "failedActionStatus") this.setPotentialActionStatus();
                else this.setPotentialActionStatus();
            }
        },
        {
            key: "setRecord",
            value: function setRecord(value) {
                var _this$thing;
                if (this !== null && this !== void 0 && (_this$thing = this.thing) !== null && _this$thing !== void 0 && _this$thing.record) this.thing.record.actionStatus = value;
            }
        },
        {
            key: "setPotentialActionStatus",
            value: function setPotentialActionStatus() {
                this._value = "potentialActionStatus";
                this.setRecord("potentialActionStatus");
                this.contentElement.innerHTML = this.potentialActionStatusIcon();
            }
        },
        {
            key: "setActiveActionStatus",
            value: function setActiveActionStatus() {
                this._value = "activeActionStatus";
                this.setRecord("activeActionStatus");
                this.contentElement.innerHTML = this.activeActionStatusIcon();
            }
        },
        {
            key: "setCompletedActionStatus",
            value: function setCompletedActionStatus() {
                this._value = "completedActionStatus";
                this.setRecord("completedActionStatus");
                this.contentElement.innerHTML = this.completedActionStatusIcon();
            }
        },
        {
            key: "setFailedActionStatus",
            value: function setFailedActionStatus() {
                this._value = "failedActionStatus";
                this.setRecord("failedActionStatus");
                this.contentElement.innerHTML = this.failedActionStatusIcon();
            }
        },
        {
            key: "isClicked",
            value: function isClicked() {
                console.log("click");
                this.assignNextStatus();
                var event = new CustomEvent("kr-click", {
                    detail: this._value
                });
                this.dispatchEvent(event);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                //console.log("Custom element added to page.");
                $f529ce2a62665979$var$_get($f529ce2a62665979$var$_getPrototypeOf(KrActionStatusElement.prototype), "connectedCallback", this).call(this);
                if (!this._value || this._value == null) this.setPotentialActionStatus();
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
            //console.log("Custom element removed from page.");
            }
        },
        {
            key: "adoptedCallback",
            value: function adoptedCallback() {
            // console.log("Custom element moved to new page.");
            }
        },
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(name, oldValue, newValue) {
            //console.log(`Attribute ${name} has changed krListItem.`);
            }
        },
        {
            key: "completedActionStatusIcon",
            value: function completedActionStatusIcon() {
                // checked square 
                return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">\n              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>\n              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>\n            </svg>';
            }
        },
        {
            key: "potentialActionStatusIcon",
            value: function potentialActionStatusIcon() {
                // squre
                return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">\n  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>\n</svg>';
            }
        },
        {
            key: "activeActionStatusIcon",
            value: function activeActionStatusIcon() {
                //dash square
                return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">\n  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>\n  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>\n</svg>';
            }
        },
        {
            key: "failedActionStatusIcon",
            value: function failedActionStatusIcon() {
                //dash square
                return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">\n  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>\n  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>\n</svg>';
            }
        }
    ]);
}($b1c6f16ebbba8785$exports.KrValueElement);
customElements.define("kr-action-status", $f529ce2a62665979$var$KrActionStatusElement);


var $22e173739d9422f8$exports = {};
"use strict";
function $22e173739d9422f8$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $22e173739d9422f8$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $22e173739d9422f8$var$_typeof(o);
}
Object.defineProperty($22e173739d9422f8$exports, "__esModule", {
    value: true
});
$22e173739d9422f8$exports.KrTable = void 0;

var $d9514da502a17b51$exports = {};
"use strict";
Object.defineProperty($d9514da502a17b51$exports, "__esModule", {
    value: true
});
$d9514da502a17b51$exports.table = $d9514da502a17b51$var$table;
function $d9514da502a17b51$var$table() {
    return '\n        \n        <table class="table table-hover">\n          <thead class="table-dark">\n            <tr>\n        \n            {% for pair in item.itemListElement[0] %} \n                    {% assign key = pair[0] %} \n                    {% assign value = pair[1] %} \n                    \n                    <th scope="col">{{ key }}</th>\n            {% endfor %}\n            \n            </tr>\n          </thead>\n\n          \n          <tbody>\n        \n        \n            {% for record in item.itemListElement %}\n                <tr>\n            \n                {% for pair in record %} \n                    {% assign key = pair[0] %} \n                    {% assign value = pair[1] %} \n        \n        \n\n\n                    {% if record[key][0][\'@type\']  %}\n\n        \n                        <td scope="col"><kr-avatar data-test="test1" data-record={{ record[key][0] | json }}> </kr-avatar></td>\n                        \n                  \n\n\n                    {% elsif record[key][\'@type\']  %}\n\n\n                        <td scope="col"><kr-avatar data-test="test1" data-record={{ record[key] | json }}> </kr-avatar></td>\n\n                    {% else %}\n\n                    \n                        <td scope="col">{{record[key]}}</td>\n                    \n                    {% endif %}\n        \n                    \n        \n        \n        \n                {% endfor %}\n        \n                </tr>\n            {% endfor %}\n           \n          </tbody>\n        </table>\n        \n        ';
}


function $22e173739d9422f8$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $22e173739d9422f8$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $22e173739d9422f8$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($22e173739d9422f8$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $22e173739d9422f8$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $22e173739d9422f8$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $22e173739d9422f8$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $22e173739d9422f8$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $22e173739d9422f8$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $22e173739d9422f8$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $22e173739d9422f8$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $22e173739d9422f8$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $22e173739d9422f8$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $22e173739d9422f8$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $22e173739d9422f8$var$_toPropertyKey(t) {
    var i = $22e173739d9422f8$var$_toPrimitive(t, "string");
    return "symbol" == $22e173739d9422f8$var$_typeof(i) ? i : i + "";
}
function $22e173739d9422f8$var$_toPrimitive(t, r) {
    if ("object" != $22e173739d9422f8$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $22e173739d9422f8$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $22e173739d9422f8$var$_callSuper(t, o, e) {
    return o = $22e173739d9422f8$var$_getPrototypeOf(o), $22e173739d9422f8$var$_possibleConstructorReturn(t, $22e173739d9422f8$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $22e173739d9422f8$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $22e173739d9422f8$var$_possibleConstructorReturn(self, call) {
    if (call && ($22e173739d9422f8$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $22e173739d9422f8$var$_assertThisInitialized(self);
}
function $22e173739d9422f8$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $22e173739d9422f8$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($22e173739d9422f8$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $22e173739d9422f8$var$_get() {
    if (typeof Reflect !== "undefined" && Reflect.get) $22e173739d9422f8$var$_get = Reflect.get.bind();
    else $22e173739d9422f8$var$_get = function _get(target, property, receiver) {
        var base = $22e173739d9422f8$var$_superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $22e173739d9422f8$var$_get.apply(this, arguments);
}
function $22e173739d9422f8$var$_superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $22e173739d9422f8$var$_getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function $22e173739d9422f8$var$_getPrototypeOf(o) {
    $22e173739d9422f8$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $22e173739d9422f8$var$_getPrototypeOf(o);
}
function $22e173739d9422f8$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $22e173739d9422f8$var$_setPrototypeOf(subClass, superClass);
}
function $22e173739d9422f8$var$_setPrototypeOf(o, p) {
    $22e173739d9422f8$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $22e173739d9422f8$var$_setPrototypeOf(o, p);
}
var $22e173739d9422f8$var$KrTable = $22e173739d9422f8$exports.KrTable = /*#__PURE__*/ function(_KrThingElement) {
    function KrTable() {
        var _this;
        $22e173739d9422f8$var$_classCallCheck(this, KrTable);
        _this = $22e173739d9422f8$var$_callSuper(this, KrTable);
        // Override template
        _this.htmlTemplate = (0, $d9514da502a17b51$exports.table)();
        // 
        _this._isSelected = false;
        return _this;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    $22e173739d9422f8$var$_inherits(KrTable, _KrThingElement);
    return $22e173739d9422f8$var$_createClass(KrTable, [
        {
            key: "initObject",
            value: function() {
                var _initObject = $22e173739d9422f8$var$_asyncToGenerator(/*#__PURE__*/ $22e173739d9422f8$var$_regeneratorRuntime().mark(function _callee() {
                    return $22e173739d9422f8$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                _context.next = 2;
                                return $22e173739d9422f8$var$_get($22e173739d9422f8$var$_getPrototypeOf(KrTable.prototype), "initObject", this).call(this);
                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }() // -----------------------------------------------------
        },
        {
            key: "isClicked",
            value: function isClicked() {
                var event = new CustomEvent("kr-click", {
                    detail: this.record
                });
                this.dispatchEvent(event);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
            //console.log("Custom element added to page.");
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
            //console.log("Custom element removed from page.");
            }
        },
        {
            key: "adoptedCallback",
            value: function adoptedCallback() {
            // console.log("Custom element moved to new page.");
            }
        },
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(name, oldValue, newValue) {
            //console.log(`Attribute ${name} has changed krListItem.`);
            }
        }
    ]);
}($db973782a6c0d45e$exports.KrThingElement);
customElements.define("kr-table", $22e173739d9422f8$var$KrTable);


var $e6c68b73ce8062bf$exports = {};
"use strict";
function $e6c68b73ce8062bf$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $e6c68b73ce8062bf$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $e6c68b73ce8062bf$var$_typeof(o);
}
Object.defineProperty($e6c68b73ce8062bf$exports, "__esModule", {
    value: true
});
$e6c68b73ce8062bf$exports.KrAvatar = void 0;

var $09088c1ca9baac6b$exports = {};
"use strict";
Object.defineProperty($09088c1ca9baac6b$exports, "__esModule", {
    value: true
});
$09088c1ca9baac6b$exports.avatar = $09088c1ca9baac6b$var$avatar;
function $09088c1ca9baac6b$var$avatar() {
    return '\n        <div class="d-flex justify-content-start align-items-center">\n            <div class="">\n\n                {% if item.contentUrl %}\n                    <div class=" me-2 rounded-2 bg-label-secondary"><img height="38px" width="38px"\n                            src="{{ item.contentUrl}}" alt="{{ item.name }}" class="rounded-2"></div>\n                    \n                {% endif %}\n\n                {% if item.image %}\n                        <div class=" me-2 rounded-2 bg-label-secondary"><img height="38px" width="38px"\n                                src="{{ item.image.contentUrl }}" alt="{{ item.image.name }}" class="rounded-2"></div>\n                        \n\n                {% endif %}\n            </div>\n            \n            <div class="d-flex flex-column">\n                <p class="text-body text-nowrap mb-0">{{ item.name }}</p>\n                <small class="text-muted text-truncate d-none d-sm-block"> {{ item.description }}</small>\n            </div>\n        </div>\n\n';
}


function $e6c68b73ce8062bf$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $e6c68b73ce8062bf$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $e6c68b73ce8062bf$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($e6c68b73ce8062bf$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $e6c68b73ce8062bf$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $e6c68b73ce8062bf$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $e6c68b73ce8062bf$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $e6c68b73ce8062bf$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $e6c68b73ce8062bf$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $e6c68b73ce8062bf$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $e6c68b73ce8062bf$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $e6c68b73ce8062bf$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $e6c68b73ce8062bf$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $e6c68b73ce8062bf$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $e6c68b73ce8062bf$var$_toPropertyKey(t) {
    var i = $e6c68b73ce8062bf$var$_toPrimitive(t, "string");
    return "symbol" == $e6c68b73ce8062bf$var$_typeof(i) ? i : i + "";
}
function $e6c68b73ce8062bf$var$_toPrimitive(t, r) {
    if ("object" != $e6c68b73ce8062bf$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $e6c68b73ce8062bf$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $e6c68b73ce8062bf$var$_callSuper(t, o, e) {
    return o = $e6c68b73ce8062bf$var$_getPrototypeOf(o), $e6c68b73ce8062bf$var$_possibleConstructorReturn(t, $e6c68b73ce8062bf$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $e6c68b73ce8062bf$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $e6c68b73ce8062bf$var$_possibleConstructorReturn(self, call) {
    if (call && ($e6c68b73ce8062bf$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $e6c68b73ce8062bf$var$_assertThisInitialized(self);
}
function $e6c68b73ce8062bf$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $e6c68b73ce8062bf$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($e6c68b73ce8062bf$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $e6c68b73ce8062bf$var$_get() {
    if (typeof Reflect !== "undefined" && Reflect.get) $e6c68b73ce8062bf$var$_get = Reflect.get.bind();
    else $e6c68b73ce8062bf$var$_get = function _get(target, property, receiver) {
        var base = $e6c68b73ce8062bf$var$_superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $e6c68b73ce8062bf$var$_get.apply(this, arguments);
}
function $e6c68b73ce8062bf$var$_superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $e6c68b73ce8062bf$var$_getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function $e6c68b73ce8062bf$var$_getPrototypeOf(o) {
    $e6c68b73ce8062bf$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $e6c68b73ce8062bf$var$_getPrototypeOf(o);
}
function $e6c68b73ce8062bf$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $e6c68b73ce8062bf$var$_setPrototypeOf(subClass, superClass);
}
function $e6c68b73ce8062bf$var$_setPrototypeOf(o, p) {
    $e6c68b73ce8062bf$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $e6c68b73ce8062bf$var$_setPrototypeOf(o, p);
}
var $e6c68b73ce8062bf$var$KrAvatar = $e6c68b73ce8062bf$exports.KrAvatar = /*#__PURE__*/ function(_KrThingElement) {
    function KrAvatar() {
        var _this;
        $e6c68b73ce8062bf$var$_classCallCheck(this, KrAvatar);
        _this = $e6c68b73ce8062bf$var$_callSuper(this, KrAvatar);
        // Override template
        _this.htmlTemplate = (0, $09088c1ca9baac6b$exports.avatar)();
        // 
        _this._isSelected = false;
        _this.setEventListenerDrag();
        return _this;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    $e6c68b73ce8062bf$var$_inherits(KrAvatar, _KrThingElement);
    return $e6c68b73ce8062bf$var$_createClass(KrAvatar, [
        {
            key: "initObject",
            value: function() {
                var _initObject = $e6c68b73ce8062bf$var$_asyncToGenerator(/*#__PURE__*/ $e6c68b73ce8062bf$var$_regeneratorRuntime().mark(function _callee() {
                    return $e6c68b73ce8062bf$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                _context.next = 2;
                                return $e6c68b73ce8062bf$var$_get($e6c68b73ce8062bf$var$_getPrototypeOf(KrAvatar.prototype), "initObject", this).call(this);
                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }() // -----------------------------------------------------
        },
        {
            key: "setEventListenerDrag",
            value: function setEventListenerDrag() {
                var _this2 = this;
                this.draggable = true;
                this.addEventListener("dragstart", function(event) {
                    event.preventDefault();
                    event.dataTransfer.setData("text", JSON.stringify(_this2.record, null, 4));
                });
            }
        }
    ]);
}($db973782a6c0d45e$exports.KrThingElement);
customElements.define("kr-avatar", $e6c68b73ce8062bf$var$KrAvatar);


var $7c1e20ca3df4dd5d$exports = {};
"use strict";
function $7c1e20ca3df4dd5d$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $7c1e20ca3df4dd5d$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $7c1e20ca3df4dd5d$var$_typeof(o);
}
Object.defineProperty($7c1e20ca3df4dd5d$exports, "__esModule", {
    value: true
});
$7c1e20ca3df4dd5d$exports.KrImageSm = $7c1e20ca3df4dd5d$exports.KrImageMd = $7c1e20ca3df4dd5d$exports.KrImageLg = $7c1e20ca3df4dd5d$exports.KrImageAvatar = $7c1e20ca3df4dd5d$exports.KrImage = void 0;

var $2393a21201af8e11$exports = {};
"use strict";
Object.defineProperty($2393a21201af8e11$exports, "__esModule", {
    value: true
});
$2393a21201af8e11$exports.image = $2393a21201af8e11$var$image;
function $2393a21201af8e11$var$image() {
    return '\n    \n    {% if item.contentUrl %}\n        <div class=" me-2 bg-label-secondary">\n            \n            <img \n                class="img-fluid" \n                src="{{ item.contentUrl}}" \n                alt="{{ item.name }}"  \n                onerror=\'this.style.display = "none"\'\n                >\n        \n        </div>\n\n\n    {% elsif item.image %}\n        <div class=" me-2 bg-label-secondary">\n            \n            <img\n                class="rounded-2 img-fluid" \n                src="{{ item.image.contentUrl }}" \n                alt="{{ item.image.name }}" \n                onerror=\'this.style.display = "none"\'\n                >\n        \n        </div>\n\n\n    {% endif %}\n\n    ';
}


var $596005a2fb0ea076$exports = {};
"use strict";
Object.defineProperty($596005a2fb0ea076$exports, "__esModule", {
    value: true
});
$596005a2fb0ea076$exports.imageAvatar = $596005a2fb0ea076$var$imageAvatar;
function $596005a2fb0ea076$var$imageAvatar() {
    return '\n    \n    {% if item.contentUrl %}\n        <div class=" me-2 rounded-2 bg-label-secondary">\n            \n            <img \n                class="rounded-2" \n                height="38px" \n                width="38px"\n                src="{{ item.contentUrl}}" \n                alt="{{ item.name }}"  \n                onerror=\'this.style.display = "none"\'\n                >\n        \n        </div>\n\n\n    {% elsif item.image %}\n            <div class=" me-2 rounded-2 bg-label-secondary">\n                \n                <img\n                    class="rounded-2" \n                    height="38px" \n                    width="38px"\n                    src="{{ item.image.contentUrl }}" \n                    alt="{{ item.image.name }}" \n                    onerror=\'this.style.display = "none"\'\n                    >\n            \n            </div>\n\n\n    {% endif %}\n\n    ';
}


var $904136ff9b390c85$exports = {};
"use strict";
Object.defineProperty($904136ff9b390c85$exports, "__esModule", {
    value: true
});
$904136ff9b390c85$exports.imageSm = $904136ff9b390c85$var$imageSm;
function $904136ff9b390c85$var$imageSm() {
    return '\n    \n    {% if item.contentUrl %}\n        <div class=" me-2 rounded-2 bg-label-secondary">\n            \n            <img \n                style="max-height:100px; max-width:100px; height:auto; width:auto;"\n                src="{{ item.contentUrl}}" \n                alt="{{ item.name }}"  \n                onerror=\'this.style.display = "none"\'\n                >\n        \n        </div>\n\n\n    {% elsif item.image %}\n        <div class=" me-2 rounded-2 bg-label-secondary">\n            \n            <img\n                style="max-height:100px; max-width:100px; height:auto; width:auto;"\n                src="{{ item.image.contentUrl }}" \n                alt="{{ item.image.name }}" \n                onerror=\'this.style.display = "none"\'\n                >\n        \n        </div>\n\n\n    {% endif %}\n\n    ';
}


var $73c054ef305dbb1c$exports = {};
"use strict";
Object.defineProperty($73c054ef305dbb1c$exports, "__esModule", {
    value: true
});
$73c054ef305dbb1c$exports.imageMd = $73c054ef305dbb1c$var$imageMd;
function $73c054ef305dbb1c$var$imageMd() {
    return '\n    \n    {% if item.contentUrl %}\n        <div class=" me-2 rounded-2 bg-label-secondary">\n            \n            <img \n                style="max-height:400px; max-width:400px; height:auto; width:auto;"\n                src="{{ item.contentUrl}}" \n                alt="{{ item.name }}"  \n                onerror=\'this.style.display = "none"\'\n                >\n        \n        </div>\n\n\n    {% elsif item.image %}\n        <div class=" me-2 rounded-2 bg-label-secondary">\n            \n            <img\n                style="max-height:400px; max-width:400px; height:auto; width:auto;"\n                src="{{ item.image.contentUrl }}" \n                alt="{{ item.image.name }}" \n                onerror=\'this.style.display = "none"\'\n                >\n        \n        </div>\n\n\n    {% endif %}\n\n    ';
}


var $bf7b0cb3efb503ce$exports = {};
"use strict";
Object.defineProperty($bf7b0cb3efb503ce$exports, "__esModule", {
    value: true
});
$bf7b0cb3efb503ce$exports.imageLg = $bf7b0cb3efb503ce$var$imageLg;
function $bf7b0cb3efb503ce$var$imageLg() {
    return '\n    \n    {% if item.contentUrl %}\n        <div class="me-2 bg-label-secondary">\n            \n            <img \n                style="max-height:1200px; max-width:800px; height:auto; width:auto;"\n                src="{{ item.contentUrl}}" \n                alt="{{ item.name }}"  \n                onerror=\'this.style.display = "none"\'\n                >\n        \n        </div>\n\n\n    {% elsif item.image %}\n        <div class=" me-2 bg-label-secondary">\n            \n            <img\n                style="max-height:1200px; max-width:800px; height:auto; width:auto;"\n                src="{{ item.image.contentUrl }}" \n                alt="{{ item.image.name }}" \n                onerror=\'this.style.display = "none"\'\n                >\n        \n        </div>\n\n\n    {% endif %}\n\n    ';
}


function $7c1e20ca3df4dd5d$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $7c1e20ca3df4dd5d$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $7c1e20ca3df4dd5d$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($7c1e20ca3df4dd5d$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $7c1e20ca3df4dd5d$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $7c1e20ca3df4dd5d$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $7c1e20ca3df4dd5d$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $7c1e20ca3df4dd5d$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $7c1e20ca3df4dd5d$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $7c1e20ca3df4dd5d$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $7c1e20ca3df4dd5d$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $7c1e20ca3df4dd5d$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $7c1e20ca3df4dd5d$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $7c1e20ca3df4dd5d$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $7c1e20ca3df4dd5d$var$_toPropertyKey(t) {
    var i = $7c1e20ca3df4dd5d$var$_toPrimitive(t, "string");
    return "symbol" == $7c1e20ca3df4dd5d$var$_typeof(i) ? i : i + "";
}
function $7c1e20ca3df4dd5d$var$_toPrimitive(t, r) {
    if ("object" != $7c1e20ca3df4dd5d$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $7c1e20ca3df4dd5d$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $7c1e20ca3df4dd5d$var$_callSuper(t, o, e) {
    return o = $7c1e20ca3df4dd5d$var$_getPrototypeOf(o), $7c1e20ca3df4dd5d$var$_possibleConstructorReturn(t, $7c1e20ca3df4dd5d$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $7c1e20ca3df4dd5d$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $7c1e20ca3df4dd5d$var$_possibleConstructorReturn(self, call) {
    if (call && ($7c1e20ca3df4dd5d$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $7c1e20ca3df4dd5d$var$_assertThisInitialized(self);
}
function $7c1e20ca3df4dd5d$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $7c1e20ca3df4dd5d$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($7c1e20ca3df4dd5d$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $7c1e20ca3df4dd5d$var$_get() {
    if (typeof Reflect !== "undefined" && Reflect.get) $7c1e20ca3df4dd5d$var$_get = Reflect.get.bind();
    else $7c1e20ca3df4dd5d$var$_get = function _get(target, property, receiver) {
        var base = $7c1e20ca3df4dd5d$var$_superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $7c1e20ca3df4dd5d$var$_get.apply(this, arguments);
}
function $7c1e20ca3df4dd5d$var$_superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $7c1e20ca3df4dd5d$var$_getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function $7c1e20ca3df4dd5d$var$_getPrototypeOf(o) {
    $7c1e20ca3df4dd5d$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $7c1e20ca3df4dd5d$var$_getPrototypeOf(o);
}
function $7c1e20ca3df4dd5d$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $7c1e20ca3df4dd5d$var$_setPrototypeOf(subClass, superClass);
}
function $7c1e20ca3df4dd5d$var$_setPrototypeOf(o, p) {
    $7c1e20ca3df4dd5d$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $7c1e20ca3df4dd5d$var$_setPrototypeOf(o, p);
}
// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------
var $7c1e20ca3df4dd5d$var$KrImage = $7c1e20ca3df4dd5d$exports.KrImage = /*#__PURE__*/ function(_KrThingElement) {
    function KrImage() {
        var _this;
        $7c1e20ca3df4dd5d$var$_classCallCheck(this, KrImage);
        _this = $7c1e20ca3df4dd5d$var$_callSuper(this, KrImage);
        _this.htmlTemplate = (0, $2393a21201af8e11$exports.image)();
        return _this;
    }
    $7c1e20ca3df4dd5d$var$_inherits(KrImage, _KrThingElement);
    return $7c1e20ca3df4dd5d$var$_createClass(KrImage, [
        {
            key: "initObject",
            value: function() {
                var _initObject = $7c1e20ca3df4dd5d$var$_asyncToGenerator(/*#__PURE__*/ $7c1e20ca3df4dd5d$var$_regeneratorRuntime().mark(function _callee() {
                    return $7c1e20ca3df4dd5d$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                _context.next = 2;
                                return $7c1e20ca3df4dd5d$var$_get($7c1e20ca3df4dd5d$var$_getPrototypeOf(KrImage.prototype), "initObject", this).call(this);
                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }()
        }
    ]);
}($db973782a6c0d45e$exports.KrThingElement);
customElements.define("kr-image", $7c1e20ca3df4dd5d$var$KrImage);
// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------
var $7c1e20ca3df4dd5d$var$KrImageAvatar = $7c1e20ca3df4dd5d$exports.KrImageAvatar = /*#__PURE__*/ function(_KrThingElement2) {
    function KrImageAvatar() {
        var _this2;
        $7c1e20ca3df4dd5d$var$_classCallCheck(this, KrImageAvatar);
        _this2 = $7c1e20ca3df4dd5d$var$_callSuper(this, KrImageAvatar);
        _this2.htmlTemplate = (0, $596005a2fb0ea076$exports.imageAvatar)();
        return _this2;
    }
    $7c1e20ca3df4dd5d$var$_inherits(KrImageAvatar, _KrThingElement2);
    return $7c1e20ca3df4dd5d$var$_createClass(KrImageAvatar, [
        {
            key: "initObject",
            value: function() {
                var _initObject2 = $7c1e20ca3df4dd5d$var$_asyncToGenerator(/*#__PURE__*/ $7c1e20ca3df4dd5d$var$_regeneratorRuntime().mark(function _callee2() {
                    return $7c1e20ca3df4dd5d$var$_regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.next = 2;
                                return $7c1e20ca3df4dd5d$var$_get($7c1e20ca3df4dd5d$var$_getPrototypeOf(KrImageAvatar.prototype), "initObject", this).call(this);
                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function initObject() {
                    return _initObject2.apply(this, arguments);
                }
                return initObject;
            }()
        }
    ]);
}($db973782a6c0d45e$exports.KrThingElement);
customElements.define("kr-image-avatar", $7c1e20ca3df4dd5d$var$KrImageAvatar);
// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------
var $7c1e20ca3df4dd5d$var$KrImageSm = $7c1e20ca3df4dd5d$exports.KrImageSm = /*#__PURE__*/ function(_KrThingElement3) {
    function KrImageSm() {
        var _this3;
        $7c1e20ca3df4dd5d$var$_classCallCheck(this, KrImageSm);
        _this3 = $7c1e20ca3df4dd5d$var$_callSuper(this, KrImageSm);
        _this3.htmlTemplate = (0, $904136ff9b390c85$exports.imageSm)();
        return _this3;
    }
    $7c1e20ca3df4dd5d$var$_inherits(KrImageSm, _KrThingElement3);
    return $7c1e20ca3df4dd5d$var$_createClass(KrImageSm, [
        {
            key: "initObject",
            value: function() {
                var _initObject3 = $7c1e20ca3df4dd5d$var$_asyncToGenerator(/*#__PURE__*/ $7c1e20ca3df4dd5d$var$_regeneratorRuntime().mark(function _callee3() {
                    return $7c1e20ca3df4dd5d$var$_regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while(true)switch(_context3.prev = _context3.next){
                            case 0:
                                _context3.next = 2;
                                return $7c1e20ca3df4dd5d$var$_get($7c1e20ca3df4dd5d$var$_getPrototypeOf(KrImageSm.prototype), "initObject", this).call(this);
                            case 2:
                            case "end":
                                return _context3.stop();
                        }
                    }, _callee3, this);
                }));
                function initObject() {
                    return _initObject3.apply(this, arguments);
                }
                return initObject;
            }()
        }
    ]);
}($db973782a6c0d45e$exports.KrThingElement);
customElements.define("kr-image-sm", $7c1e20ca3df4dd5d$var$KrImageSm);
// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------
var $7c1e20ca3df4dd5d$var$KrImageMd = $7c1e20ca3df4dd5d$exports.KrImageMd = /*#__PURE__*/ function(_KrThingElement4) {
    function KrImageMd() {
        var _this4;
        $7c1e20ca3df4dd5d$var$_classCallCheck(this, KrImageMd);
        _this4 = $7c1e20ca3df4dd5d$var$_callSuper(this, KrImageMd);
        _this4.htmlTemplate = (0, $73c054ef305dbb1c$exports.imageMd)();
        return _this4;
    }
    $7c1e20ca3df4dd5d$var$_inherits(KrImageMd, _KrThingElement4);
    return $7c1e20ca3df4dd5d$var$_createClass(KrImageMd, [
        {
            key: "initObject",
            value: function() {
                var _initObject4 = $7c1e20ca3df4dd5d$var$_asyncToGenerator(/*#__PURE__*/ $7c1e20ca3df4dd5d$var$_regeneratorRuntime().mark(function _callee4() {
                    return $7c1e20ca3df4dd5d$var$_regeneratorRuntime().wrap(function _callee4$(_context4) {
                        while(true)switch(_context4.prev = _context4.next){
                            case 0:
                                _context4.next = 2;
                                return $7c1e20ca3df4dd5d$var$_get($7c1e20ca3df4dd5d$var$_getPrototypeOf(KrImageMd.prototype), "initObject", this).call(this);
                            case 2:
                            case "end":
                                return _context4.stop();
                        }
                    }, _callee4, this);
                }));
                function initObject() {
                    return _initObject4.apply(this, arguments);
                }
                return initObject;
            }()
        }
    ]);
}($db973782a6c0d45e$exports.KrThingElement);
customElements.define("kr-image-md", $7c1e20ca3df4dd5d$var$KrImageMd);
// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------
var $7c1e20ca3df4dd5d$var$KrImageLg = $7c1e20ca3df4dd5d$exports.KrImageLg = /*#__PURE__*/ function(_KrThingElement5) {
    function KrImageLg() {
        var _this5;
        $7c1e20ca3df4dd5d$var$_classCallCheck(this, KrImageLg);
        _this5 = $7c1e20ca3df4dd5d$var$_callSuper(this, KrImageLg);
        _this5.htmlTemplate = (0, $bf7b0cb3efb503ce$exports.imageLg)();
        return _this5;
    }
    $7c1e20ca3df4dd5d$var$_inherits(KrImageLg, _KrThingElement5);
    return $7c1e20ca3df4dd5d$var$_createClass(KrImageLg, [
        {
            key: "initObject",
            value: function() {
                var _initObject5 = $7c1e20ca3df4dd5d$var$_asyncToGenerator(/*#__PURE__*/ $7c1e20ca3df4dd5d$var$_regeneratorRuntime().mark(function _callee5() {
                    return $7c1e20ca3df4dd5d$var$_regeneratorRuntime().wrap(function _callee5$(_context5) {
                        while(true)switch(_context5.prev = _context5.next){
                            case 0:
                                _context5.next = 2;
                                return $7c1e20ca3df4dd5d$var$_get($7c1e20ca3df4dd5d$var$_getPrototypeOf(KrImageLg.prototype), "initObject", this).call(this);
                            case 2:
                            case "end":
                                return _context5.stop();
                        }
                    }, _callee5, this);
                }));
                function initObject() {
                    return _initObject5.apply(this, arguments);
                }
                return initObject;
            }()
        }
    ]);
}($db973782a6c0d45e$exports.KrThingElement);
customElements.define("kr-image-lg", $7c1e20ca3df4dd5d$var$KrImageLg);


var $3228607af018f5a2$exports = {};
"use strict";
function $3228607af018f5a2$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $3228607af018f5a2$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $3228607af018f5a2$var$_typeof(o);
}
Object.defineProperty($3228607af018f5a2$exports, "__esModule", {
    value: true
});
$3228607af018f5a2$exports.KrFormSm = void 0;


var $540f46023163adc7$exports = {};
"use strict";
Object.defineProperty($540f46023163adc7$exports, "__esModule", {
    value: true
});
$540f46023163adc7$exports.formSm = $540f46023163adc7$var$formSm;
function $540f46023163adc7$var$formSm() {
    return '\n    <div class="container-md">\n        <form>\n\n\n\n            <kr-form-input data-property-id="@type">\n                </kr-form-input>\n\n            <kr-form-input data-property-id="@id">\n                </kr-form-input>\n\n\n            {% for p in config.properties %}\n\n                <kr-form-input data-property-id="{{p}}">\n                </kr-form-input>\n              \n\n\n            {% endfor %}\n              \n              \n              \n        </form>\n        </div>\n';
}


function $3228607af018f5a2$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $3228607af018f5a2$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $3228607af018f5a2$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($3228607af018f5a2$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $3228607af018f5a2$var$_createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = $3228607af018f5a2$var$_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function $3228607af018f5a2$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $3228607af018f5a2$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $3228607af018f5a2$var$_arrayLikeToArray(o, minLen);
}
function $3228607af018f5a2$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $3228607af018f5a2$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $3228607af018f5a2$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $3228607af018f5a2$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $3228607af018f5a2$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $3228607af018f5a2$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $3228607af018f5a2$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $3228607af018f5a2$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $3228607af018f5a2$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $3228607af018f5a2$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $3228607af018f5a2$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $3228607af018f5a2$var$_toPropertyKey(t) {
    var i = $3228607af018f5a2$var$_toPrimitive(t, "string");
    return "symbol" == $3228607af018f5a2$var$_typeof(i) ? i : i + "";
}
function $3228607af018f5a2$var$_toPrimitive(t, r) {
    if ("object" != $3228607af018f5a2$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $3228607af018f5a2$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $3228607af018f5a2$var$_callSuper(t, o, e) {
    return o = $3228607af018f5a2$var$_getPrototypeOf(o), $3228607af018f5a2$var$_possibleConstructorReturn(t, $3228607af018f5a2$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $3228607af018f5a2$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $3228607af018f5a2$var$_possibleConstructorReturn(self, call) {
    if (call && ($3228607af018f5a2$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $3228607af018f5a2$var$_assertThisInitialized(self);
}
function $3228607af018f5a2$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $3228607af018f5a2$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($3228607af018f5a2$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $3228607af018f5a2$var$_get() {
    if (typeof Reflect !== "undefined" && Reflect.get) $3228607af018f5a2$var$_get = Reflect.get.bind();
    else $3228607af018f5a2$var$_get = function _get(target, property, receiver) {
        var base = $3228607af018f5a2$var$_superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $3228607af018f5a2$var$_get.apply(this, arguments);
}
function $3228607af018f5a2$var$_superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $3228607af018f5a2$var$_getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function $3228607af018f5a2$var$_getPrototypeOf(o) {
    $3228607af018f5a2$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $3228607af018f5a2$var$_getPrototypeOf(o);
}
function $3228607af018f5a2$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $3228607af018f5a2$var$_setPrototypeOf(subClass, superClass);
}
function $3228607af018f5a2$var$_setPrototypeOf(o, p) {
    $3228607af018f5a2$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $3228607af018f5a2$var$_setPrototypeOf(o, p);
}
var $3228607af018f5a2$var$KrFormSm = $3228607af018f5a2$exports.KrFormSm = /*#__PURE__*/ function(_KrThingElement) {
    function KrFormSm() {
        var _this;
        $3228607af018f5a2$var$_classCallCheck(this, KrFormSm);
        _this = $3228607af018f5a2$var$_callSuper(this, KrFormSm);
        // Override template
        _this.htmlTemplate = (0, $540f46023163adc7$exports.formSm)();
        return _this;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    $3228607af018f5a2$var$_inherits(KrFormSm, _KrThingElement);
    return $3228607af018f5a2$var$_createClass(KrFormSm, [
        {
            key: "initObject",
            value: function() {
                var _initObject = $3228607af018f5a2$var$_asyncToGenerator(/*#__PURE__*/ $3228607af018f5a2$var$_regeneratorRuntime().mark(function _callee() {
                    var _this$thing$schema, _this$thing;
                    var _iterator, _step, p;
                    return $3228607af018f5a2$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                if (!(!this.record_type || this.record_type === null || typeof this.record_type == "undefined")) {
                                    _context.next = 2;
                                    break;
                                }
                                return _context.abrupt("return");
                            case 2:
                                if (!this.thing) this.record = {
                                    "@type": this.record_type,
                                    "@id": String(crypto.randomUUID())
                                };
                                this.config.recordTypes = (_this$thing$schema = this.thing.schema) === null || _this$thing$schema === void 0 ? void 0 : _this$thing$schema.expectedTypes;
                                this.config.properties = [];
                                console.log("a", this.thing, this.thing.schema);
                                _iterator = $3228607af018f5a2$var$_createForOfIteratorHelper((this === null || this === void 0 || (_this$thing = this.thing) === null || _this$thing === void 0 || (_this$thing = _this$thing.schema) === null || _this$thing === void 0 ? void 0 : _this$thing.propertiesLight) || []);
                                try {
                                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                                        p = _step.value;
                                        this.config.properties.push(p === null || p === void 0 ? void 0 : p.record_id);
                                    }
                                } catch (err) {
                                    _iterator.e(err);
                                } finally{
                                    _iterator.f();
                                }
                                _context.next = 10;
                                return $3228607af018f5a2$var$_get($3228607af018f5a2$var$_getPrototypeOf(KrFormSm.prototype), "initObject", this).call(this);
                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }() // -----------------------------------------------------
        },
        {
            key: "setEventListenerDrag",
            value: function setEventListenerDrag() {
                var _this2 = this;
                this.draggable = true;
                this.addEventListener("dragstart", function(event) {
                    event.preventDefault();
                    event.dataTransfer.setData("text", JSON.stringify(_this2.record, null, 4));
                });
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                $3228607af018f5a2$var$_get($3228607af018f5a2$var$_getPrototypeOf(KrFormSm.prototype), "connectedCallback", this).call(this);
            //this.initObject()
            }
        }
    ]);
}($db973782a6c0d45e$exports.KrThingElement);
customElements.define("kr-form-sm", $3228607af018f5a2$var$KrFormSm);


var $0b7c5319502bb216$exports = {};
"use strict";
function $0b7c5319502bb216$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $0b7c5319502bb216$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $0b7c5319502bb216$var$_typeof(o);
}
Object.defineProperty($0b7c5319502bb216$exports, "__esModule", {
    value: true
});
$0b7c5319502bb216$exports.KrFormInput = void 0;


var $e4d10a2a76858b3e$exports = {};
"use strict";
Object.defineProperty($e4d10a2a76858b3e$exports, "__esModule", {
    value: true
});
$e4d10a2a76858b3e$exports.formInput = $e4d10a2a76858b3e$var$formInput;
function $e4d10a2a76858b3e$var$formInput() {
    return '\n\n        <div class="mb-3">\n\n\n\n            <div class="row">\n                \n               \n                <div class="col-6  col-md-2">\n                        <label for="{{ config.propertyID }}" class="form-label text-capitalize">{{ config.propertyID }}</label>\n                </div>\n                \n                \n                <div class="col-12  order-4 col-md-9 order-md-2">\n                        {% if item.first %}\n                            {% for r in item %}\n\n                                <div class="row">\n                                    <div class="col col-12 col-md-1"> \n                                        <h6>{{forloop.index0}}</h6>\n                                    </div>\n                                    <div class="col col-12 col-md-11">\n                                            \n                                        <kr-form-input-value data-property-id="{{ config.propertyID }}"  data-position="{{forloop.index0}}"> </kr-form-input-value>\n                                           \n                                    </div>\n                                </div>\n                            {% endfor %}\n                \n                        {% else %}\n                \n                            <kr-form-input-value data-property-id="{{ config.propertyID }}"  data-position="0"> </kr-form-input-value>\n                \n                        {% endif %}\n                \n                </div>\n                \n                \n \n\n\n                \n                <div class="col order-3 justify-content-end text-end">\n                        <span class="kr-add justify-content-end">\n\n\n                            <kr-action data-action-name="addPropertyValueAction">\n\n                            </kr-action>\n                        \n                            \n                        </span>\n                </div>\n            </div>\n        </div>\n                \n\n    ';
}


function $0b7c5319502bb216$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $0b7c5319502bb216$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $0b7c5319502bb216$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($0b7c5319502bb216$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $0b7c5319502bb216$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $0b7c5319502bb216$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $0b7c5319502bb216$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $0b7c5319502bb216$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $0b7c5319502bb216$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $0b7c5319502bb216$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $0b7c5319502bb216$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $0b7c5319502bb216$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $0b7c5319502bb216$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $0b7c5319502bb216$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $0b7c5319502bb216$var$_toPropertyKey(t) {
    var i = $0b7c5319502bb216$var$_toPrimitive(t, "string");
    return "symbol" == $0b7c5319502bb216$var$_typeof(i) ? i : i + "";
}
function $0b7c5319502bb216$var$_toPrimitive(t, r) {
    if ("object" != $0b7c5319502bb216$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $0b7c5319502bb216$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $0b7c5319502bb216$var$_callSuper(t, o, e) {
    return o = $0b7c5319502bb216$var$_getPrototypeOf(o), $0b7c5319502bb216$var$_possibleConstructorReturn(t, $0b7c5319502bb216$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $0b7c5319502bb216$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $0b7c5319502bb216$var$_possibleConstructorReturn(self, call) {
    if (call && ($0b7c5319502bb216$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $0b7c5319502bb216$var$_assertThisInitialized(self);
}
function $0b7c5319502bb216$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $0b7c5319502bb216$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($0b7c5319502bb216$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $0b7c5319502bb216$var$_get() {
    if (typeof Reflect !== "undefined" && Reflect.get) $0b7c5319502bb216$var$_get = Reflect.get.bind();
    else $0b7c5319502bb216$var$_get = function _get(target, property, receiver) {
        var base = $0b7c5319502bb216$var$_superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $0b7c5319502bb216$var$_get.apply(this, arguments);
}
function $0b7c5319502bb216$var$_superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $0b7c5319502bb216$var$_getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function $0b7c5319502bb216$var$_getPrototypeOf(o) {
    $0b7c5319502bb216$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $0b7c5319502bb216$var$_getPrototypeOf(o);
}
function $0b7c5319502bb216$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $0b7c5319502bb216$var$_setPrototypeOf(subClass, superClass);
}
function $0b7c5319502bb216$var$_setPrototypeOf(o, p) {
    $0b7c5319502bb216$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $0b7c5319502bb216$var$_setPrototypeOf(o, p);
}
var $0b7c5319502bb216$var$DEFAULTLOCALE = "en-US";
var $0b7c5319502bb216$var$KrFormInput = $0b7c5319502bb216$exports.KrFormInput = /*#__PURE__*/ function(_KrPropertyElement) {
    function KrFormInput() {
        var _this;
        $0b7c5319502bb216$var$_classCallCheck(this, KrFormInput);
        _this = $0b7c5319502bb216$var$_callSuper(this, KrFormInput);
        // Override template
        _this.htmlTemplate = (0, $e4d10a2a76858b3e$exports.formInput)();
        // 
        //this._isSelected = false
        //this.setEventListenerDrag()
        return _this;
    }
    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------
    $0b7c5319502bb216$var$_inherits(KrFormInput, _KrPropertyElement);
    return $0b7c5319502bb216$var$_createClass(KrFormInput, [
        {
            key: "initObject",
            value: function() {
                var _initObject = $0b7c5319502bb216$var$_asyncToGenerator(/*#__PURE__*/ $0b7c5319502bb216$var$_regeneratorRuntime().mark(function _callee() {
                    return $0b7c5319502bb216$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                _context.next = 2;
                                return $0b7c5319502bb216$var$_get($0b7c5319502bb216$var$_getPrototypeOf(KrFormInput.prototype), "initObject", this).call(this);
                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }() // -----------------------------------------------------
        },
        {
            key: "setEventListenerDrag",
            value: function setEventListenerDrag() {
                var _this2 = this;
                this.draggable = true;
                this.addEventListener("dragstart", function(event) {
                    event.preventDefault();
                    event.dataTransfer.setData("text", JSON.stringify(_this2.record, null, 4));
                });
            }
        }
    ]);
}($c6920fc5fd7b8375$exports.KrPropertyElement);
customElements.define("kr-form-input", $0b7c5319502bb216$var$KrFormInput);


var $c88aca714037a3fd$exports = {};
"use strict";
function $c88aca714037a3fd$var$_typeof(o) {
    "@babel/helpers - typeof";
    return $c88aca714037a3fd$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, $c88aca714037a3fd$var$_typeof(o);
}
Object.defineProperty($c88aca714037a3fd$exports, "__esModule", {
    value: true
});
$c88aca714037a3fd$exports.KrFormInputValue = void 0;


function $c88aca714037a3fd$var$_createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = $c88aca714037a3fd$var$_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function $c88aca714037a3fd$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $c88aca714037a3fd$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $c88aca714037a3fd$var$_arrayLikeToArray(o, minLen);
}
function $c88aca714037a3fd$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $c88aca714037a3fd$var$_regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    $c88aca714037a3fd$var$_regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == $c88aca714037a3fd$var$_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError($c88aca714037a3fd$var$_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
function $c88aca714037a3fd$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $c88aca714037a3fd$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $c88aca714037a3fd$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $c88aca714037a3fd$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $c88aca714037a3fd$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $c88aca714037a3fd$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $c88aca714037a3fd$var$_toPropertyKey(descriptor.key), descriptor);
    }
}
function $c88aca714037a3fd$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $c88aca714037a3fd$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $c88aca714037a3fd$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $c88aca714037a3fd$var$_toPropertyKey(t) {
    var i = $c88aca714037a3fd$var$_toPrimitive(t, "string");
    return "symbol" == $c88aca714037a3fd$var$_typeof(i) ? i : i + "";
}
function $c88aca714037a3fd$var$_toPrimitive(t, r) {
    if ("object" != $c88aca714037a3fd$var$_typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != $c88aca714037a3fd$var$_typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function $c88aca714037a3fd$var$_callSuper(t, o, e) {
    return o = $c88aca714037a3fd$var$_getPrototypeOf(o), $c88aca714037a3fd$var$_possibleConstructorReturn(t, $c88aca714037a3fd$var$_isNativeReflectConstruct() ? Reflect.construct(o, e || [], $c88aca714037a3fd$var$_getPrototypeOf(t).constructor) : o.apply(t, e));
}
function $c88aca714037a3fd$var$_possibleConstructorReturn(self, call) {
    if (call && ($c88aca714037a3fd$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $c88aca714037a3fd$var$_assertThisInitialized(self);
}
function $c88aca714037a3fd$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $c88aca714037a3fd$var$_isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return ($c88aca714037a3fd$var$_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function $c88aca714037a3fd$var$_get() {
    if (typeof Reflect !== "undefined" && Reflect.get) $c88aca714037a3fd$var$_get = Reflect.get.bind();
    else $c88aca714037a3fd$var$_get = function _get(target, property, receiver) {
        var base = $c88aca714037a3fd$var$_superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
        return desc.value;
    };
    return $c88aca714037a3fd$var$_get.apply(this, arguments);
}
function $c88aca714037a3fd$var$_superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = $c88aca714037a3fd$var$_getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function $c88aca714037a3fd$var$_getPrototypeOf(o) {
    $c88aca714037a3fd$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $c88aca714037a3fd$var$_getPrototypeOf(o);
}
function $c88aca714037a3fd$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $c88aca714037a3fd$var$_setPrototypeOf(subClass, superClass);
}
function $c88aca714037a3fd$var$_setPrototypeOf(o, p) {
    $c88aca714037a3fd$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $c88aca714037a3fd$var$_setPrototypeOf(o, p);
}
var $c88aca714037a3fd$var$DEFAULTLOCALE = "en-US";
var $c88aca714037a3fd$var$KrFormInputValue = $c88aca714037a3fd$exports.KrFormInputValue = /*#__PURE__*/ function(_KrValueElement) {
    function KrFormInputValue() {
        $c88aca714037a3fd$var$_classCallCheck(this, KrFormInputValue);
        return $c88aca714037a3fd$var$_callSuper(this, KrFormInputValue); // Override template
    //this.htmlTemplate = avatar()
    // 
    //this._isSelected = false
    //this.setEventListenerDrag()
    }
    // -----------------------------------------------------
    //  Attr 
    // -----------------------------------------------------
    $c88aca714037a3fd$var$_inherits(KrFormInputValue, _KrValueElement);
    return $c88aca714037a3fd$var$_createClass(KrFormInputValue, [
        {
            key: "propertyName",
            get: function get() {
                var _this$krakenSchema;
                var propertyName = ((_this$krakenSchema = this.krakenSchema) === null || _this$krakenSchema === void 0 ? void 0 : _this$krakenSchema.getLocalizedPropertyID($c88aca714037a3fd$var$DEFAULTLOCALE, this.propertyID)) || this.propertyID;
                propertyName = propertyName.replace(/([A-Z])/g, " $1");
                return propertyName;
            }
        },
        {
            key: "initObject",
            value: function() {
                var _initObject = $c88aca714037a3fd$var$_asyncToGenerator(/*#__PURE__*/ $c88aca714037a3fd$var$_regeneratorRuntime().mark(function _callee() {
                    var _this$krakenSchema2, _this$krakenSchema3;
                    var enumerations;
                    return $c88aca714037a3fd$var$_regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                //
                                console.log("init property");
                                _context.next = 3;
                                return $c88aca714037a3fd$var$_get($c88aca714037a3fd$var$_getPrototypeOf(KrFormInputValue.prototype), "initObject", this).call(this);
                            case 3:
                                this.setEventListenerValue();
                                this.krakenSchema = $gXNCa$krakenschema.KrakenSchemas.get(this.propertyID);
                                enumerations = ((_this$krakenSchema2 = this.krakenSchema) === null || _this$krakenSchema2 === void 0 || (_this$krakenSchema2 = _this$krakenSchema2.expectedType) === null || _this$krakenSchema2 === void 0 ? void 0 : _this$krakenSchema2.enumerationItems) || [];
                                if (this.propertyID == "@type") // Handle record_type
                                this.innerHTML = this.getHtmlRecordType();
                                else if (enumerations.length > 0) // Handle enumerations
                                this.innerHTML = this.getHtmlEnumeration();
                                else if (((_this$krakenSchema3 = this.krakenSchema) === null || _this$krakenSchema3 === void 0 || (_this$krakenSchema3 = _this$krakenSchema3.expectedType) === null || _this$krakenSchema3 === void 0 ? void 0 : _this$krakenSchema3.htmlType) == "object") this.innerHTML = this.getHtmlObject();
                                else this.innerHTML = this.getHtmlSimple();
                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function initObject() {
                    return _initObject.apply(this, arguments);
                }
                return initObject;
            }()
        },
        {
            key: "getHtmlSimple",
            value: function getHtmlSimple() {
                var _this$krakenSchema4;
                return '\n        \n            <input type="'.concat((_this$krakenSchema4 = this.krakenSchema) === null || _this$krakenSchema4 === void 0 ? void 0 : _this$krakenSchema4.expectedType.htmlType, '" class="kr-value-item form-control" id="exampleInputPassword1" value="').concat(this.value || "", '"  >\n       ');
            }
        },
        {
            key: "getHtmlRecordType",
            value: function getHtmlRecordType() {
                var enumerations;
                var parentProperty = this.thing.closest("kr-property");
                if (parentProperty) {
                    var _parentProperty$krake;
                    enumerations = ((_parentProperty$krake = parentProperty.krakenSchema) === null || _parentProperty$krake === void 0 ? void 0 : _parentProperty$krake.expectedTypes) || [];
                } else enumerations = $gXNCa$krakenschema.KrakenSchemas.get("Thing").record_types || [];
                var enums = [];
                var _iterator = $c88aca714037a3fd$var$_createForOfIteratorHelper(enumerations), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var e = _step.value;
                        enums.push('<option value="'.concat(e, '">').concat(e, "</option>"));
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
                var id = String(crypto.randomUUID());
                return '\n        \n        <input class="kr-value-item form-control" list="datalist_'.concat(id, '" aria-label="Default select example" value="').concat(this.value, '">\n              <datalist id="datalist_').concat(id, '">\n             ').concat(enums.join(""), "\n                </datalist>\n            </input>\n          ");
            }
        },
        {
            key: "getHtmlEnumeration",
            value: function getHtmlEnumeration() {
                var _this$krakenSchema$ex;
                var enumerations = ((_this$krakenSchema$ex = this.krakenSchema.expectedType) === null || _this$krakenSchema$ex === void 0 ? void 0 : _this$krakenSchema$ex.enumerationItems) || [];
                var enums = [];
                var _iterator2 = $c88aca714037a3fd$var$_createForOfIteratorHelper(enumerations), _step2;
                try {
                    for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                        var e = _step2.value;
                        enums.push('<option value="'.concat(e.name, '">').concat(e.name, "</option>"));
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally{
                    _iterator2.f();
                }
                return '\n       \n        <select class="kr-value-item form-select" aria-label="Default select example" value="'.concat(this.value, '">\n              <option selected></option>\n              ').concat(enums.join(""), "\n            </select>\n      ");
            }
        },
        {
            key: "getHtmlObject",
            value: function getHtmlObject() {
                return '\n       \n        <div class="ms-5">\n            <kr-form-sm data-record-type="'.concat(this.krakenSchema.expectedType.record_id, '"></kr-form-sm></div>\n           ');
            }
        },
        {
            key: "setEventListenerDrag",
            value: function setEventListenerDrag() {
                var _this = this;
                this.draggable = true;
                this.addEventListener("dragstart", function(event) {
                    event.preventDefault();
                    event.dataTransfer.setData("text", JSON.stringify(_this.record, null, 4));
                });
            }
        },
        {
            key: "setEventListenerValue",
            value: function setEventListenerValue() {
                this.addEventListener("input", function(event) {
                //this.replacePropertyValueAction(event.target.value, false)
                });
            }
        }
    ]);
}($b1c6f16ebbba8785$exports.KrValueElement);
customElements.define("kr-form-input-value", $c88aca714037a3fd$var$KrFormInputValue);


var $4fa36e821943b400$var$KrElements = module.exports.KrElements = {
    KrState: $49a0e07071a6b84f$exports.KrStateElement,
    KrThing: $db973782a6c0d45e$exports.KrThingElement,
    KrThings: $f13991e94eb8dbdc$exports.KrThingsElement,
    KrProperty: $c6920fc5fd7b8375$exports.KrPropertyElement,
    KrValue: $b1c6f16ebbba8785$exports.KrValueElement,
    KrListItem: $aaa8970ead9f25bb$exports.KrListItemElement,
    KrAction: $0ba2e00fbae926d6$exports.KrActionElement,
    KrActionMenu: $61e5f24d0f746261$exports.KrActionMenuElement,
    KrActionStatus: $f529ce2a62665979$exports.KrActionStatusElement,
    KrTable: $22e173739d9422f8$exports.KrTable,
    KrAvatar: $e6c68b73ce8062bf$exports.KrAvatar,
    KrImage: $7c1e20ca3df4dd5d$exports.KrImage,
    KrImageSm: $7c1e20ca3df4dd5d$exports.KrImageSm,
    KrImageMd: $7c1e20ca3df4dd5d$exports.KrImageMd,
    KrImageLg: $7c1e20ca3df4dd5d$exports.KrImageLg,
    KrImageAvatar: $7c1e20ca3df4dd5d$exports.KrImageAvatar,
    KrFormInput: $0b7c5319502bb216$exports.KrFormInput,
    KrFormSm: $3228607af018f5a2$exports.KrFormSm
};


//# sourceMappingURL=main.js.map
