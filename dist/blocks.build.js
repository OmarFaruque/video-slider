! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 41)
}([function(e, t, n) {
    var r, i;
    ! function() {
        "use strict";

        function n() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                if (r) {
                    var i = typeof r;
                    if ("string" === i || "number" === i) e.push(r);
                    else if (Array.isArray(r) && r.length) {
                        var a = n.apply(null, r);
                        a && e.push(a)
                    } else if ("object" === i)
                        for (var l in r) o.call(r, l) && r[l] && e.push(l)
                }
            }
            return e.join(" ")
        }
        var o = {}.hasOwnProperty;
        "undefined" !== typeof e && e.exports ? (n.default = n, e.exports = n) : (r = [], void 0 !== (i = function() {
            return n
        }.apply(t, r)) && (e.exports = i))
    }()
}, function(e, t) {
    e.exports = React
}, function(e, t) {
    e.exports = lodash
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                o(e, t, n[t])
            })
        }
        return e
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.canUseDOM = t.slidesOnLeft = t.slidesOnRight = t.siblingDirection = t.getTotalSlides = t.getPostClones = t.getPreClones = t.getTrackLeft = t.getTrackAnimateCSS = t.getTrackCSS = t.checkSpecKeys = t.getSlideCount = t.checkNavigable = t.getNavigableIndexes = t.swipeEnd = t.swipeMove = t.swipeStart = t.keyHandler = t.changeSlide = t.slideHandler = t.initializedState = t.extractObject = t.canGoNext = t.getSwipeDirection = t.getHeight = t.getWidth = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.lazyStartIndex = t.getRequiredLazySlides = t.getOnDemandLazySlides = void 0;
    var a = r(n(1)),
        l = r(n(7)),
        s = function(e) {
            for (var t = [], n = u(e), r = d(e), i = n; i < r; i++) e.lazyLoadedList.indexOf(i) < 0 && t.push(i);
            return t
        };
    t.getOnDemandLazySlides = s;
    var c = function(e) {
        for (var t = [], n = u(e), r = d(e), i = n; i < r; i++) t.push(i);
        return t
    };
    t.getRequiredLazySlides = c;
    var u = function(e) {
        return e.currentSlide - p(e)
    };
    t.lazyStartIndex = u;
    var d = function(e) {
        return e.currentSlide + f(e)
    };
    t.lazyEndIndex = d;
    var p = function(e) {
        return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0
    };
    t.lazySlidesOnLeft = p;
    var f = function(e) {
        return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow
    };
    t.lazySlidesOnRight = f;
    var m = function(e) {
        return e && e.offsetWidth || 0
    };
    t.getWidth = m;
    var h = function(e) {
        return e && e.offsetHeight || 0
    };
    t.getHeight = h;
    var v = function(e) {
        var t, n, r, i, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t = e.startX - e.curX, n = e.startY - e.curY, r = Math.atan2(n, t), i = Math.round(180 * r / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? "left" : i >= 135 && i <= 225 ? "right" : !0 === o ? i >= 35 && i <= 135 ? "up" : "down" : "vertical"
    };
    t.getSwipeDirection = v;
    var g = function(e) {
        var t = !0;
        return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 ? t = !1 : (e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1)), t
    };
    t.canGoNext = g;
    var b = function(e, t) {
        var n = {};
        return t.forEach(function(t) {
            return n[t] = e[t]
        }), n
    };
    t.extractObject = b;
    var y = function(e) {
        var t, n = a.default.Children.count(e.children),
            r = Math.ceil(m(l.default.findDOMNode(e.listRef))),
            i = Math.ceil(m(l.default.findDOMNode(e.trackRef)));
        if (e.vertical) t = r;
        else {
            var o = e.centerMode && 2 * parseInt(e.centerPadding);
            "string" === typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (o *= r / 100), t = Math.ceil((r - o) / e.slidesToShow)
        }
        var c = l.default.findDOMNode(e.listRef) && h(l.default.findDOMNode(e.listRef).querySelector('[data-index="0"]')),
            u = c * e.slidesToShow,
            d = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
        e.rtl && void 0 === e.currentSlide && (d = n - 1 - e.initialSlide);
        var p = e.lazyLoadedList || [],
            f = s({
                currentSlide: d,
                lazyLoadedList: p
            });
        p.concat(f);
        var v = {
            slideCount: n,
            slideWidth: t,
            listWidth: r,
            trackWidth: i,
            currentSlide: d,
            slideHeight: c,
            listHeight: u,
            lazyLoadedList: p
        };
        return null === e.autoplaying && e.autoplay && (v.autoplaying = "playing"), v
    };
    t.initializedState = y;
    var w = function(e) {
        var t = e.waitForAnimate,
            n = e.animating,
            r = e.fade,
            o = e.infinite,
            a = e.index,
            l = e.slideCount,
            c = e.lazyLoadedList,
            u = e.lazyLoad,
            d = e.currentSlide,
            p = e.centerMode,
            f = e.slidesToScroll,
            m = e.slidesToShow,
            h = e.useCSS;
        if (t && n) return {};
        var v, b, y, w = a,
            S = {},
            k = {};
        if (r) {
            if (!o && (a < 0 || a >= l)) return {};
            a < 0 ? w = a + l : a >= l && (w = a - l), u && c.indexOf(w) < 0 && c.push(w), S = {
                animating: !0,
                currentSlide: w,
                lazyLoadedList: c
            }, k = {
                animating: !1
            }
        } else v = w, w < 0 ? (v = w + l, o ? l % f !== 0 && (v = l - l % f) : v = 0) : !g(e) && w > d ? w = v = d : p && w >= l ? (w = o ? l : l - 1, v = o ? 0 : l - 1) : w >= l && (v = w - l, o ? l % f !== 0 && (v = 0) : v = l - m), b = L(i({}, e, {
            slideIndex: w
        })), y = L(i({}, e, {
            slideIndex: v
        })), o || (b === y && (w = v), b = y), u && c.concat(s(i({}, e, {
            currentSlide: w
        }))), h ? (S = {
            animating: !0,
            currentSlide: v,
            trackStyle: A(i({}, e, {
                left: b
            })),
            lazyLoadedList: c
        }, k = {
            animating: !1,
            currentSlide: v,
            trackStyle: P(i({}, e, {
                left: y
            })),
            swipeLeft: null
        }) : S = {
            currentSlide: v,
            trackStyle: P(i({}, e, {
                left: y
            })),
            lazyLoadedList: c
        };
        return {
            state: S,
            nextState: k
        }
    };
    t.slideHandler = w;
    var S = function(e, t) {
        var n, r, o, a, l, s = e.slidesToScroll,
            c = e.slidesToShow,
            u = e.slideCount,
            d = e.currentSlide,
            p = e.lazyLoad,
            f = e.infinite;
        if (a = u % s !== 0, n = a ? 0 : (u - d) % s, "previous" === t.message) o = 0 === n ? s : c - n, l = d - o, p && !f && (r = d - o, l = -1 === r ? u - 1 : r);
        else if ("next" === t.message) o = 0 === n ? s : n, l = d + o, p && !f && (l = (d + s) % u + n);
        else if ("dots" === t.message) {
            if ((l = t.index * t.slidesToScroll) === t.currentSlide) return null
        } else if ("children" === t.message) {
            if ((l = t.index) === t.currentSlide) return null;
            if (f) {
                var m = z(i({}, e, {
                    targetSlide: l
                }));
                l > t.currentSlide && "left" === m ? l -= u : l < t.currentSlide && "right" === m && (l += u)
            }
        } else if ("index" === t.message && (l = Number(t.index)) === t.currentSlide) return null;
        return l
    };
    t.changeSlide = S;
    var k = function(e, t, n) {
        return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? n ? "next" : "previous" : 39 === e.keyCode ? n ? "previous" : "next" : ""
    };
    t.keyHandler = k;
    var E = function(e, t, n) {
        return "IMG" === e.target.tagName && e.preventDefault(), !t || !n && -1 !== e.type.indexOf("mouse") ? "" : {
            dragging: !0,
            touchObject: {
                startX: e.touches ? e.touches[0].pageX : e.clientX,
                startY: e.touches ? e.touches[0].pageY : e.clientY,
                curX: e.touches ? e.touches[0].pageX : e.clientX,
                curY: e.touches ? e.touches[0].pageY : e.clientY
            }
        }
    };
    t.swipeStart = E;
    var O = function(e, t) {
        var n = t.scrolling,
            r = t.animating,
            o = t.vertical,
            a = t.swipeToSlide,
            l = t.verticalSwiping,
            s = t.rtl,
            c = t.currentSlide,
            u = t.edgeFriction,
            d = t.edgeDragged,
            p = t.onEdge,
            f = t.swiped,
            m = t.swiping,
            h = t.slideCount,
            b = t.slidesToScroll,
            y = t.infinite,
            w = t.touchObject,
            S = t.swipeEvent,
            k = t.listHeight,
            E = t.listWidth;
        if (!n) {
            if (r) return e.preventDefault();
            o && a && l && e.preventDefault();
            var O, C = {},
                x = L(t);
            w.curX = e.touches ? e.touches[0].pageX : e.clientX, w.curY = e.touches ? e.touches[0].pageY : e.clientY, w.swipeLength = Math.round(Math.sqrt(Math.pow(w.curX - w.startX, 2)));
            var T = Math.round(Math.sqrt(Math.pow(w.curY - w.startY, 2)));
            if (!l && !m && T > 10) return {
                scrolling: !0
            };
            l && (w.swipeLength = T);
            var _ = (s ? -1 : 1) * (w.curX > w.startX ? 1 : -1);
            l && (_ = w.curY > w.startY ? 1 : -1);
            var M = Math.ceil(h / b),
                A = v(t.touchObject, l),
                j = w.swipeLength;
            return y || (0 === c && "right" === A || c + 1 >= M && "left" === A || !g(t) && "left" === A) && (j = w.swipeLength * u, !1 === d && p && (p(A), C.edgeDragged = !0)), (!f && S && (S(A), C.swiped = !0), O = o ? x + j * (k / E) * _ : s ? x - j * _ : x + j * _, l && (O = x + j * _), C = i({}, C, {
                touchObject: w,
                swipeLeft: O,
                trackStyle: P(i({}, t, {
                    left: O
                }))
            }), Math.abs(w.curX - w.startX) < .8 * Math.abs(w.curY - w.startY)) ? C : (w.swipeLength > 10 && (C.swiping = !0, e.preventDefault()), C)
        }
    };
    t.swipeMove = O;
    var C = function(e, t) {
        var n = t.dragging,
            r = t.swipe,
            o = t.touchObject,
            a = t.listWidth,
            l = t.touchThreshold,
            s = t.verticalSwiping,
            c = t.listHeight,
            u = t.currentSlide,
            d = t.swipeToSlide,
            p = t.scrolling,
            f = t.onSwipe;
        if (!n) return r && e.preventDefault(), {};
        var m = s ? c / l : a / l,
            h = v(o, s),
            g = {
                dragging: !1,
                edgeDragged: !1,
                scrolling: !1,
                swiping: !1,
                swiped: !1,
                swipeLeft: null,
                touchObject: {}
            };
        if (p) return g;
        if (!o.swipeLength) return g;
        if (o.swipeLength > m) {
            e.preventDefault(), f && f(h);
            var b, y;
            switch (h) {
                case "left":
                case "up":
                    y = u + _(t), b = d ? T(t, y) : y, g.currentDirection = 0;
                    break;
                case "right":
                case "down":
                    y = u - _(t), b = d ? T(t, y) : y, g.currentDirection = 1;
                    break;
                default:
                    b = u
            }
            g.triggerSlideHandler = b
        } else {
            var w = L(t);
            g.trackStyle = A(i({}, t, {
                left: w
            }))
        }
        return g
    };
    t.swipeEnd = C;
    var x = function(e) {
        for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, n = e.infinite ? -1 * e.slidesToShow : 0, r = e.infinite ? -1 * e.slidesToShow : 0, i = []; n < t;) i.push(n), n = r + e.slidesToScroll, r += Math.min(e.slidesToScroll, e.slidesToShow);
        return i
    };
    t.getNavigableIndexes = x;
    var T = function(e, t) {
        var n = x(e),
            r = 0;
        if (t > n[n.length - 1]) t = n[n.length - 1];
        else
            for (var i in n) {
                if (t < n[i]) {
                    t = r;
                    break
                }
                r = n[i]
            }
        return t
    };
    t.checkNavigable = T;
    var _ = function(e) {
        var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
        if (e.swipeToSlide) {
            var n, r = l.default.findDOMNode(e.listRef),
                i = r.querySelectorAll(".slick-slide");
            if (Array.from(i).every(function(r) {
                    if (e.vertical) {
                        if (r.offsetTop + h(r) / 2 > -1 * e.swipeLeft) return n = r, !1
                    } else if (r.offsetLeft - t + m(r) / 2 > -1 * e.swipeLeft) return n = r, !1;
                    return !0
                }), !n) return 0;
            var o = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
            return Math.abs(n.dataset.index - o) || 1
        }
        return e.slidesToScroll
    };
    t.getSlideCount = _;
    var M = function(e, t) {
        return t.reduce(function(t, n) {
            return t && e.hasOwnProperty(n)
        }, !0) ? null : console.error("Keys Missing:", e)
    };
    t.checkSpecKeys = M;
    var P = function(e) {
        M(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
        var t, n, r = e.slideCount + 2 * e.slidesToShow;
        e.vertical ? n = r * e.slideHeight : t = D(e) * e.slideWidth;
        var o = {
            opacity: 1,
            transition: "",
            WebkitTransition: ""
        };
        if (e.useTransform) {
            o = i({}, o, {
                WebkitTransform: e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                transform: e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                msTransform: e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)"
            })
        } else e.vertical ? o.top = e.left : o.left = e.left;
        return e.fade && (o = {
            opacity: 1
        }), t && (o.width = t), n && (o.height = n), window && !window.addEventListener && window.attachEvent && (e.vertical ? o.marginTop = e.left + "px" : o.marginLeft = e.left + "px"), o
    };
    t.getTrackCSS = P;
    var A = function(e) {
        M(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
        var t = P(e);
        return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
    };
    t.getTrackAnimateCSS = A;
    var L = function(e) {
        if (e.unslick) return 0;
        M(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
        var t, n, r = e.slideIndex,
            i = e.trackRef,
            o = e.infinite,
            a = e.centerMode,
            s = e.slideCount,
            c = e.slidesToShow,
            u = e.slidesToScroll,
            d = e.slideWidth,
            p = e.listWidth,
            f = e.variableWidth,
            m = e.slideHeight,
            h = e.fade,
            v = e.vertical,
            g = 0,
            b = 0;
        if (h || 1 === e.slideCount) return 0;
        var y = 0;
        if (o ? (y = -j(e), s % u !== 0 && r + u > s && (y = -(r > s ? c - (r - s) : s % u)), a && (y += parseInt(c / 2))) : (s % u !== 0 && r + u > s && (y = c - s % u), a && (y = parseInt(c / 2))), g = y * d, b = y * m, t = v ? r * m * -1 + b : r * d * -1 + g, !0 === f) {
            var w, S = l.default.findDOMNode(i);
            if (w = r + j(e), n = S && S.childNodes[w], t = n ? -1 * n.offsetLeft : 0, !0 === a) {
                w = o ? r + j(e) : r, n = S && S.children[w], t = 0;
                for (var k = 0; k < w; k++) t -= S && S.children[k] && S.children[k].offsetWidth;
                t -= parseInt(e.centerPadding), t += n && (p - n.offsetWidth) / 2
            }
        }
        return t
    };
    t.getTrackLeft = L;
    var j = function(e) {
        return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0)
    };
    t.getPreClones = j;
    var I = function(e) {
        return e.unslick || !e.infinite ? 0 : e.slideCount
    };
    t.getPostClones = I;
    var D = function(e) {
        return 1 === e.slideCount ? 1 : j(e) + e.slideCount + I(e)
    };
    t.getTotalSlides = D;
    var z = function(e) {
        return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + R(e) ? "left" : "right" : e.targetSlide < e.currentSlide - N(e) ? "right" : "left"
    };
    t.siblingDirection = z;
    var R = function(e) {
        var t = e.slidesToShow,
            n = e.centerMode,
            r = e.rtl,
            i = e.centerPadding;
        if (n) {
            var o = (t - 1) / 2 + 1;
            return parseInt(i) > 0 && (o += 1), r && t % 2 === 0 && (o += 1), o
        }
        return r ? 0 : t - 1
    };
    t.slidesOnRight = R;
    var N = function(e) {
        var t = e.slidesToShow,
            n = e.centerMode,
            r = e.rtl,
            i = e.centerPadding;
        if (n) {
            var o = (t - 1) / 2 + 1;
            return parseInt(i) > 0 && (o += 1), r || t % 2 !== 0 || (o += 1), o
        }
        return r ? t - 1 : 0
    };
    t.slidesOnLeft = N;
    var H = function() {
        return !("undefined" === typeof window || !window.document || !window.document.createElement)
    };
    t.canUseDOM = H
}, function(e, t, n) {
    "use strict";
    var r = n(5),
        i = (n.n(r), {});
    i.videoslider = wp.element.createElement(r.SVG, {
        width: "243pt",
        height: "243pt",
        viewBox: "0 0 243 243",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/SVG"
    }, wp.element.createElement(r.G, {
        id: "#492c6bff"
    }, wp.element.createElement(r.Path, {
        fill: "#492c6b",
        opacity: "1.00",
        d: " M 80.95 31.16 C 92.87 22.33 107.35 16.93 122.19 16.14 C 134.32 15.39 146.54 17.27 158.08 20.98 C 161.51 19.31 164.97 17.69 168.46 16.15 C 173.29 15.75 178.16 16.12 183.00 16.00 C 182.87 26.78 183.20 37.55 183.21 48.33 C 198.87 37.45 214.66 26.77 230.26 15.82 C 219.34 33.91 208.23 51.88 197.52 70.09 C 199.15 74.90 201.51 79.54 202.74 84.53 C 207.95 103.12 215.80 120.86 225.44 137.56 C 227.75 141.90 230.08 146.80 228.89 151.84 C 227.24 159.09 221.50 164.58 215.29 168.24 C 207.15 172.78 198.41 176.23 189.38 178.54 C 176.67 167.46 163.87 155.62 147.83 149.60 C 139.17 147.82 130.20 147.04 122.17 142.98 C 125.90 158.61 132.38 173.43 136.33 189.02 C 140.33 203.91 142.67 219.31 142.58 234.76 C 135.25 234.66 127.92 234.94 120.59 234.60 C 120.93 214.35 115.94 194.48 109.51 175.43 C 104.73 160.63 99.20 145.90 97.29 130.37 C 95.23 115.18 97.16 99.44 103.00 85.26 C 106.58 79.07 110.48 72.72 116.42 68.51 C 120.69 74.42 125.32 80.06 129.56 86.00 C 124.79 90.76 120.63 96.85 120.74 103.85 C 120.84 109.87 121.55 117.12 127.02 120.79 C 136.36 127.98 149.03 126.16 159.52 130.57 C 172.61 135.92 183.98 144.70 194.52 153.97 C 198.55 152.16 202.71 150.55 206.21 147.79 C 195.86 129.68 187.43 110.45 181.53 90.43 C 179.10 83.40 178.05 75.62 173.30 69.64 C 169.98 65.81 165.60 63.10 161.54 60.13 C 161.39 54.75 161.39 49.36 161.53 43.98 C 149.62 40.47 137.35 37.57 124.84 37.76 C 112.05 38.28 99.78 43.72 90.01 51.84 C 72.82 65.32 61.17 84.41 52.10 103.99 C 40.05 131.33 33.51 161.11 33.19 191.00 C 25.89 191.00 18.60 191.00 11.31 191.00 C 11.77 145.70 24.63 100.02 50.48 62.59 C 58.92 50.63 68.98 39.66 80.95 31.16 M 183.27 50.19 C 183.81 50.81 183.81 50.81 183.27 50.19 Z"
    }), wp.element.createElement(r.Path, {
        fill: "#492c6b",
        opacity: "1.00",
        d: " M 154.58 81.72 C 159.22 78.52 166.77 82.20 166.50 87.98 C 166.90 93.85 159.20 97.97 154.52 94.53 C 150.14 91.74 150.00 84.42 154.58 81.72 Z"
    }))), i.videoslider = wp.element.createElement(r.SVG, {
        width: "26px",
        height: "18px",
        viewBox: "0 0 26 18",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, wp.element.createElement(r.G, {
        id: "Page-1",
        stroke: "none",
        strokeWidth: "1",
        fill: "none"
    }, wp.element.createElement(r.G, {
        id: "image",
        transform: "translate(0.000000, -3.000000)"
    }, wp.element.createElement(r.Polygon, {
        id: "Path",
        points: "1 0 25 0 25 24 1 24"
    }), wp.element.createElement(r.Path, {
        d: "M20,5 L20,19 L6,19 L6,5 L20,5 L20,5 Z M20,3 L6,3 C4.9,3 4,3.9 4,5 L4,19 C4,20.1 4.9,21 6,21 L20,21 C21.1,21 22,20.1 22,19 L22,5 C22,3.9 21.1,3 20,3 Z",
        id: "Shape",
        fill: "#492c6b",
        fillRule: "nonzero"
    }), wp.element.createElement(r.Polygon, {
        id: "Path",
        fill: "#803d97",
        fillRule: "nonzero",
        points: "15.14 12 12.14 15.7645914 10 13.2451362 7 17 19 17"
    }), wp.element.createElement(r.Rect, {
        id: "Rectangle",
        stroke: "#803d97",
        fill: "#D8D8D8",
        x: "7.5",
        y: "7.5",
        width: "10",
        height: "1",
        rx: "0.5"
    }), wp.element.createElement(r.Rect, {
        id: "Rectangle",
        fill: "#803d97",
        x: "7",
        y: "9",
        width: "12",
        height: "1"
    }), wp.element.createElement(r.Rect, {
        id: "Rectangle",
        fill: "#803d97",
        x: "7",
        y: "7",
        width: "12",
        height: "1"
    }), wp.element.createElement(r.Polygon, {
        id: "Triangle",
        fill: "#803d97",
        transform: "translate(24.500000, 12.000000) rotate(-270.000000) translate(-24.500000, -12.000000) ",
        points: "24.5 10.5 27.5 13.5 21.5 13.5"
    }), wp.element.createElement(r.Polygon, {
        id: "Triangle",
        fill: "#803d97",
        transform: "translate(1.500000, 12.000000) rotate(-90.000000) translate(-1.500000, -12.000000) ",
        points: "1.5 10.5 4.5 13.5 -1.5 13.5"
    })))), i.tablet = wp.element.createElement("svg", {
        className: "dashicon",
        height: "16",
        viewBox: "0 0 16 16",
        width: "16",
        xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement("path", {
        d: "m11.25 0h-9c-.825 0-1.5.61363636-1.5 1.36363636v13.27272724c0 .75.675 1.3636364 1.5 1.3636364h9c.825 0 1.5-.6136364 1.5-1.3636364v-13.27272724c0-.75-.675-1.36363636-1.5-1.36363636zm-.5 14h-8v-12h8z",
        transform: "translate(1.25)"
    })), i.mobile = wp.element.createElement("svg", {
        className: "dashicon",
        height: "16",
        viewBox: "0 0 16 16",
        width: "16",
        xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement("path", {
        d: "m6.5 0h-5c-.825 0-1.5.61363636-1.5 1.36363636v9.27272724c0 .75.675 1.3636364 1.5 1.3636364h5c.825 0 1.5-.6136364 1.5-1.3636364v-9.27272724c0-.75-.675-1.36363636-1.5-1.36363636zm-.5 10h-4v-8h4z",
        transform: "translate(4 2)"
    })), i.desktop = wp.element.createElement("svg", {
        className: "dashicon",
        height: "16",
        viewBox: "0 0 16 16",
        width: "16",
        xmlns: "http://www.w3.org/2000/svg"
    }, wp.element.createElement("path", {
        d: "m12.5 0c.8325 0 1.5.61363636 1.5 1.36363636v11.27272724c0 .75-.675 1.3636364-1.5 1.3636364l-.5-2v-9h-10v9h10l.5 2h-11c-.8325 0-1.5-.6136364-1.5-1.3636364v-11.27272724c0-.75.6675-1.36363636 1.5-1.36363636zm-10 1c-.27614237 0-.5.22385763-.5.5s.22385763.5.5.5.5-.22385763.5-.5-.22385763-.5-.5-.5z",
        transform: "translate(1 1.001872)"
    })), t.a = i
}, function(e, t) {
    e.exports = wp.components
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
        return i
    }), n.d(t, "c", function() {
        return o
    }), n.d(t, "a", function() {
        return a
    }), n.d(t, "b", function() {
        return l
    });
    var r = wp.i18n.__,
        i = {
            media: {
                type: "array",
                default: []
            },
            align: {
                type: "string",
                default: "none"
            },
            bgImageId: {
                type: "number"
            },
            contentMode: {
                type: "string",
                default: "change"
            },
            fadeMode: {
                type: "boolean",
                default: !0
            },
            slidesToShow: {
                type: "number",
                default: 1
            },
            slidesToScroll: {
                type: "number",
                default: 1
            },
            sliderHeight: {
                type: "string",
                default: "50vh"
            },
            isFullScreen: {
                type: "boolean",
                default: !1
            },
            pauseOnFocus: {
                type: "boolean",
                default: !0
            },
            pauseOnHover: {
                type: "boolean",
                default: !0
            },
            pauseOnDotsHover: {
                type: "boolean",
                default: !0
            },
            enableSpacing: {
                type: "boolean",
                default: !0
            },
            spacingX: {
                type: "number",
                default: 40
            },
            spacingY: {
                type: "number",
                default: 40
            },
            spacingXMobile: {
                type: "number",
                default: 40
            },
            spacingYMobile: {
                type: "number",
                default: 40
            },
            spacingXTablet: {
                type: "number",
                default: 40
            },
            spacingYTablet: {
                type: "number",
                default: 40
            },
            spacingXDesktop: {
                type: "number",
                default: 40
            },
            spacingYDesktop: {
                type: "number",
                default: 40
            },
            spacingYUnit: {
                type: "string",
                default: "px"
            },
            spacingXUnit: {
                type: "string",
                default: "px"
            },
            autoplay: {
                type: "boolean",
                default: !0
            },
            duration: {
                type: "number",
                default: 3
            },
            fadeSpeed: {
                type: "number",
                default: 1
            },
            arrows: {
                type: "boolean",
                default: !0
            },
            arrowSize: {
                type: "number",
                default: 20
            },
            arrowColor: {
                type: "string",
                default: "#ffffff"
            },
            arrowStyle: {
                type: "string",
                default: "arrow-style-1"
            },
            dots: {
                type: "boolean",
                default: !0
            },
            dotSize: {
                type: "number",
                default: 25
            },
            dotColor: {
                type: "string",
                default: "#ffffff"
            },
            dotStyle: {
                type: "string",
                default: "dot-style-1"
            },
            hasParallax: {
                type: "boolean",
                default: !1
            },
            parallaxDirection: {
                type: "string",
                default: "bottom"
            },
            parallaxAmount: {
                type: "number",
                default: 1.3
            },
            overlayColor: {
                type: "string"
            },
            dimRatio: {
                type: "number",
                default: .5
            },
            rgbaBackground: {
                type: "string",
                default: ""
            },
            textColor: {
                type: "string"
            },
            mixBlendMode: {
                type: "string",
                default: "mb-none"
            },
            contentOpacity: {
                type: "number",
                default: 1
            },
            verticalAlign: {
                type: "string",
                default: "center"
            }
        },
        o = [{
            value: "bottom",
            label: r("\u2191 bottom to top")
        }, {
            value: "top",
            label: r("\u2193 top to bottom")
        }, {
            value: "left",
            label: r("\u2192 left to right")
        }, {
            value: "right",
            label: r("\u2190 right to left")
        }],
        a = [{
            value: "arrow-style-1",
            label: r("Style 1")
        }, {
            value: "arrow-style-2",
            label: r("Style 2")
        }, {
            value: "arrow-style-3",
            label: r("Style 3")
        }],
        l = [{
            value: "dot-style-1",
            label: r("Style 1")
        }, {
            value: "dot-style-2",
            label: r("Style 2")
        }, {
            value: "dot-style-3",
            label: r("Style 3")
        }, {
            value: "dot-style-4",
            label: r("Style 4")
        }]
}, function(e, t) {
    e.exports = ReactDOM
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === typeof window && (n = window)
    }
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        var n = 0,
            r = e.length;
        for (n; n < r && !1 !== t(e[n], n); n++);
    }

    function r(e) {
        return "[object Array]" === Object.prototype.toString.apply(e)
    }

    function i(e) {
        return "function" === typeof e
    }
    e.exports = {
        isFunction: i,
        isArray: r,
        each: n
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        function t(e) {
            return function() {
                return r(n === e ? void 0 : e)
            }
        }
        var n = e.value,
            r = e.onChange,
            a = e.controls,
            d = void 0 === a ? c : a,
            p = e.isCollapsed,
            f = void 0 === p || p,
            m = s[n],
            h = s[u];
        return wp.element.createElement(o.Toolbar, {
            isCollapsed: f,
            icon: m ? m.icon : h.icon,
            label: Object(i._x)("Change vertical alignment", "Block vertical alignment setting label"),
            controls: d.map(function(e) {
                return l({}, s[e], {
                    isActive: n === e,
                    onClick: t(e)
                })
            })
        })
    }
    var i = n(38),
        o = (n.n(i), n(5)),
        a = (n.n(o), n(39)),
        l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        s = {
            top: {
                icon: a.c,
                title: Object(i._x)("Vertically Align Content Top", "Block vertical alignment setting")
            },
            center: {
                icon: a.b,
                title: Object(i._x)("Vertically Align Content Middle", "Block vertical alignment setting")
            },
            bottom: {
                icon: a.a,
                title: Object(i._x)("Vertically Align Content Bottom", "Block vertical alignment setting")
            }
        },
        c = ["top", "center", "bottom"],
        u = "top";
    t.a = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function(e, t) {
        if ("undefined" === typeof e) return "transparent";
        e = e.replace("#", "");
        var n = parseInt(3 === e.length ? e.slice(0, 1).repeat(2) : e.slice(0, 2), 16),
            r = parseInt(3 === e.length ? e.slice(1, 2).repeat(2) : e.slice(2, 4), 16),
            i = parseInt(3 === e.length ? e.slice(2, 3).repeat(2) : e.slice(4, 6), 16);
        return "undefined" !== typeof t ? "rgba(" + n + ", " + r + ", " + i + ", " + t + ")" : "rgb(" + n + ", " + r + ", " + i + ")"
    }
}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    });
    var r = wp.i18n.__,
        i = {
            isEditable: {
                type: "boolean",
                default: !0
            },
            mediaUrl: {
                type: "string",
                source: "attribute",
                selector: ".slide-bg img, .slide-bg video",
                attribute: "src"
            },
            mediaAlt: {
                type: "string",
                source: "attribute",
                selector: ".slide-bg img",
                attribute: "alt",
                default: ""
            },
            mediaType: {
                type: "string"
            },
            mediaId: {
                type: "number"
            },
            overlayColor: {
                type: "string"
            },
            dimRatio: {
                type: "number",
                default: .5
            },
            rgbaBackground: {
                type: "string",
                default: ""
            },
            initialized: {
                type: "boolean",
                default: !1
            },
            linkUrl: {
                type: "string",
                default: ""
            },
            verticalAlign: {
                type: "string",
                default: "center"
            }
        };
    r("\u2191 bottom to top"), r("\u2193 top to bottom"), r("\u2192 left to right"), r("\u2190 right to left"), r("Style 1"), r("Style 2"), r("Style 3"), r("Style 1"), r("Style 2"), r("Style 3"), r("Style 4")
}, function(e, t, n) {
    "use strict";
    var r = wp.editor.InnerBlocks;
    t.a = function() {
        return wp.element.createElement(r.Content, null)
    }
}, function(e, t, n) {
    "use strict";
    var r = wp.editor.InnerBlocks;
    t.a = [{
        attributes: {
            media: {
                type: "array",
                default: []
            },
            align: {
                type: "string",
                default: "none"
            },
            bgImageId: {
                type: "number"
            },
            contentMode: {
                type: "string",
                default: "change"
            },
            fadeMode: {
                type: "boolean",
                default: !0
            },
            slidesToShow: {
                type: "number",
                default: 1
            },
            slidesToScroll: {
                type: "number",
                default: 1
            },
            sliderHeight: {
                type: "number",
                default: 50
            },
            isFullScreen: {
                type: "boolean",
                default: !1
            },
            pauseOnFocus: {
                type: "boolean",
                default: !0
            },
            pauseOnHover: {
                type: "boolean",
                default: !0
            },
            pauseOnDotsHover: {
                type: "boolean",
                default: !0
            },
            enableSpacing: {
                type: "boolean",
                default: !0
            },
            spacingX: {
                type: "number",
                default: 40
            },
            spacingY: {
                type: "number",
                default: 40
            },
            spacingXMobile: {
                type: "number",
                default: 40
            },
            spacingYMobile: {
                type: "number",
                default: 40
            },
            spacingXTablet: {
                type: "number",
                default: 40
            },
            spacingYTablet: {
                type: "number",
                default: 40
            },
            spacingXDesktop: {
                type: "number",
                default: 40
            },
            spacingYDesktop: {
                type: "number",
                default: 40
            },
            spacingYUnit: {
                type: "string",
                default: "px"
            },
            spacingXUnit: {
                type: "string",
                default: "px"
            },
            autoplay: {
                type: "boolean",
                default: !0
            },
            duration: {
                type: "number",
                default: 3
            },
            fadeSpeed: {
                type: "number",
                default: 1
            },
            arrows: {
                type: "boolean",
                default: !0
            },
            arrowSize: {
                type: "number",
                default: 20
            },
            arrowColor: {
                type: "string",
                default: "#ffffff"
            },
            arrowStyle: {
                type: "string",
                default: "arrow-style-1"
            },
            dots: {
                type: "boolean",
                default: !0
            },
            dotSize: {
                type: "number",
                default: 25
            },
            dotColor: {
                type: "string",
                default: "#ffffff"
            },
            dotStyle: {
                type: "string",
                default: "dot-style-1"
            },
            hasParallax: {
                type: "boolean",
                default: !1
            },
            parallaxDirection: {
                type: "string",
                default: "bottom"
            },
            parallaxAmount: {
                type: "number",
                default: 1.3
            },
            overlayColor: {
                type: "string"
            },
            dimRatio: {
                type: "number",
                default: .5
            },
            rgbaBackground: {
                type: "string",
                default: ""
            },
            textColor: {
                type: "string"
            },
            mixBlendMode: {
                type: "string",
                default: "mb-none"
            },
            contentOpacity: {
                type: "number",
                default: 1
            }
        },
        isEligible: function(e) {
            return "number" === typeof e.sliderHeight
        },
        migrate: function(e) {
            var t = e.sliderHeight;
            return Object.assign(e, {
                sliderHeight: t + "vh"
            })
        },
        save: function() {
            return wp.element.createElement(r.Content, null)
        }
    }]
}, function(e, t, n) {
    "use strict";
    var r = n(2),
        i = (n.n(r), wp.editor.InnerBlocks),
        o = wp.element.Fragment;
    t.a = [{
        attributes: {
            isEditable: {
                type: "boolean",
                default: !0
            },
            mediaUrl: {
                type: "string",
                source: "attribute",
                selector: ".slide-bg img, .slide-bg video",
                attribute: "src"
            },
            mediaAlt: {
                type: "string",
                source: "attribute",
                selector: ".slide-bg img",
                attribute: "alt",
                default: ""
            },
            mediaType: {
                type: "string"
            },
            mediaId: {
                type: "number"
            },
            overlayColor: {
                type: "string"
            },
            dimRatio: {
                type: "number",
                default: .5
            },
            rgbaBackground: {
                type: "string",
                default: ""
            },
            initialized: {
                type: "boolean",
                default: !1
            },
            linkUrl: {
                type: "string",
                default: ""
            },
            verticalAlign: {
                type: "string",
                default: "center"
            }
        },
        supports: {},
        save: function(e) {
            var t = e.attributes,
                n = t.mediaType,
                a = t.mediaUrl,
                l = t.mediaAlt,
                s = t.mediaId,
                c = t.rgbaBackground,
                u = t.linkUrl,
                d = {
                    image: function() {
                        return wp.element.createElement("img", {
                            src: a,
                            alt: l,
                            className: s && "image" === n ? "wp-image-" + s : null
                        })
                    },
                    video: function() {
                        return wp.element.createElement("video", {
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            src: a
                        })
                    }
                },
                p = !("undefined" === typeof u || !u || "" === u) && encodeURI(u),
                f = {
                    background: c
                };
            return wp.element.createElement("div", null, wp.element.createElement("div", null, wp.element.createElement("div", {
                className: "slide-bg"
            }, (d[n] || r.noop)()), wp.element.createElement("div", {
                className: "slide-overlay",
                style: f
            }), wp.element.createElement("div", {
                className: "slide-content"
            }, wp.element.createElement(i.Content, null)), function(e) {
                return wp.element.createElement(o, null, p && wp.element.createElement("a", {
                    className: "slide-link-open1",
                    href: p
                }, " ", e))
            }()))
        }
    }]
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(19)),
        i = r.default;
    t.default = i
}, function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function o() {
            return o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, o.apply(this, arguments)
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    h(e, t, n[t])
                })
            }
            return e
        }

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function c(e, t, n) {
            return t && s(e.prototype, t), n && s(e, n), e
        }

        function u(e, t) {
            return !t || "object" !== i(t) && "function" !== typeof t ? m(e) : t
        }

        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function p(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }

        function f(e, t) {
            return (f = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function m(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function h(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var v = r(n(1)),
            g = n(21),
            b = r(n(28)),
            y = r(n(30)),
            w = n(3),
            S = (0, w.canUseDOM)() && n(31),
            k = function(t) {
                function n(e) {
                    var t;
                    return l(this, n), t = u(this, d(n).call(this, e)), h(m(m(t)), "innerSliderRefHandler", function(e) {
                        return t.innerSlider = e
                    }), h(m(m(t)), "slickPrev", function() {
                        return t.innerSlider.slickPrev()
                    }), h(m(m(t)), "slickNext", function() {
                        return t.innerSlider.slickNext()
                    }), h(m(m(t)), "slickGoTo", function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return t.innerSlider.slickGoTo(e, n)
                    }), h(m(m(t)), "slickPause", function() {
                        return t.innerSlider.pause("paused")
                    }), h(m(m(t)), "slickPlay", function() {
                        return t.innerSlider.autoPlay("play")
                    }), t.state = {
                        breakpoint: null
                    }, t._responsiveMediaHandlers = [], t
                }
                return p(n, t), c(n, [{
                    key: "media",
                    value: function(e, t) {
                        S.register(e, t), this._responsiveMediaHandlers.push({
                            query: e,
                            handler: t
                        })
                    }
                }, {
                    key: "componentWillMount",
                    value: function() {
                        var e = this;
                        if (this.props.responsive) {
                            var t = this.props.responsive.map(function(e) {
                                return e.breakpoint
                            });
                            t.sort(function(e, t) {
                                return e - t
                            }), t.forEach(function(n, r) {
                                var i;
                                i = 0 === r ? (0, b.default)({
                                    minWidth: 0,
                                    maxWidth: n
                                }) : (0, b.default)({
                                    minWidth: t[r - 1] + 1,
                                    maxWidth: n
                                }), (0, w.canUseDOM)() && e.media(i, function() {
                                    e.setState({
                                        breakpoint: n
                                    })
                                })
                            });
                            var n = (0, b.default)({
                                minWidth: t.slice(-1)[0]
                            });
                            (0, w.canUseDOM)() && this.media(n, function() {
                                e.setState({
                                    breakpoint: null
                                })
                            })
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._responsiveMediaHandlers.forEach(function(e) {
                            S.unregister(e.query, e.handler)
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, n, r = this;
                        this.state.breakpoint ? (n = this.props.responsive.filter(function(e) {
                            return e.breakpoint === r.state.breakpoint
                        }), t = "unslick" === n[0].settings ? "unslick" : a({}, y.default, this.props, n[0].settings)) : t = a({}, y.default, this.props), t.centerMode && (t.slidesToScroll > 1 && "production" !== e.env.NODE_ENV && console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(t.slidesToScroll)), t.slidesToScroll = 1), t.fade && (t.slidesToShow > 1 && "production" !== e.env.NODE_ENV && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(t.slidesToShow)), t.slidesToScroll > 1 && "production" !== e.env.NODE_ENV && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(t.slidesToScroll)), t.slidesToShow = 1, t.slidesToScroll = 1);
                        var i = v.default.Children.toArray(this.props.children);
                        i = i.filter(function(e) {
                            return "string" === typeof e ? !!e.trim() : !!e
                        }), t.variableWidth && (t.rows > 1 || t.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), t.variableWidth = !1);
                        for (var l = [], s = null, c = 0; c < i.length; c += t.rows * t.slidesPerRow) {
                            for (var u = [], d = c; d < c + t.rows * t.slidesPerRow; d += t.slidesPerRow) {
                                for (var p = [], f = d; f < d + t.slidesPerRow && (t.variableWidth && i[f].props.style && (s = i[f].props.style.width), !(f >= i.length)); f += 1) p.push(v.default.cloneElement(i[f], {
                                    key: 100 * c + 10 * d + f,
                                    tabIndex: -1,
                                    style: {
                                        width: "".concat(100 / t.slidesPerRow, "%"),
                                        display: "inline-block"
                                    }
                                }));
                                u.push(v.default.createElement("div", {
                                    key: 10 * c + d
                                }, p))
                            }
                            t.variableWidth ? l.push(v.default.createElement("div", {
                                key: c,
                                style: {
                                    width: s
                                }
                            }, u)) : l.push(v.default.createElement("div", {
                                key: c
                            }, u))
                        }
                        if ("unslick" === t) {
                            var m = "regular slider " + (this.props.className || "");
                            return v.default.createElement("div", {
                                className: m
                            }, l)
                        }
                        return l.length <= t.slidesToShow && (t.unslick = !0), v.default.createElement(g.InnerSlider, o({
                            ref: this.innerSliderRefHandler
                        }, t), l)
                    }
                }]), n
            }(v.default.Component);
        t.default = k
    }).call(t, n(20))
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (u === setTimeout) return setTimeout(e, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
        try {
            return u(e, 0)
        } catch (t) {
            try {
                return u.call(null, e, 0)
            } catch (t) {
                return u.call(this, e, 0)
            }
        }
    }

    function o(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === r || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }

    function a() {
        h && f && (h = !1, f.length ? m = f.concat(m) : v = -1, m.length && l())
    }

    function l() {
        if (!h) {
            var e = i(a);
            h = !0;
            for (var t = m.length; t;) {
                for (f = m, m = []; ++v < t;) f && f[v].run();
                v = -1, t = m.length
            }
            f = null, h = !1, o(e)
        }
    }

    function s(e, t) {
        this.fun = e, this.array = t
    }

    function c() {}
    var u, d, p = e.exports = {};
    ! function() {
        try {
            u = "function" === typeof setTimeout ? setTimeout : n
        } catch (e) {
            u = n
        }
        try {
            d = "function" === typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            d = r
        }
    }();
    var f, m = [],
        h = !1,
        v = -1;
    p.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        m.push(new s(e, t)), 1 !== m.length || h || i(l)
    }, s.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.prependListener = c, p.prependOnceListener = c, p.listeners = function(e) {
        return []
    }, p.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function() {
        return "/"
    }, p.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i() {
        return i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, i.apply(this, arguments)
    }

    function o(e, t) {
        if (null == e) return {};
        var n, r, i = a(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function a(e, t) {
        if (null == e) return {};
        var n, r, i = {},
            o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }

    function l(e) {
        return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                h(e, t, n[t])
            })
        }
        return e
    }

    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        return !t || "object" !== l(t) && "function" !== typeof t ? m(e) : t
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && f(e, t)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function m(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.InnerSlider = void 0;
    var v = r(n(1)),
        g = r(n(7)),
        b = r(n(22)),
        y = r(n(23)),
        w = r(n(0)),
        S = n(3),
        k = n(24),
        E = n(25),
        O = n(26),
        C = r(n(27)),
        x = function(e) {
            function t(e) {
                var n;
                return c(this, t), n = u(this, d(t).call(this, e)), h(m(m(n)), "listRefHandler", function(e) {
                    return n.list = e
                }), h(m(m(n)), "trackRefHandler", function(e) {
                    return n.track = e
                }), h(m(m(n)), "adaptHeight", function() {
                    if (n.props.adaptiveHeight && n.list) {
                        var e = n.list.querySelector('[data-index="'.concat(n.state.currentSlide, '"]'));
                        n.list.style.height = (0, S.getHeight)(e) + "px"
                    }
                }), h(m(m(n)), "componentWillMount", function() {
                    if (n.ssrInit(), n.props.onInit && n.props.onInit(), n.props.lazyLoad) {
                        var e = (0, S.getOnDemandLazySlides)(s({}, n.props, n.state));
                        e.length > 0 && (n.setState(function(t) {
                            return {
                                lazyLoadedList: t.lazyLoadedList.concat(e)
                            }
                        }), n.props.onLazyLoad && n.props.onLazyLoad(e))
                    }
                }), h(m(m(n)), "componentDidMount", function() {
                    var e = s({
                        listRef: n.list,
                        trackRef: n.track
                    }, n.props);
                    n.updateState(e, !0, function() {
                        n.adaptHeight(), n.props.autoplay && n.autoPlay("update")
                    }), "progressive" === n.props.lazyLoad && (n.lazyLoadTimer = setInterval(n.progressiveLazyLoad, 1e3)), n.ro = new C.default(function() {
                        n.state.animating ? (n.onWindowResized(!1), n.callbackTimers.push(setTimeout(function() {
                            return n.onWindowResized()
                        }, n.props.speed))) : n.onWindowResized()
                    }), n.ro.observe(n.list), Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(e) {
                        e.onfocus = n.props.pauseOnFocus ? n.onSlideFocus : null, e.onblur = n.props.pauseOnFocus ? n.onSlideBlur : null
                    }), window && (window.addEventListener ? window.addEventListener("resize", n.onWindowResized) : window.attachEvent("onresize", n.onWindowResized))
                }), h(m(m(n)), "componentWillUnmount", function() {
                    n.animationEndCallback && clearTimeout(n.animationEndCallback), n.lazyLoadTimer && clearInterval(n.lazyLoadTimer), n.callbackTimers.length && (n.callbackTimers.forEach(function(e) {
                        return clearTimeout(e)
                    }), n.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", n.onWindowResized) : window.detachEvent("onresize", n.onWindowResized), n.autoplayTimer && clearInterval(n.autoplayTimer)
                }), h(m(m(n)), "componentWillReceiveProps", function(e) {
                    for (var t = s({
                            listRef: n.list,
                            trackRef: n.track
                        }, e, n.state), r = !1, i = Object.keys(n.props), o = 0; o < i.length; o++) {
                        var a = i[o];
                        if (!e.hasOwnProperty(a)) {
                            r = !0;
                            break
                        }
                        if ("object" !== l(e[a]) && "function" !== typeof e[a] && e[a] !== n.props[a]) {
                            r = !0;
                            break
                        }
                    }
                    n.updateState(t, r, function() {
                        n.state.currentSlide >= v.default.Children.count(e.children) && n.changeSlide({
                            message: "index",
                            index: v.default.Children.count(e.children) - e.slidesToShow,
                            currentSlide: n.state.currentSlide
                        }), e.autoplay ? n.autoPlay("update") : n.pause("paused")
                    })
                }), h(m(m(n)), "componentDidUpdate", function() {
                    if (n.checkImagesLoad(), n.props.onReInit && n.props.onReInit(), n.props.lazyLoad) {
                        var e = (0, S.getOnDemandLazySlides)(s({}, n.props, n.state));
                        e.length > 0 && (n.setState(function(t) {
                            return {
                                lazyLoadedList: t.lazyLoadedList.concat(e)
                            }
                        }), n.props.onLazyLoad && n.props.onLazyLoad(e))
                    }
                    n.adaptHeight()
                }), h(m(m(n)), "onWindowResized", function(e) {
                    n.debouncedResize && n.debouncedResize.cancel(), n.debouncedResize = (0, y.default)(function() {
                        return n.resizeWindow(e)
                    }, 50), n.debouncedResize()
                }), h(m(m(n)), "resizeWindow", function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (g.default.findDOMNode(n.track)) {
                        var t = s({
                            listRef: n.list,
                            trackRef: n.track
                        }, n.props, n.state);
                        n.updateState(t, e, function() {
                            n.props.autoplay ? n.autoPlay("update") : n.pause("paused")
                        }), n.setState({
                            animating: !1
                        }), clearTimeout(n.animationEndCallback), delete n.animationEndCallback
                    }
                }), h(m(m(n)), "updateState", function(e, t, r) {
                    var i = (0, S.initializedState)(e);
                    e = s({}, e, i, {
                        slideIndex: i.currentSlide
                    }), e = s({}, e, {
                        left: (0, S.getTrackLeft)(e)
                    });
                    var o = (0, S.getTrackCSS)(e);
                    (t || v.default.Children.count(n.props.children) !== v.default.Children.count(e.children)) && (i.trackStyle = o), n.setState(i, r)
                }), h(m(m(n)), "ssrInit", function() {
                    if (n.props.variableWidth) {
                        var e = 0,
                            t = 0,
                            r = [],
                            i = (0, S.getPreClones)(s({}, n.props, n.state, {
                                slideCount: n.props.children.length
                            })),
                            o = (0, S.getPostClones)(s({}, n.props, n.state, {
                                slideCount: n.props.children.length
                            }));
                        n.props.children.forEach(function(t) {
                            r.push(t.props.style.width), e += t.props.style.width
                        });
                        for (var a = 0; a < i; a++) t += r[r.length - 1 - a], e += r[r.length - 1 - a];
                        for (var l = 0; l < o; l++) e += r[l];
                        for (var c = 0; c < n.state.currentSlide; c++) t += r[c];
                        var u = {
                            width: e + "px",
                            left: -t + "px"
                        };
                        if (n.props.centerMode) {
                            var d = "".concat(r[n.state.currentSlide], "px");
                            u.left = "calc(".concat(u.left, " + (100% - ").concat(d, ") / 2 ) ")
                        }
                        return void n.setState({
                            trackStyle: u
                        })
                    }
                    var p = v.default.Children.count(n.props.children),
                        f = s({}, n.props, n.state, {
                            slideCount: p
                        }),
                        m = (0, S.getPreClones)(f) + (0, S.getPostClones)(f) + p,
                        h = 100 / n.props.slidesToShow * m,
                        g = 100 / m,
                        b = -g * ((0, S.getPreClones)(f) + n.state.currentSlide) * h / 100;
                    n.props.centerMode && (b += (100 - g * h / 100) / 2);
                    var y = {
                        width: h + "%",
                        left: b + "%"
                    };
                    n.setState({
                        slideWidth: g + "%",
                        trackStyle: y
                    })
                }), h(m(m(n)), "checkImagesLoad", function() {
                    var e = document.querySelectorAll(".slick-slide img"),
                        t = e.length,
                        r = 0;
                    Array.prototype.forEach.call(e, function(e) {
                        var i = function() {
                            return ++r && r >= t && n.onWindowResized()
                        };
                        if (e.onclick) {
                            var o = e.onclick;
                            e.onclick = function() {
                                o(), e.parentNode.focus()
                            }
                        } else e.onclick = function() {
                            return e.parentNode.focus()
                        };
                        e.onload || (n.props.lazyLoad ? e.onload = function() {
                            n.adaptHeight(), n.callbackTimers.push(setTimeout(n.onWindowResized, n.props.speed))
                        } : (e.onload = i, e.onerror = function() {
                            i(), n.props.onLazyLoadError && n.props.onLazyLoadError()
                        }))
                    })
                }), h(m(m(n)), "progressiveLazyLoad", function() {
                    for (var e = [], t = s({}, n.props, n.state), r = n.state.currentSlide; r < n.state.slideCount + (0, S.getPostClones)(t); r++)
                        if (n.state.lazyLoadedList.indexOf(r) < 0) {
                            e.push(r);
                            break
                        }
                    for (var i = n.state.currentSlide - 1; i >= -(0, S.getPreClones)(t); i--)
                        if (n.state.lazyLoadedList.indexOf(i) < 0) {
                            e.push(i);
                            break
                        }
                    e.length > 0 ? (n.setState(function(t) {
                        return {
                            lazyLoadedList: t.lazyLoadedList.concat(e)
                        }
                    }), n.props.onLazyLoad && n.props.onLazyLoad(e)) : n.lazyLoadTimer && (clearInterval(n.lazyLoadTimer), delete n.lazyLoadTimer)
                }), h(m(m(n)), "slideHandler", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = n.props,
                        i = r.asNavFor,
                        a = r.beforeChange,
                        l = r.onLazyLoad,
                        c = r.speed,
                        u = r.afterChange,
                        d = n.state.currentSlide,
                        p = (0, S.slideHandler)(s({
                            index: e
                        }, n.props, n.state, {
                            trackRef: n.track,
                            useCSS: n.props.useCSS && !t
                        })),
                        f = p.state,
                        m = p.nextState;
                    if (f) {
                        a && a(d, f.currentSlide);
                        var h = f.lazyLoadedList.filter(function(e) {
                            return n.state.lazyLoadedList.indexOf(e) < 0
                        });
                        l && h.length > 0 && l(h), n.setState(f, function() {
                            i && i.innerSlider.state.currentSlide !== n.state.currentSlide && i.innerSlider.slideHandler(e), m && (n.animationEndCallback = setTimeout(function() {
                                var e = m.animating,
                                    t = o(m, ["animating"]);
                                n.setState(t, function() {
                                    n.callbackTimers.push(setTimeout(function() {
                                        return n.setState({
                                            animating: e
                                        })
                                    }, 10)), u && u(f.currentSlide), delete n.animationEndCallback
                                })
                            }, c))
                        })
                    }
                }), h(m(m(n)), "changeSlide", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = s({}, n.props, n.state),
                        i = (0, S.changeSlide)(r, e);
                    (0 === i || i) && (!0 === t ? n.slideHandler(i, t) : n.slideHandler(i))
                }), h(m(m(n)), "clickHandler", function(e) {
                    !1 === n.clickable && (e.stopPropagation(), e.preventDefault()), n.clickable = !0
                }), h(m(m(n)), "keyHandler", function(e) {
                    var t = (0, S.keyHandler)(e, n.props.accessibility, n.props.rtl);
                    "" !== t && n.changeSlide({
                        message: t
                    })
                }), h(m(m(n)), "selectHandler", function(e) {
                    n.changeSlide(e)
                }), h(m(m(n)), "disableBodyScroll", function() {
                    var e = function(e) {
                        e = e || window.event, e.preventDefault && e.preventDefault(), e.returnValue = !1
                    };
                    window.ontouchmove = e
                }), h(m(m(n)), "enableBodyScroll", function() {
                    window.ontouchmove = null
                }), h(m(m(n)), "swipeStart", function(e) {
                    n.props.verticalSwiping && n.disableBodyScroll();
                    var t = (0, S.swipeStart)(e, n.props.swipe, n.props.draggable);
                    "" !== t && n.setState(t)
                }), h(m(m(n)), "swipeMove", function(e) {
                    var t = (0, S.swipeMove)(e, s({}, n.props, n.state, {
                        trackRef: n.track,
                        listRef: n.list,
                        slideIndex: n.state.currentSlide
                    }));
                    t && (t.swiping && (n.clickable = !1), n.setState(t))
                }), h(m(m(n)), "swipeEnd", function(e) {
                    var t = (0, S.swipeEnd)(e, s({}, n.props, n.state, {
                        trackRef: n.track,
                        listRef: n.list,
                        slideIndex: n.state.currentSlide
                    }));
                    if (t) {
                        var r = t.triggerSlideHandler;
                        delete t.triggerSlideHandler, n.setState(t), void 0 !== r && (n.slideHandler(r), n.props.verticalSwiping && n.enableBodyScroll())
                    }
                }), h(m(m(n)), "slickPrev", function() {
                    n.callbackTimers.push(setTimeout(function() {
                        return n.changeSlide({
                            message: "previous"
                        })
                    }, 0))
                }), h(m(m(n)), "slickNext", function() {
                    n.callbackTimers.push(setTimeout(function() {
                        return n.changeSlide({
                            message: "next"
                        })
                    }, 0))
                }), h(m(m(n)), "slickGoTo", function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (e = Number(e), isNaN(e)) return "";
                    n.callbackTimers.push(setTimeout(function() {
                        return n.changeSlide({
                            message: "index",
                            index: e,
                            currentSlide: n.state.currentSlide
                        }, t)
                    }, 0))
                }), h(m(m(n)), "play", function() {
                    var e;
                    if (n.props.rtl) e = n.state.currentSlide - n.props.slidesToScroll;
                    else {
                        if (!(0, S.canGoNext)(s({}, n.props, n.state))) return !1;
                        e = n.state.currentSlide + n.props.slidesToScroll
                    }
                    n.slideHandler(e)
                }), h(m(m(n)), "autoPlay", function(e) {
                    n.autoplayTimer && clearInterval(n.autoplayTimer);
                    var t = n.state.autoplaying;
                    if ("update" === e) {
                        if ("hovered" === t || "focused" === t || "paused" === t) return
                    } else if ("leave" === e) {
                        if ("paused" === t || "focused" === t) return
                    } else if ("blur" === e && ("paused" === t || "hovered" === t)) return;
                    n.autoplayTimer = setInterval(n.play, n.props.autoplaySpeed + 50), n.setState({
                        autoplaying: "playing"
                    })
                }), h(m(m(n)), "pause", function(e) {
                    n.autoplayTimer && (clearInterval(n.autoplayTimer), n.autoplayTimer = null);
                    var t = n.state.autoplaying;
                    "paused" === e ? n.setState({
                        autoplaying: "paused"
                    }) : "focused" === e ? "hovered" !== t && "playing" !== t || n.setState({
                        autoplaying: "focused"
                    }) : "playing" === t && n.setState({
                        autoplaying: "hovered"
                    })
                }), h(m(m(n)), "onDotsOver", function() {
                    return n.props.autoplay && n.pause("hovered")
                }), h(m(m(n)), "onDotsLeave", function() {
                    return n.props.autoplay && "hovered" === n.state.autoplaying && n.autoPlay("leave")
                }), h(m(m(n)), "onTrackOver", function() {
                    return n.props.autoplay && n.pause("hovered")
                }), h(m(m(n)), "onTrackLeave", function() {
                    return n.props.autoplay && "hovered" === n.state.autoplaying && n.autoPlay("leave")
                }), h(m(m(n)), "onSlideFocus", function() {
                    return n.props.autoplay && n.pause("focused")
                }), h(m(m(n)), "onSlideBlur", function() {
                    return n.props.autoplay && "focused" === n.state.autoplaying && n.autoPlay("blur")
                }), h(m(m(n)), "render", function() {
                    var e = (0, w.default)("slick-slider", n.props.className, {
                            "slick-vertical": n.props.vertical,
                            "slick-initialized": !0
                        }),
                        t = s({}, n.props, n.state),
                        r = (0, S.extractObject)(t, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding"]),
                        o = n.props.pauseOnHover;
                    r = s({}, r, {
                        onMouseEnter: o ? n.onTrackOver : null,
                        onMouseLeave: o ? n.onTrackLeave : null,
                        onMouseOver: o ? n.onTrackOver : null,
                        focusOnSelect: n.props.focusOnSelect ? n.selectHandler : null
                    });
                    var a;
                    if (!0 === n.props.dots && n.state.slideCount >= n.props.slidesToShow) {
                        var l = (0, S.extractObject)(t, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                            c = n.props.pauseOnDotsHover;
                        l = s({}, l, {
                            clickHandler: n.changeSlide,
                            onMouseEnter: c ? n.onDotsLeave : null,
                            onMouseOver: c ? n.onDotsOver : null,
                            onMouseLeave: c ? n.onDotsLeave : null
                        }), a = v.default.createElement(E.Dots, l)
                    }
                    var u, d, p = (0, S.extractObject)(t, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                    p.clickHandler = n.changeSlide, n.props.arrows && (u = v.default.createElement(O.PrevArrow, p), d = v.default.createElement(O.NextArrow, p));
                    var f = null;
                    n.props.vertical && (f = {
                        height: n.state.listHeight
                    });
                    var m = null;
                    !1 === n.props.vertical ? !0 === n.props.centerMode && (m = {
                        padding: "0px " + n.props.centerPadding
                    }) : !0 === n.props.centerMode && (m = {
                        padding: n.props.centerPadding + " 0px"
                    });
                    var h = s({}, f, m),
                        g = n.props.touchMove,
                        b = {
                            className: "slick-list",
                            style: h,
                            onClick: n.clickHandler,
                            onMouseDown: g ? n.swipeStart : null,
                            onMouseMove: n.state.dragging && g ? n.swipeMove : null,
                            onMouseUp: g ? n.swipeEnd : null,
                            onMouseLeave: n.state.dragging && g ? n.swipeEnd : null,
                            onTouchStart: g ? n.swipeStart : null,
                            onTouchMove: n.state.dragging && g ? n.swipeMove : null,
                            onTouchEnd: g ? n.swipeEnd : null,
                            onTouchCancel: n.state.dragging && g ? n.swipeEnd : null,
                            onKeyDown: n.props.accessibility ? n.keyHandler : null
                        },
                        y = {
                            className: e,
                            dir: "ltr"
                        };
                    return n.props.unslick && (b = {
                        className: "slick-list"
                    }, y = {
                        className: e
                    }), v.default.createElement("div", y, n.props.unslick ? "" : u, v.default.createElement("div", i({
                        ref: n.listRefHandler
                    }, b), v.default.createElement(k.Track, i({
                        ref: n.trackRefHandler
                    }, r), n.props.children)), n.props.unslick ? "" : d, n.props.unslick ? "" : a)
                }), n.list = null, n.track = null, n.state = s({}, b.default, {
                    currentSlide: n.props.initialSlide,
                    slideCount: v.default.Children.count(n.props.children)
                }), n.callbackTimers = [], n.clickable = !0, n.debouncedResize = null, n
            }
            return p(t, e), t
        }(v.default.Component);
    t.InnerSlider = x
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = {
            animating: !1,
            autoplaying: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            dragging: !1,
            edgeDragged: !1,
            initialized: !1,
            lazyLoadedList: [],
            listHeight: null,
            listWidth: null,
            scrolling: !1,
            slideCount: null,
            slideHeight: null,
            slideWidth: null,
            swipeLeft: null,
            swiped: !1,
            swiping: !1,
            touchObject: {
                startX: 0,
                startY: 0,
                curX: 0,
                curY: 0
            },
            trackStyle: {},
            trackWidth: 0
        },
        i = r;
    t.default = i
}, function(e, t, n) {
    (function(t) {
        function n(e, t, n) {
            function i(t) {
                var n = h,
                    r = v;
                return h = v = void 0, O = t, b = e.apply(r, n)
            }

            function o(e) {
                return O = e, y = setTimeout(u, t), C ? i(e) : b
            }

            function s(e) {
                var n = e - E,
                    r = e - O,
                    i = t - n;
                return x ? S(i, g - r) : i
            }

            function c(e) {
                var n = e - E,
                    r = e - O;
                return void 0 === E || n >= t || n < 0 || x && r >= g
            }

            function u() {
                var e = k();
                if (c(e)) return d(e);
                y = setTimeout(u, s(e))
            }

            function d(e) {
                return y = void 0, T && h ? i(e) : (h = v = void 0, b)
            }

            function p() {
                void 0 !== y && clearTimeout(y), O = 0, h = E = v = y = void 0
            }

            function f() {
                return void 0 === y ? b : d(k())
            }

            function m() {
                var e = k(),
                    n = c(e);
                if (h = arguments, v = this, E = e, n) {
                    if (void 0 === y) return o(E);
                    if (x) return y = setTimeout(u, t), i(E)
                }
                return void 0 === y && (y = setTimeout(u, t)), b
            }
            var h, v, g, b, y, E, O = 0,
                C = !1,
                x = !1,
                T = !0;
            if ("function" != typeof e) throw new TypeError(l);
            return t = a(t) || 0, r(n) && (C = !!n.leading, x = "maxWait" in n, g = x ? w(a(n.maxWait) || 0, t) : g, T = "trailing" in n ? !!n.trailing : T), m.cancel = p, m.flush = f, m
        }

        function r(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function i(e) {
            return !!e && "object" == typeof e
        }

        function o(e) {
            return "symbol" == typeof e || i(e) && y.call(e) == c
        }

        function a(e) {
            if ("number" == typeof e) return e;
            if (o(e)) return s;
            if (r(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = r(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(u, "");
            var n = p.test(e);
            return n || f.test(e) ? m(e.slice(2), n ? 2 : 8) : d.test(e) ? s : +e
        }
        var l = "Expected a function",
            s = NaN,
            c = "[object Symbol]",
            u = /^\s+|\s+$/g,
            d = /^[-+]0x[0-9a-f]+$/i,
            p = /^0b[01]+$/i,
            f = /^0o[0-7]+$/i,
            m = parseInt,
            h = "object" == typeof t && t && t.Object === Object && t,
            v = "object" == typeof self && self && self.Object === Object && self,
            g = h || v || Function("return this")(),
            b = Object.prototype,
            y = b.toString,
            w = Math.max,
            S = Math.min,
            k = function() {
                return g.Date.now()
            };
        e.exports = n
    }).call(t, n(8))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function o() {
        return o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, o.apply(this, arguments)
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), e
    }

    function c(e, t) {
        return !t || "object" !== i(t) && "function" !== typeof t ? u(e) : t
    }

    function u(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && f(e, t)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                h(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Track = void 0;
    var v = r(n(1)),
        g = r(n(0)),
        b = n(3),
        y = function(e) {
            var t, n, r, i, o;
            return o = e.rtl ? e.slideCount - 1 - e.index : e.index, r = o < 0 || o >= e.slideCount, e.centerMode ? (i = Math.floor(e.slidesToShow / 2), n = (o - e.currentSlide) % e.slideCount === 0, o > e.currentSlide - i - 1 && o <= e.currentSlide + i && (t = !0)) : t = e.currentSlide <= o && o < e.currentSlide + e.slidesToShow, {
                "slick-slide": !0,
                "slick-active": t,
                "slick-center": n,
                "slick-cloned": r,
                "slick-current": o === e.currentSlide
            }
        },
        w = function(e) {
            var t = {};
            return void 0 !== e.variableWidth && !1 !== e.variableWidth || (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = e.currentSlide === e.index ? 1 : 0, t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase, t.WebkitTransition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase), t
        },
        S = function(e, t) {
            return e.key || t
        },
        k = function(e) {
            var t, n = [],
                r = [],
                i = [],
                o = v.default.Children.count(e.children),
                a = (0, b.lazyStartIndex)(e),
                l = (0, b.lazyEndIndex)(e);
            return v.default.Children.forEach(e.children, function(s, c) {
                var u, d = {
                    message: "children",
                    index: c,
                    slidesToScroll: e.slidesToScroll,
                    currentSlide: e.currentSlide
                };
                u = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(c) >= 0 ? s : v.default.createElement("div", null);
                var p = w(m({}, e, {
                        index: c
                    })),
                    f = u.props.className || "",
                    h = y(m({}, e, {
                        index: c
                    }));
                if (n.push(v.default.cloneElement(u, {
                        key: "original" + S(u, c),
                        "data-index": c,
                        className: (0, g.default)(h, f),
                        tabIndex: "-1",
                        "aria-hidden": !h["slick-active"],
                        style: m({
                            outline: "none"
                        }, u.props.style || {}, p),
                        onClick: function(t) {
                            u.props && u.props.onClick && u.props.onClick(t), e.focusOnSelect && e.focusOnSelect(d)
                        }
                    })), e.infinite && !1 === e.fade) {
                    var k = o - c;
                    k <= (0, b.getPreClones)(e) && o !== e.slidesToShow && (t = -k, t >= a && (u = s), h = y(m({}, e, {
                        index: t
                    })), r.push(v.default.cloneElement(u, {
                        key: "precloned" + S(u, t),
                        "data-index": t,
                        tabIndex: "-1",
                        className: (0, g.default)(h, f),
                        "aria-hidden": !h["slick-active"],
                        style: m({}, u.props.style || {}, p),
                        onClick: function(t) {
                            u.props && u.props.onClick && u.props.onClick(t), e.focusOnSelect && e.focusOnSelect(d)
                        }
                    }))), o !== e.slidesToShow && (t = o + c, t < l && (u = s), h = y(m({}, e, {
                        index: t
                    })), i.push(v.default.cloneElement(u, {
                        key: "postcloned" + S(u, t),
                        "data-index": t,
                        tabIndex: "-1",
                        className: (0, g.default)(h, f),
                        "aria-hidden": !h["slick-active"],
                        style: m({}, u.props.style || {}, p),
                        onClick: function(t) {
                            u.props && u.props.onClick && u.props.onClick(t), e.focusOnSelect && e.focusOnSelect(d)
                        }
                    })))
                }
            }), e.rtl ? r.concat(n, i).reverse() : r.concat(n, i)
        },
        E = function(e) {
            function t() {
                return a(this, t), c(this, d(t).apply(this, arguments))
            }
            return p(t, e), s(t, [{
                key: "render",
                value: function() {
                    var e = k(this.props),
                        t = this.props,
                        n = t.onMouseEnter,
                        r = t.onMouseOver,
                        i = t.onMouseLeave,
                        a = {
                            onMouseEnter: n,
                            onMouseOver: r,
                            onMouseLeave: i
                        };
                    return v.default.createElement("div", o({
                        className: "slick-track",
                        style: this.props.trackStyle
                    }, a), e)
                }
            }]), t
        }(v.default.PureComponent);
    t.Track = E
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                a(e, t, n[t])
            })
        }
        return e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e
    }

    function u(e, t) {
        return !t || "object" !== i(t) && "function" !== typeof t ? d(e) : t
    }

    function d(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && m(e, t)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Dots = void 0;
    var h = r(n(1)),
        v = r(n(0)),
        g = function(e) {
            return e.infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1
        },
        b = function(e) {
            function t() {
                return l(this, t), u(this, p(t).apply(this, arguments))
            }
            return f(t, e), c(t, [{
                key: "clickHandler",
                value: function(e, t) {
                    t.preventDefault(), this.props.clickHandler(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = g({
                            slideCount: this.props.slideCount,
                            slidesToScroll: this.props.slidesToScroll,
                            slidesToShow: this.props.slidesToShow,
                            infinite: this.props.infinite
                        }),
                        n = this.props,
                        r = n.onMouseEnter,
                        i = n.onMouseOver,
                        a = n.onMouseLeave,
                        l = {
                            onMouseEnter: r,
                            onMouseOver: i,
                            onMouseLeave: a
                        },
                        s = Array.apply(null, Array(t + 1).join("0").split("")).map(function(t, n) {
                            var r = n * e.props.slidesToScroll,
                                i = n * e.props.slidesToScroll + (e.props.slidesToScroll - 1),
                                o = (0, v.default)({
                                    "slick-active": e.props.currentSlide >= r && e.props.currentSlide <= i
                                }),
                                a = {
                                    message: "dots",
                                    index: n,
                                    slidesToScroll: e.props.slidesToScroll,
                                    currentSlide: e.props.currentSlide
                                },
                                l = e.clickHandler.bind(e, a);
                            return h.default.createElement("li", {
                                key: n,
                                className: o
                            }, h.default.cloneElement(e.props.customPaging(n), {
                                onClick: l
                            }))
                        });
                    return h.default.cloneElement(this.props.appendDots(s), o({
                        className: this.props.dotsClass
                    }, l))
                }
            }]), t
        }(h.default.PureComponent);
    t.Dots = b
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function o() {
        return o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, o.apply(this, arguments)
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                l(e, t, n[t])
            })
        }
        return e
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t && c(e.prototype, t), n && c(e, n), e
    }

    function d(e, t) {
        return !t || "object" !== i(t) && "function" !== typeof t ? p(e) : t
    }

    function p(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && h(e, t)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NextArrow = t.PrevArrow = void 0;
    var v = r(n(1)),
        g = r(n(0)),
        b = n(3),
        y = function(e) {
            function t() {
                return s(this, t), d(this, f(t).apply(this, arguments))
            }
            return m(t, e), u(t, [{
                key: "clickHandler",
                value: function(e, t) {
                    t && t.preventDefault(), this.props.clickHandler(e, t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                            "slick-arrow": !0,
                            "slick-prev": !0
                        },
                        t = this.clickHandler.bind(this, {
                            message: "previous"
                        });
                    !this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (e["slick-disabled"] = !0, t = null);
                    var n = {
                            key: "0",
                            "data-role": "none",
                            className: (0, g.default)(e),
                            style: {
                                display: "block"
                            },
                            onClick: t
                        },
                        r = {
                            currentSlide: this.props.currentSlide,
                            slideCount: this.props.slideCount
                        };
                    return this.props.prevArrow ? v.default.cloneElement(this.props.prevArrow, a({}, n, r)) : v.default.createElement("button", o({
                        key: "0",
                        type: "button"
                    }, n), " ", "Previous")
                }
            }]), t
        }(v.default.PureComponent);
    t.PrevArrow = y;
    var w = function(e) {
        function t() {
            return s(this, t), d(this, f(t).apply(this, arguments))
        }
        return m(t, e), u(t, [{
            key: "clickHandler",
            value: function(e, t) {
                t && t.preventDefault(), this.props.clickHandler(e, t)
            }
        }, {
            key: "render",
            value: function() {
                var e = {
                        "slick-arrow": !0,
                        "slick-next": !0
                    },
                    t = this.clickHandler.bind(this, {
                        message: "next"
                    });
                (0, b.canGoNext)(this.props) || (e["slick-disabled"] = !0, t = null);
                var n = {
                        key: "1",
                        "data-role": "none",
                        className: (0, g.default)(e),
                        style: {
                            display: "block"
                        },
                        onClick: t
                    },
                    r = {
                        currentSlide: this.props.currentSlide,
                        slideCount: this.props.slideCount
                    };
                return this.props.nextArrow ? v.default.cloneElement(this.props.nextArrow, a({}, n, r)) : v.default.createElement("button", o({
                    key: "1",
                    type: "button"
                }, n), " ", "Next")
            }
        }]), t
    }(v.default.PureComponent);
    t.NextArrow = w
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            function n(e, t) {
                function n() {
                    o && (o = !1, e()), a && i()
                }

                function r() {
                    h(n)
                }

                function i() {
                    var e = Date.now();
                    if (o) {
                        if (e - l < v) return;
                        a = !0
                    } else o = !0, a = !1, setTimeout(r, t);
                    l = e
                }
                var o = !1,
                    a = !1,
                    l = 0;
                return i
            }

            function r(e) {
                return parseFloat(e) || 0
            }

            function i(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return t.reduce(function(t, n) {
                    return t + r(e["border-" + n + "-width"])
                }, 0)
            }

            function o(e) {
                for (var t = ["top", "right", "bottom", "left"], n = {}, i = 0, o = t; i < o.length; i++) {
                    var a = o[i],
                        l = e["padding-" + a];
                    n[a] = r(l)
                }
                return n
            }

            function a(e) {
                var t = e.getBBox();
                return d(0, 0, t.width, t.height)
            }

            function l(e) {
                var t = e.clientWidth,
                    n = e.clientHeight;
                if (!t && !n) return E;
                var a = k(e).getComputedStyle(e),
                    l = o(a),
                    c = l.left + l.right,
                    u = l.top + l.bottom,
                    p = r(a.width),
                    f = r(a.height);
                if ("border-box" === a.boxSizing && (Math.round(p + c) !== t && (p -= i(a, "left", "right") + c), Math.round(f + u) !== n && (f -= i(a, "top", "bottom") + u)), !s(e)) {
                    var m = Math.round(p + c) - t,
                        h = Math.round(f + u) - n;
                    1 !== Math.abs(m) && (p -= m), 1 !== Math.abs(h) && (f -= h)
                }
                return d(l.left, l.top, p, f)
            }

            function s(e) {
                return e === k(e).document.documentElement
            }

            function c(e) {
                return f ? O(e) ? a(e) : l(e) : E
            }

            function u(e) {
                var t = e.x,
                    n = e.y,
                    r = e.width,
                    i = e.height,
                    o = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                    a = Object.create(o.prototype);
                return S(a, {
                    x: t,
                    y: n,
                    width: r,
                    height: i,
                    top: n,
                    right: t + r,
                    bottom: i + n,
                    left: t
                }), a
            }

            function d(e, t, n, r) {
                return {
                    x: e,
                    y: t,
                    width: n,
                    height: r
                }
            }
            var p = function() {
                    function e(e, t) {
                        var n = -1;
                        return e.some(function(e, r) {
                            return e[0] === t && (n = r, !0)
                        }), n
                    }
                    return "undefined" !== typeof Map ? Map : function() {
                        function t() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(t.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.get = function(t) {
                            var n = e(this.__entries__, t),
                                r = this.__entries__[n];
                            return r && r[1]
                        }, t.prototype.set = function(t, n) {
                            var r = e(this.__entries__, t);
                            ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
                        }, t.prototype.delete = function(t) {
                            var n = this.__entries__,
                                r = e(n, t);
                            ~r && n.splice(r, 1)
                        }, t.prototype.has = function(t) {
                            return !!~e(this.__entries__, t)
                        }, t.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, t.prototype.forEach = function(e, t) {
                            void 0 === t && (t = null);
                            for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                var i = r[n];
                                e.call(t, i[1], i[0])
                            }
                        }, t
                    }()
                }(),
                f = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
                m = function() {
                    return "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")()
                }(),
                h = function() {
                    return "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(m) : function(e) {
                        return setTimeout(function() {
                            return e(Date.now())
                        }, 1e3 / 60)
                    }
                }(),
                v = 2,
                g = 20,
                b = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                y = "undefined" !== typeof MutationObserver,
                w = function() {
                    function e() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = n(this.refresh.bind(this), g)
                    }
                    return e.prototype.addObserver = function(e) {
                        ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                    }, e.prototype.removeObserver = function(e) {
                        var t = this.observers_,
                            n = t.indexOf(e);
                        ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                    }, e.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, e.prototype.updateObservers_ = function() {
                        var e = this.observers_.filter(function(e) {
                            return e.gatherActive(), e.hasActive()
                        });
                        return e.forEach(function(e) {
                            return e.broadcastActive()
                        }), e.length > 0
                    }, e.prototype.connect_ = function() {
                        f && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), y ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, e.prototype.disconnect_ = function() {
                        f && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, e.prototype.onTransitionEnd_ = function(e) {
                        var t = e.propertyName,
                            n = void 0 === t ? "" : t;
                        b.some(function(e) {
                            return !!~n.indexOf(e)
                        }) && this.refresh()
                    }, e.getInstance = function() {
                        return this.instance_ || (this.instance_ = new e), this.instance_
                    }, e.instance_ = null, e
                }(),
                S = function(e, t) {
                    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                        var i = r[n];
                        Object.defineProperty(e, i, {
                            value: t[i],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return e
                },
                k = function(e) {
                    return e && e.ownerDocument && e.ownerDocument.defaultView || m
                },
                E = d(0, 0, 0, 0),
                O = function() {
                    return "undefined" !== typeof SVGGraphicsElement ? function(e) {
                        return e instanceof k(e).SVGGraphicsElement
                    } : function(e) {
                        return e instanceof k(e).SVGElement && "function" === typeof e.getBBox
                    }
                }(),
                C = function() {
                    function e(e) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = d(0, 0, 0, 0), this.target = e
                    }
                    return e.prototype.isActive = function() {
                        var e = c(this.target);
                        return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                    }, e.prototype.broadcastRect = function() {
                        var e = this.contentRect_;
                        return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                    }, e
                }(),
                x = function() {
                    function e(e, t) {
                        var n = u(t);
                        S(this, {
                            target: e,
                            contentRect: n
                        })
                    }
                    return e
                }(),
                T = function() {
                    function e(e, t, n) {
                        if (this.activeObservations_ = [], this.observations_ = new p, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                    }
                    return e.prototype.observe = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" !== typeof Element && Element instanceof Object) {
                            if (!(e instanceof k(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) || (t.set(e, new C(e)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, e.prototype.unobserve = function(e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" !== typeof Element && Element instanceof Object) {
                            if (!(e instanceof k(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                        }
                    }, e.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, e.prototype.gatherActive = function() {
                        var e = this;
                        this.clearActive(), this.observations_.forEach(function(t) {
                            t.isActive() && e.activeObservations_.push(t)
                        })
                    }, e.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var e = this.callbackCtx_,
                                t = this.activeObservations_.map(function(e) {
                                    return new x(e.target, e.broadcastRect())
                                });
                            this.callback_.call(e, t, e), this.clearActive()
                        }
                    }, e.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, e.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, e
                }(),
                _ = "undefined" !== typeof WeakMap ? new WeakMap : new p,
                M = function() {
                    function e(t) {
                        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        var n = w.getInstance(),
                            r = new T(t, n, this);
                        _.set(this, r)
                    }
                    return e
                }();
            ["observe", "unobserve", "disconnect"].forEach(function(e) {
                M.prototype[e] = function() {
                    var t;
                    return (t = _.get(this))[e].apply(t, arguments)
                }
            });
            var P = function() {
                return "undefined" !== typeof m.ResizeObserver ? m.ResizeObserver : M
            }();
            t.default = P
        }.call(t, n(8))
}, function(e, t, n) {
    var r = n(29),
        i = function(e) {
            return /[height|width]$/.test(e)
        },
        o = function(e) {
            var t = "",
                n = Object.keys(e);
            return n.forEach(function(o, a) {
                var l = e[o];
                o = r(o), i(o) && "number" === typeof l && (l += "px"), t += !0 === l ? o : !1 === l ? "not " + o : "(" + o + ": " + l + ")", a < n.length - 1 && (t += " and ")
            }), t
        },
        a = function(e) {
            var t = "";
            return "string" === typeof e ? e : e instanceof Array ? (e.forEach(function(n, r) {
                t += o(n), r < e.length - 1 && (t += ", ")
            }), t) : o(e)
        };
    e.exports = a
}, function(e, t) {
    var n = function(e) {
        return e.replace(/[A-Z]/g, function(e) {
            return "-" + e.toLowerCase()
        }).toLowerCase()
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(1)),
        i = {
            accessibility: !0,
            adaptiveHeight: !1,
            afterChange: null,
            appendDots: function(e) {
                return r.default.createElement("ul", {
                    style: {
                        display: "block"
                    }
                }, e)
            },
            arrows: !0,
            autoplay: !1,
            autoplaySpeed: 3e3,
            beforeChange: null,
            centerMode: !1,
            centerPadding: "50px",
            className: "",
            cssEase: "ease",
            customPaging: function(e) {
                return r.default.createElement("button", null, e + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: null,
            nextArrow: null,
            onEdge: null,
            onInit: null,
            onLazyLoadError: null,
            onReInit: null,
            pauseOnDotsHover: !1,
            pauseOnFocus: !1,
            pauseOnHover: !0,
            prevArrow: null,
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "div",
            slidesPerRow: 1,
            slidesToScroll: 1,
            slidesToShow: 1,
            speed: 500,
            swipe: !0,
            swipeEvent: null,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            waitForAnimate: !0
        },
        o = i;
    t.default = o
}, function(e, t, n) {
    var r = n(32);
    e.exports = new r
}, function(e, t, n) {
    function r() {
        if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
    }
    var i = n(33),
        o = n(9),
        a = o.each,
        l = o.isFunction,
        s = o.isArray;
    r.prototype = {
        constructor: r,
        register: function(e, t, n) {
            var r = this.queries,
                o = n && this.browserIsIncapable;
            return r[e] || (r[e] = new i(e, o)), l(t) && (t = {
                match: t
            }), s(t) || (t = [t]), a(t, function(t) {
                l(t) && (t = {
                    match: t
                }), r[e].addHandler(t)
            }), this
        },
        unregister: function(e, t) {
            var n = this.queries[e];
            return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
        }
    }, e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
        var n = this;
        this.listener = function(e) {
            n.mql = e.currentTarget || e, n.assess()
        }, this.mql.addListener(this.listener)
    }
    var i = n(34),
        o = n(9).each;
    r.prototype = {
        constuctor: r,
        addHandler: function(e) {
            var t = new i(e);
            this.handlers.push(t), this.matches() && t.on()
        },
        removeHandler: function(e) {
            var t = this.handlers;
            o(t, function(n, r) {
                if (n.equals(e)) return n.destroy(), !t.splice(r, 1)
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            o(this.handlers, function(e) {
                e.destroy()
            }), this.mql.removeListener(this.listener), this.handlers.length = 0
        },
        assess: function() {
            var e = this.matches() ? "on" : "off";
            o(this.handlers, function(t) {
                t[e]()
            })
        }
    }, e.exports = r
}, function(e, t) {
    function n(e) {
        this.options = e, !e.deferSetup && this.setup()
    }
    n.prototype = {
        constructor: n,
        setup: function() {
            this.options.setup && this.options.setup(), this.initialised = !0
        },
        on: function() {
            !this.initialised && this.setup(), this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(e) {
            return this.options === e || this.options.match === e
        }
    }, e.exports = n
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function i(e) {
        var t = e.className,
            n = e.currentInput,
            i = e.label,
            o = e.value,
            a = e.instanceId,
            s = e.onChange,
            d = e.beforeIcon,
            p = e.afterIcon,
            f = e.help,
            m = e.allowReset,
            h = (e.initialPosition, e.mins),
            w = e.maxs,
            S = e.setState,
            k = e.btnUnits,
            E = e.btnLabels,
            O = r(e, ["className", "currentInput", "label", "value", "instanceId", "onChange", "beforeIcon", "afterIcon", "help", "allowReset", "initialPosition", "mins", "maxs", "setState", "btnUnits", "btnLabels"]),
            C = "inspector-range-control-" + a,
            x = null === n ? o : n,
            T = x.match(/(\d*\.?\d*)(.*)/),
            _ = T[1],
            M = T[2],
            P = k.indexOf(M),
            A = h[P],
            L = w[P],
            j = function() {
                I(), s()
            },
            I = function() {
                null !== n && S({
                    currentInput: null
                })
            },
            D = function(e, t) {
                var n = Math.abs(L - A),
                    r = (_ - A) / n,
                    i = k.indexOf(t);
                return r * Math.abs(w[i] - h[i]) + h[i]
            },
            z = function(e) {
                var t = e.target.value;
                _ = D(0, t), s("" === t ? void 0 : "" + parseFloat(_) + t)
            },
            R = function(e) {
                var t = e.target.value;
                if (!e.target.checkValidity()) return void S({
                    currentInput: t
                });
                I(), s("" === t ? void 0 : "" + parseFloat(t) + M)
            };
        return wp.element.createElement(v, {
            label: i,
            id: C,
            help: f,
            className: l()("eedee-components-unit-button", t)
        }, d && wp.element.createElement(b, {
            icon: d
        }), wp.element.createElement("div", {
            className: "eedee-components-unit-button__wrap"
        }, wp.element.createElement("input", c({
            className: "eedee-components-unit-button__slider components-range-control__slider",
            id: C,
            type: "range",
            value: _,
            onChange: R,
            "aria-describedby": f ? C + "__help" : void 0,
            min: A,
            max: L
        }, O)), p && wp.element.createElement(b, {
            icon: p
        }), wp.element.createElement("input", c({
            className: "eedee-components-unit-button__number",
            type: "number",
            onChange: R,
            "aria-label": i,
            value: _,
            min: A,
            max: L,
            onBlur: I
        }, O)), m && wp.element.createElement(g, {
            onClick: j,
            disabled: void 0 === o,
            isSmall: !0,
            isDefault: !0,
            className: "components-range-control__reset"
        }, u("Reset")), wp.element.createElement(y, null, k.map(function(e, t) {
            var n = e === M;
            return wp.element.createElement(g, {
                className: "eedee-components-unit-button__unit",
                key: e,
                isPrimary: n,
                isDefault: !n,
                value: e,
                onClick: z
            }, "undefined" !== typeof E && E[t] ? E[t] : e)
        }))))
    }
    var o = n(2),
        a = (n.n(o), n(0)),
        l = n.n(a),
        s = n(36),
        c = (n.n(s), Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }),
        u = wp.i18n.__,
        d = wp.compose,
        p = d.compose,
        f = d.withInstanceId,
        m = d.withState,
        h = wp.components,
        v = h.BaseControl,
        g = h.Button,
        b = h.Dashicon,
        y = h.ButtonGroup;
    t.a = p([f, m({
        currentInput: null
    })])(i)
}, function(e, t) {}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }

    function o(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = n(0),
        l = n.n(a),
        s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        c = wp.element,
        u = c.Component,
        d = c.Fragment,
        p = wp.components,
        f = p.IconButton,
        m = p.Spinner,
        h = wp.i18n.__,
        v = wp.keycodes,
        g = v.BACKSPACE,
        b = v.DELETE,
        y = wp.data.withSelect,
        w = wp.blob.isBlobURL,
        S = function(e) {
            function t() {
                r(this, t);
                var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                return e.onSelectMedia = e.onSelectMedia.bind(e), e.onRemoveImage = e.onRemoveImage.bind(e), e.bindContainer = e.bindContainer.bind(e), e
            }
            return o(t, e), s(t, [{
                key: "bindContainer",
                value: function(e) {
                    this.container = e
                }
            }, {
                key: "onSelectMedia",
                value: function() {
                    this.props.isSelected || this.props.onSelect()
                }
            }, {
                key: "onRemoveImage",
                value: function(e) {
                    this.container === document.activeElement && this.props.isSelected && -1 !== [g, b].indexOf(e.keyCode) && (e.stopPropagation(), e.preventDefault(), this.props.onRemove())
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props,
                        t = e.image,
                        n = e.url;
                    t && !n && this.props.setAttributes({
                        url: t.source_url,
                        alt: t.alt_text
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.url,
                        r = t.alt,
                        i = t.id,
                        o = t.type,
                        a = t.isSelected,
                        s = t.onRemove,
                        c = t["aria-label"],
                        u = {
                            image: function() {
                                return wp.element.createElement("img", {
                                    src: n,
                                    alt: r,
                                    className: i && "image" === o ? "wp-image-" + i : null,
                                    "data-id": i,
                                    onClick: e.onSelectMedia,
                                    onFocus: e.onSelectMedia,
                                    onKeyDown: e.onRemoveImage,
                                    tabIndex: "0",
                                    "aria-label": c,
                                    ref: e.bindContainer
                                })
                            },
                            video: function() {
                                return wp.element.createElement("video", {
                                    autoPlay: !0,
                                    muted: !0,
                                    loop: !0,
                                    src: n,
                                    onClick: e.onSelectMedia,
                                    onFocus: e.onSelectMedia,
                                    onKeyDown: e.onRemoveImage,
                                    tabIndex: "0",
                                    "aria-label": c,
                                    ref: e.bindContainer
                                })
                            },
                            empty: function() {
                                return wp.element.createElement("div", {
                                    role: "checkbox",
                                    className: "empty-preview",
                                    onClick: e.onSelectMedia,
                                    onFocus: e.onSelectMedia,
                                    onKeyDown: e.onRemoveImage,
                                    tabIndex: "0",
                                    "aria-label": c,
                                    ref: e.bindContainer
                                }, "empty")
                            }
                        },
                        p = l()({
                            "is-selected": a,
                            "is-transient": w(n)
                        });
                    return wp.element.createElement("figure", {
                        className: p
                    }, a && wp.element.createElement(d, null, wp.element.createElement("div", {
                        className: "block-library-gallery-item__inline-menu"
                    }, wp.element.createElement(f, {
                        icon: "no-alt",
                        onClick: s,
                        className: "blocks-gallery-item__remove",
                        label: h("Remove Slide")
                    }))), (u[o] || u.empty)(), w(n) && wp.element.createElement(m, null))
                }
            }]), t
        }(u);
    t.a = y(function(e, t) {
        var n = e("core"),
            r = n.getMedia,
            i = t.id;
        return {
            image: i ? r(i) : null
        }
    })(S)
}, function(e, t) {
    e.exports = wp.i18n
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    }), n.d(t, "b", function() {
        return o
    }), n.d(t, "c", function() {
        return a
    });
    var r = n(5),
        i = (n.n(r), wp.element.createElement(r.SVG, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24"
        }, wp.element.createElement(r.Path, {
            fill: "none",
            d: "M0 0h24v24H0V0z"
        }), wp.element.createElement(r.Path, {
            d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"
        }))),
        o = wp.element.createElement(r.SVG, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24"
        }, wp.element.createElement(r.Path, {
            fill: "none",
            d: "M0 0h24v24H0V0z"
        }), wp.element.createElement(r.Path, {
            d: "M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"
        })),
        a = wp.element.createElement(r.SVG, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24"
        }, wp.element.createElement(r.Path, {
            fill: "none",
            d: "M0 0h24v24H0V0z"
        }), wp.element.createElement(r.Path, {
            d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"
        }))
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var i = n(0),
        o = n.n(i),
        a = n(2),
        l = (n.n(a), wp.editor.InnerBlocks),
        s = wp.element.Fragment;
    t.a = function(e) {
        var t = e.attributes,
            n = t.mediaType,
            i = t.mediaUrl,
            c = t.mediaAlt,
            u = t.mediaId,
            d = t.rgbaBackground,
            p = t.linkUrl,
            f = t.verticalAlign,
            m = {
                image: function() {
                    return wp.element.createElement("img", {
                        src: i,
                        alt: c,
                        className: u && "image" === n ? "wp-image-" + u : null
                    })
                },
                video: function() {
                    return wp.element.createElement("video", {
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        src: i
                    })
                }
            },
            h = !("undefined" === typeof p || !p || "" === p) && encodeURI(p),
            v = {
                background: d
            },
            g = o()("wp-block-eedee-block-videoslide", r({}, "vertical-align-" + f, f));
        return wp.element.createElement("div", {
            className: g
        }, wp.element.createElement("div", null, wp.element.createElement("div", {
            className: "slide-bg"
        }, (m[n] || a.noop)()), wp.element.createElement("div", {
            className: "slide-overlay",
            style: v
        }), wp.element.createElement("div", {
            className: "slide-content"
        }, wp.element.createElement(l.Content, null)), function(e) {
            return wp.element.createElement(s, null, h && wp.element.createElement("a", {
                className: "slide-link-pen2",
                href: h
            }, " ", e))
        }()))
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    n(42)
}, function(e, t, n) {
    "use strict";
    var r = n(12),
        i = (n.n(r), n(13)),
        o = (n.n(i), n(14)),
        a = n(6),
        l = n(15),
        s = n(16),
        c = n(17),
        u = n(43),
        d = n(45),
        p = n(40),
        f = n(4),
        m = wp.i18n.__,
        h = wp.blocks.registerBlockType;
    h("eedee/block-gutenslider", {
        title: m("Videoslider d"),
        description: m("Slider Block for Gutenberg that slides images with arbitrary blocks on top."),
        icon: f.a.videoslider,
        category: "common",
        keywords: [m("Slider"), m("Image"), m("Carousel")],
        attributes: a.d,
        supports: {
            align: ["wide", "full"]
        },
        edit: u.a,
        save: l.a,
        deprecated: s.a
    }), h("eedee/block-videoslide", {
        title: m("Videoslide"),
        description: m("Single Slide for Videoslider."),
        icon: f.a.videoslider,
        category: "common",
        keywords: [m("Slide"), m("Image"), m("Carousel")],
        parent: ["eedee/block-gutenslider"],
        attributes: o.a,
        deprecated: c.a,
        edit: d.a,
        save: p.a
    })
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }

    function a(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var l = n(18),
        s = n.n(l),
        c = n(0),
        u = n.n(c),
        d = n(2),
        p = (n.n(d), n(44)),
        f = n(4),
        m = n(37),
        h = n(10),
        v = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        g = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        b = wp.i18n,
        y = b.__,
        w = b.sprintf,
        S = wp.compose.compose,
        k = wp.data,
        E = k.withSelect,
        O = k.withDispatch,
        C = wp.element,
        x = C.Component,
        T = C.Fragment,
        M = C.RawHTML,
        P = wp.blocks,
        A = P.createBlock,
        L = P.getBlockContent,
        j = wp.editor,
        I = j.BlockControls,
        D = j.BlockIcon,
        z = j.MediaUpload,
        R = j.InnerBlocks,
        N = j.MediaPlaceholder,
        H = wp.components,
        B = H.IconButton,
        U = H.Toolbar,
        W = H.withNotices,
        F = ["image"],
        X = function(e) {
            var t = Object(d.pick)(e, ["alt", "id"]);
            return t.url = Object(d.get)(e, ["sizes", "large", "url"]) || Object(d.get)(e, ["media_details", "sizes", "large", "source_url"]) || e.url, t
        },
        Y = function(e) {
            function t() {
                i(this, t);
                var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                return e.onSelectImage = e.onSelectImage.bind(e), e.onSelectImages = e.onSelectImages.bind(e), e.onSelectMedia = e.onSelectMedia.bind(e), e.onRemoveSlide = e.onRemoveSlide.bind(e), e.onVerticalAlignChange = e.onVerticalAlignChange.bind(e), e.getControls.bind(e), e.setContentMode = e.setContentMode.bind(e), e.setFadeMode = e.setFadeMode.bind(e), e.setSlidesToShow = e.setSlidesToShow.bind(e), e.setSlidesToScroll = e.setSlidesToScroll.bind(e), e.setPauseOnHover = e.setPauseOnHover.bind(e), e.setPauseOnFocus = e.setPauseOnFocus.bind(e), e.setPauseOnDotsHover = e.setPauseOnDotsHover.bind(e), e.setArrows = e.setArrows.bind(e), e.setArrowSize = e.setArrowSize.bind(e), e.setArrowColor = e.setArrowColor.bind(e), e.setArrowStyle = e.setArrowStyle.bind(e), e.setDots = e.setDots.bind(e), e.setDotSize = e.setDotSize.bind(e), e.setDotColor = e.setDotColor.bind(e), e.setDotStyle = e.setDotStyle.bind(e), e.setSliderHeight = e.setSliderHeight.bind(e), e.setEnableSpacing = e.setEnableSpacing.bind(e), e.setSpacingX = e.setSpacingX.bind(e), e.setSpacingY = e.setSpacingY.bind(e), e.setFullscreen = e.setFullscreen.bind(e), e.setAutoplay = e.setAutoplay.bind(e), e.setDuration = e.setDuration.bind(e), e.setFadeSpeed = e.setFadeSpeed.bind(e), e.setParallax = e.setParallax.bind(e), e.setParallaxDirection = e.setParallaxDirection.bind(e), e.setParallaxAmount = e.setParallaxAmount.bind(e), e.setOverlayColor = e.setOverlayColor.bind(e), e.setDimRatio = e.setDimRatio.bind(e), e.setTextColor = e.setTextColor.bind(e), e.setMixBlendMode = e.setMixBlendMode.bind(e), e.setContentOpacity = e.setContentOpacity.bind(e), e.setEnableMixBlendPreview = e.setEnableMixBlendPreview.bind(e), e.state = {
                    selectedImage: null,
                    enableMixBlendPreview: !0,
                    isEditing: !1
                }, e.setAttributes({
                    isEditing: !1
                }), e
            }
            return a(t, e), g(t, [{
                key: "setAttributes",
                value: function(e) {
                    if (e.ids) throw new Error('The "ids" attribute should not be changed directly. It is managed automatically when "images" attribute changes');
                    this.props.setAttributes(e)
                }
            }, {
                key: "onVerticalAlignChange",
                value: function(e) {
                    this.props.updateSliderVerticalAlign(e)
                }
            }, {
                key: "onSelectImage",
                value: function(e) {
                    var t = this;
                    return function() {
                        t.slider && t.slider.slickGoTo(e), t.state.selectedImage !== e && t.setState({
                            selectedImage: e
                        })
                    }
                }
            }, {
                key: "onRemoveSlide",
                value: function(e) {
                    var t = this;
                    return function() {
                        if (e > t.props.innerSlides.length - 1) return !1;
                        t.props.removeSlide(t.props.innerSlides[e].clientId)
                    }
                }
            }, {
                key: "onSelectImages",
                value: function(e) {
                    this.setAttributes({
                        images: e.map(function(e) {
                            return X(e)
                        })
                    })
                }
            }, {
                key: "onSelectMedia",
                value: function(e) {
                    var t = this.props,
                        n = t.innerSlides,
                        r = t.clientId,
                        i = t.innerBlocks,
                        o = t.updateEditable,
                        a = t.replaceInnerBlocks,
                        l = t.insertBlocks;
                    if (this.setAttributes({
                            media: e.map(function(e) {
                                return X(e)
                            })
                        }), n.length) {
                        var s = [];
                        e.map(function(e) {
                            var t = void 0;
                            if (t = e.media_type ? "image" === e.media_type ? "image" : "video" : e.type, e.id) {
                                var r = Object(d.find)(n, function(t) {
                                    return e.id === t.attributes.mediaId
                                });
                                if (r) s.push(r);
                                else {
                                    var i = A("eedee/block-videoslide", {
                                        mediaId: e.id,
                                        mediaUrl: e.url,
                                        mediaAlt: e.alt,
                                        mediaType: t
                                    });
                                    s.push(i)
                                }
                            }
                        });
                        var c = [];
                        i.map(function(e) {
                            "eedee/block-videoslide" !== e.name && c.push(e)
                        }), a(r, [].concat(s, c))
                    } else {
                        var u = [];
                        e.map(function(e) {
                            var t = A("eedee/block-videoslide", {
                                mediaId: e.id,
                                mediaUrl: e.url,
                                mediaAlt: e.alt,
                                mediaType: e.type
                            });
                            u.push(t)
                        }), l(u, 0, r, !1)
                    }
                    e.length && this.setAttributes({
                        bgImageId: e[0].id
                    }), o(!0)
                }
            }, {
                key: "setArrows",
                value: function(e) {
                    this.setAttributes({
                        arrows: e
                    })
                }
            }, {
                key: "setArrowSize",
                value: function(e) {
                    this.setAttributes({
                        arrowSize: e
                    })
                }
            }, {
                key: "setArrowColor",
                value: function(e) {
                    this.setAttributes({
                        arrowColor: e
                    })
                }
            }, {
                key: "setArrowStyle",
                value: function(e) {
                    this.setAttributes({
                        arrowStyle: e
                    })
                }
            }, {
                key: "setDots",
                value: function(e) {
                    this.setAttributes({
                        dots: e
                    })
                }
            }, {
                key: "setDotSize",
                value: function(e) {
                    this.setAttributes({
                        dotSize: e
                    })
                }
            }, {
                key: "setDotColor",
                value: function(e) {
                    this.setAttributes({
                        dotColor: e
                    })
                }
            }, {
                key: "setDotStyle",
                value: function(e) {
                    this.setAttributes({
                        dotStyle: e
                    })
                }
            }, {
                key: "setContentMode",
                value: function(e) {
                    this.setAttributes({
                        contentMode: e
                    })
                }
            }, {
                key: "setSliderHeight",
                value: function(e) {
                    this.setAttributes({
                        sliderHeight: e
                    })
                }
            }, {
                key: "setEnableSpacing",
                value: function(e) {
                    this.setAttributes({
                        enableSpacing: e
                    })
                }
            }, {
                key: "setSpacingX",
                value: function(e, t) {
                    "all" === t ? this.setAttributes({
                        spacingXMobile: e,
                        spacingXDesktop: e,
                        spacingXTablet: e,
                        spacingX: e
                    }) : (void 0 !== t && (t = Object(d.capitalize)(t)), this.setAttributes(r({}, "spacingX" + t, e)))
                }
            }, {
                key: "setSpacingY",
                value: function(e, t) {
                    "all" === t ? this.setAttributes({
                        spacingXMobile: e,
                        spacingYDesktop: e,
                        spacingYTablet: e,
                        spacingY: e
                    }) : (void 0 !== t && (t = Object(d.capitalize)(t)), this.setAttributes(r({}, "spacingY" + t, e)))
                }
            }, {
                key: "setSpacingYUnit",
                value: function(e) {
                    this.setAttributes({
                        spacingYUnit: e
                    })
                }
            }, {
                key: "setSpacingXUnit",
                value: function(e) {
                    this.setAttributes({
                        spacingXUnit: e
                    })
                }
            }, {
                key: "setFullscreen",
                value: function(e) {
                    this.setAttributes({
                        isFullScreen: e
                    })
                }
            }, {
                key: "setFadeMode",
                value: function(e) {
                    this.setAttributes({
                        fadeMode: e
                    })
                }
            }, {
                key: "setSlidesToShow",
                value: function(e) {
                    this.setAttributes({
                        slidesToShow: e
                    })
                }
            }, {
                key: "setSlidesToScroll",
                value: function(e) {
                    this.setAttributes({
                        slidesToScroll: e
                    })
                }
            }, {
                key: "setAutoplay",
                value: function(e) {
                    this.setAttributes({
                        autoplay: e
                    })
                }
            }, {
                key: "setDuration",
                value: function(e) {
                    this.setAttributes({
                        duration: e
                    })
                }
            }, {
                key: "setFadeSpeed",
                value: function(e) {
                    this.setAttributes({
                        fadeSpeed: e
                    })
                }
            }, {
                key: "setParallax",
                value: function(e) {
                    this.setAttributes({
                        hasParallax: e
                    })
                }
            }, {
                key: "setParallaxDirection",
                value: function(e) {
                    this.setAttributes({
                        parallaxDirection: e
                    })
                }
            }, {
                key: "setPauseOnFocus",
                value: function(e) {
                    this.setAttributes({
                        pauseOnFocus: e
                    })
                }
            }, {
                key: "setPauseOnHover",
                value: function(e) {
                    this.setAttributes({
                        pauseOnHover: e
                    })
                }
            }, {
                key: "setPauseOnDotsHover",
                value: function(e) {
                    this.setAttributes({
                        pauseOnDotsHover: e
                    })
                }
            }, {
                key: "setParallaxAmount",
                value: function(e) {
                    this.setAttributes({
                        parallaxAmount: e
                    })
                }
            }, {
                key: "setOverlayColor",
                value: function(e) {
                    this.setAttributes({
                        overlayColor: e
                    }), this.props.updateSliderBackground(e, this.props.attributes.dimRatio)
                }
            }, {
                key: "setDimRatio",
                value: function(e) {
                    this.setAttributes({
                        dimRatio: e
                    }), this.props.updateSliderBackground(this.props.attributes.overlayColor, e)
                }
            }, {
                key: "setTextColor",
                value: function(e) {
                    this.setAttributes({
                        textColor: e
                    })
                }
            }, {
                key: "setMixBlendMode",
                value: function(e) {
                    this.setAttributes({
                        mixBlendMode: e
                    })
                }
            }, {
                key: "setEnableMixBlendPreview",
                value: function(e) {
                    this.setState({
                        enableMixBlendPreview: e
                    })
                }
            }, {
                key: "setContentOpacity",
                value: function(e) {
                    this.setAttributes({
                        contentOpacity: e
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    !this.props.isSelected && e.isSelected && this.setState({
                        selectedImage: null,
                        selectedSlide: null,
                        captionSelected: !1
                    })
                }
            }, {
                key: "getControls",
                value: function() {
                    var e = this.props,
                        t = e.attributes,
                        n = e.updateEditable,
                        r = t.isEditing,
                        i = t.verticalAlign;
                    return wp.element.createElement(I, null, wp.element.createElement(h.a, {
                        onChange: this.onVerticalAlignChange,
                        value: i
                    }), wp.element.createElement(U, null), wp.element.createElement(U, null, wp.element.createElement(z, {
                        onSelect: this.onSelectMedia,
                        gallery: !0,
                        allowedTypes: F,
                        accept: "image/*",
                        multiple: !0,
                        value: this.props.innerSlides.map(function(e) {
                            return e.attributes.mediaId
                        }),
                        render: function(e) {
                            var t = e.open;
                            return wp.element.createElement(B, {
                                className: "components-toolbar__control",
                                label: y("Edit Slides"),
                                icon: "images-alt2",
                                onClick: t
                            })
                        }
                    }), wp.element.createElement(B, {
                        className: "components-toolbar__control",
                        label: y(r ? "Preview Slider" : "Edit Slide Content"),
                        icon: r ? "visibility" : "edit",
                        onClick: function() {
                            n(!r)
                        }
                    })))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n = this,
                        i = this.state.enableMixBlendPreview,
                        o = this.props,
                        a = o.attributes,
                        l = o.isSelected,
                        c = o.className,
                        d = o.noticeUI,
                        h = o.innerBlocks,
                        g = o.innerSlides,
                        b = o.updateEditable,
                        S = a.contentMode,
                        k = a.fadeMode,
                        E = a.duration,
                        O = a.arrows,
                        C = a.arrowStyle,
                        x = a.dotStyle,
                        _ = a.dots,
                        P = a.pauseOnFocus,
                        A = a.pauseOnHover,
                        j = a.pauseOnDotsHover,
                        I = a.dotSize,
                        H = a.arrowSize,
                        U = a.arrowColor,
                        W = a.dotColor,
                        X = a.slidesToShow,
                        Y = a.slidesToScroll,
                        V = a.sliderHeight,
                        G = a.spacingXMobile,
                        q = a.spacingYMobile,
                        K = a.spacingXTablet,
                        $ = a.spacingYTablet,
                        Z = a.spacingXDesktop,
                        J = a.spacingYDesktop,
                        Q = a.spacingXUnit,
                        ee = a.spacingYUnit,
                        te = a.isFullScreen,
                        ne = a.fadeSpeed,
                        re = a.hasParallax,
                        ie = a.parallaxDirection,
                        oe = a.parallaxAmount,
                        ae = a.autoplay,
                        le = a.mixBlendMode,
                        se = a.contentOpacity,
                        ce = a.isEditing,
                        ue = a.rgbaBackground,
                        de = a.verticalAlign,
                        pe = {
                            dots: _,
                            arrows: O,
                            infinite: !0,
                            autoplaySpeed: 1e3 * E,
                            speed: 1e3 * ne,
                            autoplay: !ce && ae,
                            pauseOnFocus: P,
                            pauseOnHover: A,
                            pauseOnDotsHover: j,
                            fade: k,
                            slidesToShow: k ? 1 : X,
                            slidesToScroll: k ? 1 : Y
                        },
                        fe = u()(c, (e = {}, r(e, "content-" + S, S), r(e, "has-parallax", !te && re), r(e, "" + C, C), r(e, "" + x, x), r(e, "vertical-align-" + de, de), e)),
                        me = {
                            "--videoslider-min-height": "" + V,
                            "--videoslider-arrow-size": H + "px",
                            "--videoslider-dot-size": I + "px",
                            "--videoslider-arrow-color": "" + U,
                            "--videoslider-dot-color": "" + W,
                            "--videoslider-padding-y-mobile": "" + q + ee,
                            "--videoslider-padding-x-mobile": "" + G + Q,
                            "--videoslider-padding-y-tablet": "" + $ + ee,
                            "--videoslider-padding-x-tablet": "" + K + Q,
                            "--videoslider-padding-y-desktop": "" + J + ee,
                            "--videoslider-padding-x-desktop": "" + Z + Q
                        },
                        he = u()((t = {
                            "wp-block-eedee-videoslider__content": !0
                        }, r(t, "mb-" + le, i), r(t, "co-" + 100 * se, !0), t)),
                        ve = {
                            backgroundColor: ue
                        },
                        ge = function() {
                            return wp.element.createElement(T, null, wp.element.createElement("div", {
                                className: "slider-overlay",
                                style: ve
                            }), wp.element.createElement(s.a, v({
                                ref: function(e) {
                                    return n.slider = e
                                }
                            }, pe), g.map(function(e) {
                                return wp.element.createElement(M, {
                                    key: e.clientId
                                }, L(e))
                            })), wp.element.createElement("div", {
                                className: he
                            }, ce ? wp.element.createElement(R, null) : h.map(function(e) {
                                return wp.element.createElement(M, {
                                    key: e.clientId
                                }, L(e))
                            })))
                        },
                        be = function() {
                            return ce ? wp.element.createElement(T, null, wp.element.createElement("div", {
                                className: "videoslider-info"
                            }, wp.element.createElement("span", null, "You are editing Videoslider with ", g.length, " Slides - click "), wp.element.createElement(B, {
                                icon: "visibility",
                                className: "btn-videoslider-info-visibility",
                                onClick: function() {
                                    b(!1)
                                }
                            }), wp.element.createElement("span", null, " to preview the slider and "), wp.element.createElement(z, {
                                onSelect: n.onSelectMedia,
                                gallery: !0,
                                allowedTypes: F,
                                accept: "image/*",
                                multiple: !0,
                                value: n.props.innerSlides.map(function(e) {
                                    return e.attributes.mediaId
                                }),
                                render: function(e) {
                                    var t = e.open;
                                    return wp.element.createElement(B, {
                                        className: "btn-videoslider-info-visibility",
                                        label: y("Edit Slides"),
                                        icon: "images-alt2",
                                        onClick: t
                                    })
                                }
                            }), wp.element.createElement("span", null, " to edit slides. Add any blocks you like below.")), wp.element.createElement(R, null)) : wp.element.createElement(s.a, v({
                                ref: function(e) {
                                    return n.slider = e
                                }
                            }, pe), g.map(function(e) {
                                return wp.element.createElement(M, {
                                    key: e.clientId
                                }, L(e))
                            }))
                        };
                    return wp.element.createElement(T, null, this.getControls(), Object(p.b)(a, this), d, wp.element.createElement("div", {
                        className: fe,
                        style: me,
                        "data-parallax-direction": ie,
                        "data-parallax-amount": oe
                    }, function() {
                        return 0 === g.length ? wp.element.createElement(T, null, wp.element.createElement(N, {
                            icon: wp.element.createElement(D, {
                                icon: f.a.videoslider
                            }),
                            className: c,
                            labels: {
                                title: "Videoslider",
                                instructions: y("Drag images, upload new ones or select files from your library.")
                            },
                            onSelect: n.onSelectMedia,
                            accept: "image/*",
                            allowedTypes: F,
                            multiple: !0,
                            notices: d
                        })) : ce ? wp.element.createElement(T, null, "fixed" === S && wp.element.createElement("ul", {
                            className: "videoslider-edit"
                        }, g.map(function(e, t) {
                            var r = e.attributes,
                                i = r.mediaUrl,
                                o = r.mediaId,
                                a = r.mediaAlt,
                                s = r.mediaType,
                                c = w(y("Slide %1$d of %2$d in Videoslider"), t + 1, g.length);
                            return wp.element.createElement("li", {
                                className: "blocks-gallery-item",
                                key: e.clientId
                            }, wp.element.createElement(m.a, {
                                type: s,
                                url: i,
                                alt: a,
                                id: o,
                                isSelected: l && n.state.selectedImage === t,
                                onRemove: n.onRemoveSlide(t),
                                onSelect: n.onSelectImage(t),
                                setAttributes: function(e) {
                                    return n.setImageAttributes(t, e)
                                },
                                "aria-label": c
                            }))
                        })), wp.element.createElement("div", {
                            className: "videoslider-preview"
                        }, "fixed" === S ? ge() : be())) : wp.element.createElement("div", {
                            className: "videoslider-preview"
                        }, "fixed" === S ? ge() : be())
                    }()))
                }
            }]), t
        }(x);
    t.a = S([O(function(e, t, n) {
        var r = n.select("core/block-editor"),
            i = r.getBlockOrder,
            o = e("core/block-editor"),
            a = o.replaceInnerBlocks,
            l = o.insertBlocks;
        return {
            updateEditable: function(n) {
                var r = t.clientId,
                    o = t.setAttributes,
                    a = e("core/block-editor"),
                    l = a.updateBlockAttributes;
                o({
                    isEditing: n
                }), i(r).forEach(function(e) {
                    l(e, {
                        isEditing: n
                    })
                })
            },
            replaceInnerBlocks: a,
            insertBlocks: l,
            removeSlide: function(t) {
                (0, e("core/block-editor").removeBlock)(t)
            },
            updateSliderBackground: function(n, r) {
                var o = e("core/block-editor"),
                    a = o.updateBlockAttributes,
                    l = t.setAttributes,
                    s = t.clientId,
                    c = {
                        rgbaBackground: Object(p.hexToRgb)(n, r),
                        overlayColor: n,
                        dimRatio: r
                    };
                l(c), i(s).forEach(function(e) {
                    a(e, v({}, c))
                })
            },
            updateSliderVerticalAlign: function(n) {
                var r = e("core/block-editor"),
                    o = r.updateBlockAttributes,
                    a = t.setAttributes,
                    l = t.clientId;
                a({
                    verticalAlign: n
                }), i(l).forEach(function(e) {
                    o(e, {
                        verticalAlign: n
                    })
                })
            }
        }
    }), E(function(e, t) {
        var n = t.clientId,
            r = e("core/editor").getBlocks(n);
        return {
            innerBlocks: r,
            innerSlides: _.filter(r, {
                name: "eedee/block-videoslide"
            })
        }
    }), W])(Y)
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return h
    });
    var r = (n(6), n(4)),
        i = n(35),
        o = wp.i18n.__,
        a = wp.editor.InspectorControls,
        l = wp.components,
        s = l.Button,
        c = l.PanelBody,
        u = l.RangeControl,
        d = l.ToggleControl,
        p = (l.SelectControl, l.ButtonGroup),
        f = (l.TabPanel, l.ColorIndicator),
        m = wp.element.Fragment,
        h = function(e, t) {
            var n = e.contentMode,
                l = e.fadeMode,
                h = e.dots,
                v = e.dotSize,
                g = e.dotColor,
                b = e.arrows,
                y = e.arrowSize,
                w = e.arrowColor,
                S = e.sliderHeight,
                k = e.spacingX,
                E = e.spacingY,
                O = e.spacingXMobile,
                C = e.spacingYMobile,
                x = e.spacingXTablet,
                T = e.spacingYTablet,
                _ = e.spacingXDesktop,
                M = e.spacingYDesktop,
                P = e.spacingXUnit,
                A = e.spacingYUnit,
                L = e.isFullScreen,
                j = (e.hasParallax, e.pauseOnFocus),
                I = e.pauseOnHover,
                D = e.pauseOnDotsHover,
                z = (e.parallaxDirection, e.parallaxAmount, e.mixBlendMode, e.autoplay),
                R = (e.contentOpacity, t.state.enableMixBlendPreview, wp.element.createElement("span", {
                    className: "editor-panel-color-settings__panel-title block-editor-panel-color-settings__panel-title"
                }, o("Arrow Settings"), wp.element.createElement(f, {
                    "aria-label": "(border color: #000)",
                    colorValue: w
                }))),
                N = wp.element.createElement("span", {
                    className: "editor-panel-color-settings__panel-title block-editor-panel-color-settings__panel-title"
                }, o("Dot Settings"), wp.element.createElement(f, {
                    "aria-label": "(border color: #000)",
                    colorValue: g
                })),
                H = (wp.element.createElement("div", {
                    className: "videoslider-tab-title"
                }, r.a.mobile, wp.element.createElement("span", null, "Mobile")), wp.element.createElement("div", {
                    className: "videoslider-tab-title"
                }, r.a.tablet, wp.element.createElement("span", null, "Tablet")), wp.element.createElement("div", {
                    className: "videoslider-tab-title"
                }, r.a.desktop, wp.element.createElement("span", null, "Desktop")), {
                    mobile: wp.element.createElement(m, null, wp.element.createElement(p, {
                        className: "unit-buttons",
                        "aria-label": o("Spacing Unit")
                    }, ["%", "px"].map(function(e) {
                        var n = A === e;
                        return wp.element.createElement(s, {
                            key: e,
                            isToggled: n,
                            "aria-pressed": n,
                            onClick: function() {
                                return t.setSpacingYUnit(e)
                            }
                        }, e)
                    })), wp.element.createElement(u, {
                        label: o("Spacing Top + Bottom"),
                        value: C,
                        onChange: function(e) {
                            return t.setSpacingY(e, "Mobile")
                        },
                        min: 0,
                        max: "px" === A ? 300 : 50,
                        step: 1
                    }), wp.element.createElement(p, {
                        className: "unit-buttons",
                        "aria-label": o("Spacing Unit")
                    }, ["%", "px"].map(function(e) {
                        var n = P === e;
                        return wp.element.createElement(s, {
                            key: e,
                            isToggled: n,
                            "aria-pressed": n,
                            onClick: function() {
                                return t.setSpacingXUnit(e)
                            }
                        }, e)
                    })), wp.element.createElement(u, {
                        label: o("Spacing Left + Right"),
                        value: O,
                        onChange: function(e) {
                            return t.setSpacingX(e, "Mobile")
                        },
                        min: 0,
                        max: "px" === P ? 300 : 50,
                        step: 1
                    })),
                    tablet: wp.element.createElement(m, null, wp.element.createElement(p, {
                        className: "unit-buttons",
                        "aria-label": o("Spacing Unit")
                    }, ["%", "px"].map(function(e) {
                        var n = A === e;
                        return wp.element.createElement(s, {
                            key: e,
                            isToggled: n,
                            "aria-pressed": n,
                            onClick: function() {
                                return t.setSpacingYUnit(e)
                            }
                        }, e)
                    })), wp.element.createElement(u, {
                        label: o("Spacing Top + Bottom"),
                        value: T,
                        onChange: function(e) {
                            return t.setSpacingY(e, "Tablet")
                        },
                        min: 0,
                        max: "px" === A ? 300 : 50,
                        step: 1
                    }), wp.element.createElement(p, {
                        className: "unit-buttons",
                        "aria-label": o("Spacing Unit")
                    }, ["%", "px"].map(function(e) {
                        var n = P === e;
                        return wp.element.createElement(s, {
                            key: e,
                            isToggled: n,
                            "aria-pressed": n,
                            onClick: function() {
                                return t.setSpacingXUnit(e)
                            }
                        }, e)
                    })), wp.element.createElement(u, {
                        label: o("Spacing Left + Right"),
                        value: x,
                        onChange: function(e) {
                            return t.setSpacingX(e, "Tablet")
                        },
                        min: 0,
                        max: "px" === P ? 300 : 50,
                        step: 1
                    })),
                    desktop: wp.element.createElement(m, null, wp.element.createElement(p, {
                        className: "unit-buttons",
                        "aria-label": o("Spacing Unit")
                    }, ["%", "px"].map(function(e) {
                        var n = A === e;
                        return wp.element.createElement(s, {
                            key: e,
                            isToggled: n,
                            "aria-pressed": n,
                            onClick: function() {
                                return t.setSpacingYUnit(e)
                            }
                        }, e)
                    })), wp.element.createElement(u, {
                        label: o("Spacing Top + Bottom"),
                        value: M,
                        onChange: function(e) {
                            return t.setSpacingY(e, "Desktop")
                        },
                        min: 0,
                        max: "px" === A ? 300 : 50,
                        step: 1
                    }), wp.element.createElement(p, {
                        className: "unit-buttons",
                        "aria-label": o("Spacing Unit")
                    }, ["%", "px"].map(function(e) {
                        var n = P === e;
                        return wp.element.createElement(s, {
                            key: e,
                            isToggled: n,
                            "aria-pressed": n,
                            onClick: function() {
                                return t.setSpacingXUnit(e)
                            }
                        }, e)
                    })), wp.element.createElement(u, {
                        label: o("Spacing Left + Right"),
                        value: _,
                        onChange: function(e) {
                            return t.setSpacingX(e, "Desktop")
                        },
                        min: 0,
                        max: "px" === P ? 300 : 50,
                        step: 1
                    })),
                    all: wp.element.createElement(m, null, wp.element.createElement(p, {
                        className: "unit-buttons",
                        "aria-label": o("Spacing Unit")
                    }, ["%", "px"].map(function(e) {
                        var n = A === e;
                        return wp.element.createElement(s, {
                            key: e,
                            isToggled: n,
                            "aria-pressed": n,
                            onClick: function() {
                                return t.setSpacingYUnit(e)
                            }
                        }, e)
                    })), wp.element.createElement(u, {
                        label: o("Spacing Top + Bottom"),
                        value: E,
                        onChange: function(e) {
                            return t.setSpacingY(e, "all")
                        },
                        min: 0,
                        max: "px" === A ? 300 : 50,
                        step: 1
                    }), wp.element.createElement(p, {
                        className: "unit-buttons",
                        "aria-label": o("Spacing Unit")
                    }, ["%", "px"].map(function(e) {
                        var n = P === e;
                        return wp.element.createElement(s, {
                            key: e,
                            isToggled: n,
                            "aria-pressed": n,
                            onClick: function() {
                                return t.setSpacingXUnit(e)
                            }
                        }, e)
                    })), wp.element.createElement(u, {
                        label: o("Spacing Left + Right"),
                        value: k,
                        onChange: function(e) {
                            return t.setSpacingX(e, "all")
                        },
                        min: 0,
                        max: "px" === P ? 300 : 50,
                        step: 1
                    }))
                });
            return wp.element.createElement(a, null, wp.element.createElement(c, {
                title: o("General Slider 1 Settings"),
                className: "videoslider-controls-general"
            }, wp.element.createElement(p, {
                "aria-label": o("Fade Mode"),
                className: "videoslider-toggle-fade-mode"
            }, wp.element.createElement(s, {
                isDefault: !0,
                isPrimary: l,
                "aria-pressed": l,
                onClick: function() {
                    t.setFadeMode(!0)
                }
            }, "Fade Animation"), wp.element.createElement(s, {
                isDefault: !0,
                isPrimary: !l,
                "aria-pressed": !l,
                onClick: function() {
                    t.setFadeMode(!1)
                }
            }, "Slide Animation")), wp.element.createElement(p, {
                "aria-label": o("Slide Mode"),
                className: "videoslider-toggle-content-mode"
            }, wp.element.createElement(s, {
                isDefault: !0,
                isPrimary: "fixed" === n,
                "aria-pressed": "fixed" === n,
                onClick: function() {
                    t.setContentMode("fixed")
                }
            }, "Fixed Content"), wp.element.createElement(s, {
                isDefault: !0,
                isPrimary: "change" === n,
                "aria-pressed": "change" === n,
                onClick: function() {
                    t.setContentMode("change")
                }
            }, "Changing Content"))), wp.element.createElement(c, {
                title: o("Advanced Slider Settings"),
                className: "videoslider-controls-advanced"
            }, !L && wp.element.createElement(i.a, {
                label: o("Slider Height"),
                onChange: t.setSliderHeight,
                btnUnits: ["vh", "px"],
                btnLabels: ["%", "px"],
                value: S,
                mins: [20, 100],
                maxs: [100, 1500],
                step: 1,
                transformUnits: !0
            }), wp.element.createElement(d, {
                label: o("Autoplay"),
                checked: z,
                onChange: t.setAutoplay
            }), wp.element.createElement(d, {
                label: o("Fullscreen Background Slider"),
                checked: L,
                help: L ? o("Full Screen Background Slider preview is not available in the editor, check the live site to see it in action.") : null,
                onChange: t.setFullscreen
            })), z && wp.element.createElement(c, {
                title: o("Autoplay Settings"),
                className: "videoslider-controls-autoplay",
                initialOpen: !1
            }, wp.element.createElement(d, {
                label: o("Pause on Focus"),
                checked: j,
                onChange: t.setPauseOnFocus
            }), wp.element.createElement(d, {
                label: o("Pause on Hover"),
                checked: I,
                onChange: t.setPauseOnHover
            }), wp.element.createElement(d, {
                label: o("Pause on Dots Hover"),
                checked: D,
                onChange: t.setPauseOnDotsHover
            })), b && wp.element.createElement(c, {
                title: R,
                className: "videoslider-controls-arrows",
                initialOpen: !1
            }, wp.element.createElement(u, {
                label: o("Arrow Size (px)"),
                value: y,
                onChange: t.setArrowSize,
                min: 15,
                max: 100,
                step: 1
            })), h && wp.element.createElement(c, {
                title: N,
                className: "videoslider-controls-dots",
                initialOpen: !1
            }, wp.element.createElement(u, {
                label: o("Dot Size (px)"),
                value: v,
                onChange: t.setDotSize,
                min: 15,
                max: 60,
                step: 1
            })), !1, wp.element.createElement(c, {
                title: o("Spacing"),
                initialOpen: !1
            }, H.all), !1)
        }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }

    function a(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var l = n(2),
        s = (n.n(l), n(0)),
        c = n.n(s),
        u = n(46),
        d = n(11),
        p = n(10),
        f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        m = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        !r && l.return && l.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        h = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        v = wp.data.withSelect,
        g = wp.element,
        b = g.Component,
        y = g.RawHTML,
        w = g.Fragment,
        S = wp.compose.compose,
        k = wp.components.Spinner,
        E = wp.blob,
        O = E.revokeBlobURL,
        C = E.getBlobByURL,
        x = E.isBlobURL,
        T = wp.blocks,
        _ = T.serialize,
        M = T.withBlockContentContext,
        P = wp.editor,
        A = P.InnerBlocks,
        L = P.MediaPlaceholder,
        j = P.mediaUpload,
        I = P.BlockControls,
        D = ["image", "video"],
        z = function(e, t) {
            return !e && x(t)
        },
        R = function(e, t) {
            return t && !e && !x(t)
        },
        N = function(e) {
            var t = Object(l.pick)(e, ["alt", "id", "link", "caption"]);
            return {
                mediaAlt: t.alt,
                mediaId: t.id,
                mediaLink: t.link,
                mediaUrl: Object(l.get)(e, ["sizes", "large", "url"]) || Object(l.get)(e, ["media_details", "sizes", "large", "source_url"]) || e.url
            }
        },
        H = function(e) {
            function t() {
                i(this, t);
                var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                return e.onSelectMedia = e.onSelectMedia.bind(e), e.setAttributes = e.setAttributes.bind(e), e.setDimRatio = e.setDimRatio.bind(e), e.setOverlayColor = e.setOverlayColor.bind(e), e.setSingleDuration = e.setSingleDuration.bind(e), e.onVerticalAlignChange = e.onVerticalAlignChange.bind(e), e
            }
            return a(t, e), h(t, [{
                key: "setAttributes",
                value: function(e) {
                    this.props.setAttributes(e)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.attributes,
                        r = t.setAttributes,
                        i = t.noticeOperations,
                        o = n.mediaId,
                        a = n.mediaUrl,
                        l = void 0 === a ? "" : a;
                    if (z(o, l)) {
                        var s = C(l);
                        s && j({
                            filesList: [s],
                            onFileChange: function(e) {
                                var t = m(e, 1),
                                    n = t[0];
                                r(N(n))
                            },
                            allowedTypes: D,
                            onError: function(t) {
                                i.createErrorNotice(t), e.setState({
                                    isEditing: !0
                                })
                            }
                        })
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = e.attributes,
                        n = t.mediaId,
                        r = t.mediaUrl,
                        i = void 0 === r ? "" : r,
                        o = this.props.attributes,
                        a = o.mediaId,
                        l = o.mediaUrl,
                        s = void 0 === l ? "" : l;
                    z(n, i) && !z(a, s) && O(s)
                }
            }, {
                key: "onVerticalAlignChange",
                value: function(e) {
                    this.setAttributes({
                        verticalAlign: e
                    })
                }
            }, {
                key: "onSelectMedia",
                value: function(e) {
                    var t = this.props.setAttributes;
                    if (!e || !e.url) return void this.props.setAttributes({
                        url: void 0,
                        alt: void 0,
                        id: void 0
                    });
                    var n = void 0;
                    n = e.media_type ? "image" === e.media_type ? "image" : "video" : e.type, t(f({}, N(e), {
                        mediaType: n
                    }))
                }
            }, {
                key: "setOverlayColor",
                value: function(e) {
                    this.setAttributes({
                        overlayColor: e
                    }), this.setSlideBackground(e, this.props.attributes.dimRatio)
                }
            }, {
                key: "setDimRatio",
                value: function(e) {
                    this.setAttributes({
                        dimRatio: e
                    }), this.setSlideBackground(this.props.attributes.overlayColor, e)
                }
            }, {
                key: "setSingleDuration",
                value: function(e) {
                    this.setAttributes({
                        linkUrl: e
                    })
                }
            }, {
                key: "setSlideBackground",
                value: function(e, t) {
                    var n = Object(d.a)(e, t);
                    this.setAttributes({
                        rgbaBackground: n
                    })
                }
            }, {
                key: "renderPlaceholder",
                value: function(e, t) {
                    var n = R(e, t),
                        r = n ? t : void 0,
                        i = this.props.className;
                    return wp.element.createElement(L, {
                        className: i,
                        onSelect: this.onSelectImage,
                        onSelectURL: this.onSelectURL,
                        onError: this.onUploadError,
                        accept: "image/*",
                        allowedTypes: D,
                        value: {
                            id: e,
                            src: r
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.attributes,
                        i = t.innerContent,
                        o = n.mediaUrl,
                        a = n.mediaAlt,
                        s = n.mediaType,
                        d = n.isEditing,
                        f = n.mediaId,
                        m = n.rgbaBackground,
                        h = n.verticalAlign,
                        v = {
                            image: function() {
                                return wp.element.createElement("img", {
                                    src: o,
                                    alt: a,
                                    className: f && "image" === s ? "wp-image-" + f : null
                                })
                            },
                            video: function() {
                                return wp.element.createElement("video", {
                                    autoPlay: !0,
                                    muted: !0,
                                    loop: !0,
                                    src: o
                                })
                            }
                        },
                        g = {
                            background: m
                        },
                        b = c()("wp-block-eedee-block-videoslide", r({}, "vertical-align-" + h, h));
                    return wp.element.createElement(w, null, wp.element.createElement(I, null, wp.element.createElement(p.a, {
                        onChange: this.onVerticalAlignChange,
                        value: h
                    })), Object(u.a)(this), wp.element.createElement("div", {
                        className: b
                    }, wp.element.createElement("div", {
                        className: "slide-bg"
                    }, (v[s] || l.noop)(), x(o) && wp.element.createElement(k, null)), wp.element.createElement("div", {
                        className: "slide-overlay",
                        style: g
                    }), wp.element.createElement("div", {
                        className: "slide-content"
                    }, function() {
                        return o ? d ? wp.element.createElement(A, null) : wp.element.createElement(y, null, _(i)) : e.renderPlaceholder(f, o)
                    }())))
                }
            }]), t
        }(b);
    t.a = S(v(function(e, t) {
        var n = t.clientId,
            r = t.attributes,
            i = r.mediaId,
            o = e("core/block-editor"),
            a = o.getBlockOrder,
            l = o.getBlock,
            s = o.getSelectedBlockClientId,
            c = o.getBlockHierarchyRootClientId,
            u = e("core"),
            d = u.getMedia,
            p = s();
        return {
            image: i ? d(i) : null,
            hasChildBlocks: a(n).length > 0,
            innerBlocksCount: a(n).length,
            isStackSelected: function e(t) {
                if (t === p) return !0;
                var n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, l = a(t)[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) {
                        return e(o.value)
                    }
                } catch (e) {
                    r = !0, i = e
                } finally {
                    try {
                        !n && l.return && l.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return !1
            }(n),
            innerContent: l(n) ? l(n).innerBlocks : [],
            rootBlock: l(c(n))
        }
    }), M)(H)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return s
    });
    var r = wp.i18n.__,
        i = wp.editor.InspectorControls,
        o = wp.components,
        a = o.PanelBody,
        l = o.TextControl,
        s = function(e) {
            var t = e.props.attributes.linkUrl;
            return wp.element.createElement(i, null, wp.element.createElement(a, {
                title: r("Slide Settings"),
                className: "videoslider-controls-advanced"
            }, wp.element.createElement(l, {
                label: r("Duration <small>(Second)</small>"),
                value: t || "",
                onChange: e.setSingleDuration,
                help: r("Set an url that opens, when the user clicks the slide.")
            })))
        }
}]);