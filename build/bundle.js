var app = function () {
    "use strict";
    function t() { } function e(t) { return t() } function r() { return Object.create(null) } function n(t) { t.forEach(e) } function a(t) { return "function" == typeof t } function i(t, e) { return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t } let o, s;
    function l(t, e) { return o || (o = document.createElement("a")), o.href = e, t === o.href } function u(t, e) { t.appendChild(e) } function c(t, e, r) { t.insertBefore(e, r || null) } function f(t) { t.parentNode && t.parentNode.removeChild(t) } function d(t) { return document.createElement(t) } function p(t) { return document.createElementNS("http://www.w3.org/2000/svg", t) } function h(t) { return document.createTextNode(t) } function y() { return h(" ") } function g(t, e, r, n) { return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n) } function v(t, e, r) { null == r ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r) } function m(t) { return "" === t ? null : +t } function b(t, e) { e = "" + e, t.wholeText !== e && (t.data = e) } function $(t, e) { t.value = null == e ? "" : e } function I(t, e, r, n) { null === r ? t.style.removeProperty(e) : t.style.setProperty(e, r, n ? "important" : "") } function S(t) { s = t } function w() {
        if (!s) throw new Error("Function called outside component initialization");
        return s
    } function k(t) { w().$$.on_mount.push(t) } function x(t) { w().$$.after_update.push(t) } const C = [], _ = [], M = [], O = [], P = Promise.resolve();
    let j = !1;
    function A(t) { M.push(t) } function D(t) { O.push(t) } const T = new Set;
    let E = 0;
    function F() {
        if (0 !== E) return;
        const t = s;
        do {
            try {
                for (;
                    E < C.length;
                ) {
                    const t = C[E];
                    E++, S(t), N(t.$$)
                }
            } catch (t) { throw C.length = 0, E = 0, t } for (S(null), C.length = 0, E = 0;
                _.length;
            )_.pop()();
            for (let t = 0;
                t < M.length;
                t += 1) {
                    const e = M[t];
                T.has(e) || (T.add(e), e())
            } M.length = 0
        } while (C.length);
        for (;
            O.length;
        )O.pop()();
        j = !1, T.clear(), S(t)
    } function N(t) {
        if (null !== t.fragment) {
            t.update(), n(t.before_update);
            const e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(A)
        }
    } const Y = new Set;
    let G;
    function R(t, e) { t && t.i && (Y.delete(t), t.i(e)) } function X(t, e, r, n) {
        if (t && t.o) {
            if (Y.has(t)) return;
            Y.add(t), G.c.push((() => { Y.delete(t), n && (r && t.d(1), n()) })), t.o(e)
        } else n && n()
    } function L(t, e, r) {
        const n = t.$$.props[e];
        void 0 !== n && (t.$$.bound[n] = r, r(t.$$.ctx[n]))
    } function q(t) { t && t.c() } function U(t, r, i, o) {
        const { fragment: s, after_update: l } = t.$$;
        s && s.m(r, i), o || A((() => {
            const r = t.$$.on_mount.map(e).filter(a);
            t.$$.on_destroy ? t.$$.on_destroy.push(...r) : n(r), t.$$.on_mount = []
        })), l.forEach(A)
    } function W(t, e) {
        const r = t.$$;
        null !== r.fragment && (n(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = [])
    } function H(t, e) { -1 === t.$$.dirty[0] && (C.push(t), j || (j = !0, P.then(F)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31 } function z(e, a, i, o, l, u, c, d = [-1]) {
        const p = s;
        S(e);
        const h = e.$$ = { fragment: null, ctx: [], props: u, update: t, not_equal: l, bound: r(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(a.context || (p ? p.$$.context : [])), callbacks: r(), dirty: d, skip_bound: !1, root: a.target || p.$$.root };
        c && c(h.root);
        let y = !1;
        if (h.ctx = i ? i(e, a.props || {}, ((t, r, ...n) => {
            const a = n.length ? n[0] : r;
            return h.ctx && l(h.ctx[t], h.ctx[t] = a) && (!h.skip_bound && h.bound[t] && h.bound[t](a), y && H(e, t)), r
        })) : [], h.update(), y = !0, n(h.before_update), h.fragment = !!o && o(h.ctx), a.target) {
            if (a.hydrate) {
                const t = function (t) { return Array.from(t.childNodes) }(a.target);
                h.fragment && h.fragment.l(t), t.forEach(f)
            } else h.fragment && h.fragment.c();
            a.intro && R(e.$$.fragment), U(e, a.target, a.anchor, a.customElement), F()
        } S(p)
    } class B {
        $destroy() { W(this, 1), this.$destroy = t } $on(e, r) {
            if (!a(r)) return t;
            const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return n.push(r), () => {
                const t = n.indexOf(r);
                -1 !== t && n.splice(t, 1)
            }
        } $set(t) {
            var e;
            this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
        }
    } function V(t) { return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t } var J = {};
    window, { get exports() { return J }, set exports(t) { J = t } }.exports = function (t) {
        var e = {};
        function r(n) {
            if (e[n]) return e[n].exports;
            var a = e[n] = { i: n, l: !1, exports: {} };
            return t[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
        } return r.m = t, r.c = e, r.d = function (t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, r.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function (t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var a in t) r.d(n, a, function (e) { return t[e] }.bind(null, a));
            return n
        }, r.n = function (t) {
            var e = t && t.__esModule ? function () { return t.default } : function () { return t };
            return r.d(e, "a", e), e
        }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "/", r(r.s = 10)
    }([function (t, e, r) {
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, a = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var r = [], n = !0, a = !1, i = void 0;
                try {
                    for (var o, s = t[Symbol.iterator]();
                        !(n = (o = s.next()).done) && (r.push(o.value), !e || r.length !== e);
                        n = !0);
                } catch (t) { a = !0, i = t } finally { try { !n && s.return && s.return() } finally { if (a) throw i } } return r
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
        t.exports = new function () {
            var t = this;
            this.noop = function () { }, this.get = function (e, r, n) {
                var a = Array.isArray(r) ? r : r.split(".");
                if (!a.length) return e;
                var i = a.shift();
                return e && e.hasOwnProperty(i) ? t.get(e[i], a, n) : n
            }, this.has = function (e, r) {
                var n = Array.isArray(r) ? r : r.split(".");
                if (!n.length) return !0;
                var a = n.shift();
                return !(!e || !e.hasOwnProperty(a)) && t.has(e[a], n)
            }, this.set = function (e, r, n) {
                var a = Array.isArray(r) ? r : r.split("."), i = a.shift();
                if (a.length) {
                    if (!e.hasOwnProperty(i)) {
                        var o = a[0];
                        e[i] = t.isNumeric(o) ? [] : {}
                    } t.set(e[i], a, n)
                } else e[i] = n
            }, this.clone = function (t) { return JSON.parse(JSON.stringify(t)) }, this.includes = function (t, e) {
                if (Array.isArray(t)) return t.indexOf(e) > -1;
                var r = !0, n = !1, i = void 0;
                try {
                    for (var o, s = Object.entries(t)[Symbol.iterator]();
                        !(r = (o = s.next()).done);
                        r = !0) {
                            var l = a(o.value, 2);
                        if (l[0], e === l[1]) return !0
                    }
                } catch (t) { n = !0, i = t } finally { try { !r && s.return && s.return() } finally { if (n) throw i } } return !1
            }, this.isObject = function (t) { return null !== t && "object" === (void 0 === t ? "undefined" : n(t)) && !Array.isArray(t) }, this.isNumber = function (t) { return "number" == typeof t && !isNaN(t) }, this.isNumeric = function (t) { return !isNaN(parseInt(t)) };
            var e = function (e) {
                var r = e, n = Array.isArray(e) && 1 === e.length || "string" == typeof e, a = Array.isArray(e) && e.length > 1;
                if (n) {
                    var i = Array.isArray(e) ? e[0] : e;
                    r = function (e, r) { return t.has(e, i) }
                } else a && (r = function (r, n) { return t.get(r, e[0]) === e[1] });
                return r
            };
            this.findIndex = function (t, r, n) {
                n = n || 0;
                var a = e(r);
                n < 0 && (n = t.length + n);
                for (var i = n;
                    i < t.length;
                    i++)if (a(t[i], i)) return i;
                return -1
            }, this.findLastIndex = function (r, n, a) {
                a = t.isNumber(a) ? a : r.length - 1;
                var i = e(n);
                a < 0 && (a = r.length + a);
                for (var o = a;
                    o > -1;
                    o--)if (i(r[o], o)) return o;
                return -1
            }, this.find = function (e, r, n) { return e[t.findIndex(e, r, n)] }, this.findLast = function (e, r, n) { return e[t.findLastIndex(e, r, n)] }, this.findPropertyIndex = function (e, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return t.findIndex(e, (function (e) { return t.has(e, r) }), n)
            }, this.findLastPropertyIndex = function (e, r, n) { return n = n || e.length - 1, t.findLastIndex(e, (function (e) { return t.has(e, r) }), n) }, this.pull = function (t, e) {
                var r = void 0;
                if (t) for (;
                    t.indexOf(e) > -1;
                )(r = t.indexOf(e)) > -1 && t.splice(r, 1)
            }, this.lowerFirst = function (t) { return t ? t.charAt(0).toLowerCase() + t.substring(1) : t }, this.forEach = function (t, e) {
                for (var r = 0;
                    r < t.length;
                    r++)e(t[r], r)
            }, this.map = function (e, r) {
                for (var n = [], a = 0;
                    a < e.length;
                    a++) {
                        var i = e[a];
                    "string" == typeof r ? n.push(t.get(i, r)) : n.push(r(i, a))
                } return n
            }, this.keys = function (t) { return t ? Object.keys(t) : [] }, this.sortBy = function (t, e) {
                return Array.isArray(t) ? t.sort((function (t, r) {
                    var n = t[e], a = r[e];
                    return void 0 === n ? 1 : void 0 === a || n < a ? -1 : n > a ? 1 : 0
                })) : t
            }
        }
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, a = s(r(2)), i = s(r(3)), o = r(7);
        function s(t) { return t && t.__esModule ? t : { default: t } } var l = { r: 0, g: 0, b: 0, a: 255 }, u = new function () {
            var t = this;
            this.name = "rgb", this.className = "Rgb", this.parent = null, this.test = function (t) { return null !== t && "object" === (void 0 === t ? "undefined" : n(t)) && t.hasOwnProperty("r") && t.hasOwnProperty("g") && t.hasOwnProperty("b") && t.r >= 0 && t.r <= 255 && t.g >= 0 && t.g <= 255 && t.b >= 0 && t.b <= 255 && (!t.hasOwnProperty("a") || t.a >= 0 && t.a <= 255) }, this.gradient = function (e) { return a.default.createGradient(e, { mixColors: t.mix, defaultColor: l }) }, this.gradientData = function (t, e) { return e = e || l, new i.default(t, e) }, this.draw = function (e, r) {
                var n = (0, o.getCanvasGradient)(t, r), a = (0, o.getCanvasTarget)(e);
                if (a && n) {
                    for (var i = a.width, s = a.height, l = a.getContext("2d"), u = l.createImageData(i, s), c = u.data.buffer, f = new Uint32Array(c), d = new Uint8ClampedArray(c), p = 0;
                        p < i;
                        p++)for (var h = 0;
                            h < s;
                            h++)f[h * i + p] = t.to.intabgr(n(p, h));
                    u.data.set(d), l.putImageData(u, 0, 0)
                }
            }, this.hueColors = function () { return [{ a: 255, b: 0, g: 0, r: 255 }, { a: 255, b: 0, g: 255, r: 255 }, { a: 255, b: 0, g: 255, r: 0 }, { a: 255, b: 255, g: 255, r: 0 }, { a: 255, b: 255, g: 0, r: 0 }, { a: 255, b: 255, g: 0, r: 255 }, { a: 255, b: 0, g: 0, r: 255 }] }, this.hue = function (e) {
                var r = a.default.partialGradient(u.hueColors(), u.to.hsv(e).h);
                return t.mix(r.item1, r.item2, r.position)
            }, this.mix = function (t, e, r) { return { r: t.r - r * (t.r - e.r), g: t.g - r * (t.g - e.g), b: t.b - r * (t.b - e.b), a: t.a - r * (t.a - e.a) } }, this.to = {
                int: function (t) { return t.r << 16 | t.g << 8 | t.b }, hex: function (t) { return "#" + (1 << 24 | t.r << 16 | t.g << 8 | t.b).toString(16).slice(1) }, cssrgb: function (t) { return "rgb(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + ")" }, cssrgba: function (t) { return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a / 255 + ")" }, uintabgr: function (t) { return (t.a << 24 | t.b << 16 | t.g << 8 | t.r) >>> 0 }, uintabgrOpaque: function (t) { return (4278190080 | t.b << 16 | t.g << 8 | t.r) >>> 0 }, uintrgba: function (t) { return (t.r << 24 | t.g << 16 | t.b << 8 | t.a) >>> 0 }, intabgr: function (t) { return t.a << 24 | t.b << 16 | t.g << 8 | t.r }, intabgrOpaque: function (t) { return 4278190080 | t.b << 16 | t.g << 8 | t.r }, intrgba: function (t) { return t.r << 24 | t.g << 16 | t.b << 8 | t.a }, hsl: function (t) {
                    var e = t.r, r = t.g, n = t.b, a = t.a;
                    e /= 255, r /= 255, n /= 255, a = isNaN(parseInt(a)) ? 1 : a / 255;
                    var i = Math.max(e, r, n), o = Math.min(e, r, n), s = i - o, l = (i + o) / 2, u = 0, c = 0;
                    return s > 0 && (u = s / (1 - Math.abs(2 * l - 1)), n === i ? c = (e - r) / s + 4 : r === i ? c = (n - e) / s + 2 : e === i && (c = (r - n) / s + (r < n ? 6 : 0)) < 0 && (c += 360), c /= 6), { h: c, s: u, l: l, a: a }
                }, hsv: function (t) {
                    var e = t.r, r = t.g, n = t.b, a = t.a;
                    e /= 255, r /= 255, n /= 255, a = isNaN(parseInt(a)) ? 1 : a / 255;
                    var i = Math.max(e, r, n), o = i - Math.min(e, r, n), s = 0, l = 0;
                    return o > 0 && (s = o / i, n === i ? l = (e - r) / o + 4 : r === i ? l = (n - e) / o + 2 : e === i && (l = (r - n) / o + (r < n ? 6 : 0)) < 0 && (l += 360), l /= 6), { h: l, s: s, v: i, a: a }
                }
            }
        };
        e.default = u, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = o(r(0)), a = o(r(9)), i = o(r(3));
        function o(t) { return t && t.__esModule ? t : { default: t } } e.default = new function () {
            var t = this, e = 2 * Math.PI;
            this.createGradient = function (e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e = e || {};
                var o = n.default.includes(["linear", "circular"], e.type) ? e.type : "linear", s = n.default.get(e, "verify", !1), l = (n.default.get(e, "validate", !0), e.onValidationComplete || n.default.noop), u = null, c = null;
                if (e.colors instanceof i.default) c = e.colors;
                else {
                    var f = e.defaultColor || r.defaultColor;
                    c = new i.default(e.colors, f)
                } s && c.verify();
                var d = c.matrix ? c.object2d : c.flat1d;
                l(d);
                var p = 0, h = 0;
                "circular" === o ? u = c.matrix ? t.circularMatrixGradient : t.circularGradient : (p = e.centerX || 0, h = e.centerY || 0, u = c.matrix ? t.linearMatrixGradient : t.linearGradient);
                var y = e.width || 100, g = e.height || 100, v = e.scaleX || e.scale || 1, m = e.scaleY || e.scale || 1, b = y * v, $ = g * m, I = e.translateX || 0, S = e.translateY || 0;
                "circular" === o && (b = y * (v /= 2), $ = g * (m /= 2), I *= 2, S *= 2), e.centralize ? ("linear" === o && (p = .5, h = .5), I = .5 / v + I - p, S = .5 / m + S - h) : (I -= p, S -= h);
                var w = { colors: d, centerX: p || 0, centerY: h || 0, translateX: I, translateY: S, rotation: e.rotation || 0, repeatX: e.repeatX || a.default.repeat, repeatY: e.repeatY || a.default.repeat, mixColors: r.mixColors };
                return function (t, e) { return u(t / b, e / $, w) }
            }, this.partialGradient = function (t, e) {
                var r = t.length - 1, n = e * r | 0, a = 1 / r * 1e3, i = 1e3 * e % a / a, o = t[n];
                return { item1: o, item2: void 0 !== t[n + 1] ? t[n + 1] : o, position: i }
            }, this.partialGradientWithStops = function (t, e, r) {
                for (var n = 0;
                    t[n][r] < e;
                )n++;
                var a = void 0 !== t[n - 1] ? t[n - 1] : t[n], i = t[n], o = i[r] - a[r];
                return { item1: a, item2: i, position: (e - a[r]) / o || 0 }
            }, this.linearGradient = function (r, n, a) {
                var i = a.rotation * e, o = Math.cos(i), s = Math.sin(i), l = r - a.centerX - a.translateX, u = n - a.centerY - a.translateY;
                r = a.repeatX(a.centerX + l * o - u * s);
                var c = t.partialGradientWithStops(a.colors, r, "x");
                return a.mixColors(c.item1, c.item2, c.position)
            }, this.linearMatrixGradient = function (r, n, a) {
                var i = a.rotation * e, o = Math.cos(i), s = Math.sin(i), l = r - a.centerX - a.translateX, u = n - a.centerY - a.translateY;
                r = a.repeatX(a.centerX + l * o - u * s), n = a.repeatY(a.centerY + l * s + u * o);
                var c = t.partialGradientWithStops(a.colors, n, "y"), f = t.partialGradientWithStops(c.item1.colors, r, "x"), d = t.partialGradientWithStops(c.item2.colors, r, "x"), p = a.mixColors(f.item1, f.item2, f.position), h = a.mixColors(d.item1, d.item2, d.position);
                return a.mixColors(p, h, c.position)
            }, this.circularGradient = function (r, n, a) {
                var i = a.translateX, o = a.translateY, s = a.repeatX((Math.atan2(o - n, i - r) + Math.PI) / e - a.rotation), l = t.partialGradientWithStops(a.colors, s, "x");
                return a.mixColors(l.item1, l.item2, l.position)
            }, this.circularMatrixGradient = function (r, n, a) {
                var i = a.translateX - r, o = a.translateY - n, s = a.repeatY(Math.sqrt(i * i + o * o)), l = a.repeatX((Math.atan2(o, i) + Math.PI) / e - a.rotation), u = t.partialGradientWithStops(a.colors, s, "y"), c = t.partialGradientWithStops(u.item1.colors, l, "x"), f = t.partialGradientWithStops(u.item2.colors, l, "x"), d = a.mixColors(c.item1, c.item2, c.position), p = a.mixColors(f.item1, f.item2, f.position);
                return a.mixColors(d, p, u.position)
            }
        }, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function () {
            function t(t, e) {
                for (var r = 0;
                    r < e.length;
                    r++) {
                        var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            } return function (e, r, n) { return r && t(e.prototype, r), n && t(e, n), e }
        }(), a = u(r(0)), i = u(r(12)), o = u(r(13)), s = u(r(14)), l = u(r(15));
        function u(t) { return t && t.__esModule ? t : { default: t } } var c = [i.default, o.default, s.default, l.default], f = function () {
            function t(e, r) {
                if (function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), !Array.isArray(e) || !e.length) throw new Error("GradientData: Argument should be and array with at least one item.");
                if (this.dataType = this._getDataTypeFromFirstSample(e), !this.dataType) throw new Error("GradientData: One sample was tested and it did not match any supported data structures.");
                this.data = e, this.defaultColor = r
            } return n(t, [{ key: "typeName", get: function () { return this.dataType.name } }, { key: "matrix", get: function () { return this.dataType.matrix } }, { key: "flat1d", get: function () { return a.default.has(this.dataType, "toFlat1d") ? this.dataType.toFlat1d(this.data, this.defaultColor) : new t(this.dataType.toObject2d(this.data, this.defaultColor), this.defaultColor).flat1d } }, { key: "flat2d", get: function () { return a.default.has(this.dataType, "toFlat2d") ? this.dataType.toFlat2d(this.data, this.defaultColor) : new t(this.dataType.toObject2d(this.data, this.defaultColor), this.defaultColor).flat2d } }, { key: "array2d", get: function () { return a.default.has(this.dataType, "toArray2d") ? this.dataType.toArray2d(this.data, this.defaultColor) : new t(this.dataType.toObject2d(this.data, this.defaultColor), this.defaultColor).array2d } }, { key: "object2d", get: function () { return this.dataType.toObject2d(this.data, this.defaultColor) } }], [{ key: "types", get: function () { return c } }]), n(t, [{ key: "verify", value: function () { return this.dataType.verify(this.data) } }, { key: "_getDataTypeFromFirstSample", value: function (t) { return a.default.find(c, (function (e) { return e.testStructure(t) })) } }]), t
        }();
        e.default = f, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n, a = function () {
            function t(t, e) {
                for (var r = 0;
                    r < e.length;
                    r++) {
                        var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            } return function (e, r, n) { return r && t(e.prototype, r), n && t(e, n), e }
        }(), i = (n = r(0)) && n.__esModule ? n : { default: n }, o = function () {
            function t() { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t) } return a(t, null, [{
                key: "addDefaultColorsForMatrix", value: function (t, e) {
                    var r = i.default.keys(e);
                    i.default.forEach(t, (function (t) { i.default.forEach(t.colors, (function (t) { i.default.forEach(r, (function (r) { i.default.has(t, r) || (t[r] = e[r]) })) })) }))
                }
            }, {
                key: "addDefaultColors", value: function (t, e) {
                    var r = i.default.keys(e);
                    i.default.forEach(t, (function (t) { i.default.forEach(r, (function (r) { i.default.has(t, r) || (t[r] = e[r]) })) }))
                }
            }, {
                key: "verify", value: function (t, e) {
                    if (!this._verifyExpectedDataStructureInAllSamples(t, e)) throw new Error("Color data structure is not consistent / valid");
                    return !0
                }
            }, {
                key: "_verifyExpectedDataStructureInAllSamples", value: function (t, e) {
                    for (var r = 0;
                        r < t.length;
                        r++) {
                            var n = t[r];
                        if (!e.testStructureSingleSample(n)) return !1
                    } return !0
                }
            }, {
                key: "addMissingStopsXY", value: function (t) {
                    var e = this;
                    return t = this.addMissingStops(t, "y"), i.default.forEach(t, (function (t) { t.colors = e.addMissingStops(t.colors, "x") })), t
                }
            }, {
                key: "addMissingStops", value: function (t, e) {
                    1 === (t = i.default.clone(t)).length && (delete t[0][e], t.push(i.default.clone(t[0])));
                    var r = i.default.findPropertyIndex(t, e), n = t[0], a = void 0;
                    r > 0 || -1 === r ? n[e] = 0 : 0 !== n[e] && ((a = i.default.clone(n))[e] = 0, t.unshift(a));
                    var o = i.default.findLastPropertyIndex(t, e), s = t[t.length - 1];
                    o < t.length - 1 ? s[e] = 1 : 1 !== s[e] && ((a = i.default.clone(s))[e] = 1, t.push(a));
                    for (var l = 0, u = 0;
                        u > -1;
                    )l = i.default.findPropertyIndex(t, e, l), (u = i.default.findPropertyIndex(t, e, l + 1)) > -1 && this._addStopsBetweenIndexes(t, e, l, u), l = u;
                    return t
                }
            }, {
                key: "_addStopsBetweenIndexes", value: function (t, e, r, n) {
                    for (var a = t[r][e], i = n - r, o = (t[n][e] - a) / i, s = 1;
                        s < i;
                        s++)t[r + s][e] = a + s * o
                }
            }]), t
        }();
        e.default = o, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n, a = function () {
            function t(t, e) {
                for (var r = 0;
                    r < e.length;
                    r++) {
                        var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            } return function (e, r, n) { return r && t(e.prototype, r), n && t(e, n), e }
        }(), i = (n = r(0)) && n.__esModule ? n : { default: n }, o = function () {
            function t() { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t) } return a(t, null, [{
                key: "convert", value: function (t) {
                    for (var e = this, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1;
                        a < r;
                        a++)n[a - 1] = arguments[a];
                    return Array.isArray(t) ? t.map((function (t) { return e.convert.apply(e, [t].concat(n)) })) : n.reduce((function (t, e) { return e(t) }), t)
                }
            }, {
                key: "convertAny", value: function (t, e, r) {
                    var n = this.getColorType(t, r);
                    if (!n || n === e) return t;
                    if ("function" == typeof n.to[e.name]) return n.to[e.name](t);
                    var a = this._getConversionPathThroughParentType(n, e, r);
                    return this.convert.apply(this, [t].concat(function (t) {
                        if (Array.isArray(t)) {
                            for (var e = 0, r = Array(t.length);
                                e < t.length;
                                e++)r[e] = t[e];
                            return r
                        } return Array.from(t)
                    }(a)))
                }
            }, { key: "getColorType", value: function (t, e) { return i.default.find(e, (function (e) { return e.test(t) })) } }, {
                key: "_getConversionPathThroughParentType", value: function (t, e, r) {
                    var n = this._getPathToRoot(t), a = this._getPathToRoot(e).reverse(), o = n[n.length - 1], s = a[0], l = o === s, u = "function" == typeof o.to[s.name];
                    if (l) a.shift();
                    else if (!u) throw new Error("Path should be implemented from " + o.name + " to " + s.name);
                    var c = n.concat(a), f = [], d = void 0;
                    return i.default.forEach(c, (function (t, e) { (d = c[e + 1]) && f.push(t.to[d.name]) })), f
                }
            }, {
                key: "_getPathToRoot", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return e.push(t), t.parent ? this._getPathToRoot(t.parent, e) : e
                }
            }]), t
        }();
        e.default = o, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.TYPES_ALL = e.TYPES = void 0;
        var n = h(r(1)), a = h(r(17)), i = h(r(18)), o = h(r(19)), s = h(r(20)), l = h(r(8)), u = h(r(21)), c = h(r(22)), f = h(r(23)), d = h(r(24)), p = h(r(25));
        function h(t) { return t && t.__esModule ? t : { default: t } } var y = [n.default, a.default, i.default, l.default, f.default, s.default, o.default, c.default, u.default], g = y.concat([d.default, p.default]);
        e.TYPES = y, e.TYPES_ALL = g
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 }), e.getCanvasTarget = e.getCanvasGradient = void 0;
        var n, a = (n = r(0)) && n.__esModule ? n : { default: n };
        e.getCanvasGradient = function (t, e) { return a.default.isObject(e) ? t.gradient(e) : "function" == typeof e ? e : null }, e.getCanvasTarget = function t(e) { return e instanceof HTMLCanvasElement ? e : "string" == typeof e ? t(document.querySelector(e)) : null }
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, a = l(r(1)), i = l(r(2)), o = l(r(3)), s = r(7);
        function l(t) { return t && t.__esModule ? t : { default: t } } var u = { h: 0, s: 0, l: 0, a: 1 }, c = new function () {
            var t = this;
            this.name = "hsl", this.className = "Hsl", this.parent = null, this.test = function (t) { return null !== t && "object" === (void 0 === t ? "undefined" : n(t)) && t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("l") && t.h >= 0 && t.h <= 1 && t.s >= 0 && t.s <= 1 && t.l >= 0 && t.l <= 1 && (!t.hasOwnProperty("a") || t.a >= 0 && t.a <= 1) }, this.gradient = function (t) { return i.default.createGradient(t, { mixColors: f, defaultColor: u }) }, this.gradientData = function (t, e) { return e = e || u, new o.default(t, e) }, this.draw = function (e, r) {
                var n = (0, s.getCanvasGradient)(t, r), i = (0, s.getCanvasTarget)(e);
                if (i && n) {
                    for (var o = i.width, l = i.height, u = i.getContext("2d"), c = u.createImageData(o, l), f = c.data.buffer, d = new Uint32Array(f), p = new Uint8ClampedArray(f), h = 0;
                        h < o;
                        h++)for (var y = 0;
                            y < l;
                            y++) {
                                var g = n(h, y), v = t.to.rgb(g);
                            d[y * o + h] = a.default.to.intabgr(v)
                        } c.data.set(p), u.putImageData(c, 0, 0)
                }
            }, this.to = {
                rgb: function (t) {
                    var e = t.h, r = t.s, n = t.l, a = t.a, i = (1 - Math.abs(2 * n - 1)) * r, o = i * (1 - Math.abs(6 * e % 2 - 1)), s = n - i / 2, l = void 0, u = void 0, c = void 0;
                    return e < 1 / 6 ? (l = i, u = o, c = 0) : e < 2 / 6 ? (l = o, u = i, c = 0) : e < .5 ? (l = 0, u = i, c = o) : e < 4 / 6 ? (l = 0, u = o, c = i) : e < 5 / 6 ? (l = o, u = 0, c = i) : (l = i, u = 0, c = o), { r: 255 * (l + s), g: 255 * (u + s), b: 255 * (c + s), a: void 0 === a ? 255 : 255 * a }
                }, hsv: function (t) {
                    var e = t.h, r = t.s, n = t.l, a = t.a, i = (2 * n + r * (1 - Math.abs(2 * n - 1))) / 2;
                    return { h: e, s: r = 2 * (i - n) / i, v: i, a: void 0 === a ? 1 : a }
                }, csshsl: function (t) { return "hsl(" + Math.round(360 * t.h) + "," + Math.round(100 * t.s) + "%," + Math.round(100 * t.l) + "%)" }, csshsla: function (t) { return "hsla(" + Math.round(360 * t.h) + "," + Math.round(100 * t.s) + "%," + Math.round(100 * t.l) + "%," + t.a + ")" }
            }
        };
        function f(t, e, r) { return { h: t.h - r * (t.h - e.h), s: t.s - r * (t.s - e.s), l: t.l - r * (t.l - e.l), a: t.a - r * (t.a - e.a) } } e.default = c, t.exports = e.default
    }, function (t, e, r) { Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { none: function (t) { return t }, stop: function (t) { return t < 0 ? 0 : t > 1 ? 1 : t }, repeat: function (t) { return t < 0 ? 1 + t % 1 : t > 1 ? t % 1 : t } }, t.exports = e.default }, function (t, e, r) { t.exports = r(11) }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = u(r(5)), a = (u(r(2)), u(r(9))), i = u(r(16)), o = u(r(0)), s = u(r(26)), l = r(6);
        function u(t) { return t && t.__esModule ? t : { default: t } } var c, f, d, p = (c = new ArrayBuffer(2), f = new Uint8Array(c), d = new Uint16Array(c), f[0] = 170, f[1] = 187, 48042 === d[0] ? 0 : 43707 === d[0] ? 1 : UNKNOW_ENDIAN), h = { any: s.default, endian: p, convert: n.default.convert, colorType: function (t) { return n.default.getColorType(t, l.TYPES) }, repeat: a.default, color: function (t) { return new i.default(t) } };
        o.default.forEach(l.TYPES_ALL, (function (t) { h[t.name] = t })), e.default = h, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function () {
            function t(t, e) {
                for (var r = 0;
                    r < e.length;
                    r++) {
                        var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            } return function (e, r, n) { return r && t(e.prototype, r), n && t(e, n), e }
        }(), a = o(r(0)), i = o(r(4));
        function o(t) { return t && t.__esModule ? t : { default: t } } var s = function () {
            function t() { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t) } return n(t, null, [{
                key: "testStructure", value: function (t) {
                    var e = a.default.get(t, "0");
                    return this.testStructureSingleSample(e) && this._testStructureAllSamples(t)
                }
            }, { key: "verify", value: function (t) { return i.default.verify(t, this) } }, { key: "testStructureSingleSample", value: function (t) { return a.default.isObject(t) && !a.default.has(t, "colors") } }, { key: "_testStructureAllSamples", value: function (t) { return -1 === a.default.findPropertyIndex(t, "y") } }, {
                key: "toFlat1d", value: function (t, e) {
                    var r = i.default.addMissingStops(t, "x");
                    return i.default.addDefaultColors(r, e), r
                }
            }, {
                key: "toObject2d", value: function (t, e) {
                    var r = this.toFlat1d(t, e);
                    return [{ y: 0, colors: r }, { y: 1, colors: r }]
                }
            }, { key: "name", get: function () { return "flat1d" } }, { key: "matrix", get: function () { return !1 } }]), t
        }();
        e.default = s, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function () {
            function t(t, e) {
                for (var r = 0;
                    r < e.length;
                    r++) {
                        var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            } return function (e, r, n) { return r && t(e.prototype, r), n && t(e, n), e }
        }(), a = o(r(0)), i = o(r(4));
        function o(t) { return t && t.__esModule ? t : { default: t } } var s = function () {
            function t() { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t) } return n(t, null, [{
                key: "testStructure", value: function (t) {
                    var e = a.default.get(t, "0");
                    return this.testStructureSingleSample(e)
                }
            }, { key: "verify", value: function (t) { return i.default.verify(t, this) } }, {
                key: "testStructureSingleSample", value: function (t) {
                    var e = a.default.get(t, "colors"), r = a.default.isObject(t) && Array.isArray(e);
                    if (!r) return !1;
                    if (e.length < 1) return !1;
                    for (var n = 0;
                        n < e.length;
                        n++) {
                            var i = e[n];
                        if (!(r = a.default.isObject(i))) return !1
                    } return !0
                }
            }, {
                key: "toObject2d", value: function (t, e) {
                    var r = i.default.addMissingStopsXY(t);
                    return i.default.addDefaultColorsForMatrix(r, e), r
                }
            }, {
                key: "toFlat1d", value: function (t, e) {
                    var r = this.toObject2d(t, e), n = [];
                    return a.default.forEach(r, (function (t) { a.default.forEach(t.colors, (function (t) { delete t.x, n.push(t) })) })), n
                }
            }, {
                key: "toArray2d", value: function (t, e) {
                    var r = this.toObject2d(t, e);
                    return a.default.map(r, "colors")
                }
            }, {
                key: "toFlat2d", value: function (t, e) {
                    var r = this.toObject2d(t, e), n = [];
                    return a.default.forEach(r, (function (t) {
                        var e = t.y;
                        a.default.forEach(t.colors, (function (t) { t.y = e, n.push(t) }))
                    })), n
                }
            }, { key: "name", get: function () { return "object2d" } }, { key: "matrix", get: function () { return !0 } }]), t
        }();
        e.default = s, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function () {
            function t(t, e) {
                for (var r = 0;
                    r < e.length;
                    r++) {
                        var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            } return function (e, r, n) { return r && t(e.prototype, r), n && t(e, n), e }
        }(), a = o(r(0)), i = o(r(4));
        function o(t) { return t && t.__esModule ? t : { default: t } } var s = function () {
            function t() { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t) } return n(t, null, [{
                key: "testStructure", value: function (t) {
                    var e = a.default.get(t, "0");
                    return this.testStructureSingleSample(e)
                }
            }, { key: "verify", value: function (t) { return i.default.verify(t, this) } }, {
                key: "testStructureSingleSample", value: function (t) {
                    var e = t, r = Array.isArray(t) && e.length > 0;
                    if (!r) return !1;
                    for (var n = 0;
                        n < e.length;
                        n++) {
                            var i = e[n];
                        if (!(r = a.default.isObject(i))) return !1
                    } return !0
                }
            }, {
                key: "toObject2d", value: function (t, e) {
                    var r = t.map((function (t) {
                        var e = {};
                        return a.default.isNumber(t.y) && (e.y = t.y), e.colors = t, e
                    }));
                    return r = i.default.addMissingStopsXY(r), i.default.addDefaultColorsForMatrix(r, e), r
                }
            }, { key: "name", get: function () { return "array2d" } }, { key: "matrix", get: function () { return !0 } }]), t
        }();
        e.default = s, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function () {
            function t(t, e) {
                for (var r = 0;
                    r < e.length;
                    r++) {
                        var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            } return function (e, r, n) { return r && t(e.prototype, r), n && t(e, n), e }
        }(), a = o(r(0)), i = o(r(4));
        function o(t) { return t && t.__esModule ? t : { default: t } } var s = function () {
            function t() { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t) } return n(t, null, [{
                key: "testStructure", value: function (t) {
                    var e = a.default.get(t, "0");
                    return this.testStructureSingleSample(e) && this._testStructureAllSamples(t)
                }
            }, { key: "verify", value: function (t) { return i.default.verify(t, this) } }, { key: "testStructureSingleSample", value: function (t) { return a.default.isObject(t) && !a.default.has(t, "colors") } }, { key: "_testStructureAllSamples", value: function (t) { return a.default.findPropertyIndex(t, "y") > -1 } }, {
                key: "toObject2d", value: function (t, e) {
                    t = a.default.clone(t);
                    var r = [], n = 0, o = void 0;
                    return a.default.forEach(t, (function (t) {
                        o = a.default.isNumber(t.y) ? t.y : n;
                        var e = a.default.find(r, ["y", o]);
                        e ? e.colors.push(t) : r.push({ y: o, colors: [t] }), n = o, delete t.y
                    })), r = i.default.addMissingStopsXY(r), i.default.addDefaultColorsForMatrix(r, e), r
                }
            }, { key: "name", get: function () { return "flat2d" } }, { key: "matrix", get: function () { return !0 } }]), t
        }();
        e.default = s, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function () {
            function t(t, e) {
                for (var r = 0;
                    r < e.length;
                    r++) {
                        var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            } return function (e, r, n) { return r && t(e.prototype, r), n && t(e, n), e }
        }(), a = r(6), i = u(r(1)), o = u(r(2)), s = u(r(5)), l = u(r(0));
        function u(t) { return t && t.__esModule ? t : { default: t } } var c = function () {
            function t(e) {
                if (function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), e instanceof t) this._primaryColor = l.default.clone(e._primaryColor), this._cache = this._cloneCache(e);
                else {
                    var r = s.default.getColorType(e, a.TYPES);
                    r || (r = "Rgb", e = { r: 0, g: 0, b: 0, a: 255 }), this._primaryColor = e, this._cache = {}, this._cache[r.name] = e
                }
            } return n(t, [{ key: "clone", value: function () { return new t(this) } }, {
                key: "hueFromColor", value: function (e) {
                    var r = this.hsv;
                    return r.h = new t(e).hsv.h, new t(r)
                }
            }, {
                key: "hueFromValue", value: function (e) {
                    var r = this.hsv;
                    return r.h = e > 1 ? 1 : e < 0 ? 0 : e, new t(r)
                }
            }, {
                key: "hue", value: function () {
                    var e = this;
                    return this._cacheValue("hue", (function () {
                        var r = o.default.partialGradient(i.default.hueColors(), e.hsv.h);
                        return new t(i.default.mix(r.item1, r.item2, r.position))
                    })), this._cache.hue
                }
            }]), t
        }();
        c.prototype._cacheValue = function (t, e) {
            if (!l.default.has(this._cache, t)) {
                var r = e();
                this._cache[t] = r
            }
        }, c.prototype._cloneCache = function (t) {
            var e = t._cache.hue, r = l.default.clone(t._cache);
            return e && (r.hue = e.clone()), r
        }, l.default.forEach(a.TYPES, (function (t) {
            var e = t.name;
            Object.defineProperty(c.prototype, e, {
                get: function () {
                    var r = this;
                    return this._cacheValue(e, (function () { return s.default.convertAny(r._primaryColor, t, a.TYPES) })), this._cache[e]
                }
            })
        })), e.default = c, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n, a = (n = r(1)) && n.__esModule ? n : { default: n };
        e.default = { name: "int", className: "Int", parent: a.default, test: function (t) { return "number" == typeof t && t <= 16777215 && t >= 0 }, to: { rgb: function (t) { return { r: (16711680 & t) >> 16, g: (65280 & t) >> 8, b: 255 & t, a: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 255 } }, hex: function (t) { return "#" + ((1 << 24) + t).toString(16).slice(1) }, cssrgb: function (t) { return "rgb(" + ((16711680 & t) >> 16) + "," + ((65280 & t) >> 8) + "," + (255 & t) + ")" }, cssrgba: function (t) { return "rgba(" + ((16711680 & t) >> 16) + "," + ((65280 & t) >> 8) + "," + (255 & t) + "," + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1) + ")" } } }, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n, a = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var r = [], n = !0, a = !1, i = void 0;
                try {
                    for (var o, s = t[Symbol.iterator]();
                        !(n = (o = s.next()).done) && (r.push(o.value), !e || r.length !== e);
                        n = !0);
                } catch (t) { a = !0, i = t } finally { try { !n && s.return && s.return() } finally { if (a) throw i } } return r
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }, i = (n = r(1)) && n.__esModule ? n : { default: n }, o = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        e.default = {
            name: "hex", className: "Hex", parent: i.default, test: function (t) { return "string" == typeof t && !(!s.exec(t) && !o.exec(t)) }, to: {
                rgb: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 255;
                    t = t.replace(o, (function (t, e, r, n) { return e + e + r + r + n + n }));
                    var r = s.exec(t) || [], n = a(r, 4), i = n[0], l = n[1], u = n[2], c = n[3];
                    return i ? { r: parseInt(l, 16), g: parseInt(u, 16), b: parseInt(c, 16), a: e } : null
                }, int: function (t) { return parseInt(t.replace(o, (function (t, e, r, n) { return e + e + r + r + n + n })).replace("#", ""), 16) }, cssrgb: function (t) {
                    t = t.replace(o, (function (t, e, r, n) { return e + e + r + r + n + n }));
                    var e = s.exec(t) || [], r = a(e, 4), n = r[0], i = r[1], l = r[2], u = r[3];
                    return n ? "rgb(" + parseInt(i, 16) + "," + parseInt(l, 16) + "," + parseInt(u, 16) + ")" : null
                }, cssrgba: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    t = t.replace(o, (function (t, e, r, n) { return e + e + r + r + n + n }));
                    var r = s.exec(t) || [], n = a(r, 4), i = n[0], l = n[1], u = n[2], c = n[3];
                    return i ? "rgba(" + parseInt(l, 16) + "," + parseInt(u, 16) + "," + parseInt(c, 16) + "," + e + ")" : null
                }
            }
        }, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n, a = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var r = [], n = !0, a = !1, i = void 0;
                try {
                    for (var o, s = t[Symbol.iterator]();
                        !(n = (o = s.next()).done) && (r.push(o.value), !e || r.length !== e);
                        n = !0);
                } catch (t) { a = !0, i = t } finally { try { !n && s.return && s.return() } finally { if (a) throw i } } return r
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }, i = (n = r(1)) && n.__esModule ? n : { default: n }, o = /^rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
        e.default = {
            name: "cssrgb", className: "Cssrgb", parent: i.default, test: function (t) { return "string" == typeof t && !!o.exec(t) }, to: {
                rgb: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 255, r = o.exec(t) || [], n = a(r, 4), i = n[0], s = n[1], l = n[2], u = n[3];
                    return i ? { r: parseInt(s), g: parseInt(l), b: parseInt(u), a: e } : null
                }, int: function (t) {
                    var e = o.exec(t) || [], r = a(e, 4), n = r[0], i = r[1], s = r[2], l = r[3];
                    return n ? (parseInt(i) << 16) + (parseInt(s) << 8) + parseInt(l) : null
                }, hex: function (t) {
                    var e = o.exec(t) || [], r = a(e, 4), n = r[0], i = r[1], s = r[2], l = r[3];
                    return n ? "#" + ((1 << 24) + (parseInt(i) << 16) + (parseInt(s) << 8) + parseInt(l)).toString(16).slice(1) : null
                }
            }
        }, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n, a = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var r = [], n = !0, a = !1, i = void 0;
                try {
                    for (var o, s = t[Symbol.iterator]();
                        !(n = (o = s.next()).done) && (r.push(o.value), !e || r.length !== e);
                        n = !0);
                } catch (t) { a = !0, i = t } finally { try { !n && s.return && s.return() } finally { if (a) throw i } } return r
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }, i = (n = r(1)) && n.__esModule ? n : { default: n }, o = /^rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d*\.?\d*)\s*\)$/;
        e.default = {
            name: "cssrgba", className: "Cssrgba", parent: i.default, test: function (t) { return "string" == typeof t && !!o.exec(t) }, to: {
                rgb: function (t) {
                    var e = o.exec(t) || [], r = a(e, 5), n = r[0], i = r[1], s = r[2], l = r[3], u = r[4];
                    return n ? { r: parseInt(i), g: parseInt(s), b: parseInt(l), a: u ? 255 * parseFloat(u) | 0 : 255 } : null
                }, int: function (t) {
                    var e = o.exec(t) || [], r = a(e, 4), n = r[0], i = r[1], s = r[2], l = r[3];
                    return n ? (parseInt(i) << 16) + (parseInt(s) << 8) + parseInt(l) : null
                }, hex: function (t) {
                    var e = o.exec(t) || [], r = a(e, 4), n = r[0], i = r[1], s = r[2], l = r[3];
                    return n ? "#" + ((1 << 24) + (parseInt(i) << 16) + (parseInt(s) << 8) + parseInt(l)).toString(16).slice(1) : null
                }
            }
        }, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n, a = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var r = [], n = !0, a = !1, i = void 0;
                try {
                    for (var o, s = t[Symbol.iterator]();
                        !(n = (o = s.next()).done) && (r.push(o.value), !e || r.length !== e);
                        n = !0);
                } catch (t) { a = !0, i = t } finally { try { !n && s.return && s.return() } finally { if (a) throw i } } return r
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }, i = (n = r(8)) && n.__esModule ? n : { default: n }, o = /^hsla?\s*\(\s*(\d{1,3}\s*)\s*,\s*(\d{1,3}\s*)(%)\s*,\s*(\d{1,3}\s*)(%)\s*\)$/;
        e.default = {
            name: "csshsl", className: "Csshsl", parent: i.default, test: function (t) { return "string" == typeof t && !!o.exec(t) }, to: {
                hsl: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = o.exec(t) || [], n = a(r, 5), i = n[0], s = n[1], l = n[2], u = (n[3], n[4]);
                    return i ? { h: parseInt(s) / 360, s: parseInt(l) / 100, l: parseInt(u) / 100, a: e } : null
                }
            }
        }, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n, a = function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function (t, e) {
                var r = [], n = !0, a = !1, i = void 0;
                try {
                    for (var o, s = t[Symbol.iterator]();
                        !(n = (o = s.next()).done) && (r.push(o.value), !e || r.length !== e);
                        n = !0);
                } catch (t) { a = !0, i = t } finally { try { !n && s.return && s.return() } finally { if (a) throw i } } return r
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }, i = (n = r(8)) && n.__esModule ? n : { default: n }, o = /^hsla?\s*\(\s*(\d{1,3}\s*)\s*,\s*(\d{1,3}\s*)(%)\s*,\s*(\d{1,3}\s*)(%)\s*,\s*(\d*\.?\d*)\s*\)$/;
        e.default = {
            name: "csshsla", className: "Csshsla", parent: i.default, test: function (t) { return "string" == typeof t && !!o.exec(t) }, to: {
                hsl: function (t) {
                    var e = o.exec(t) || [], r = a(e, 7), n = r[0], i = r[1], s = r[2], l = (r[3], r[4]), u = (r[5], r[6]);
                    return n ? { h: parseInt(i) / 360, s: parseInt(s) / 100, l: parseInt(l) / 100, a: u ? parseFloat(u) : 1 } : null
                }
            }
        }, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, a = l(r(1)), i = l(r(2)), o = l(r(3)), s = r(7);
        function l(t) { return t && t.__esModule ? t : { default: t } } var u = { h: 0, s: 0, v: 0, a: 1 }, c = new function () {
            var t = this;
            this.name = "hsv", this.className = "Hsv", this.parent = null, this.test = function (t) { return null !== t && "object" === (void 0 === t ? "undefined" : n(t)) && t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("v") && t.h >= 0 && t.h <= 1 && t.s >= 0 && t.s <= 1 && t.v >= 0 && t.v <= 1 && (!t.hasOwnProperty("a") || t.a >= 0 && t.a <= 1) }, this.gradient = function (t) { return i.default.createGradient(t, { mixColors: f, defaultColor: u }) }, this.gradientData = function (t, e) { return e = e || u, new o.default(t, e) }, this.draw = function (e, r) {
                var n = (0, s.getCanvasGradient)(t, r), i = (0, s.getCanvasTarget)(e);
                if (i && n) {
                    for (var o = i.width, l = i.height, u = i.getContext("2d"), c = u.createImageData(o, l), f = c.data.buffer, d = new Uint32Array(f), p = new Uint8ClampedArray(f), h = 0;
                        h < o;
                        h++)for (var y = 0;
                            y < l;
                            y++) {
                                var g = n(h, y), v = t.to.rgb(g);
                            d[y * o + h] = a.default.to.intabgr(v)
                        } c.data.set(p), u.putImageData(c, 0, 0)
                }
            }, this.to = {
                rgb: function (t) {
                    var e = t.h, r = t.s, n = t.v, a = t.a, i = n * r, o = i * (1 - Math.abs(6 * e % 2 - 1)), s = n - i, l = void 0, u = void 0, c = void 0;
                    return e < 1 / 6 ? (l = i, u = o, c = 0) : e < 2 / 6 ? (l = o, u = i, c = 0) : e < .5 ? (l = 0, u = i, c = o) : e < 4 / 6 ? (l = 0, u = o, c = i) : e < 5 / 6 ? (l = o, u = 0, c = i) : (l = i, u = 0, c = o), { r: 255 * (l + s), g: 255 * (u + s), b: 255 * (c + s), a: isNaN(parseFloat(a)) ? 255 : 255 * a }
                }, hsl: function (t) {
                    var e = t.h, r = t.s, n = t.v, a = t.a, i = .5 * n * (2 - r);
                    return { h: e, s: r = n * r / (1 - Math.abs(2 * i - 1)), l: i, a: void 0 === a ? 1 : a }
                }
            }
        };
        function f(t, e, r) { return { h: t.h - r * (t.h - e.h), s: t.s - r * (t.s - e.s), v: t.v - r * (t.v - e.v), a: t.a - r * (t.a - e.a) } } e.default = c, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n, a = (n = r(1)) && n.__esModule ? n : { default: n };
        e.default = { name: "intabgr", className: "Intabgr", parent: a.default, to: { rgb: function (t) { return { a: t >> 24 & 255, b: t >> 16 & 255, g: t >> 8 & 255, r: 255 & t } } } }, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n, a = (n = r(1)) && n.__esModule ? n : { default: n };
        e.default = { name: "intrgba", className: "Intrgba", parent: a.default, to: { rgb: function (t) { return { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: 255 & t } } } }, t.exports = e.default
    }, function (t, e, r) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = o(r(0)), a = o(r(5)), i = r(6);
        function o(t) { return t && t.__esModule ? t : { default: t } } var s = { to: {} };
        n.default.forEach(i.TYPES, (function (t) {
            var e = n.default.lowerFirst(t.name);
            s.to[e] = function (e) { return a.default.convertAny(e, t, i.TYPES) }
        })), e.default = s, t.exports = e.default
    }]);
    var K = V(J);
    function Q(t, e, r = [0, 0, 256, 256]) {
        const n = parseInt("0x" + e.slice(1, 3)), a = parseInt("0x" + e.slice(3, 5)), i = parseInt("0x" + e.slice(5, 7)), o = t.getImageData(...r), s = o.data;
        for (var l = 0;
            l < s.length;
            l += 4)0 !== s[l + 3] && (s[l] = parseInt(s[l] / 255 * (n / 255) * 255), s[l + 1] = parseInt(s[l + 1] / 255 * (a / 255) * 255), s[l + 2] = parseInt(s[l + 2] / 255 * (i / 255) * 255));
        t.clearRect(...r), t.putImageData(o, r[0], r[1])
    } function Z(t, e, r, n = [0, 0, 256, 256]) {
        const a = t.getImageData(...n), i = a.data;
        for (var o = 0;
            o < i.length;
            o += 4)0 !== i[o + 3] && tt(i[o], e[0], 2) && tt(i[o + 1], e[1], 2) && tt(i[o + 2], e[2], 2) && (i[o] = r[0], i[o + 1] = r[1], i[o + 2] = r[2]);
        t.putImageData(a, n[0], n[1])
    } function tt(t, e, r) { return Math.abs(t - e) < r } function et(t) {
        const e = K.convert([t], K.hex.to.rgb, K.rgb.to.hsv)[0];
        return [Math.min(Math.round(100 * e.h), 99), Math.min(Math.round(100 * e.s), 99), Math.min(Math.round(100 * e.v), 99)]
    } function rt(t, e, r) { return t /= 100, e /= 100, r /= 100, K.convert([{ h: t, s: e, v: r }], K.hsv.to.rgb, K.rgb.to.hex)[0] } function nt(t) {
        let e = new Image;
        return e.crossOrigin = "anonymous", e.src = "./" + t + ".png", e.callbacks = [], e.onload = () => { e.callbacks.forEach((t => t())) }, e
    } function at(t) {
        const e = t.getContext("2d", { willReadFrequently: !0 });
        return e.imageSmoothingEnabled = !1, e.mozImageSmoothingEnabled = !1, e.webkitImageSmoothingEnabled = !1, e.msImageSmoothingEnabled = !1, e
    } function it(t, e = [0, 0, 128, 128]) {
        const r = e[2] - e[0], n = t.getImageData(...e), a = n.data;
        for (let t = 0;
            t < a.length;
            t += 4)a[t + 3] = 0 === a[t + 3] ? 0 : t / 4 % r;
        t.putImageData(n, e[0], e[1])
    } function ot(t, e = [512, 0, 640, 128]) {
        const r = e[2] - e[0], n = t.getImageData(...e), a = n.data;
        for (let t = 0;
            t < a.length;
            t += 4)a[t + 3] = 0 === a[t + 3] ? 0 : r - t / 4 % r;
        t.putImageData(n, e[0], e[1])
    } function st(e) {
        let r, n, a;
        return { c() { r = d("canvas"), n = y(), a = d("canvas"), v(r, "width", "256"), v(r, "height", "256"), v(r, "class", "svelte-no329k"), I(a, "display", "none"), v(a, "class", "svelte-no329k") }, m(t, i) { c(t, r, i), e[8](r), c(t, n, i), c(t, a, i), e[9](a) }, p: t, i: t, o: t, d(t) { t && f(r), e[8](null), t && f(n), t && f(a), e[9](null) } }
    } function lt(t, e, r) {
        let n, a, i, { skinId: o } = e, { armColor: s } = e, { bodySprite: l } = e, { skinSprite: u } = e, { skinColors: c } = e, { skinData: f } = e;
        k((() => { i = at(n), l.callbacks.push((() => p())), p(), r(2, u.onload = () => d(), u), d() })), x((() => p()));
        const d = () => {
            if (!u.complete) return;
            r(1, a.height = u.height, a), r(1, a.width = u.width, a);
            let t = a.getContext("2d");
            t.drawImage(u, 0, 0), r(4, f = t.getImageData(0, 0, a.width, a.height).data), r(3, c = [f.slice(0, 3), f.slice(4, 7), f.slice(8, 11)])
        }, p = () => {
            if (i && l.complete) {
                if (i.clearRect(0, 0, 256, 256), i.drawImage(l, 0, 0, 16, 32, 64, 0, 128, 256), i.drawImage(l, 96, 0, 16, 32, 64, 0, 128, 256), o > 1) {
                    const e = 12 * (o - 1);
                    for (var t = 0;
                        t < 12;
                        t += 4)r(3, c[t / 4] = f.slice(e + t, e + t + 3), c), Z(i, f.slice(t, t + 3), f.slice(e + t, e + t + 3))
                } s && (Z(i, [142, 31, 12], s[0]), Z(i, [112, 23, 24], s[1]), Z(i, [74, 12, 6], s[2]))
            }
        };
        return t.$$set = t => { "skinId" in t && r(5, o = t.skinId), "armColor" in t && r(6, s = t.armColor), "bodySprite" in t && r(7, l = t.bodySprite), "skinSprite" in t && r(2, u = t.skinSprite), "skinColors" in t && r(3, c = t.skinColors), "skinData" in t && r(4, f = t.skinData) }, [n, a, u, c, f, o, s, l, function (t) { _[t ? "unshift" : "push"]((() => { n = t, r(0, n) })) }, function (t) { _[t ? "unshift" : "push"]((() => { a = t, r(1, a) })) }]
    } class ut extends B { constructor(t) { super(), z(this, t, lt, st, i, { skinId: 5, armColor: 6, bodySprite: 7, skinSprite: 2, skinColors: 3, skinData: 4 }) } } function ct(e) {
        let r;
        return { c() { r = d("canvas"), v(r, "width", "256"), v(r, "height", "256"), v(r, "class", "svelte-no329k") }, m(t, n) { c(t, r, n), e[3](r) }, p: t, i: t, o: t, d(t) { t && f(r), e[3](null) } }
    } function ft(t, e, r) {
        let n, a, { color: i } = e, { eyeSprite: o } = e;
        k((() => { a = at(n), r(1, o.onload = () => s(), o), s() })), x((() => s()));
        const s = () => {
            if (!a || !o.complete) return;
            a.clearRect(0, 0, 256, 256), a.drawImage(o, 0, 0, 16, 32, 64, 0, 128, 256), Q(a, i || "#7a4434")
        };
        return t.$$set = t => { "color" in t && r(2, i = t.color), "eyeSprite" in t && r(1, o = t.eyeSprite) }, [n, o, i, function (t) { _[t ? "unshift" : "push"]((() => { n = t, r(0, n) })) }]
    } class dt extends B { constructor(t) { super(), z(this, t, ft, ct, i, { color: 2, eyeSprite: 1 }) } } function pt(e) {
        let r;
        return { c() { r = d("canvas"), v(r, "width", "256"), v(r, "height", "256"), v(r, "class", "svelte-no329k") }, m(t, n) { c(t, r, n), e[5](r) }, p: t, i: t, o: t, d(t) { t && f(r), e[5](null) } }
    } function ht(t, e, r) {
        let n, a, { id: i } = e, { color: o } = e, { hairSprite: s } = e, { hairFancySprite: l } = e;
        k((() => { a = at(n), s.callbacks.push((() => u())), l.callbacks.push((() => u())), u() })), x((() => u()));
        const u = () => {
            if (!a || !s.complete || !l.complete) return;
            const t = (i || 1) - (i > 56 ? 57 : 1), e = t % 8 * 16, r = parseInt(t / 8) * (i > 56 ? 128 : 96);
            a.clearRect(0, 0, 256, 256), a.drawImage(i > 56 ? l : s, e, r, 16, 32, 64, i > 56 ? 0 : 8, 128, 256), Q(a, o || '#c15b32"')
        };
        return t.$$set = t => { "id" in t && r(1, i = t.id), "color" in t && r(2, o = t.color), "hairSprite" in t && r(3, s = t.hairSprite), "hairFancySprite" in t && r(4, l = t.hairFancySprite) }, [n, i, o, s, l, function (t) { _[t ? "unshift" : "push"]((() => { n = t, r(0, n) })) }]
    } class yt extends B { constructor(t) { super(), z(this, t, ht, pt, i, { id: 1, color: 2, hairSprite: 3, hairFancySprite: 4 }) } } function gt(e) {
        let r;
        return { c() { r = d("canvas"), v(r, "width", "256"), v(r, "height", "256"), v(r, "class", "svelte-no329k") }, m(t, n) { c(t, r, n), e[4](r) }, p: t, i: t, o: t, d(t) { t && f(r), e[4](null) } }
    } function vt(t, e, r) {
        let n, a, { id: i } = e, { sleeves: o } = e, { shirtSprite: s } = e;
        k((() => { a = at(n), s.callbacks.push((() => l())), l() })), x((() => l()));
        const l = () => {
            if (!a || !s.complete) return;
            let t = (i || 1) - 1, e = t % 16 * 8, n = 32 * parseInt(t / 16);
            a.clearRect(0, 0, 256, 256), a.drawImage(s, e, n, 8, 8, 96, 120, 64, 64), r(1, o = [a.getImageData(96, 136, 1, 1).data.slice(0, 3), a.getImageData(96, 144, 1, 1).data.slice(0, 3), a.getImageData(96, 152, 1, 1).data.slice(0, 3)])
        };
        return t.$$set = t => { "id" in t && r(2, i = t.id), "sleeves" in t && r(1, o = t.sleeves), "shirtSprite" in t && r(3, s = t.shirtSprite) }, [n, o, i, s, function (t) { _[t ? "unshift" : "push"]((() => { n = t, r(0, n) })) }]
    } class mt extends B { constructor(t) { super(), z(this, t, vt, gt, i, { id: 2, sleeves: 1, shirtSprite: 3 }) } } function bt(e) {
        let r;
        return { c() { r = d("canvas"), v(r, "width", "256"), v(r, "height", "256"), v(r, "class", "svelte-no329k") }, m(t, n) { c(t, r, n), e[4](r) }, p: t, i: t, o: t, d(t) { t && f(r), e[4](null) } }
    } function $t(t, e, r) {
        let n, a, { id: i } = e, { color: o } = e, { pantSprite: s } = e;
        k((() => { a = at(n), s.callbacks.push((() => l())), l() })), x((() => l()));
        const l = () => {
            if (!a || !s.complete) return;
            let t = 192 * ((i || 1) - 1);
            a.clearRect(0, 0, 256, 256), a.drawImage(s, t, 0, 16, 32, 64, 0, 128, 256), Q(a, o || "#2e55b7")
        };
        return t.$$set = t => { "id" in t && r(1, i = t.id), "color" in t && r(2, o = t.color), "pantSprite" in t && r(3, s = t.pantSprite) }, [n, i, o, s, function (t) { _[t ? "unshift" : "push"]((() => { n = t, r(0, n) })) }]
    } class It extends B { constructor(t) { super(), z(this, t, $t, bt, i, { id: 1, color: 2, pantSprite: 3 }) } } function St(e) {
        let r;
        return { c() { r = d("canvas"), v(r, "width", "256"), v(r, "height", "256"), v(r, "class", "svelte-no329k") }, m(t, n) { c(t, r, n), e[4](r) }, p: t, i: t, o: t, d(t) { t && f(r), e[4](null) } }
    } function wt(t, e, r) {
        let n, a, { id: i } = e, { hairColor: o } = e, { accessorySprite: s } = e;
        k((() => { a = at(n), s.callbacks.push((() => l())), l() })), x((() => l()));
        const l = () => {
            if (!a || !s.complete) return;
            a.clearRect(0, 0, 256, 256);
            const t = i - 2;
            if (t < 0) return;
            const e = t % 8 * 16, r = 32 * parseInt(t / 8);
            a.drawImage(s, e, r, 16, 16, 64, 16, 128, 128), t < 6 && Q(a, o)
        };
        return t.$$set = t => { "id" in t && r(1, i = t.id), "hairColor" in t && r(2, o = t.hairColor), "accessorySprite" in t && r(3, s = t.accessorySprite) }, [n, i, o, s, function (t) { _[t ? "unshift" : "push"]((() => { n = t, r(0, n) })) }]
    } class kt extends B { constructor(t) { super(), z(this, t, wt, St, i, { id: 1, hairColor: 2, accessorySprite: 3 }) } } function xt(t) {
        let e, r, n, a, i, o, s, p, h, m, b, $, I, S, w, k, x, C, M, O, P, j, A, T, E, F, N, Y, G, H, z, B, V, J, K, Q, Z, tt, et, rt, nt, at, it, ot, st, lt, ct;
        function ft(e) { t[21](e) } function pt(e) { t[22](e) } let ht = { skinId: t[9], armColor: t[19], bodySprite: t[10], skinSprite: t[11] };
        function gt(e) { t[23](e) } void 0 !== t[0] && (ht.skinColors = t[0]), void 0 !== t[1] && (ht.skinData = t[1]), o = new ut({ props: ht }), _.push((() => L(o, "skinColors", ft))), _.push((() => L(o, "skinData", pt))), m = new dt({ props: { color: t[7], eyeSprite: t[8] } }), $ = new yt({ props: { color: t[3], id: t[4], hairSprite: t[5], hairFancySprite: t[6] } }), S = new It({ props: { color: t[14], id: t[15], pantSprite: t[16] } });
        let vt = { id: t[12], shirtSprite: t[13] };
        return void 0 !== t[19] && (vt.sleeves = t[19]), k = new mt({ props: vt }), _.push((() => L(k, "sleeves", gt))), M = new kt({ props: { id: t[17], hairColor: t[3], accessorySprite: t[18] } }), {
            c() { e = d("div"), r = d("img"), a = y(), i = d("div"), q(o.$$.fragment), h = y(), q(m.$$.fragment), b = y(), q($.$$.fragment), I = y(), q(S.$$.fragment), w = y(), q(k.$$.fragment), C = y(), q(M.$$.fragment), O = y(), P = d("button"), j = d("img"), E = y(), F = d("img"), G = y(), H = d("img"), V = y(), J = d("img"), Z = y(), tt = d("img"), nt = y(), at = d("img"), v(r, "class", "background svelte-1y1dldf"), l(r.src, n = "./background.png") || v(r, "src", "./background.png"), v(r, "alt", "Chracter background"), l(j.src, A = "./pet_1.png") || v(j, "src", "./pet_1.png"), v(j, "alt", "Pet 1"), v(j, "style", T = 1 === t[2] ? "display: block" : "display: none"), v(j, "class", "svelte-1y1dldf"), l(F.src, N = "./pet_2.png") || v(F, "src", "./pet_2.png"), v(F, "alt", "Pet 2"), v(F, "style", Y = 2 === t[2] ? "display: block" : "display: none"), v(F, "class", "svelte-1y1dldf"), l(H.src, z = "./pet_3.png") || v(H, "src", "./pet_3.png"), v(H, "alt", "Pet 3"), v(H, "style", B = 3 === t[2] ? "display: block" : "display: none"), v(H, "class", "svelte-1y1dldf"), l(J.src, K = "./pet_4.png") || v(J, "src", "./pet_4.png"), v(J, "alt", "Pet 4"), v(J, "style", Q = 4 === t[2] ? "display: block" : "display: none"), v(J, "class", "svelte-1y1dldf"), l(tt.src, et = "./pet_5.png") || v(tt, "src", "./pet_5.png"), v(tt, "alt", "Pet 5"), v(tt, "style", rt = 5 === t[2] ? "display: block" : "display: none"), v(tt, "class", "svelte-1y1dldf"), l(at.src, it = "./pet_6.png") || v(at, "src", "./pet_6.png"), v(at, "alt", "Pet 6"), v(at, "style", ot = 6 === t[2] ? "display: block" : "display: none"), v(at, "class", "svelte-1y1dldf"), v(P, "class", "pet svelte-1y1dldf"), v(i, "class", "inner svelte-1y1dldf"), v(e, "class", "outer svelte-1y1dldf") }, m(n, s) { c(n, e, s), u(e, r), u(e, a), u(e, i), U(o, i, null), u(i, h), U(m, i, null), u(i, b), U($, i, null), u(i, I), U(S, i, null), u(i, w), U(k, i, null), u(i, C), U(M, i, null), u(i, O), u(i, P), u(P, j), u(P, E), u(P, F), u(P, G), u(P, H), u(P, V), u(P, J), u(P, Z), u(P, tt), u(P, nt), u(P, at), st = !0, lt || (ct = g(P, "click", t[20]), lt = !0) }, p(t, [e]) {
                const r = {};
                512 & e && (r.skinId = t[9]), 524288 & e && (r.armColor = t[19]), 1024 & e && (r.bodySprite = t[10]), 2048 & e && (r.skinSprite = t[11]), !s && 1 & e && (s = !0, r.skinColors = t[0], D((() => s = !1))), !p && 2 & e && (p = !0, r.skinData = t[1], D((() => p = !1))), o.$set(r);
                const n = {};
                128 & e && (n.color = t[7]), 256 & e && (n.eyeSprite = t[8]), m.$set(n);
                const a = {};
                8 & e && (a.color = t[3]), 16 & e && (a.id = t[4]), 32 & e && (a.hairSprite = t[5]), 64 & e && (a.hairFancySprite = t[6]), $.$set(a);
                const i = {};
                16384 & e && (i.color = t[14]), 32768 & e && (i.id = t[15]), 65536 & e && (i.pantSprite = t[16]), S.$set(i);
                const l = {};
                4096 & e && (l.id = t[12]), 8192 & e && (l.shirtSprite = t[13]), !x && 524288 & e && (x = !0, l.sleeves = t[19], D((() => x = !1))), k.$set(l);
                const u = {};
                131072 & e && (u.id = t[17]), 8 & e && (u.hairColor = t[3]), 262144 & e && (u.accessorySprite = t[18]), M.$set(u), (!st || 4 & e && T !== (T = 1 === t[2] ? "display: block" : "display: none")) && v(j, "style", T), (!st || 4 & e && Y !== (Y = 2 === t[2] ? "display: block" : "display: none")) && v(F, "style", Y), (!st || 4 & e && B !== (B = 3 === t[2] ? "display: block" : "display: none")) && v(H, "style", B), (!st || 4 & e && Q !== (Q = 4 === t[2] ? "display: block" : "display: none")) && v(J, "style", Q), (!st || 4 & e && rt !== (rt = 5 === t[2] ? "display: block" : "display: none")) && v(tt, "style", rt), (!st || 4 & e && ot !== (ot = 6 === t[2] ? "display: block" : "display: none")) && v(at, "style", ot)
            }, i(t) { st || (R(o.$$.fragment, t), R(m.$$.fragment, t), R($.$$.fragment, t), R(S.$$.fragment, t), R(k.$$.fragment, t), R(M.$$.fragment, t), st = !0) }, o(t) { X(o.$$.fragment, t), X(m.$$.fragment, t), X($.$$.fragment, t), X(S.$$.fragment, t), X(k.$$.fragment, t), X(M.$$.fragment, t), st = !1 }, d(t) { t && f(e), W(o), W(m), W($), W(S), W(k), W(M), lt = !1, ct() }
        }
    } function Ct(t, e, r) {
        let n, { hairColor: a } = e, { hairId: i } = e, { hairSprite: o } = e, { hairFancySprite: s } = e, { eyeColor: l } = e, { eyeSprite: u } = e, { skinId: c } = e, { bodySprite: f } = e, { skinSprite: d } = e, { skinColors: p } = e, { skinData: h } = e, { shirtId: y } = e, { shirtSprite: g } = e, { pantColor: v } = e, { pantId: m } = e, { pantSprite: b } = e, { accessoryId: $ } = e, { accessorySprite: I } = e, { petId: S } = e;
        return t.$$set = t => { "hairColor" in t && r(3, a = t.hairColor), "hairId" in t && r(4, i = t.hairId), "hairSprite" in t && r(5, o = t.hairSprite), "hairFancySprite" in t && r(6, s = t.hairFancySprite), "eyeColor" in t && r(7, l = t.eyeColor), "eyeSprite" in t && r(8, u = t.eyeSprite), "skinId" in t && r(9, c = t.skinId), "bodySprite" in t && r(10, f = t.bodySprite), "skinSprite" in t && r(11, d = t.skinSprite), "skinColors" in t && r(0, p = t.skinColors), "skinData" in t && r(1, h = t.skinData), "shirtId" in t && r(12, y = t.shirtId), "shirtSprite" in t && r(13, g = t.shirtSprite), "pantColor" in t && r(14, v = t.pantColor), "pantId" in t && r(15, m = t.pantId), "pantSprite" in t && r(16, b = t.pantSprite), "accessoryId" in t && r(17, $ = t.accessoryId), "accessorySprite" in t && r(18, I = t.accessorySprite), "petId" in t && r(2, S = t.petId) }, [p, h, S, a, i, o, s, l, u, c, f, d, y, g, v, m, b, $, I, n, () => { r(2, S = S % 6 + 1) }, function (t) { p = t, r(0, p) }, function (t) { h = t, r(1, h) }, function (t) { n = t, r(19, n) }]
    } class _t extends B { constructor(t) { super(), z(this, t, Ct, xt, i, { hairColor: 3, hairId: 4, hairSprite: 5, hairFancySprite: 6, eyeColor: 7, eyeSprite: 8, skinId: 9, bodySprite: 10, skinSprite: 11, skinColors: 0, skinData: 1, shirtId: 12, shirtSprite: 13, pantColor: 14, pantId: 15, pantSprite: 16, accessoryId: 17, accessorySprite: 18, petId: 2 }) } } function Mt(e) {
        let r, n, i, o, s, l, h, y, m, b, $, I, S, w, k, x, C, _, M, O, P, j, A, D, T, E, F, N, Y, G, R, X, L, q, U, W, H, z, B, V, J, K, Q, Z;
        return {
            c() {
                r = d("button"), n = p("svg"), i = p("defs"), o = p("pattern"), s = p("rect"), l = p("rect"), h = p("rect"), y = p("rect"), m = p("rect"), b = p("rect"), $ = p("rect"), I = p("rect"), S = p("rect"), w = p("rect"), k = p("rect"), x = p("rect"), C = p("rect"), _ = p("rect"), M = p("rect"), O = p("rect"), P = p("rect"), j = p("rect"), A = p("rect"), D = p("rect"), T = p("rect"), E = p("rect"), F = p("rect"), N = p("rect"), Y = p("rect"), G = p("rect"), R = p("rect"), X = p("rect"), L = p("rect"), q = p("rect"), U = p("rect"), W = p("rect"), H = p("rect"), z = p("rect"), B = p("rect"), V = p("rect"), J = p("rect"), v(s, "width", "2"), v(s, "height", "1"), v(s, "x", "4"), v(s, "y", "1"), v(s, "fill", "rgba(91, 43, 42, 1.00)"), v(l, "width", "1"), v(l, "height", "1"), v(l, "x", "3"), v(l, "y", "2"), v(l, "fill", "rgba(91, 43, 42, 1.00)"), v(h, "width", "1"), v(h, "height", "1"), v(h, "x", "4"), v(h, "y", "2"), v(h, "fill", "rgba(228, 174, 110, 1.00)"), v(y, "width", "1"), v(y, "height", "1"), v(y, "x", "5"), v(y, "y", "2"), v(y, "fill", "rgba(91, 43, 42, 1.00)"), v(m, "width", "1"), v(m, "height", "1"), v(m, "x", "2"), v(m, "y", "3"), v(m, "fill", "rgba(91, 43, 42, 1.00)"), v(b, "width", "1"), v(b, "height", "1"), v(b, "x", "3"), v(b, "y", "3"), v(b, "fill", "rgba(220, 123, 5, 1.00)"), v($, "width", "1"), v($, "height", "1"), v($, "x", "4"), v($, "y", "3"), v($, "fill", "rgba(228, 174, 110, 1.00)"), v(I, "width", "6"), v(I, "height", "1"), v(I, "x", "5"), v(I, "y", "3"), v(I, "fill", "rgba(91, 43, 42, 1.00)"), v(S, "width", "1"), v(S, "height", "1"), v(S, "x", "1"), v(S, "y", "4"), v(S, "fill", "rgba(91, 43, 42, 1.00)"), v(w, "width", "1"), v(w, "height", "1"), v(w, "x", "2"), v(w, "y", "4"), v(w, "fill", "rgba(220, 123, 5, 1.00)"), v(k, "width", "7"), v(k, "height", "1"), v(k, "x", "3"), v(k, "y", "4"), v(k, "fill", "rgba(228, 174, 110, 1.00)"), v(x, "width", "1"), v(x, "height", "1"), v(x, "x", "10"), v(x, "y", "4"), v(x, "fill", "rgba(220, 123, 5, 1.00)"), v(C, "width", "1"), v(C, "height", "1"), v(C, "x", "11"), v(C, "y", "4"), v(C, "fill", "rgba(91, 43, 42, 1.00)"), v(_, "width", "1"), v(_, "height", "1"), v(_, "x", "0"), v(_, "y", "5"), v(_, "fill", "rgba(91, 43, 42, 1.00)"), v(M, "width", "1"), v(M, "height", "1"), v(M, "x", "1"), v(M, "y", "5"), v(M, "fill", "rgba(220, 123, 5, 1.00)"), v(O, "width", "1"), v(O, "height", "1"), v(O, "x", "2"), v(O, "y", "5"), v(O, "fill", "rgba(228, 174, 110, 1.00)"), v(P, "width", "7"), v(P, "height", "1"), v(P, "x", "3"), v(P, "y", "5"), v(P, "fill", "rgba(220, 123, 5, 1.00)"), v(j, "width", "1"), v(j, "height", "1"), v(j, "x", "10"), v(j, "y", "5"), v(j, "fill", "rgba(228, 174, 110, 1.00)"), v(A, "width", "1"), v(A, "height", "1"), v(A, "x", "11"), v(A, "y", "5"), v(A, "fill", "rgba(91, 43, 42, 1.00)"), v(D, "width", "1"), v(D, "height", "1"), v(D, "x", "0"), v(D, "y", "6"), v(D, "fill", "rgba(91, 43, 42, 1.00)"), v(T, "width", "1"), v(T, "height", "1"), v(T, "x", "1"), v(T, "y", "6"), v(T, "fill", "rgba(177, 78, 5, 1.00)"), v(E, "width", "9"), v(E, "height", "1"), v(E, "x", "2"), v(E, "y", "6"), v(E, "fill", "rgba(220, 123, 5, 1.00)"), v(F, "width", "1"), v(F, "height", "1"), v(F, "x", "11"), v(F, "y", "6"), v(F, "fill", "rgba(91, 43, 42, 1.00)"), v(N, "width", "1"), v(N, "height", "1"), v(N, "x", "1"), v(N, "y", "7"), v(N, "fill", "rgba(91, 43, 42, 1.00)"), v(Y, "width", "1"), v(Y, "height", "1"), v(Y, "x", "2"), v(Y, "y", "7"), v(Y, "fill", "rgba(177, 78, 5, 1.00)"), v(G, "width", "7"), v(G, "height", "1"), v(G, "x", "3"), v(G, "y", "7"), v(G, "fill", "rgba(220, 123, 5, 1.00)"), v(R, "width", "1"), v(R, "height", "1"), v(R, "x", "10"), v(R, "y", "7"), v(R, "fill", "rgba(177, 78, 5, 1.00)"), v(X, "width", "1"), v(X, "height", "1"), v(X, "x", "11"), v(X, "y", "7"), v(X, "fill", "rgba(91, 43, 42, 1.00)"), v(L, "width", "1"), v(L, "height", "1"), v(L, "x", "2"), v(L, "y", "8"), v(L, "fill", "rgba(91, 43, 42, 1.00)"), v(q, "width", "1"), v(q, "height", "1"), v(q, "x", "3"), v(q, "y", "8"), v(q, "fill", "rgba(177, 78, 5, 1.00)"), v(U, "width", "1"), v(U, "height", "1"), v(U, "x", "4"), v(U, "y", "8"), v(U, "fill", "rgba(177, 78, 5, 1.00)"), v(W, "width", "6"), v(W, "height", "1"), v(W, "x", "5"), v(W, "y", "8"), v(W, "fill", "rgba(91, 43, 42, 1.00)"), v(H, "width", "1"), v(H, "height", "1"), v(H, "x", "3"), v(H, "y", "9"), v(H, "fill", "rgba(91, 43, 42, 1.00)"), v(z, "width", "1"), v(z, "height", "1"), v(z, "x", "4"), v(z, "y", "9"), v(z, "fill", "rgba(177, 78, 5, 1.00)"), v(B, "width", "1"), v(B, "height", "1"), v(B, "x", "5"), v(B, "y", "9"), v(B, "fill", "rgba(91, 43, 42, 1.00)"), v(V, "width", "2"), v(V, "height", "1"), v(V, "x", "4"), v(V, "y", "10"), v(V, "fill", "rgba(91, 43, 42, 1.00)"), v(o, "id", "pppixelate-pattern"), v(o, "width", "20"), v(o, "height", "20"), v(o, "patternUnits", "userSpaceOnUse"), v(o, "patternTransform", "translate(0 0) scale(40) rotate(0)"), v(o, "shape-rendering", "crispEdges"), v(J, "width", "100%"), v(J, "height", "100%"), v(J, "fill", "url(#pppixelate-pattern)"), v(n, "xmlns", "http://www.w3.org/2000/svg"), v(n, "version", "1.1"), v(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"), v(n, "xmlns:svgjs", "http://svgjs.dev/svgjs"), v(n, "viewBox", "0 0 480 480"), v(n, "preserveAspectRatio", "xMidYMid slice"), v(n, "class", "svelte-17yx17q"), v(r, "style", K = "right" === e[1] ? "right: 0px; --dir: -1":"--dir: 1"),v(r,"class","svelte - 17yx17q")},m(t,f){c(t,r,f),u(r,n),u(n,i),u(i,o),u(o,s),u(o,l),u(o,h),u(o,y),u(o,m),u(o,b),u(o,$),u(o,I),u(o,S),u(o,w),u(o,k),u(o,x),u(o,C),u(o,_),u(o,M),u(o,O),u(o,P),u(o,j),u(o,A),u(o,D),u(o,T),u(o,E),u(o,F),u(o,N),u(o,Y),u(o,G),u(o,R),u(o,X),u(o,L),u(o,q),u(o,U),u(o,W),u(o,H),u(o,z),u(o,B),u(o,V),u(n,J),Q||(Z=g(r,"click",(function(){a(e[0])&&e[0].apply(this,arguments)})),Q=!0)},p(t,[n]){e=t,2&n&&K!==(K="right"===e[1]?"right: 0px; --dir: -1":"--dir: 1")&&v(r,"style",K)},i:t,o:t,d(t){t&&f(r),Q=!1,Z()}}}function Ot(t,e,r){let{onclick:n}=e,{dir:a="left"}=e;
                return t.$$set = t => { "onclick" in t && r(0, n = t.onclick), "dir" in t && r(1, a = t.dir) }, [n, a]
            }class Pt extends B{ constructor(t){ super(), z(this, t, Ot, Mt, i, { onclick: 0, dir: 1 }) } } function jt(e) {
                let r;
                return { c() { r = d("div"), v(r, "class", "line svelte-1cn2wbl") }, m(t, e) { c(t, r, e) }, p: t, i: t, o: t, d(t) { t && f(r) } }
            } class At extends B { constructor(t) { super(), z(this, t, null, jt, i, {}) } } function Dt(e) {
                let r, n, a, i, o, s, l, p, h, g;
                return a = new Pt({ props: { onclick: e[1], dir: "left" } }), o = new At({}), h = new Pt({ props: { onclick: e[2], dir: "right" } }), { c() { r = d("div"), n = d("div"), q(a.$$.fragment), i = y(), q(o.$$.fragment), s = y(), l = d("canvas"), p = y(), q(h.$$.fragment), v(l, "width", "640"), v(l, "height", "128"), v(n, "class", "inner svelte-1oxb2e4"), v(r, "class", "outer svelte-1oxb2e4") }, m(t, f) { c(t, r, f), u(r, n), U(a, n, null), u(n, i), U(o, n, null), u(n, s), u(n, l), e[7](l), u(n, p), U(h, n, null), g = !0 }, p: t, i(t) { g || (R(a.$$.fragment, t), R(o.$$.fragment, t), R(h.$$.fragment, t), g = !0) }, o(t) { X(a.$$.fragment, t), X(o.$$.fragment, t), X(h.$$.fragment, t), g = !1 }, d(t) { t && f(r), W(a), W(o), e[7](null), W(h) } }
            } function Tt(t, e, r) {
                let n, a, { skinId: i } = e, { bodySprite: o } = e, { skinData: s } = e, { eyeColor: l } = e;
                k((() => { a = at(n), o.callbacks.push((() => u())), u() })), x((() => u()));
                const u = () => {
                    if (!a || !o.complete || !s) return;
                    let t = (i || 1) - 1;
                    c(t - 2, 0), c(t - 1, 1), c(t + 0, 2), c(t + 1, 3), c(t + 2, 4), it(a), ot(a)
                }, c = (t, e) => {
                    t = (t < 0 ? 24 + t : t) % 24, a.clearRect(128 * e, 0, 128, 128), a.drawImage(o, 0, 0, 16, 15, 128 * e, -16, 128, 120);
                    for (var r = 0;
                        r < 12;
                        r += 4)Z(a, s.slice(r, r + 3), s.slice(12 * t + r, 12 * t + r + 3), [128 * e, 0, 128 * e + 128, 128]);
                    a.fillStyle = l, a.fillRect(128 * e + 48, 72, 8, 16), a.fillRect(128 * e + 72, 72, 8, 16)
                };
                return t.$$set = t => { "skinId" in t && r(3, i = t.skinId), "bodySprite" in t && r(4, o = t.bodySprite), "skinData" in t && r(5, s = t.skinData), "eyeColor" in t && r(6, l = t.eyeColor) }, [n, () => r(3, i = (i + 22) % 24 + 1), () => r(3, i = i % 24 + 1), i, o, s, l, function (t) { _[t ? "unshift" : "push"]((() => { n = t, r(0, n) })) }]
            } class Et extends B { constructor(t) { super(), z(this, t, Tt, Dt, i, { skinId: 3, bodySprite: 4, skinData: 5, eyeColor: 6 }) } } function Ft(e) {
                let r, n, a, i, o, s, l, p, h, g;
                return a = new Pt({ props: { onclick: e[1], dir: "left" } }), o = new At({}), h = new Pt({ props: { onclick: e[2], dir: "right" } }), { c() { r = d("div"), n = d("div"), q(a.$$.fragment), i = y(), q(o.$$.fragment), s = y(), l = d("canvas"), p = y(), q(h.$$.fragment), v(l, "width", "640"), v(l, "height", "128"), v(n, "class", "inner svelte-1oxb2e4"), v(r, "class", "outer svelte-1oxb2e4") }, m(t, f) { c(t, r, f), u(r, n), U(a, n, null), u(n, i), U(o, n, null), u(n, s), u(n, l), e[7](l), u(n, p), U(h, n, null), g = !0 }, p: t, i(t) { g || (R(a.$$.fragment, t), R(o.$$.fragment, t), R(h.$$.fragment, t), g = !0) }, o(t) { X(a.$$.fragment, t), X(o.$$.fragment, t), X(h.$$.fragment, t), g = !1 }, d(t) { t && f(r), W(a), W(o), e[7](null), W(h) } }
            } function Nt(t, e, r) {
                let n, a, { shirtId: i } = e, { shirtSprite: o } = e, { bodySprite: s } = e, { skinColors: l } = e;
                k((() => { a = at(n), o.callbacks.push((() => u())), s.callbacks.push((() => u())), u() })), x((() => u()));
                const u = () => {
                    if (!a || !o.complete || !s.complete) return;
                    let t = (i || 1) - 1;
                    c(t - 2, 0), c(t - 1, 1), c(t + 0, 2), c(t + 1, 3), c(t + 2, 4), it(a), ot(a), l && (Z(a, [107, 0, 58], l[0], [0, 0, 640, 128]), Z(a, [224, 107, 101], l[1], [0, 0, 640, 128]), Z(a, [249, 174, 137], l[2], [0, 0, 640, 128]))
                }, c = (t, e) => {
                    t = (t < 0 ? 112 + t : t) % 112, a.clearRect(128 * e, 0, 128, 128);
                    let r = t % 16 * 8, n = 32 * parseInt(t / 16);
                    a.drawImage(s, 96, 0, 16, 32, 128 * e, -120, 128, 256), a.drawImage(o, r, n, 8, 8, 128 * e + 32, 0, 64, 64), Z(a, [142, 31, 12], a.getImageData(128 * e + 36, 20, 1, 1).data.slice(0, 3), [128 * e, 0, 128 * e + 128, 128]), Z(a, [112, 23, 24], a.getImageData(128 * e + 36, 28, 1, 1).data.slice(0, 3), [128 * e, 0, 128 * e + 128, 128]), Z(a, [74, 12, 6], a.getImageData(128 * e + 36, 36, 1, 1).data.slice(0, 3), [128 * e, 0, 128 * e + 128, 128])
                };
                return t.$$set = t => { "shirtId" in t && r(3, i = t.shirtId), "shirtSprite" in t && r(4, o = t.shirtSprite), "bodySprite" in t && r(5, s = t.bodySprite), "skinColors" in t && r(6, l = t.skinColors) }, [n, () => r(3, i = (i + 110) % 112 + 1), () => r(3, i = i % 112 + 1), i, o, s, l, function (t) { _[t ? "unshift" : "push"]((() => { n = t, r(0, n) })) }]
            } class Yt extends B { constructor(t) { super(), z(this, t, Nt, Ft, i, { shirtId: 3, shirtSprite: 4, bodySprite: 5, skinColors: 6 }) } } function Gt(e) {
                let r, n, a, i, o, s, l, p, h, g;
                return a = new Pt({ props: { onclick: e[1], dir: "left" } }), o = new At({}), h = new Pt({ props: { onclick: e[2], dir: "right" } }), { c() { r = d("div"), n = d("div"), q(a.$$.fragment), i = y(), q(o.$$.fragment), s = y(), l = d("canvas"), p = y(), q(h.$$.fragment), v(l, "width", "640"), v(l, "height", "128"), v(n, "class", "inner svelte-1oxb2e4"), v(r, "class", "outer svelte-1oxb2e4") }, m(t, f) { c(t, r, f), u(r, n), U(a, n, null), u(n, i), U(o, n, null), u(n, s), u(n, l), e[6](l), u(n, p), U(h, n, null), g = !0 }, p: t, i(t) { g || (R(a.$$.fragment, t), R(o.$$.fragment, t), R(h.$$.fragment, t), g = !0) }, o(t) { X(a.$$.fragment, t), X(o.$$.fragment, t), X(h.$$.fragment, t), g = !1 }, d(t) { t && f(r), W(a), W(o), e[6](null), W(h) } }
            } function Rt(t, e, r) {
                let n, a, { pantId: i } = e, { pantColor: o } = e, { pantSprite: s } = e;
                k((() => { a = at(n), s.callbacks.push((() => l())), l() })), x((() => l()));
                const l = () => {
                    if (!a || !s.complete) return;
                    let t = (i || 1) - 1;
                    u(t - 2, 0), u(t - 1, 1), u(t + 0, 2), u(t + 1, 3), u(t + 2, 4), Q(a, o, [0, 0, 640, 128]), it(a), ot(a)
                }, u = (t, e) => { t = (t < 0 ? 4 + t : t) % 4, a.clearRect(128 * e, 0, 128, 128), a.drawImage(s, 192 * t, 0, 16, 32, 128 * e, -128, 128, 256) };
                return t.$$set = t => { "pantId" in t && r(3, i = t.pantId), "pantColor" in t && r(4, o = t.pantColor), "pantSprite" in t && r(5, s = t.pantSprite) }, [n, () => r(3, i = (i + 2) % 4 + 1), () => r(3, i = i % 4 + 1), i, o, s, function (t) { _[t ? "unshift" : "push"]((() => { n = t, r(0, n) })) }]
            } class Xt extends B { constructor(t) { super(), z(this, t, Rt, Gt, i, { pantId: 3, pantColor: 4, pantSprite: 5 }) } } function Lt(e) {
                let r, n, a, i, o, s, l, p, h, g;
                return a = new Pt({ props: { onclick: e[1], dir: "left" } }), o = new At({}), h = new Pt({ props: { onclick: e[2], dir: "right" } }), { c() { r = d("div"), n = d("div"), q(a.$$.fragment), i = y(), q(o.$$.fragment), s = y(), l = d("canvas"), p = y(), q(h.$$.fragment), v(l, "width", "640"), v(l, "height", "128"), v(n, "class", "inner svelte-1oxb2e4"), v(r, "class", "outer svelte-1oxb2e4") }, m(t, f) { c(t, r, f), u(r, n), U(a, n, null), u(n, i), U(o, n, null), u(n, s), u(n, l), e[7](l), u(n, p), U(h, n, null), g = !0 }, p: t, i(t) { g || (R(a.$$.fragment, t), R(o.$$.fragment, t), R(h.$$.fragment, t), g = !0) }, o(t) { X(a.$$.fragment, t), X(o.$$.fragment, t), X(h.$$.fragment, t), g = !1 }, d(t) { t && f(r), W(a), W(o), e[7](null), W(h) } }
            } function qt(t, e, r) {
                let n, a, { hairId: i } = e, { hairColor: o } = e, { hairSprite: s } = e, { hairFancySprite: l } = e;
                k((() => { a = at(n), s.callbacks.push((() => u())), l.callbacks.push((() => u())), u() })), x((() => u()));
                const u = () => {
                    if (!a || !s.complete || !l.complete) return;
                    let t = (i || 1) - 1;
                    c(t - 2, 0), c(t - 1, 1), c(t + 0, 2), c(t + 1, 3), c(t + 2, 4), Q(a, o, [0, 0, 640, 128]), it(a), ot(a)
                }, c = (t, e) => {
                    const r = (t = (t < 0 ? 79 + t : t) % 79) > 55, n = (t = r ? t - 56 : t) % 8 * 16, i = parseInt(t / 8) * (r ? 128 : 96);
                    a.clearRect(128 * e, 0, 128, 128), a.drawImage(r ? l : s, n, i, 16, 32, 128 * e, r ? -24 : -16, 128, 256)
                };
                return t.$$set = t => { "hairId" in t && r(3, i = t.hairId), "hairColor" in t && r(4, o = t.hairColor), "hairSprite" in t && r(5, s = t.hairSprite), "hairFancySprite" in t && r(6, l = t.hairFancySprite) }, [n, () => r(3, i = (i + 77) % 79 + 1), () => r(3, i = i % 79 + 1), i, o, s, l, function (t) { _[t ? "unshift" : "push"]((() => { n = t, r(0, n) })) }]
            } class Ut extends B { constructor(t) { super(), z(this, t, qt, Lt, i, { hairId: 3, hairColor: 4, hairSprite: 5, hairFancySprite: 6 }) } } function Wt(e) {
                let r, n, a, i, o, s, l, p, h, g, m, b;
                return a = new Pt({ props: { onclick: e[2], dir: "left" } }), o = new At({}), m = new Pt({ props: { onclick: e[3], dir: "right" } }), { c() { r = d("div"), n = d("div"), q(a.$$.fragment), i = y(), q(o.$$.fragment), s = y(), l = d("canvas"), p = y(), h = d("canvas"), g = y(), q(m.$$.fragment), v(l, "width", "640"), v(l, "height", "128"), I(l, "position", "absolute"), v(h, "width", "640"), v(h, "height", "128"), I(h, "position", "relative"), I(h, "z-index", "100"), v(n, "class", "inner svelte-1oxb2e4"), v(r, "class", "outer svelte-1oxb2e4") }, m(t, f) { c(t, r, f), u(r, n), U(a, n, null), u(n, i), U(o, n, null), u(n, s), u(n, l), e[11](l), u(n, p), u(n, h), e[12](h), u(n, g), U(m, n, null), b = !0 }, p: t, i(t) { b || (R(a.$$.fragment, t), R(o.$$.fragment, t), R(m.$$.fragment, t), b = !0) }, o(t) { X(a.$$.fragment, t), X(o.$$.fragment, t), X(m.$$.fragment, t), b = !1 }, d(t) { t && f(r), W(a), W(o), e[11](null), e[12](null), W(m) } }
            } function Ht(t, e, r) {
                let n, a, i, o, { skinId: s } = e, { bodySprite: l } = e, { skinData: u } = e, { eyeColor: c } = e, { hairColor: f } = e, { accessoryId: d } = e, { accessorySprite: p } = e;
                k((() => { a = at(n), o = at(i), l.callbacks.push((() => h())), p.callbacks.push((() => h())), h() })), x((() => h()));
                const h = () => {
                    if (!(o && l.complete && u && p.complete)) return;
                    let t = (s || 1) - 1;
                    [0, 1, 2, 3, 4].forEach((e => g(t, e)));
                    let e = (d || 1) - 2;
                    y(e - 2, 0), y(e - 1, 1), y(e + 0, 2), y(e + 1, 3), y(e + 2, 4), it(o), it(a), ot(o), ot(a)
                }, y = (t, e) => {
                    t = (t < 0 ? 20 + t : t) % 20, o.clearRect(128 * e, 0, 128, 128);
                    const r = t % 8 * 16, n = 32 * parseInt(t / 8);
                    o.drawImage(p, r, n, 16, 15, 128 * e, 0, 128, 120), t < 6 && Q(o, f, [128 * e, 0, 128, 120])
                }, g = (t, e) => {
                    t = (t < 0 ? 24 + t : t) % 24, a.clearRect(128 * e, 0, 128, 128), a.drawImage(l, 0, 0, 16, 15, 128 * e, -16, 128, 120);
                    for (var r = 0;
                        r < 12;
                        r += 4)Z(a, u.slice(r, r + 3), u.slice(12 * t + r, 12 * t + r + 3), [128 * e, 0, 128 * e + 128, 128]);
                    a.fillStyle = c, a.fillRect(128 * e + 48, 72, 8, 16), a.fillRect(128 * e + 72, 72, 8, 16)
                };
                return t.$$set = t => { "skinId" in t && r(5, s = t.skinId), "bodySprite" in t && r(6, l = t.bodySprite), "skinData" in t && r(7, u = t.skinData), "eyeColor" in t && r(8, c = t.eyeColor), "hairColor" in t && r(9, f = t.hairColor), "accessoryId" in t && r(4, d = t.accessoryId), "accessorySprite" in t && r(10, p = t.accessorySprite) }, [n, i, () => r(4, d = (d + 18) % 20 + 1), () => r(4, d = d % 20 + 1), d, s, l, u, c, f, p, function (t) { _[t ? "unshift" : "push"]((() => { n = t, r(0, n) })) }, function (t) { _[t ? "unshift" : "push"]((() => { i = t, r(1, i) })) }]
            } class zt extends B { constructor(t) { super(), z(this, t, Ht, Wt, i, { skinId: 5, bodySprite: 6, skinData: 7, eyeColor: 8, hairColor: 9, accessoryId: 4, accessorySprite: 10 }) } } function Bt(t) {
                let e, r, n, a, i, o, s, l, p, h, g, m, b, $, I, S, w, k, x;
                function C(e) { t[16](e) } function M(e) { t[17](e) } let O = { hairSprite: t[8], hairFancySprite: t[9] };
                function P(e) { t[18](e) } function j(e) { t[19](e) } void 0 !== t[1] && (O.hairId = t[1]), void 0 !== t[0] && (O.hairColor = t[0]), r = new Ut({ props: O }), _.push((() => L(r, "hairId", C))), _.push((() => L(r, "hairColor", M)));
                let A = { bodySprite: t[10], skinData: t[12] };
                function T(e) { t[20](e) } void 0 !== t[3] && (A.skinId = t[3]), void 0 !== t[2] && (A.eyeColor = t[2]), o = new Et({ props: A }), _.push((() => L(o, "skinId", P))), _.push((() => L(o, "eyeColor", j)));
                let E = { shirtSprite: t[13], bodySprite: t[10], skinColors: t[11] };
                function F(e) { t[21](e) } function N(e) { t[22](e) } void 0 !== t[4] && (E.shirtId = t[4]), h = new Yt({ props: E }), _.push((() => L(h, "shirtId", T)));
                let Y = { pantSprite: t[14] };
                function G(e) { t[23](e) } void 0 !== t[6] && (Y.pantId = t[6]), void 0 !== t[5] && (Y.pantColor = t[5]), b = new Xt({ props: Y }), _.push((() => L(b, "pantId", F))), _.push((() => L(b, "pantColor", N)));
                let H = { bodySprite: t[10], skinId: t[3], skinData: t[12], eyeColor: t[2], hairColor: t[0], accessorySprite: t[15] };
                return void 0 !== t[7] && (H.accessoryId = t[7]), w = new zt({ props: H }), _.push((() => L(w, "accessoryId", G))), {
                    c() { e = d("div"), q(r.$$.fragment), i = y(), q(o.$$.fragment), p = y(), q(h.$$.fragment), m = y(), q(b.$$.fragment), S = y(), q(w.$$.fragment), v(e, "class", "svelte-brr2ul") }, m(t, n) { c(t, e, n), U(r, e, null), u(e, i), U(o, e, null), u(e, p), U(h, e, null), u(e, m), U(b, e, null), u(e, S), U(w, e, null), x = !0 }, p(t, [e]) {
                        const i = {};
                        256 & e && (i.hairSprite = t[8]), 512 & e && (i.hairFancySprite = t[9]), !n && 2 & e && (n = !0, i.hairId = t[1], D((() => n = !1))), !a && 1 & e && (a = !0, i.hairColor = t[0], D((() => a = !1))), r.$set(i);
                        const u = {};
                        1024 & e && (u.bodySprite = t[10]), 4096 & e && (u.skinData = t[12]), !s && 8 & e && (s = !0, u.skinId = t[3], D((() => s = !1))), !l && 4 & e && (l = !0, u.eyeColor = t[2], D((() => l = !1))), o.$set(u);
                        const c = {};
                        8192 & e && (c.shirtSprite = t[13]), 1024 & e && (c.bodySprite = t[10]), 2048 & e && (c.skinColors = t[11]), !g && 16 & e && (g = !0, c.shirtId = t[4], D((() => g = !1))), h.$set(c);
                        const f = {};
                        16384 & e && (f.pantSprite = t[14]), !$ && 64 & e && ($ = !0, f.pantId = t[6], D((() => $ = !1))), !I && 32 & e && (I = !0, f.pantColor = t[5], D((() => I = !1))), b.$set(f);
                        const d = {};
                        1024 & e && (d.bodySprite = t[10]), 8 & e && (d.skinId = t[3]), 4096 & e && (d.skinData = t[12]), 4 & e && (d.eyeColor = t[2]), 1 & e && (d.hairColor = t[0]), 32768 & e && (d.accessorySprite = t[15]), !k && 128 & e && (k = !0, d.accessoryId = t[7], D((() => k = !1))), w.$set(d)
                    }, i(t) { x || (R(r.$$.fragment, t), R(o.$$.fragment, t), R(h.$$.fragment, t), R(b.$$.fragment, t), R(w.$$.fragment, t), x = !0) }, o(t) { X(r.$$.fragment, t), X(o.$$.fragment, t), X(h.$$.fragment, t), X(b.$$.fragment, t), X(w.$$.fragment, t), x = !1 }, d(t) { t && f(e), W(r), W(o), W(h), W(b), W(w) }
                }
            } function Vt(t, e, r) {
                let { hairColor: n = "#c15b32" } = e, { hairId: a = 1 } = e, { hairSprite: i } = e, { hairFancySprite: o } = e, { eyeColor: s = "#7a4434" } = e, { skinId: l = 1 } = e, { bodySprite: u } = e, { skinColors: c } = e, { skinData: f } = e, { shirtId: d = 1 } = e, { shirtSprite: p } = e, { pantColor: h = "#2e55b7" } = e, { pantId: y = 1 } = e, { pantSprite: g } = e, { accessoryId: v = 5 } = e, { accessorySprite: m } = e;
                return t.$$set = t => { "hairColor" in t && r(0, n = t.hairColor), "hairId" in t && r(1, a = t.hairId), "hairSprite" in t && r(8, i = t.hairSprite), "hairFancySprite" in t && r(9, o = t.hairFancySprite), "eyeColor" in t && r(2, s = t.eyeColor), "skinId" in t && r(3, l = t.skinId), "bodySprite" in t && r(10, u = t.bodySprite), "skinColors" in t && r(11, c = t.skinColors), "skinData" in t && r(12, f = t.skinData), "shirtId" in t && r(4, d = t.shirtId), "shirtSprite" in t && r(13, p = t.shirtSprite), "pantColor" in t && r(5, h = t.pantColor), "pantId" in t && r(6, y = t.pantId), "pantSprite" in t && r(14, g = t.pantSprite), "accessoryId" in t && r(7, v = t.accessoryId), "accessorySprite" in t && r(15, m = t.accessorySprite) }, [n, a, s, l, d, h, y, v, i, o, u, c, f, p, g, m, function (t) { a = t, r(1, a) }, function (t) { n = t, r(0, n) }, function (t) { l = t, r(3, l) }, function (t) { s = t, r(2, s) }, function (t) { d = t, r(4, d) }, function (t) { y = t, r(6, y) }, function (t) { h = t, r(5, h) }, function (t) { v = t, r(7, v) }]
            } class Jt extends B { constructor(t) { super(), z(this, t, Vt, Bt, i, { hairColor: 0, hairId: 1, hairSprite: 8, hairFancySprite: 9, eyeColor: 2, skinId: 3, bodySprite: 10, skinColors: 11, skinData: 12, shirtId: 4, shirtSprite: 13, pantColor: 5, pantId: 6, pantSprite: 14, accessoryId: 7, accessorySprite: 15 }) } } function Kt(e) {
                let r, a, i, o, s, l, p;
                return { c() { r = d("div"), a = d("label"), i = h(e[1]), o = y(), s = d("input"), v(a, "for", "input"), v(a, "class", "svelte-wt55z6"), v(s, "type", "number"), v(s, "min", e[2]), v(s, "max", e[3]), v(s, "class", "svelte-wt55z6"), v(r, "class", "svelte-wt55z6") }, m(t, n) { c(t, r, n), u(r, a), u(a, i), u(r, o), u(r, s), $(s, e[0]), l || (p = [g(s, "input", e[5]), g(s, "change", e[4])], l = !0) }, p(t, [e]) { 2 & e && b(i, t[1]), 4 & e && v(s, "min", t[2]), 8 & e && v(s, "max", t[3]), 1 & e && m(s.value) !== t[0] && $(s, t[0]) }, i: t, o: t, d(t) { t && f(r), l = !1, n(p) } }
            } function Qt(t, e, r) {
                let { value: n } = e, { label: a } = e, { min: i = 1 } = e, { max: o } = e;
                return t.$$set = t => { "value" in t && r(0, n = t.value), "label" in t && r(1, a = t.label), "min" in t && r(2, i = t.min), "max" in t && r(3, o = t.max) }, [n, a, i, o, () => { r(0, n = Math.min(Math.max(n, i), o)) }, function () { n = m(this.value), r(0, n) }]
            } class Zt extends B { constructor(t) { super(), z(this, t, Qt, Kt, i, { value: 0, label: 1, min: 2, max: 3 }) } } function te(e) {
                let r, n, a, i, o, s, l;
                return { c() { r = d("div"), n = d("label"), a = h(e[1]), i = y(), o = d("input"), v(n, "for", "input"), v(n, "class", "svelte-1cewr8h"), v(o, "type", "color"), v(o, "class", "svelte-1cewr8h"), v(r, "class", "svelte-1cewr8h") }, m(t, f) { c(t, r, f), u(r, n), u(n, a), u(r, i), u(r, o), $(o, e[0]), s || (l = g(o, "input", e[2]), s = !0) }, p(t, [e]) { 2 & e && b(a, t[1]), 1 & e && $(o, t[0]) }, i: t, o: t, d(t) { t && f(r), s = !1, l() } }
            } function ee(t, e, r) {
                let { value: n } = e, { label: a } = e;
                return t.$$set = t => { "value" in t && r(0, n = t.value), "label" in t && r(1, a = t.label) }, [n, a, function () { n = this.value, r(0, n) }]
            } class re extends B { constructor(t) { super(), z(this, t, ee, te, i, { value: 0, label: 1 }) } } function ne(t) {
                let e, r, n, a, i, o, s, l, p, h, g, m, b, $, I, S, w, k, x, C, M, O, P, j, A;
                function T(e) { t[8](e) } let E = { label: "Hair", max: 79 };
                function F(e) { t[9](e) } void 0 !== t[1] && (E.value = t[1]), r = new Zt({ props: E }), _.push((() => L(r, "value", T)));
                let N = { label: "Hair Color" };
                function Y(e) { t[10](e) } void 0 !== t[0] && (N.value = t[0]), i = new re({ props: N }), _.push((() => L(i, "value", F)));
                let G = { label: "Skin", max: 24 };
                function H(e) { t[11](e) } void 0 !== t[3] && (G.value = t[3]), l = new Zt({ props: G }), _.push((() => L(l, "value", Y)));
                let z = { label: "Eye Color" };
                function B(e) { t[12](e) } void 0 !== t[2] && (z.value = t[2]), g = new re({ props: z }), _.push((() => L(g, "value", H)));
                let V = { label: "Shirt", max: 112 };
                function J(e) { t[13](e) } void 0 !== t[4] && (V.value = t[4]), $ = new Zt({ props: V }), _.push((() => L($, "value", B)));
                let K = { label: "Pants", max: 4 };
                function Q(e) { t[14](e) } void 0 !== t[6] && (K.value = t[6]), w = new Zt({ props: K }), _.push((() => L(w, "value", J)));
                let Z = { label: "Pants Color" };
                function tt(e) { t[15](e) } void 0 !== t[5] && (Z.value = t[5]), C = new re({ props: Z }), _.push((() => L(C, "value", Q)));
                let et = { label: "Accessory", max: 31 };
                return void 0 !== t[7] && (et.value = t[7]), P = new Zt({ props: et }), _.push((() => L(P, "value", tt))), {
                    c() { e = d("div"), q(r.$$.fragment), a = y(), q(i.$$.fragment), s = y(), q(l.$$.fragment), h = y(), q(g.$$.fragment), b = y(), q($.$$.fragment), S = y(), q(w.$$.fragment), x = y(), q(C.$$.fragment), O = y(), q(P.$$.fragment), v(e, "class", "svelte-i2ij6c") }, m(t, n) { c(t, e, n), U(r, e, null), u(e, a), U(i, e, null), u(e, s), U(l, e, null), u(e, h), U(g, e, null), u(e, b), U($, e, null), u(e, S), U(w, e, null), u(e, x), U(C, e, null), u(e, O), U(P, e, null), A = !0 }, p(t, [e]) {
                        const a = {};
                        !n && 2 & e && (n = !0, a.value = t[1], D((() => n = !1))), r.$set(a);
                        const s = {};
                        !o && 1 & e && (o = !0, s.value = t[0], D((() => o = !1))), i.$set(s);
                        const u = {};
                        !p && 8 & e && (p = !0, u.value = t[3], D((() => p = !1))), l.$set(u);
                        const c = {};
                        !m && 4 & e && (m = !0, c.value = t[2], D((() => m = !1))), g.$set(c);
                        const f = {};
                        !I && 16 & e && (I = !0, f.value = t[4], D((() => I = !1))), $.$set(f);
                        const d = {};
                        !k && 64 & e && (k = !0, d.value = t[6], D((() => k = !1))), w.$set(d);
                        const h = {};
                        !M && 32 & e && (M = !0, h.value = t[5], D((() => M = !1))), C.$set(h);
                        const y = {};
                        !j && 128 & e && (j = !0, y.value = t[7], D((() => j = !1))), P.$set(y)
                    }, i(t) { A || (R(r.$$.fragment, t), R(i.$$.fragment, t), R(l.$$.fragment, t), R(g.$$.fragment, t), R($.$$.fragment, t), R(w.$$.fragment, t), R(C.$$.fragment, t), R(P.$$.fragment, t), A = !0) }, o(t) { X(r.$$.fragment, t), X(i.$$.fragment, t), X(l.$$.fragment, t), X(g.$$.fragment, t), X($.$$.fragment, t), X(w.$$.fragment, t), X(C.$$.fragment, t), X(P.$$.fragment, t), A = !1 }, d(t) { t && f(e), W(r), W(i), W(l), W(g), W($), W(w), W(C), W(P) }
                }
            } function ae(t, e, r) {
                let { hairColor: n } = e, { hairId: a } = e, { eyeColor: i } = e, { skinId: o } = e, { shirtId: s } = e, { pantColor: l } = e, { pantId: u } = e, { accessoryId: c } = e;
                return t.$$set = t => { "hairColor" in t && r(0, n = t.hairColor), "hairId" in t && r(1, a = t.hairId), "eyeColor" in t && r(2, i = t.eyeColor), "skinId" in t && r(3, o = t.skinId), "shirtId" in t && r(4, s = t.shirtId), "pantColor" in t && r(5, l = t.pantColor), "pantId" in t && r(6, u = t.pantId), "accessoryId" in t && r(7, c = t.accessoryId) }, [n, a, i, o, s, l, u, c, function (t) { a = t, r(1, a) }, function (t) { n = t, r(0, n) }, function (t) { o = t, r(3, o) }, function (t) { i = t, r(2, i) }, function (t) { s = t, r(4, s) }, function (t) { u = t, r(6, u) }, function (t) { l = t, r(5, l) }, function (t) { c = t, r(7, c) }]
            } class ie extends B { constructor(t) { super(), z(this, t, ae, ne, i, { hairColor: 0, hairId: 1, eyeColor: 2, skinId: 3, shirtId: 4, pantColor: 5, pantId: 6, accessoryId: 7 }) } } function oe(t) {
                let e, r, n, a, i, o, s, l, p, h, m, b, $, S, w, k, x, C, M, O, P, j, A, T, E, F, N, Y, G, H, z, B, V, J, K, Q, Z, tt, et;
                function rt(e) { t[21](e) } function nt(e) { t[22](e) } function at(e) { t[23](e) } let it = { hairColor: t[0], hairId: t[1], hairSprite: t[12], hairFancySprite: t[13], eyeColor: t[2], eyeSprite: t[14], skinId: t[3], bodySprite: t[15], skinSprite: t[16], shirtId: t[4], shirtSprite: t[17], pantColor: t[5], pantId: t[6], pantSprite: t[18], accessoryId: t[7], accessorySprite: t[19] };
                function ot(e) { t[24](e) } function st(e) { t[25](e) } function lt(e) { t[26](e) } function ut(e) { t[27](e) } function ct(e) { t[28](e) } function ft(e) { t[29](e) } function dt(e) { t[30](e) } function pt(e) { t[31](e) } void 0 !== t[9] && (it.skinColors = t[9]), void 0 !== t[10] && (it.skinData = t[10]), void 0 !== t[8] && (it.petId = t[8]), n = new _t({ props: it }), _.push((() => L(n, "skinColors", rt))), _.push((() => L(n, "skinData", nt))), _.push((() => L(n, "petId", at)));
                let ht = { hairSprite: t[12], hairFancySprite: t[13], bodySprite: t[15], skinColors: t[9], skinData: t[10], shirtSprite: t[17], pantSprite: t[18], accessorySprite: t[19] };
                function yt(e) { t[32](e) } function gt(e) { t[33](e) } function vt(e) { t[34](e) } function mt(e) { t[35](e) } function bt(e) { t[36](e) } function $t(e) { t[37](e) } function It(e) { t[38](e) } function St(e) { t[39](e) } void 0 !== t[0] && (ht.hairColor = t[0]), void 0 !== t[1] && (ht.hairId = t[1]), void 0 !== t[2] && (ht.eyeColor = t[2]), void 0 !== t[3] && (ht.skinId = t[3]), void 0 !== t[4] && (ht.shirtId = t[4]), void 0 !== t[5] && (ht.pantColor = t[5]), void 0 !== t[6] && (ht.pantId = t[6]), void 0 !== t[7] && (ht.accessoryId = t[7]), C = new Jt({ props: ht }), _.push((() => L(C, "hairColor", ot))), _.push((() => L(C, "hairId", st))), _.push((() => L(C, "eyeColor", lt))), _.push((() => L(C, "skinId", ut))), _.push((() => L(C, "shirtId", ct))), _.push((() => L(C, "pantColor", ft))), _.push((() => L(C, "pantId", dt))), _.push((() => L(C, "accessoryId", pt)));
                let wt = {};
                return void 0 !== t[0] && (wt.hairColor = t[0]), void 0 !== t[1] && (wt.hairId = t[1]), void 0 !== t[2] && (wt.eyeColor = t[2]), void 0 !== t[3] && (wt.skinId = t[3]), void 0 !== t[4] && (wt.shirtId = t[4]), void 0 !== t[5] && (wt.pantColor = t[5]), void 0 !== t[6] && (wt.pantId = t[6]), void 0 !== t[7] && (wt.accessoryId = t[7]), Y = new ie({ props: wt }), _.push((() => L(Y, "hairColor", yt))), _.push((() => L(Y, "hairId", gt))), _.push((() => L(Y, "eyeColor", vt))), _.push((() => L(Y, "skinId", mt))), _.push((() => L(Y, "shirtId", bt))), _.push((() => L(Y, "pantColor", $t))), _.push((() => L(Y, "pantId", It))), _.push((() => L(Y, "accessoryId", St))), {
                    c() { e = d("main"), r = d("div"), q(n.$$.fragment), s = y(), l = d("div"), p = d("p"), p.innerHTML = "<b>Stardew valley character creator</b>", h = y(), m = d("input"), $ = y(), S = d("button"), S.textContent = "Copy to Clipboard", w = y(), k = d("div"), k.innerHTML = '<a href="https://github.com/robopossum/stardew-character-creator">Source</a>-\n                <a href="https://github.com/robopossum/stardew-character-creator/issues">Submit a bug</a>', x = y(), q(C.$$.fragment), N = y(), q(Y.$$.fragment), m.value = b = t[11].join(), I(S, "cursor", "pointer"), v(k, "class", "links svelte-132ullq"), v(l, "class", "waffle svelte-132ullq"), v(r, "class", "character svelte-132ullq"), v(e, "class", "svelte-132ullq") }, m(a, i) { c(a, e, i), u(e, r), U(n, r, null), u(r, s), u(r, l), u(l, p), u(l, h), u(l, m), u(l, $), u(l, S), u(l, w), u(l, k), u(e, x), U(C, e, null), u(e, N), U(Y, e, null), Z = !0, tt || (et = g(S, "click", t[20]), tt = !0) }, p(t, e) {
                        const r = {};
                        1 & e[0] && (r.hairColor = t[0]), 2 & e[0] && (r.hairId = t[1]), 4 & e[0] && (r.eyeColor = t[2]), 8 & e[0] && (r.skinId = t[3]), 16 & e[0] && (r.shirtId = t[4]), 32 & e[0] && (r.pantColor = t[5]), 64 & e[0] && (r.pantId = t[6]), 128 & e[0] && (r.accessoryId = t[7]), !a && 512 & e[0] && (a = !0, r.skinColors = t[9], D((() => a = !1))), !i && 1024 & e[0] && (i = !0, r.skinData = t[10], D((() => i = !1))), !o && 256 & e[0] && (o = !0, r.petId = t[8], D((() => o = !1))), n.$set(r), (!Z || 2048 & e[0] && b !== (b = t[11].join()) && m.value !== b) && (m.value = b);
                        const s = {};
                        512 & e[0] && (s.skinColors = t[9]), 1024 & e[0] && (s.skinData = t[10]), !M && 1 & e[0] && (M = !0, s.hairColor = t[0], D((() => M = !1))), !O && 2 & e[0] && (O = !0, s.hairId = t[1], D((() => O = !1))), !P && 4 & e[0] && (P = !0, s.eyeColor = t[2], D((() => P = !1))), !j && 8 & e[0] && (j = !0, s.skinId = t[3], D((() => j = !1))), !A && 16 & e[0] && (A = !0, s.shirtId = t[4], D((() => A = !1))), !T && 32 & e[0] && (T = !0, s.pantColor = t[5], D((() => T = !1))), !E && 64 & e[0] && (E = !0, s.pantId = t[6], D((() => E = !1))), !F && 128 & e[0] && (F = !0, s.accessoryId = t[7], D((() => F = !1))), C.$set(s);
                        const l = {};
                        !G && 1 & e[0] && (G = !0, l.hairColor = t[0], D((() => G = !1))), !H && 2 & e[0] && (H = !0, l.hairId = t[1], D((() => H = !1))), !z && 4 & e[0] && (z = !0, l.eyeColor = t[2], D((() => z = !1))), !B && 8 & e[0] && (B = !0, l.skinId = t[3], D((() => B = !1))), !V && 16 & e[0] && (V = !0, l.shirtId = t[4], D((() => V = !1))), !J && 32 & e[0] && (J = !0, l.pantColor = t[5], D((() => J = !1))), !K && 64 & e[0] && (K = !0, l.pantId = t[6], D((() => K = !1))), !Q && 128 & e[0] && (Q = !0, l.accessoryId = t[7], D((() => Q = !1))), Y.$set(l)
                    }, i(t) { Z || (R(n.$$.fragment, t), R(C.$$.fragment, t), R(Y.$$.fragment, t), Z = !0) }, o(t) { X(n.$$.fragment, t), X(C.$$.fragment, t), X(Y.$$.fragment, t), Z = !1 }, d(t) { t && f(e), W(n), W(C), W(Y), tt = !1, et() }
                }
            } function se(t, e, r) {
                let n, a, i, { hairColor: o = "#bf5331" } = e, { hairId: s = 1 } = e, l = nt("hairstyles"), u = nt("hairstyles2"), { eyeColor: c = "#773f33" } = e, f = nt("eyes"), { skinId: d = 1 } = e, p = nt("farmer_base"), h = nt("skinColors"), { shirtId: y = 1 } = e, g = nt("shirts"), { pantColor: v = "#2f5cb5" } = e, { pantId: m = 1 } = e, b = nt("pants"), { accessoryId: $ = 1 } = e, I = nt("accessories"), { petId: S = 2 } = e;
                return t.$$set = t => { "hairColor" in t && r(0, o = t.hairColor), "hairId" in t && r(1, s = t.hairId), "eyeColor" in t && r(2, c = t.eyeColor), "skinId" in t && r(3, d = t.skinId), "shirtId" in t && r(4, y = t.shirtId), "pantColor" in t && r(5, v = t.pantColor), "pantId" in t && r(6, m = t.pantId), "accessoryId" in t && r(7, $ = t.accessoryId), "petId" in t && r(8, S = t.petId) }, t.$$.update = () => { 511 & t.$$.dirty[0] && r(11, n = [d, s, y, m, $, ...et(c), ...et(o), ...et(v), S]) }, [o, s, c, d, y, v, m, $, S, a, i, n, l, u, f, p, h, g, b, I, () => navigator.clipboard.writeText(n), function (t) { a = t, r(9, a) }, function (t) { i = t, r(10, i) }, function (t) { S = t, r(8, S) }, function (t) { o = t, r(0, o) }, function (t) { s = t, r(1, s) }, function (t) { c = t, r(2, c) }, function (t) { d = t, r(3, d) }, function (t) { y = t, r(4, y) }, function (t) { v = t, r(5, v) }, function (t) { m = t, r(6, m) }, function (t) { $ = t, r(7, $) }, function (t) { o = t, r(0, o) }, function (t) { s = t, r(1, s) }, function (t) { c = t, r(2, c) }, function (t) { d = t, r(3, d) }, function (t) { y = t, r(4, y) }, function (t) { v = t, r(5, v) }, function (t) { m = t, r(6, m) }, function (t) { $ = t, r(7, $) }]
            } const le = new URLSearchParams(window.location.search).get("input");
        let ue = {};
        if (le) {
            let [t, e, r, n, a, ...i] = le.split(",");
            ue = { skinId: t, hairId: e, shirtId: r, pantId: n, accessoryId: a, eyeColor: rt(i[0], i[1], i[2]), hairColor: rt(i[3], i[4], i[5]), pantColor: rt(i[6], i[7], i[8]), petId: parseInt(i[9] || 2) || 2 }
        } return new class extends B { constructor(t) { super(), z(this, t, se, oe, i, { hairColor: 0, hairId: 1, eyeColor: 2, skinId: 3, shirtId: 4, pantColor: 5, pantId: 6, accessoryId: 7, petId: 8 }, null, [-1, -1]) } }({ target: document.body, props: ue })
    } ();

//# sourceMappingURL=bundle.js.map
