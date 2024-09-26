(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ignaCarousel = {}));
})(this, (function (exports) { 'use strict';

  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
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
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
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
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
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
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
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
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
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
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
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
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
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
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }

  var longLivedAccessToken;
  var loadCSS = function loadCSS(path, fallbackPath) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = path;
    link.onerror = function () {
      console.error("Error loading CSS from ".concat(path, ". Loading fallback CSS from ").concat(fallbackPath, "."));
      var fallbackLink = document.createElement('link');
      fallbackLink.rel = 'stylesheet';
      fallbackLink.type = 'text/css';
      fallbackLink.href = fallbackPath;
      document.head.appendChild(fallbackLink);
    };
    document.head.appendChild(link);
  };
  var fetchInstagramImages = function fetchInstagramImages(accessToken) {
    var url = "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=".concat(accessToken);
    return fetch(url, {
      method: 'GET'
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Fetched Instagram Images:', data);
      displayInstagramImages(data);
    })["catch"](function (error) {
      console.error('Error fetching Instagram images:', error);
    });
  };
  var displayInstagramImages = function displayInstagramImages(_ref) {
    var data = _ref.data;
    var imagesContainer = document.getElementById('instagram-carousel');
    imagesContainer.innerHTML = '';
    data.forEach(function (item) {
      if (item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM') {
        var imageDiv = document.createElement('div');
        imageDiv.style.marginRight = '1.5em';
        imageDiv.style.width = '250px';
        imageDiv.style.position = 'relative';
        imageDiv.addEventListener('click', function () {
          window.location.href = item.permalink;
        });
        var img = document.createElement('img');
        img.src = item.media_url;
        img.alt = item.caption || 'Instagram Image';
        img.style.width = '100%';
        var logo = document.createElement('img');
        logo.src = './src/ig-logo.png';
        logo.onerror = function () {
          logo.src = 'https://services.crossvillefabric.com/test/ig-logo2.png';
        };
        logo.alt = 'Logo';
        logo.classList.add('hover-logo');
        imageDiv.appendChild(img);
        imageDiv.appendChild(logo);
        imagesContainer.appendChild(imageDiv);
      }
    });
  };
  var refreshAccessToken = function refreshAccessToken() {
    var url = "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=".concat(longLivedAccessToken);
    return fetch(url, {
      method: 'GET'
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      longLivedAccessToken = data.access_token;
      console.log('Token refreshed. New Long-Lived Access Token:', longLivedAccessToken);
      return longLivedAccessToken;
    })["catch"](function (error) {
      console.error('Error refreshing the token:', error);
    });
  };
  var loadInstagramImages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var refreshedToken;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return refreshAccessToken();
          case 2:
            refreshedToken = _context.sent;
            fetchInstagramImages(refreshedToken);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadInstagramImages() {
      return _ref2.apply(this, arguments);
    };
  }();
  function initInstagramCarousel() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var igTag = document.getElementById('instagram-area');
    var autoSlideInterval;
    loadCSS('./src/ig-style.css', 'https://services.crossvillefabric.com/test/ig-style.css');
    var heading = document.createElement('h3');
    heading.setAttribute('role', 'heading');
    heading.setAttribute('aria-level', '3');
    heading.classList.add('instagram-heading');
    heading.innerHTML = "Instagram &#64;".concat(igName);
    var sliderContainer = document.createElement('div');
    sliderContainer.classList.add('instagram-slider-container');
    var prevButton = document.createElement('button');
    prevButton.classList.add('slider-arrow', 'slider-arrow--prev');
    prevButton.textContent = '<';
    var slider = document.createElement('div');
    slider.classList.add('instagram-slider');
    var carousel = document.createElement('div');
    carousel.setAttribute('id', 'instagram-carousel');
    carousel.classList.add('instagram-carousel');
    slider.appendChild(carousel);
    var nextButton = document.createElement('button');
    nextButton.classList.add('slider-arrow', 'slider-arrow--next');
    nextButton.textContent = '>';
    sliderContainer.appendChild(prevButton);
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(nextButton);
    igTag.appendChild(heading);
    igTag.appendChild(sliderContainer);
    loadInstagramImages();
    var currentPosition = 0;
    var slideWidth = 250 + 24;
    var maxVisibleSlides = Math.floor(document.querySelector('.instagram-slider').offsetWidth / slideWidth);
    var sliderNext = document.querySelector('.slider-arrow--next');
    var sliderPrev = document.querySelector('.slider-arrow--prev');
    var slideCarousel = function slideCarousel(direction) {
      var maxPosition = (carousel.children.length - maxVisibleSlides) * slideWidth;
      if (direction === 'next') {
        if (currentPosition < maxPosition) {
          currentPosition += slideWidth;
        }
      } else {
        if (currentPosition > 0) {
          currentPosition -= slideWidth;
        }
      }
      carousel.style.transform = "translateX(-".concat(currentPosition, "px)");
    };
    var startAutoSlide = function startAutoSlide(direction) {
      autoSlideInterval = setInterval(function () {
        return slideCarousel(direction);
      }, 100);
    };
    var stopAutoSlide = function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    };
    sliderNext.addEventListener('click', function () {
      return slideCarousel('next');
    });
    sliderPrev.addEventListener('click', function () {
      return slideCarousel('prev');
    });
    sliderNext.addEventListener('mousedown', function () {
      return startAutoSlide('next');
    });
    sliderNext.addEventListener('mouseup', stopAutoSlide);
    sliderNext.addEventListener('mouseleave', stopAutoSlide);
    sliderPrev.addEventListener('mousedown', function () {
      return startAutoSlide('prev');
    });
    sliderPrev.addEventListener('mouseup', stopAutoSlide);
    sliderPrev.addEventListener('mouseleave', stopAutoSlide);
    if (!igTag) {
      console.error('Element with id "instagram-area" not found');
      return;
    }
    longLivedAccessToken = options.longLivedAccessToken || igTag.getAttribute('data-ig-token');
    var igName = options.igName || igTag.getAttribute('data-ig-name');
    if (!longLivedAccessToken || !igName) {
      console.error('Access token or Instagram name not provided');
      return;
    }

    // Inicialización
    function initialize() {
      loadInstagramImages();
    }

    // Ejecutar la inicialización cuando el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initialize);
    } else {
      initialize();
    }
  }

  // Si estamos en un entorno de navegador, exponemos la función globalmente
  if (typeof window !== 'undefined') {
    window.initInstagramCarousel = initInstagramCarousel;
  }

  exports.initInstagramCarousel = initInstagramCarousel;

  Object.defineProperty(exports, '__esModule', { value: true });

}));