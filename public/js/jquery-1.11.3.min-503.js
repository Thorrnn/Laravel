!function () {
    function e(e, t) {
        t.src ? h.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : h.globalEval(t.text || t.textContent || t.innerHTML || ""), t.parentNode && t.parentNode.removeChild(t)
    }

    function t() {
        return +new Date
    }

    function n(e, t) {
        return e[0] && parseInt(h.curCSS(e[0], t, !0), 10) || 0
    }

    function r() {
        return !1
    }

    function i() {
        return !0
    }

    function o(e) {
        var t = RegExp("(^|\\.)" + e.type + "(\\.|$)"), n = !0, r = [];
        return h.each(h.data(this, "events").live || [], function (n, i) {
            if (t.test(i.type)) {
                var o = h(e.target).closest(i.data)[0];
                o && r.push({elem: o, fn: i})
            }
        }), r.sort(function (e, t) {
            return h.data(e.elem, "closest") - h.data(t.elem, "closest")
        }), h.each(r, function () {
            return this.fn.call(this.elem, e, this.fn.data) === !1 ? n = !1 : void 0
        }), n
    }

    function a(e, t) {
        return ["live", e, t.replace(/\./g, "`").replace(/ /g, "|")].join(".")
    }

    function s() {
        S || (S = !0, document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
            document.removeEventListener("DOMContentLoaded", arguments.callee, !1), h.ready()
        }, !1) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), h.ready())
        }), document.documentElement.doScroll && u == u.top && function () {
            if (!h.isReady) {
                try {
                    document.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(arguments.callee, 0)
                }
                h.ready()
            }
        }()), h.event.add(u, "load", h.ready))
    }

    function l(e, t) {
        var n = {};
        return h.each(L.concat.apply([], L.slice(0, t)), function () {
            n[this] = e
        }), n
    }

    var c, u = this, d = u.jQuery, f = u.$, h = u.jQuery = u.$ = function (e, t) {
        return new h.fn.init(e, t)
    }, p = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/, m = /^.[^:#\[\.,]*$/;
    h.fn = h.prototype = {
        init: function (e, t) {
            if (e = e || document, e.nodeType) return this[0] = e, this.length = 1, this.context = e, this;
            if ("string" == typeof e) {
                var n = p.exec(e);
                if (!n || !n[1] && t) return h(t).find(e);
                if (!n[1]) {
                    var r = document.getElementById(n[3]);
                    if (r && r.id != n[3]) return h().find(e);
                    var i = h(r || []);
                    return i.context = document, i.selector = e, i
                }
                e = h.clean([n[1]], t)
            } else if (h.isFunction(e)) return h(document).ready(e);
            return e.selector && e.context && (this.selector = e.selector, this.context = e.context), this.setArray(h.isArray(e) ? e : h.makeArray(e))
        }, selector: "", jquery: "1.3.2", size: function () {
            return this.length
        }, get: function (e) {
            return e === c ? Array.prototype.slice.call(this) : this[e]
        }, pushStack: function (e, t, n) {
            var r = h(e);
            return r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        }, setArray: function (e) {
            return this.length = 0, Array.prototype.push.apply(this, e), this
        }, each: function (e, t) {
            return h.each(this, e, t)
        }, index: function (e) {
            return h.inArray(e && e.jquery ? e[0] : e, this)
        }, attr: function (e, t, n) {
            var r = e;
            if ("string" == typeof e) {
                if (t === c) return this[0] && h[n || "attr"](this[0], e);
                r = {}, r[e] = t
            }
            return this.each(function (t) {
                for (e in r) h.attr(n ? this.style : this, e, h.prop(this, r[e], n, t, e))
            })
        }, css: function (e, t) {
            return ("width" == e || "height" == e) && parseFloat(t) < 0 && (t = c), this.attr(e, t, "curCSS")
        }, text: function (e) {
            if ("object" != typeof e && null != e) return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(e));
            var t = "";
            return h.each(e || this, function () {
                h.each(this.childNodes, function () {
                    8 != this.nodeType && (t += 1 != this.nodeType ? this.nodeValue : h.fn.text([this]))
                })
            }), t
        }, wrapAll: function (e) {
            if (this[0]) {
                var t = h(e, this[0].ownerDocument).clone();
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return this.each(function () {
                h(this).contents().wrapAll(e)
            })
        }, wrap: function (e) {
            return this.each(function () {
                h(this).wrapAll(e)
            })
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                1 == this.nodeType && this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                1 == this.nodeType && this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, end: function () {
            return this.prevObject || h([])
        }, push: [].push, sort: [].sort, splice: [].splice, find: function (e) {
            if (1 === this.length) {
                var t = this.pushStack([], "find", e);
                return t.length = 0, h.find(e, this[0], t), t
            }
            return this.pushStack(h.unique(h.map(this, function (t) {
                return h.find(e, t)
            })), "find", e)
        }, clone: function (e) {
            var t = this.map(function () {
                if (h.support.noCloneEvent || h.isXMLDoc(this)) return this.cloneNode(!0);
                var e = this.outerHTML;
                if (!e) {
                    var t = this.ownerDocument.createElement("div");
                    t.appendChild(this.cloneNode(!0)), e = t.innerHTML
                }
                return h.clean([e.replace(/ jQuery\d+="(?:\d+|null)"/g, "").replace(/^\s*/, "")])[0]
            });
            if (e === !0) {
                var n = this.find("*").andSelf(), r = 0;
                t.find("*").andSelf().each(function () {
                    if (this.nodeName === n[r].nodeName) {
                        var e = h.data(n[r], "events");
                        for (var t in e) for (var i in e[t]) h.event.add(this, t, e[t][i], e[t][i].data);
                        r++
                    }
                })
            }
            return t
        }, filter: function (e) {
            return this.pushStack(h.isFunction(e) && h.grep(this, function (t, n) {
                return e.call(t, n)
            }) || h.multiFilter(e, h.grep(this, function (e) {
                return 1 === e.nodeType
            })), "filter", e)
        }, closest: function (e) {
            var t = h.expr.match.POS.test(e) ? h(e) : null, n = 0;
            return this.map(function () {
                for (var r = this; r && r.ownerDocument;) {
                    if (t ? t.index(r) > -1 : h(r).is(e)) return h.data(r, "closest", n), r;
                    r = r.parentNode, n++
                }
            })
        }, not: function (e) {
            if ("string" == typeof e) {
                if (m.test(e)) return this.pushStack(h.multiFilter(e, this, !0), "not", e);
                e = h.multiFilter(e, this)
            }
            var t = e.length && e[e.length - 1] !== c && !e.nodeType;
            return this.filter(function () {
                return t ? h.inArray(this, e) < 0 : this != e
            })
        }, add: function (e) {
            return this.pushStack(h.unique(h.merge(this.get(), "string" == typeof e ? h(e) : h.makeArray(e))))
        }, is: function (e) {
            return !!e && h.multiFilter(e, this).length > 0
        }, hasClass: function (e) {
            return !!e && this.is("." + e)
        }, val: function (e) {
            if (e === c) {
                var t = this[0];
                if (t) {
                    if (h.nodeName(t, "option")) return (t.attributes.value || {}).specified ? t.value : t.text;
                    if (h.nodeName(t, "select")) {
                        var n = t.selectedIndex, r = [], i = t.options, o = "select-one" == t.type;
                        if (0 > n) return null;
                        for (var a = o ? n : 0, s = o ? n + 1 : i.length; s > a; a++) {
                            var l = i[a];
                            if (l.selected) {
                                if (e = h(l).val(), o) return e;
                                r.push(e)
                            }
                        }
                        return r
                    }
                    return (t.value || "").replace(/\r/g, "")
                }
                return c
            }
            return "number" == typeof e && (e += ""), this.each(function () {
                if (1 == this.nodeType) if (h.isArray(e) && /radio|checkbox/.test(this.type)) this.checked = h.inArray(this.value, e) >= 0 || h.inArray(this.name, e) >= 0; else if (h.nodeName(this, "select")) {
                    var t = h.makeArray(e);
                    h("option", this).each(function () {
                        this.selected = h.inArray(this.value, t) >= 0 || h.inArray(this.text, t) >= 0
                    }), t.length || (this.selectedIndex = -1)
                } else this.value = e
            })
        }, html: function (e) {
            return e === c ? this[0] ? this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g, "") : null : this.empty().append(e)
        }, replaceWith: function (e) {
            return this.after(e).remove()
        }, eq: function (e) {
            return this.slice(e, +e + 1)
        }, slice: function () {
            return this.pushStack(Array.prototype.slice.apply(this, arguments), "slice", Array.prototype.slice.call(arguments).join(","))
        }, map: function (e) {
            return this.pushStack(h.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }, domManip: function (t, n, r) {
            function i(e, t) {
                return n && h.nodeName(e, "table") && h.nodeName(t, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            if (this[0]) {
                var o = (this[0].ownerDocument || this[0]).createDocumentFragment(),
                    a = h.clean(t, this[0].ownerDocument || this[0], o), s = o.firstChild;
                if (s) for (var l = 0, c = this.length; c > l; l++) r.call(i(this[l], s), this.length > 1 || l > 0 ? o.cloneNode(!0) : o);
                a && h.each(a, e)
            }
            return this
        }
    }, h.fn.init.prototype = h.fn, h.extend = h.fn.extend = function () {
        var e, t = arguments[0] || {}, n = 1, r = arguments.length, i = !1;
        for ("boolean" == typeof t && (i = t, t = arguments[1] || {}, n = 2), "object" == typeof t || h.isFunction(t) || (t = {}), r == n && (t = this, --n); r > n; n++) if (null != (e = arguments[n])) for (var o in e) {
            var a = t[o], s = e[o];
            t !== s && (i && s && "object" == typeof s && !s.nodeType ? t[o] = h.extend(i, a || (null != s.length ? [] : {}), s) : s !== c && (t[o] = s))
        }
        return t
    };
    var g = /z-?index|font-?weight|opacity|zoom|line-?height/i, v = document.defaultView || {},
        y = Object.prototype.toString;
    h.extend({
        noConflict: function (e) {
            return u.$ = f, e && (u.jQuery = d), h
        }, isFunction: function (e) {
            return "[object Function]" === y.call(e)
        }, isArray: function (e) {
            return "[object Array]" === y.call(e)
        }, isXMLDoc: function (e) {
            return 9 === e.nodeType && "HTML" !== e.documentElement.nodeName || !!e.ownerDocument && h.isXMLDoc(e.ownerDocument)
        }, globalEval: function (e) {
            if (e && /\S/.test(e)) {
                var t = document.getElementsByTagName("head")[0] || document.documentElement,
                    n = document.createElement("script");
                n.type = "text/javascript", h.support.scriptEval ? n.appendChild(document.createTextNode(e)) : n.text = e, t.insertBefore(n, t.firstChild), t.removeChild(n)
            }
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toUpperCase() == t.toUpperCase()
        }, each: function (e, t, n) {
            var r, i = 0, o = e.length;
            if (n) if (o === c) {
                for (r in e) if (t.apply(e[r], n) === !1) break
            } else for (; o > i && t.apply(e[i++], n) !== !1;) ; else if (o === c) {
                for (r in e) if (t.call(e[r], r, e[r]) === !1) break
            } else for (var a = e[0]; o > i && t.call(a, i, a) !== !1; a = e[++i]) ;
            return e
        }, prop: function (e, t, n, r, i) {
            return h.isFunction(t) && (t = t.call(e, r)), "number" != typeof t || "curCSS" != n || g.test(i) ? t : t + "px"
        }, className: {
            add: function (e, t) {
                h.each((t || "").split(/\s+/), function (t, n) {
                    1 != e.nodeType || h.className.has(e.className, n) || (e.className += (e.className ? " " : "") + n)
                })
            }, remove: function (e, t) {
                1 == e.nodeType && (e.className = t !== c ? h.grep(e.className.split(/\s+/), function (e) {
                    return !h.className.has(t, e)
                }).join(" ") : "")
            }, has: function (e, t) {
                return e && h.inArray(t, (e.className || e).toString().split(/\s+/)) > -1
            }
        }, swap: function (e, t, n) {
            var r = {};
            for (var i in t) r[i] = e.style[i], e.style[i] = t[i];
            n.call(e);
            for (var i in t) e.style[i] = r[i]
        }, css: function (e, t, n, r) {
            function i() {
                o = "width" == t ? e.offsetWidth : e.offsetHeight, "border" !== r && h.each(s, function () {
                    r || (o -= parseFloat(h.curCSS(e, "padding" + this, !0)) || 0), "margin" === r ? o += parseFloat(h.curCSS(e, "margin" + this, !0)) || 0 : o -= parseFloat(h.curCSS(e, "border" + this + "Width", !0)) || 0
                })
            }

            if ("width" == t || "height" == t) {
                var o, a = {position: "absolute", visibility: "hidden", display: "block"},
                    s = "width" == t ? ["Left", "Right"] : ["Top", "Bottom"];
                return 0 !== e.offsetWidth ? i() : h.swap(e, a, i), Math.max(0, Math.round(o))
            }
            return h.curCSS(e, t, n)
        }, curCSS: function (e, t, n) {
            var r, i = e.style;
            if ("opacity" == t && !h.support.opacity) return r = h.attr(i, "opacity"), "" == r ? "1" : r;
            if (t.match(/float/i) && (t = w), !n && i && i[t]) r = i[t]; else if (v.getComputedStyle) {
                t.match(/float/i) && (t = "float"), t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
                var o = v.getComputedStyle(e, null);
                o && (r = o.getPropertyValue(t)), "opacity" == t && "" == r && (r = "1")
            } else if (e.currentStyle) {
                var a = t.replace(/\-(\w)/g, function (e, t) {
                    return t.toUpperCase()
                });
                if (r = e.currentStyle[t] || e.currentStyle[a], !/^\d+(px)?$/i.test(r) && /^\d/.test(r)) {
                    var s = i.left, l = e.runtimeStyle.left;
                    e.runtimeStyle.left = e.currentStyle.left, i.left = r || 0, r = i.pixelLeft + "px", i.left = s, e.runtimeStyle.left = l
                }
            }
            return r
        }, clean: function (e, t, n) {
            if (t = t || document, "undefined" == typeof t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || document), !n && 1 === e.length && "string" == typeof e[0]) {
                var r = /^<(\w+)\s*\/?>$/.exec(e[0]);
                if (r) return [t.createElement(r[1])]
            }
            var i = [], o = [], a = t.createElement("div");
            if (h.each(e, function (e, n) {
                if ("number" == typeof n && (n += ""), n) {
                    if ("string" == typeof n) {
                        n = n.replace(/(<(\w+)[^>]*?)\/>/g, function (e, t, n) {
                            return n.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? e : t + "></" + n + ">"
                        });
                        var r = n.replace(/^\s+/, "").substring(0, 10).toLowerCase(),
                            o = !r.indexOf("<opt") && [1, "<select multiple='multiple'>", "</select>"] || !r.indexOf("<leg") && [1, "<fieldset>", "</fieldset>"] || r.match(/^<(thead|tbody|tfoot|colg|cap)/) && [1, "<table>", "</table>"] || !r.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!r.indexOf("<td") || !r.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || !r.indexOf("<col") && [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] || !h.support.htmlSerialize && [1, "div<div>", "</div>"] || [0, "", ""];
                        for (a.innerHTML = o[1] + n + o[2]; o[0]--;) a = a.lastChild;
                        if (!h.support.tbody) for (var s = /<tbody/i.test(n), l = r.indexOf("<table") || s ? "<table>" != o[1] || s ? [] : a.childNodes : a.firstChild && a.firstChild.childNodes, c = l.length - 1; c >= 0; --c) h.nodeName(l[c], "tbody") && !l[c].childNodes.length && l[c].parentNode.removeChild(l[c]);
                        !h.support.leadingWhitespace && /^\s/.test(n) && a.insertBefore(t.createTextNode(n.match(/^\s*/)[0]), a.firstChild), n = h.makeArray(a.childNodes)
                    }
                    n.nodeType ? i.push(n) : i = h.merge(i, n)
                }
            }), n) {
                for (var s = 0; i[s]; s++) !h.nodeName(i[s], "script") || i[s].type && "text/javascript" !== i[s].type.toLowerCase() ? (1 === i[s].nodeType && i.splice.apply(i, [s + 1, 0].concat(h.makeArray(i[s].getElementsByTagName("script")))), n.appendChild(i[s])) : o.push(i[s].parentNode ? i[s].parentNode.removeChild(i[s]) : i[s]);
                return o
            }
            return i
        }, attr: function (e, t, n) {
            if (!e || 3 == e.nodeType || 8 == e.nodeType) return c;
            var r = !h.isXMLDoc(e), i = n !== c;
            if (t = r && h.props[t] || t, e.tagName) {
                var o = /href|src|style/.test(t);
                if ("selected" == t && e.parentNode && e.parentNode.selectedIndex, t in e && r && !o) {
                    if (i) {
                        if ("type" == t && h.nodeName(e, "input") && e.parentNode) throw"type property can't be changed";
                        e[t] = n
                    }
                    if (h.nodeName(e, "form") && e.getAttributeNode(t)) return e.getAttributeNode(t).nodeValue;
                    if ("tabIndex" == t) {
                        var a = e.getAttributeNode("tabIndex");
                        return a && a.specified ? a.value : e.nodeName.match(/(button|input|object|select|textarea)/i) ? 0 : e.nodeName.match(/^(a|area)$/i) && e.href ? 0 : c
                    }
                    return e[t]
                }
                if (!h.support.style && r && "style" == t) return h.attr(e.style, "cssText", n);
                i && e.setAttribute(t, "" + n);
                var s = !h.support.hrefNormalized && r && o ? e.getAttribute(t, 2) : e.getAttribute(t);
                return null === s ? c : s
            }
            return h.support.opacity || "opacity" != t ? (t = t.replace(/-([a-z])/gi, function (e, t) {
                return t.toUpperCase()
            }), i && (e[t] = n), e[t]) : (i && (e.zoom = 1, e.filter = (e.filter || "").replace(/alpha\([^)]*\)/, "") + (parseInt(n) + "" == "NaN" ? "" : "alpha(opacity=" + 100 * n + ")")), e.filter && e.filter.indexOf("opacity=") >= 0 ? parseFloat(e.filter.match(/opacity=([^)]*)/)[1]) / 100 + "" : "")
        }, trim: function (e) {
            return (e || "").replace(/^\s+|\s+$/g, "")
        }, makeArray: function (e) {
            var t = [];
            if (null != e) {
                var n = e.length;
                if (null == n || "string" == typeof e || h.isFunction(e) || e.setInterval) t[0] = e; else for (; n;) t[--n] = e[n]
            }
            return t
        }, inArray: function (e, t) {
            for (var n = 0, r = t.length; r > n; n++) if (t[n] === e) return n;
            return -1
        }, merge: function (e, t) {
            var n, r = 0, i = e.length;
            if (h.support.getAll) for (; null != (n = t[r++]);) e[i++] = n; else for (; null != (n = t[r++]);) 8 != n.nodeType && (e[i++] = n);
            return e
        }, unique: function (e) {
            var t = [], n = {};
            try {
                for (var r = 0, i = e.length; i > r; r++) {
                    var o = h.data(e[r]);
                    n[o] || (n[o] = !0, t.push(e[r]))
                }
            } catch (a) {
                t = e
            }
            return t
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length; o > i; i++) !n != !t(e[i], i) && r.push(e[i]);
            return r
        }, map: function (e, t) {
            for (var n = [], r = 0, i = e.length; i > r; r++) {
                var o = t(e[r], r);
                null != o && (n[n.length] = o)
            }
            return n.concat.apply([], n)
        }
    });
    var b = navigator.userAgent.toLowerCase();
    h.browser = {
        version: (b.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
        safari: /webkit/.test(b),
        opera: /opera/.test(b),
        msie: /msie/.test(b) && !/opera/.test(b),
        mozilla: /mozilla/.test(b) && !/(compatible|webkit)/.test(b)
    }, h.each({
        parent: function (e) {
            return e.parentNode
        }, parents: function (e) {
            return h.dir(e, "parentNode")
        }, next: function (e) {
            return h.nth(e, 2, "nextSibling")
        }, prev: function (e) {
            return h.nth(e, 2, "previousSibling")
        }, nextAll: function (e) {
            return h.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return h.dir(e, "previousSibling")
        }, siblings: function (e) {
            return h.sibling(e.parentNode.firstChild, e)
        }, children: function (e) {
            return h.sibling(e.firstChild)
        }, contents: function (e) {
            return h.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : h.makeArray(e.childNodes)
        }
    }, function (e, t) {
        h.fn[e] = function (n) {
            var r = h.map(this, t);
            return n && "string" == typeof n && (r = h.multiFilter(n, r)), this.pushStack(h.unique(r), e, n)
        }
    }), h.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        h.fn[e] = function (n) {
            for (var r = [], i = h(n), o = 0, a = i.length; a > o; o++) {
                var s = (o > 0 ? this.clone(!0) : this).get();
                h.fn[t].apply(h(i[o]), s), r = r.concat(s)
            }
            return this.pushStack(r, e, n)
        }
    }), h.each({
        removeAttr: function (e) {
            h.attr(this, e, ""), 1 == this.nodeType && this.removeAttribute(e)
        }, addClass: function (e) {
            h.className.add(this, e)
        }, removeClass: function (e) {
            h.className.remove(this, e)
        }, toggleClass: function (e, t) {
            "boolean" != typeof t && (t = !h.className.has(this, e)), h.className[t ? "add" : "remove"](this, e)
        }, remove: function (e) {
            (!e || h.filter(e, [this]).length) && (h("*", this).add([this]).each(function () {
                h.event.remove(this), h.removeData(this)
            }), this.parentNode && this.parentNode.removeChild(this))
        }, empty: function () {
            for (h(this).children().remove(); this.firstChild;) this.removeChild(this.firstChild)
        }
    }, function (e, t) {
        h.fn[e] = function () {
            return this.each(t, arguments)
        }
    });
    var x = "jQuery" + t(), T = 0, N = {};
    h.extend({
        cache: {}, data: function (e, t, n) {
            e = e == u ? N : e;
            var r = e[x];
            return r || (r = e[x] = ++T), t && !h.cache[r] && (h.cache[r] = {}), n !== c && (h.cache[r][t] = n), t ? h.cache[r][t] : r
        }, removeData: function (e, t) {
            e = e == u ? N : e;
            var n = e[x];
            if (t) {
                if (h.cache[n]) {
                    delete h.cache[n][t], t = "";
                    for (t in h.cache[n]) break;
                    t || h.removeData(e)
                }
            } else {
                try {
                    delete e[x]
                } catch (r) {
                    e.removeAttribute && e.removeAttribute(x)
                }
                delete h.cache[n]
            }
        }, queue: function (e, t, n) {
            if (e) {
                t = (t || "fx") + "queue";
                var r = h.data(e, t);
                !r || h.isArray(n) ? r = h.data(e, t, h.makeArray(n)) : n && r.push(n)
            }
            return r
        }, dequeue: function (e, t) {
            var n = h.queue(e, t), r = n.shift();
            t && "fx" !== t || (r = n[0]), r !== c && r.call(e)
        }
    }), h.fn.extend({
        data: function (e, t) {
            var n = e.split(".");
            if (n[1] = n[1] ? "." + n[1] : "", t === c) {
                var r = this.triggerHandler("getData" + n[1] + "!", [n[0]]);
                return r === c && this.length && (r = h.data(this[0], e)), r === c && n[1] ? this.data(n[0]) : r
            }
            return this.trigger("setData" + n[1] + "!", [n[0], t]).each(function () {
                h.data(this, e, t)
            })
        }, removeData: function (e) {
            return this.each(function () {
                h.removeData(this, e)
            })
        }, queue: function (e, t) {
            return "string" != typeof e && (t = e, e = "fx"), t === c ? h.queue(this[0], e) : this.each(function () {
                var n = h.queue(this, e, t);
                "fx" == e && 1 == n.length && n[0].call(this)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                h.dequeue(this, e)
            })
        }
    }), function () {
        function e(e, t, n, r, i, o) {
            for (var a = "previousSibling" == e && !o, s = 0, l = r.length; l > s; s++) {
                var c = r[s];
                if (c) {
                    a && 1 === c.nodeType && (c.sizcache = n, c.sizset = s), c = c[e];
                    for (var u = !1; c;) {
                        if (c.sizcache === n) {
                            u = r[c.sizset];
                            break
                        }
                        if (1 !== c.nodeType || o || (c.sizcache = n, c.sizset = s), c.nodeName === t) {
                            u = c;
                            break
                        }
                        c = c[e]
                    }
                    r[s] = u
                }
            }
        }

        function t(e, t, n, r, i, a) {
            for (var s = "previousSibling" == e && !a, l = 0, c = r.length; c > l; l++) {
                var u = r[l];
                if (u) {
                    s && 1 === u.nodeType && (u.sizcache = n, u.sizset = l), u = u[e];
                    for (var d = !1; u;) {
                        if (u.sizcache === n) {
                            d = r[u.sizset];
                            break
                        }
                        if (1 === u.nodeType) if (a || (u.sizcache = n, u.sizset = l), "string" != typeof t) {
                            if (u === t) {
                                d = !0;
                                break
                            }
                        } else if (o.filter(t, [u]).length > 0) {
                            d = u;
                            break
                        }
                        u = u[e]
                    }
                    r[l] = d
                }
            }
        }

        var n = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,
            r = 0, i = Object.prototype.toString, o = function (e, t, r, l) {
                if (r = r || [], t = t || document, 1 !== t.nodeType && 9 !== t.nodeType) return [];
                if (!e || "string" != typeof e) return r;
                var c, d, h, v, y = [], b = !0;
                for (n.lastIndex = 0; null !== (c = n.exec(e));) if (y.push(c[1]), c[2]) {
                    v = RegExp.rightContext;
                    break
                }
                if (y.length > 1 && s.exec(e)) if (2 === y.length && a.relative[y[0]]) d = g(y[0] + y[1], t); else for (d = a.relative[y[0]] ? [t] : o(y.shift(), t); y.length;) e = y.shift(), a.relative[e] && (e += y.shift()), d = g(e, d); else {
                    var x = l ? {
                        expr: y.pop(),
                        set: u(l)
                    } : o.find(y.pop(), 1 === y.length && t.parentNode ? t.parentNode : t, m(t));
                    for (d = o.filter(x.expr, x.set), y.length > 0 ? h = u(d) : b = !1; y.length;) {
                        var T = y.pop(), N = T;
                        a.relative[T] ? N = y.pop() : T = "", null == N && (N = t), a.relative[T](h, N, m(t))
                    }
                }
                if (h || (h = d), !h) throw"Syntax error, unrecognized expression: " + (T || e);
                if ("[object Array]" === i.call(h)) if (b) if (1 === t.nodeType) for (var E = 0; null != h[E]; E++) h[E] && (h[E] === !0 || 1 === h[E].nodeType && p(t, h[E])) && r.push(d[E]); else for (var E = 0; null != h[E]; E++) h[E] && 1 === h[E].nodeType && r.push(d[E]); else r.push.apply(r, h); else u(h, r);
                if (v && (o(v, t, r, l), f && (hasDuplicate = !1, r.sort(f), hasDuplicate))) for (var E = 1; E < r.length; E++) r[E] === r[E - 1] && r.splice(E--, 1);
                return r
            };
        o.matches = function (e, t) {
            return o(e, null, null, t)
        }, o.find = function (e, t, n) {
            var r, i;
            if (!e) return [];
            for (var o = 0, s = a.order.length; s > o; o++) {
                var i, l = a.order[o];
                if (i = a.match[l].exec(e)) {
                    var c = RegExp.leftContext;
                    if ("\\" !== c.substr(c.length - 1) && (i[1] = (i[1] || "").replace(/\\/g, ""), r = a.find[l](i, t, n), null != r)) {
                        e = e.replace(a.match[l], "");
                        break
                    }
                }
            }
            return r || (r = t.getElementsByTagName("*")), {set: r, expr: e}
        }, o.filter = function (e, t, n, r) {
            for (var i, o, s = e, l = [], u = t, d = t && t[0] && m(t[0]); e && t.length;) {
                for (var f in a.filter) if (null != (i = a.match[f].exec(e))) {
                    var h, p, g = a.filter[f];
                    if (o = !1, u == l && (l = []), a.preFilter[f]) if (i = a.preFilter[f](i, u, n, l, r, d)) {
                        if (i === !0) continue
                    } else o = h = !0;
                    if (i) for (var v = 0; null != (p = u[v]); v++) if (p) {
                        h = g(p, i, v, u);
                        var y = r ^ !!h;
                        n && null != h ? y ? o = !0 : u[v] = !1 : y && (l.push(p), o = !0)
                    }
                    if (h !== c) {
                        if (n || (u = l), e = e.replace(a.match[f], ""), !o) return [];
                        break
                    }
                }
                if (e == s) {
                    if (null == o) throw"Syntax error, unrecognized expression: " + e;
                    break
                }
                s = e
            }
            return u
        };
        var a = o.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
            },
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (e) {
                    return e.getAttribute("href")
                }
            },
            relative: {
                "+": function (e, t, n) {
                    var r = "string" == typeof t, i = r && !/\W/.test(t), a = r && !i;
                    i && !n && (t = t.toUpperCase());
                    for (var s, l = 0, c = e.length; c > l; l++) if (s = e[l]) {
                        for (; (s = s.previousSibling) && 1 !== s.nodeType;) ;
                        e[l] = a || s && s.nodeName === t ? s || !1 : s === t
                    }
                    a && o.filter(t, e, !0)
                }, ">": function (e, t, n) {
                    var r = "string" == typeof t;
                    if (r && !/\W/.test(t)) {
                        t = n ? t : t.toUpperCase();
                        for (var i = 0, a = e.length; a > i; i++) {
                            var s = e[i];
                            if (s) {
                                var l = s.parentNode;
                                e[i] = l.nodeName === t ? l : !1
                            }
                        }
                    } else {
                        for (var i = 0, a = e.length; a > i; i++) {
                            var s = e[i];
                            s && (e[i] = r ? s.parentNode : s.parentNode === t)
                        }
                        r && o.filter(t, e, !0)
                    }
                }, "": function (n, i, o) {
                    var a = r++, s = t;
                    if (!i.match(/\W/)) {
                        var l = i = o ? i : i.toUpperCase();
                        s = e
                    }
                    s("parentNode", i, a, n, l, o)
                }, "~": function (n, i, o) {
                    var a = r++, s = t;
                    if ("string" == typeof i && !i.match(/\W/)) {
                        var l = i = o ? i : i.toUpperCase();
                        s = e
                    }
                    s("previousSibling", i, a, n, l, o)
                }
            },
            find: {
                ID: function (e, t, n) {
                    if ("undefined" != typeof t.getElementById && !n) {
                        var r = t.getElementById(e[1]);
                        return r ? [r] : []
                    }
                }, NAME: function (e, t, n) {
                    if ("undefined" != typeof t.getElementsByName) {
                        for (var r = [], i = t.getElementsByName(e[1]), o = 0, a = i.length; a > o; o++) i[o].getAttribute("name") === e[1] && r.push(i[o]);
                        return 0 === r.length ? null : r
                    }
                }, TAG: function (e, t) {
                    return t.getElementsByTagName(e[1])
                }
            },
            preFilter: {
                CLASS: function (e, t, n, r, i, o) {
                    if (e = " " + e[1].replace(/\\/g, "") + " ", o) return e;
                    for (var a, s = 0; null != (a = t[s]); s++) a && (i ^ (a.className && (" " + a.className + " ").indexOf(e) >= 0) ? n || r.push(a) : n && (t[s] = !1));
                    return !1
                }, ID: function (e) {
                    return e[1].replace(/\\/g, "")
                }, TAG: function (e, t) {
                    for (var n = 0; t[n] === !1; n++) ;
                    return t[n] && m(t[n]) ? e[1] : e[1].toUpperCase()
                }, CHILD: function (e) {
                    if ("nth" == e[1]) {
                        var t = /(-?)(\d*)n((?:\+|-)?\d*)/.exec("even" == e[2] && "2n" || "odd" == e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                    }
                    return e[0] = r++, e
                }, ATTR: function (e, t, n, r, i, o) {
                    var s = e[1].replace(/\\/g, "");
                    return !o && a.attrMap[s] && (e[1] = a.attrMap[s]), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                }, PSEUDO: function (e, t, r, i, s) {
                    if ("not" === e[1]) {
                        if (!(e[3].match(n).length > 1 || /^\w/.test(e[3]))) {
                            var l = o.filter(e[3], t, r, !0 ^ s);
                            return r || i.push.apply(i, l), !1
                        }
                        e[3] = o(e[3], null, null, t)
                    } else if (a.match.POS.test(e[0]) || a.match.CHILD.test(e[0])) return !0;
                    return e
                }, POS: function (e) {
                    return e.unshift(!0), e
                }
            },
            filters: {
                enabled: function (e) {
                    return e.disabled === !1 && "hidden" !== e.type
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    return e.checked === !0
                }, selected: function (e) {
                    return e.parentNode.selectedIndex, e.selected === !0
                }, parent: function (e) {
                    return !!e.firstChild
                }, empty: function (e) {
                    return !e.firstChild
                }, has: function (e, t, n) {
                    return !!o(n[3], e).length
                }, header: function (e) {
                    return /h\d/i.test(e.nodeName)
                }, text: function (e) {
                    return "text" === e.type
                }, radio: function (e) {
                    return "radio" === e.type
                }, checkbox: function (e) {
                    return "checkbox" === e.type
                }, file: function (e) {
                    return "file" === e.type
                }, password: function (e) {
                    return "password" === e.type
                }, submit: function (e) {
                    return "submit" === e.type
                }, image: function (e) {
                    return "image" === e.type
                }, reset: function (e) {
                    return "reset" === e.type
                }, button: function (e) {
                    return "button" === e.type || "BUTTON" === e.nodeName.toUpperCase()
                }, input: function (e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                }
            },
            setFilters: {
                first: function (e, t) {
                    return 0 === t
                }, last: function (e, t, n, r) {
                    return t === r.length - 1
                }, even: function (e, t) {
                    return t % 2 === 0
                }, odd: function (e, t) {
                    return t % 2 === 1
                }, lt: function (e, t, n) {
                    return t < n[3] - 0
                }, gt: function (e, t, n) {
                    return t > n[3] - 0
                }, nth: function (e, t, n) {
                    return n[3] - 0 == t
                }, eq: function (e, t, n) {
                    return n[3] - 0 == t
                }
            },
            filter: {
                PSEUDO: function (e, t, n, r) {
                    var i = t[1], o = a.filters[i];
                    if (o) return o(e, n, t, r);
                    if ("contains" === i) return (e.textContent || e.innerText || "").indexOf(t[3]) >= 0;
                    if ("not" === i) {
                        for (var s = t[3], n = 0, l = s.length; l > n; n++) if (s[n] === e) return !1;
                        return !0
                    }
                }, CHILD: function (e, t) {
                    var n = t[1], r = e;
                    switch (n) {
                        case"only":
                        case"first":
                            for (; r = r.previousSibling;) if (1 === r.nodeType) return !1;
                            if ("first" == n) return !0;
                            r = e;
                        case"last":
                            for (; r = r.nextSibling;) if (1 === r.nodeType) return !1;
                            return !0;
                        case"nth":
                            var i = t[2], o = t[3];
                            if (1 == i && 0 == o) return !0;
                            var a = t[0], s = e.parentNode;
                            if (s && (s.sizcache !== a || !e.nodeIndex)) {
                                var l = 0;
                                for (r = s.firstChild; r; r = r.nextSibling) 1 === r.nodeType && (r.nodeIndex = ++l);
                                s.sizcache = a
                            }
                            var c = e.nodeIndex - o;
                            return 0 == i ? 0 == c : c % i == 0 && c / i >= 0
                    }
                }, ID: function (e, t) {
                    return 1 === e.nodeType && e.getAttribute("id") === t
                }, TAG: function (e, t) {
                    return "*" === t && 1 === e.nodeType || e.nodeName === t
                }, CLASS: function (e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                }, ATTR: function (e, t) {
                    var n = t[1], r = a.attrHandle[n] ? a.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                        i = r + "", o = t[2], s = t[4];
                    return null == r ? "!=" === o : "=" === o ? i === s : "*=" === o ? i.indexOf(s) >= 0 : "~=" === o ? (" " + i + " ").indexOf(s) >= 0 : s ? "!=" === o ? i != s : "^=" === o ? 0 === i.indexOf(s) : "$=" === o ? i.substr(i.length - s.length) === s : "|=" === o ? i === s || i.substr(0, s.length + 1) === s + "-" : !1 : i && r !== !1
                }, POS: function (e, t, n, r) {
                    var i = t[2], o = a.setFilters[i];
                    return o ? o(e, n, t, r) : void 0
                }
            }
        }, s = a.match.POS;
        for (var l in a.match) a.match[l] = RegExp(a.match[l].source + /(?![^\[]*\])(?![^\(]*\))/.source);
        var u = function (e, t) {
            return e = Array.prototype.slice.call(e), t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(document.documentElement.childNodes)
        } catch (d) {
            u = function (e, t) {
                var n = t || [];
                if ("[object Array]" === i.call(e)) Array.prototype.push.apply(n, e); else if ("number" == typeof e.length) for (var r = 0, o = e.length; o > r; r++) n.push(e[r]); else for (var r = 0; e[r]; r++) n.push(e[r]);
                return n
            }
        }
        var f;
        document.documentElement.compareDocumentPosition ? f = function (e, t) {
            var n = 4 & e.compareDocumentPosition(t) ? -1 : e === t ? 0 : 1;
            return 0 === n && (hasDuplicate = !0), n
        } : "sourceIndex" in document.documentElement ? f = function (e, t) {
            var n = e.sourceIndex - t.sourceIndex;
            return 0 === n && (hasDuplicate = !0), n
        } : document.createRange && (f = function (e, t) {
            var n = e.ownerDocument.createRange(), r = t.ownerDocument.createRange();
            n.selectNode(e), n.collapse(!0), r.selectNode(t), r.collapse(!0);
            var i = n.compareBoundaryPoints(Range.START_TO_END, r);
            return 0 === i && (hasDuplicate = !0), i
        }), function () {
            var e = document.createElement("form"), t = "script" + (new Date).getTime();
            e.innerHTML = "<input name='" + t + "'/>";
            var n = document.documentElement;
            n.insertBefore(e, n.firstChild), document.getElementById(t) && (a.find.ID = function (e, t, n) {
                if ("undefined" != typeof t.getElementById && !n) {
                    var r = t.getElementById(e[1]);
                    return r ? r.id === e[1] || "undefined" != typeof r.getAttributeNode && r.getAttributeNode("id").nodeValue === e[1] ? [r] : c : []
                }
            }, a.filter.ID = function (e, t) {
                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                return 1 === e.nodeType && n && n.nodeValue === t
            }), n.removeChild(e)
        }(), function () {
            var e = document.createElement("div");
            e.appendChild(document.createComment("")), e.getElementsByTagName("*").length > 0 && (a.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if ("*" === e[1]) {
                    for (var r = [], i = 0; n[i]; i++) 1 === n[i].nodeType && r.push(n[i]);
                    n = r
                }
                return n
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (a.attrHandle.href = function (e) {
                return e.getAttribute("href", 2)
            })
        }(), document.querySelectorAll && function () {
            var e = o, t = document.createElement("div");
            t.innerHTML = "<p class='TEST'></p>", t.querySelectorAll && 0 === t.querySelectorAll(".TEST").length || (o = function (t, n, r, i) {
                if (n = n || document, !i && 9 === n.nodeType && !m(n)) try {
                    return u(n.querySelectorAll(t), r)
                } catch (o) {
                }
                return e(t, n, r, i)
            }, o.find = e.find, o.filter = e.filter, o.selectors = e.selectors, o.matches = e.matches)
        }(), document.getElementsByClassName && document.documentElement.getElementsByClassName && function () {
            var e = document.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>", 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (a.order.splice(1, 0, "CLASS"), a.find.CLASS = function (e, t, n) {
                return "undefined" == typeof t.getElementsByClassName || n ? void 0 : t.getElementsByClassName(e[1])
            }))
        }();
        var p = document.compareDocumentPosition ? function (e, t) {
            return 16 & e.compareDocumentPosition(t)
        } : function (e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        }, m = function (e) {
            return 9 === e.nodeType && "HTML" !== e.documentElement.nodeName || !!e.ownerDocument && m(e.ownerDocument)
        }, g = function (e, t) {
            for (var n, r = [], i = "", s = t.nodeType ? [t] : t; n = a.match.PSEUDO.exec(e);) i += n[0], e = e.replace(a.match.PSEUDO, "");
            e = a.relative[e] ? e + "*" : e;
            for (var l = 0, c = s.length; c > l; l++) o(e, s[l], r);
            return o.filter(i, r)
        };
        h.find = o, h.filter = o.filter, h.expr = o.selectors, h.expr[":"] = h.expr.filters, o.selectors.filters.hidden = function (e) {
            return 0 === e.offsetWidth || 0 === e.offsetHeight
        }, o.selectors.filters.visible = function (e) {
            return e.offsetWidth > 0 || e.offsetHeight > 0
        }, o.selectors.filters.animated = function (e) {
            return h.grep(h.timers, function (t) {
                return e === t.elem
            }).length
        }, h.multiFilter = function (e, t, n) {
            return n && (e = ":not(" + e + ")"), o.matches(e, t)
        }, h.dir = function (e, t) {
            for (var n = [], r = e[t]; r && r != document;) 1 == r.nodeType && n.push(r), r = r[t];
            return n
        }, h.nth = function (e, t, n, r) {
            t = t || 1;
            for (var i = 0; e && (1 != e.nodeType || ++i != t); e = e[n]) ;
            return e
        }, h.sibling = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 == e.nodeType && e != t && n.push(e);
            return n
        }
    }(), h.event = {
        add: function (e, t, n, r) {
            if (3 != e.nodeType && 8 != e.nodeType) {
                if (e.setInterval && e != u && (e = u), n.guid || (n.guid = this.guid++), r !== c) {
                    var i = n;
                    n = this.proxy(i), n.data = r
                }
                var o = h.data(e, "events") || h.data(e, "events", {}),
                    a = h.data(e, "handle") || h.data(e, "handle", function () {
                        return "undefined" == typeof h || h.event.triggered ? c : h.event.handle.apply(arguments.callee.elem, arguments)
                    });
                a.elem = e, h.each(t.split(/\s+/), function (t, i) {
                    var s = i.split(".");
                    i = s.shift(), n.type = s.slice().sort().join(".");
                    var l = o[i];
                    h.event.specialAll[i] && h.event.specialAll[i].setup.call(e, r, s), l || (l = o[i] = {}, h.event.special[i] && h.event.special[i].setup.call(e, r, s) !== !1 || (e.addEventListener ? e.addEventListener(i, a, !1) : e.attachEvent && e.attachEvent("on" + i, a))), l[n.guid] = n, h.event.global[i] = !0
                }), e = null
            }
        },
        guid: 1,
        global: {},
        remove: function (e, t, n) {
            if (3 != e.nodeType && 8 != e.nodeType) {
                var r, i = h.data(e, "events");
                if (i) {
                    if (t === c || "string" == typeof t && "." == t.charAt(0)) for (var o in i) this.remove(e, o + (t || "")); else t.type && (n = t.handler, t = t.type), h.each(t.split(/\s+/), function (t, o) {
                        var a = o.split(".");
                        o = a.shift();
                        var s = RegExp("(^|\\.)" + a.slice().sort().join(".*\\.") + "(\\.|$)");
                        if (i[o]) {
                            if (n) delete i[o][n.guid]; else for (var l in i[o]) s.test(i[o][l].type) && delete i[o][l];
                            h.event.specialAll[o] && h.event.specialAll[o].teardown.call(e, a);
                            for (r in i[o]) break;
                            r || (h.event.special[o] && h.event.special[o].teardown.call(e, a) !== !1 || (e.removeEventListener ? e.removeEventListener(o, h.data(e, "handle"), !1) : e.detachEvent && e.detachEvent("on" + o, h.data(e, "handle"))), r = null, delete i[o])
                        }
                    });
                    for (r in i) break;
                    if (!r) {
                        var a = h.data(e, "handle");
                        a && (a.elem = null), h.removeData(e, "events"), h.removeData(e, "handle")
                    }
                }
            }
        },
        trigger: function (e, t, n, r) {
            var i = e.type || e;
            if (!r) {
                if (e = "object" == typeof e ? e[x] ? e : h.extend(h.Event(i), e) : h.Event(i), i.indexOf("!") >= 0 && (e.type = i = i.slice(0, -1), e.exclusive = !0),
                n || (e.stopPropagation(), this.global[i] && h.each(h.cache, function () {
                    this.events && this.events[i] && h.event.trigger(e, t, this.handle.elem)
                })), !n || 3 == n.nodeType || 8 == n.nodeType) return c;
                e.result = c, e.target = n, t = h.makeArray(t), t.unshift(e)
            }
            e.currentTarget = n;
            var o = h.data(n, "handle");
            if (o && o.apply(n, t), (!n[i] || h.nodeName(n, "a") && "click" == i) && n["on" + i] && n["on" + i].apply(n, t) === !1 && (e.result = !1), !r && n[i] && !e.isDefaultPrevented() && (!h.nodeName(n, "a") || "click" != i)) {
                this.triggered = !0;
                try {
                    n[i]()
                } catch (a) {
                }
            }
            if (this.triggered = !1, !e.isPropagationStopped()) {
                var s = n.parentNode || n.ownerDocument;
                s && h.event.trigger(e, t, s, !0)
            }
        },
        handle: function (e) {
            var t, n;
            e = arguments[0] = h.event.fix(e || u.event), e.currentTarget = this;
            var r = e.type.split(".");
            e.type = r.shift(), t = !r.length && !e.exclusive;
            var i = RegExp("(^|\\.)" + r.slice().sort().join(".*\\.") + "(\\.|$)");
            n = (h.data(this, "events") || {})[e.type];
            for (var o in n) {
                var a = n[o];
                if (t || i.test(a.type)) {
                    e.handler = a, e.data = a.data;
                    var s = a.apply(this, arguments);
                    if (s !== c && (e.result = s, s === !1 && (e.preventDefault(), e.stopPropagation())), e.isImmediatePropagationStopped()) break
                }
            }
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (e) {
            if (e[x]) return e;
            var t = e;
            e = h.Event(t);
            for (var n, r = this.props.length; r;) n = this.props[--r], e[n] = t[n];
            if (e.target || (e.target = e.srcElement || document), 3 == e.target.nodeType && (e.target = e.target.parentNode), !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement == e.target ? e.toElement : e.fromElement), null == e.pageX && null != e.clientX) {
                var i = document.documentElement, o = document.body;
                e.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i.clientLeft || 0), e.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i.clientTop || 0)
            }
            return !e.which && (e.charCode || 0 === e.charCode ? e.charCode : e.keyCode) && (e.which = e.charCode || e.keyCode), !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey), !e.which && e.button && (e.which = 1 & e.button ? 1 : 2 & e.button ? 3 : 4 & e.button ? 2 : 0), e
        },
        proxy: function (e, t) {
            return t = t || function () {
                return e.apply(this, arguments)
            }, t.guid = e.guid = e.guid || t.guid || this.guid++, t
        },
        special: {
            ready: {
                setup: s, teardown: function () {
                }
            }
        },
        specialAll: {
            live: {
                setup: function (e, t) {
                    h.event.add(this, t[0], o)
                }, teardown: function (e) {
                    if (e.length) {
                        var t = 0, n = RegExp("(^|\\.)" + e[0] + "(\\.|$)");
                        h.each(h.data(this, "events").live || {}, function () {
                            n.test(this.type) && t++
                        }), 1 > t && h.event.remove(this, e[0], o)
                    }
                }
            }
        }
    }, h.Event = function (e) {
        return this.preventDefault ? (e && e.type ? (this.originalEvent = e, this.type = e.type) : this.type = e, this.timeStamp = t(), void (this[x] = !0)) : new h.Event(e)
    }, h.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = i;
            var e = this.originalEvent;
            e && (e.preventDefault && e.preventDefault(), e.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = i;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = i, this.stopPropagation()
        }, isDefaultPrevented: r, isPropagationStopped: r, isImmediatePropagationStopped: r
    };
    var E = function (e) {
        for (var t = e.relatedTarget; t && t != this;) try {
            t = t.parentNode
        } catch (n) {
            t = this
        }
        t != this && (e.type = e.data, h.event.handle.apply(this, arguments))
    };
    h.each({mouseover: "mouseenter", mouseout: "mouseleave"}, function (e, t) {
        h.event.special[t] = {
            setup: function () {
                h.event.add(this, e, E, t)
            }, teardown: function () {
                h.event.remove(this, e, E)
            }
        }
    }), h.fn.extend({
        bind: function (e, t, n) {
            return "unload" == e ? this.one(e, t, n) : this.each(function () {
                h.event.add(this, e, n || t, n && t)
            })
        }, one: function (e, t, n) {
            var r = h.event.proxy(n || t, function (e) {
                return h(this).unbind(e, r), (n || t).apply(this, arguments)
            });
            return this.each(function () {
                h.event.add(this, e, r, n && t)
            })
        }, unbind: function (e, t) {
            return this.each(function () {
                h.event.remove(this, e, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                h.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            if (this[0]) {
                var n = h.Event(e);
                return n.preventDefault(), n.stopPropagation(), h.event.trigger(n, t, this[0]), n.result
            }
        }, toggle: function (e) {
            for (var t = arguments, n = 1; n < t.length;) h.event.proxy(e, t[n++]);
            return this.click(h.event.proxy(e, function (e) {
                return this.lastToggle = (this.lastToggle || 0) % n, e.preventDefault(), t[this.lastToggle++].apply(this, arguments) || !1
            }))
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t)
        }, ready: function (e) {
            return s(), h.isReady ? e.call(document, h) : h.readyList.push(e), this
        }, live: function (e, t) {
            var n = h.event.proxy(t);
            return n.guid += this.selector + e, h(document).bind(a(e, this.selector), this.selector, n), this
        }, die: function (e, t) {
            return h(document).unbind(a(e, this.selector), t ? {guid: t.guid + this.selector + e} : null), this
        }
    }), h.extend({
        isReady: !1, readyList: [], ready: function () {
            h.isReady || (h.isReady = !0, h.readyList && (h.each(h.readyList, function () {
                this.call(document, h)
            }), h.readyList = null), h(document).triggerHandler("ready"))
        }
    });
    var S = !1;
    h.each("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error".split(","), function (e, t) {
        h.fn[t] = function (e) {
            return e ? this.bind(t, e) : this.trigger(t)
        }
    }), h(u).bind("unload", function () {
        for (var e in h.cache) 1 != e && h.cache[e].handle && h.event.remove(h.cache[e].handle.elem)
    }), function () {
        h.support = {};
        var e = document.documentElement, t = document.createElement("script"), n = document.createElement("div"),
            r = "script" + (new Date).getTime();
        n.style.display = "none", n.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
        var i = n.getElementsByTagName("*"), o = n.getElementsByTagName("a")[0];
        if (i && i.length && o) {
            h.support = {
                leadingWhitespace: 3 == n.firstChild.nodeType,
                tbody: !n.getElementsByTagName("tbody").length,
                objectAll: !!n.getElementsByTagName("object")[0].getElementsByTagName("*").length,
                htmlSerialize: !!n.getElementsByTagName("link").length,
                style: /red/.test(o.getAttribute("style")),
                hrefNormalized: "/a" === o.getAttribute("href"),
                opacity: "0.5" === o.style.opacity,
                cssFloat: !!o.style.cssFloat,
                scriptEval: !1,
                noCloneEvent: !0,
                boxModel: null
            }, t.type = "text/javascript";
            try {
                t.appendChild(document.createTextNode("window." + r + "=1;"))
            } catch (a) {
            }
            e.insertBefore(t, e.firstChild), u[r] && (h.support.scriptEval = !0, delete u[r]), e.removeChild(t), n.attachEvent && n.fireEvent && (n.attachEvent("onclick", function () {
                h.support.noCloneEvent = !1, n.detachEvent("onclick", arguments.callee)
            }), n.cloneNode(!0).fireEvent("onclick")), h(function () {
                var e = document.createElement("div");
                e.style.width = e.style.paddingLeft = "1px", document.body.appendChild(e), h.boxModel = h.support.boxModel = 2 === e.offsetWidth, document.body.removeChild(e).style.display = "none"
            })
        }
    }();
    var w = h.support.cssFloat ? "cssFloat" : "styleFloat";
    h.props = {
        "for": "htmlFor",
        "class": "className",
        "float": w,
        cssFloat: w,
        styleFloat: w,
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        tabindex: "tabIndex"
    }, h.fn.extend({
        _load: h.fn.load, load: function (e, t, n) {
            if ("string" != typeof e) return this._load(e);
            var r = e.indexOf(" ");
            if (r >= 0) {
                var i = e.slice(r, e.length);
                e = e.slice(0, r)
            }
            var o = "GET";
            t && (h.isFunction(t) ? (n = t, t = null) : "object" == typeof t && (t = h.param(t), o = "POST"));
            var a = this;
            return h.ajax({
                url: e, type: o, dataType: "html", data: t, complete: function (e, t) {
                    ("success" == t || "notmodified" == t) && a.html(i ? h("<div/>").append(e.responseText.replace(/<script(.|\s)*?\/script>/g, "")).find(i) : e.responseText), n && a.each(n, [e.responseText, t, e])
                }
            }), this
        }, serialize: function () {
            return h.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? h.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password|search/i.test(this.type))
            }).map(function (e, t) {
                var n = h(this).val();
                return null == n ? null : h.isArray(n) ? h.map(n, function (e, n) {
                    return {name: t.name, value: e}
                }) : {name: t.name, value: n}
            }).get()
        }
    }), h.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function (e, t) {
        h.fn[t] = function (e) {
            return this.bind(t, e)
        }
    });
    var C = t();
    h.extend({
        get: function (e, t, n, r) {
            return h.isFunction(t) && (n = t, t = null), h.ajax({type: "GET", url: e, data: t, success: n, dataType: r})
        },
        getScript: function (e, t) {
            return h.get(e, null, t, "script")
        },
        getJSON: function (e, t, n) {
            return h.get(e, t, n, "json")
        },
        post: function (e, t, n, r) {
            return h.isFunction(t) && (n = t, t = {}), h.ajax({type: "POST", url: e, data: t, success: n, dataType: r})
        },
        ajaxSetup: function (e) {
            h.extend(h.ajaxSettings, e)
        },
        ajaxSettings: {
            url: location.href,
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            xhr: function () {
                return u.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        ajax: function (e) {
            function n() {
                e.success && e.success(a, o), e.global && h.event.trigger("ajaxSuccess", [b, e])
            }

            function r() {
                e.complete && e.complete(b, o), e.global && h.event.trigger("ajaxComplete", [b, e]), e.global && !--h.active && h.event.trigger("ajaxStop")
            }

            e = h.extend(!0, e, h.extend(!0, {}, h.ajaxSettings, e));
            var i, o, a, s = /=\?(&|$)/g, l = e.type.toUpperCase();
            if (e.data && e.processData && "string" != typeof e.data && (e.data = h.param(e.data)), "jsonp" == e.dataType && ("GET" == l ? e.url.match(s) || (e.url += (e.url.match(/\?/) ? "&" : "?") + (e.jsonp || "callback") + "=?") : e.data && e.data.match(s) || (e.data = (e.data ? e.data + "&" : "") + (e.jsonp || "callback") + "=?"), e.dataType = "json"), "json" == e.dataType && (e.data && e.data.match(s) || e.url.match(s)) && (i = "jsonp" + C++, e.data && (e.data = (e.data + "").replace(s, "=" + i + "$1")), e.url = e.url.replace(s, "=" + i + "$1"), e.dataType = "script", u[i] = function (e) {
                a = e, n(), r(), u[i] = c;
                try {
                    delete u[i]
                } catch (t) {
                }
                m && m.removeChild(g)
            }), "script" == e.dataType && null == e.cache && (e.cache = !1), e.cache === !1 && "GET" == l) {
                var d = t(), f = e.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + d + "$2");
                e.url = f + (f == e.url ? (e.url.match(/\?/) ? "&" : "?") + "_=" + d : "")
            }
            e.data && "GET" == l && (e.url += (e.url.match(/\?/) ? "&" : "?") + e.data, e.data = null), e.global && !h.active++ && h.event.trigger("ajaxStart");
            var p = /^(\w+:)?\/\/([^\/?#]+)/.exec(e.url);
            if ("script" == e.dataType && "GET" == l && p && (p[1] && p[1] != location.protocol || p[2] != location.host)) {
                var m = document.getElementsByTagName("head")[0], g = document.createElement("script");
                if (g.src = e.url, e.scriptCharset && (g.charset = e.scriptCharset), !i) {
                    var v = !1;
                    g.onload = g.onreadystatechange = function () {
                        v || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (v = !0, n(), r(), g.onload = g.onreadystatechange = null, m.removeChild(g))
                    }
                }
                return m.appendChild(g), c
            }
            var y = !1, b = e.xhr();
            e.username ? b.open(l, e.url, e.async, e.username, e.password) : b.open(l, e.url, e.async);
            try {
                e.data && b.setRequestHeader("Content-Type", e.contentType), e.ifModified && b.setRequestHeader("If-Modified-Since", h.lastModified[e.url] || "Thu, 01 Jan 1970 00:00:00 GMT"), b.setRequestHeader("X-Requested-With", "XMLHttpRequest"), b.setRequestHeader("Accept", e.dataType && e.accepts[e.dataType] ? e.accepts[e.dataType] + ", */*" : e.accepts._default)
            } catch (x) {
            }
            if (e.beforeSend && e.beforeSend(b, e) === !1) return e.global && !--h.active && h.event.trigger("ajaxStop"), b.abort(), !1;
            e.global && h.event.trigger("ajaxSend", [b, e]);
            var T = function (t) {
                if (0 == b.readyState) N && (clearInterval(N), N = null, e.global && !--h.active && h.event.trigger("ajaxStop")); else if (!y && b && (4 == b.readyState || "timeout" == t)) {
                    if (y = !0, N && (clearInterval(N), N = null), o = "timeout" == t ? "timeout" : h.httpSuccess(b) ? e.ifModified && h.httpNotModified(b, e.url) ? "notmodified" : "success" : "error", "success" == o) try {
                        a = h.httpData(b, e.dataType, e)
                    } catch (s) {
                        o = "parsererror"
                    }
                    if ("success" == o) {
                        var l;
                        try {
                            l = b.getResponseHeader("Last-Modified")
                        } catch (s) {
                        }
                        e.ifModified && l && (h.lastModified[e.url] = l), i || n()
                    } else h.handleError(e, b, o);
                    r(), t && b.abort(), e.async && (b = null)
                }
            };
            if (e.async) {
                var N = setInterval(T, 13);
                e.timeout > 0 && setTimeout(function () {
                    b && !y && T("timeout")
                }, e.timeout)
            }
            try {
                b.send(e.data)
            } catch (x) {
                h.handleError(e, b, null, x)
            }
            return e.async || T(), b
        },
        handleError: function (e, t, n, r) {
            e.error && e.error(t, n, r), e.global && h.event.trigger("ajaxError", [t, e, r])
        },
        active: 0,
        httpSuccess: function (e) {
            try {
                return !e.status && "file:" == location.protocol || e.status >= 200 && e.status < 300 || 304 == e.status || 1223 == e.status
            } catch (t) {
            }
            return !1
        },
        httpNotModified: function (e, t) {
            try {
                var n = e.getResponseHeader("Last-Modified");
                return 304 == e.status || n == h.lastModified[t]
            } catch (r) {
            }
            return !1
        },
        httpData: function (e, t, n) {
            var r = e.getResponseHeader("content-type"), i = "xml" == t || !t && r && r.indexOf("xml") >= 0,
                o = i ? e.responseXML : e.responseText;
            if (i && "parsererror" == o.documentElement.tagName) throw"parsererror";
            return n && n.dataFilter && (o = n.dataFilter(o, t)), "string" == typeof o && ("script" == t && h.globalEval(o), "json" == t && (o = u.eval("(" + o + ")"))), o
        },
        param: function (e) {
            function t(e, t) {
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            }

            var n = [];
            if (h.isArray(e) || e.jquery) h.each(e, function () {
                t(this.name, this.value)
            }); else for (var r in e) h.isArray(e[r]) ? h.each(e[r], function () {
                t(r, this)
            }) : t(r, h.isFunction(e[r]) ? e[r]() : e[r]);
            return n.join("&").replace(/%20/g, "+")
        }
    });
    var A, D = {},
        L = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    h.fn.extend({
        show: function (e, t) {
            if (e) return this.animate(l("show", 3), e, t);
            for (var n = 0, r = this.length; r > n; n++) {
                var i = h.data(this[n], "olddisplay");
                if (this[n].style.display = i || "", "none" === h.css(this[n], "display")) {
                    var o, a = this[n].tagName;
                    if (D[a]) o = D[a]; else {
                        var s = h("<" + a + " />").appendTo("body");
                        o = s.css("display"), "none" === o && (o = "block"), s.remove(), D[a] = o
                    }
                    h.data(this[n], "olddisplay", o)
                }
            }
            for (var n = 0, r = this.length; r > n; n++) this[n].style.display = h.data(this[n], "olddisplay") || "";
            return this
        }, hide: function (e, t) {
            if (e) return this.animate(l("hide", 3), e, t);
            for (var n = 0, r = this.length; r > n; n++) {
                var i = h.data(this[n], "olddisplay");
                i || "none" === i || h.data(this[n], "olddisplay", h.css(this[n], "display"))
            }
            for (var n = 0, r = this.length; r > n; n++) this[n].style.display = "none";
            return this
        }, _toggle: h.fn.toggle, toggle: function (e, t) {
            var n = "boolean" == typeof e;
            return h.isFunction(e) && h.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || n ? this.each(function () {
                var t = n ? e : h(this).is(":hidden");
                h(this)[t ? "show" : "hide"]()
            }) : this.animate(l("toggle", 3), e, t)
        }, fadeTo: function (e, t, n) {
            return this.animate({opacity: t}, e, n)
        }, animate: function (e, t, n, r) {
            var i = h.speed(t, n, r);
            return this[i.queue === !1 ? "each" : "queue"](function () {
                var t, n = h.extend({}, i), r = 1 == this.nodeType && h(this).is(":hidden"), o = this;
                for (t in e) {
                    if ("hide" == e[t] && r || "show" == e[t] && !r) return n.complete.call(this);
                    "height" != t && "width" != t || !this.style || (n.display = h.css(this, "display"), n.overflow = this.style.overflow)
                }
                return null != n.overflow && (this.style.overflow = "hidden"), n.curAnim = h.extend({}, e), h.each(e, function (t, i) {
                    var a = new h.fx(o, n, t);
                    if (/toggle|show|hide/.test(i)) a["toggle" == i ? r ? "show" : "hide" : i](e); else {
                        var s = i.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/), l = a.cur(!0) || 0;
                        if (s) {
                            var c = parseFloat(s[2]), u = s[3] || "px";
                            "px" != u && (o.style[t] = (c || 1) + u, l = (c || 1) / a.cur(!0) * l, o.style[t] = l + u), s[1] && (c = ("-=" == s[1] ? -1 : 1) * c + l), a.custom(l, c, u)
                        } else a.custom(l, i, "")
                    }
                }), !0
            })
        }, stop: function (e, t) {
            var n = h.timers;
            return e && this.queue([]), this.each(function () {
                for (var e = n.length - 1; e >= 0; e--) n[e].elem == this && (t && n[e](!0), n.splice(e, 1))
            }), t || this.dequeue(), this
        }
    }), h.each({
        slideDown: l("show", 1),
        slideUp: l("hide", 1),
        slideToggle: l("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"}
    }, function (e, t) {
        h.fn[e] = function (e, n) {
            return this.animate(t, e, n)
        }
    }), h.extend({
        speed: function (e, t, n) {
            var r = "object" == typeof e ? e : {
                complete: n || !n && t || h.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !h.isFunction(t) && t
            };
            return r.duration = h.fx.off ? 0 : "number" == typeof r.duration ? r.duration : h.fx.speeds[r.duration] || h.fx.speeds._default, r.old = r.complete, r.complete = function () {
                r.queue !== !1 && h(this).dequeue(), h.isFunction(r.old) && r.old.call(this)
            }, r
        }, easing: {
            linear: function (e, t, n, r) {
                return n + r * e
            }, swing: function (e, t, n, r) {
                return (-Math.cos(e * Math.PI) / 2 + .5) * r + n
            }
        }, timers: [], fx: function (e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig || (t.orig = {})
        }
    }), h.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (h.fx.step[this.prop] || h.fx.step._default)(this), "height" != this.prop && "width" != this.prop || !this.elem.style || (this.elem.style.display = "block")
        }, cur: function (e) {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var t = parseFloat(h.css(this.elem, this.prop, e));
            return t && t > -1e4 ? t : parseFloat(h.curCSS(this.elem, this.prop)) || 0
        }, custom: function (e, n, r) {
            function i(e) {
                return o.step(e)
            }

            this.startTime = t(), this.start = e, this.end = n, this.unit = r || this.unit || "px", this.now = this.start, this.pos = this.state = 0;
            var o = this;
            i.elem = this.elem, i() && h.timers.push(i) && !A && (A = setInterval(function () {
                for (var e = h.timers, t = 0; t < e.length; t++) e[t]() || e.splice(t--, 1);
                e.length || (clearInterval(A), A = c)
            }, 13))
        }, show: function () {
            this.options.orig[this.prop] = h.attr(this.elem.style, this.prop), this.options.show = !0, this.custom("width" == this.prop || "height" == this.prop ? 1 : 0, this.cur()), h(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = h.attr(this.elem.style, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (e) {
            var n = t();
            if (e || n >= this.options.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), this.options.curAnim[this.prop] = !0;
                var r = !0;
                for (var i in this.options.curAnim) this.options.curAnim[i] !== !0 && (r = !1);
                if (r) {
                    if (null != this.options.display && (this.elem.style.overflow = this.options.overflow, this.elem.style.display = this.options.display, "none" == h.css(this.elem, "display") && (this.elem.style.display = "block")), this.options.hide && h(this.elem).hide(), this.options.hide || this.options.show) for (var o in this.options.curAnim) h.attr(this.elem.style, o, this.options.orig[o]);
                    this.options.complete.call(this.elem)
                }
                return !1
            }
            var a = n - this.startTime;
            return this.state = a / this.options.duration, this.pos = h.easing[this.options.easing || (h.easing.swing ? "swing" : "linear")](this.state, a, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update(), !0
        }
    }, h.extend(h.fx, {
        speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (e) {
                h.attr(e.elem.style, "opacity", e.now)
            }, _default: function (e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), document.documentElement.getBoundingClientRect ? h.fn.offset = function () {
        if (!this[0]) return {top: 0, left: 0};
        if (this[0] === this[0].ownerDocument.body) return h.offset.bodyOffset(this[0]);
        var e = this[0].getBoundingClientRect(), t = this[0].ownerDocument, n = t.body, r = t.documentElement,
            i = r.clientTop || n.clientTop || 0, o = r.clientLeft || n.clientLeft || 0,
            a = e.top + (self.pageYOffset || h.boxModel && r.scrollTop || n.scrollTop) - i,
            s = e.left + (self.pageXOffset || h.boxModel && r.scrollLeft || n.scrollLeft) - o;
        return {top: a, left: s}
    } : h.fn.offset = function () {
        if (!this[0]) return {top: 0, left: 0};
        if (this[0] === this[0].ownerDocument.body) return h.offset.bodyOffset(this[0]);
        h.offset.initialized || h.offset.initialize();
        for (var e, t = this[0], n = t.offsetParent, r = t, i = t.ownerDocument, o = i.documentElement, a = i.body, s = i.defaultView, l = s.getComputedStyle(t, null), c = t.offsetTop, u = t.offsetLeft; (t = t.parentNode) && t !== a && t !== o;) e = s.getComputedStyle(t, null), c -= t.scrollTop, u -= t.scrollLeft, t === n && (c += t.offsetTop, u += t.offsetLeft, !h.offset.doesNotAddBorder || h.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(t.tagName) || (c += parseInt(e.borderTopWidth, 10) || 0, u += parseInt(e.borderLeftWidth, 10) || 0), r = n, n = t.offsetParent), h.offset.subtractsBorderForOverflowNotVisible && "visible" !== e.overflow && (c += parseInt(e.borderTopWidth, 10) || 0, u += parseInt(e.borderLeftWidth, 10) || 0), l = e;
        return ("relative" === l.position || "static" === l.position) && (c += a.offsetTop, u += a.offsetLeft), "fixed" === l.position && (c += Math.max(o.scrollTop, a.scrollTop), u += Math.max(o.scrollLeft, a.scrollLeft)), {
            top: c,
            left: u
        }
    }, h.offset = {
        initialize: function () {
            if (!this.initialized) {
                var e, t, n, r, i, o = document.body, a = document.createElement("div"), s = o.style.marginTop,
                    l = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
                r = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    border: 0,
                    width: "1px",
                    height: "1px",
                    visibility: "hidden"
                };
                for (i in r) a.style[i] = r[i];
                a.innerHTML = l, o.insertBefore(a, o.firstChild), e = a.firstChild, t = e.firstChild, n = e.nextSibling.firstChild.firstChild, this.doesNotAddBorder = 5 !== t.offsetTop, this.doesAddBorderForTableAndCells = 5 === n.offsetTop, e.style.overflow = "hidden", e.style.position = "relative", this.subtractsBorderForOverflowNotVisible = -5 === t.offsetTop, o.style.marginTop = "1px", this.doesNotIncludeMarginInBodyOffset = 0 === o.offsetTop, o.style.marginTop = s, o.removeChild(a), this.initialized = !0
            }
        }, bodyOffset: function (e) {
            h.offset.initialized || h.offset.initialize();
            var t = e.offsetTop, n = e.offsetLeft;
            return h.offset.doesNotIncludeMarginInBodyOffset && (t += parseInt(h.curCSS(e, "marginTop", !0), 10) || 0, n += parseInt(h.curCSS(e, "marginLeft", !0), 10) || 0), {
                top: t,
                left: n
            }
        }
    }, h.fn.extend({
        position: function () {
            var e;
            if (this[0]) {
                var t = this.offsetParent(), r = this.offset(),
                    i = /^body|html$/i.test(t[0].tagName) ? {top: 0, left: 0} : t.offset();
                r.top -= n(this, "marginTop"), r.left -= n(this, "marginLeft"), i.top += n(t, "borderTopWidth"), i.left += n(t, "borderLeftWidth"), e = {
                    top: r.top - i.top,
                    left: r.left - i.left
                }
            }
            return e
        }, offsetParent: function () {
            for (var e = this[0].offsetParent || document.body; e && !/^body|html$/i.test(e.tagName) && "static" == h.css(e, "position");) e = e.offsetParent;
            return h(e)
        }
    }), h.each(["Left", "Top"], function (e, t) {
        var n = "scroll" + t;
        h.fn[n] = function (t) {
            return this[0] ? t !== c ? this.each(function () {
                this == u || this == document ? u.scrollTo(e ? h(u).scrollLeft() : t, e ? t : h(u).scrollTop()) : this[n] = t
            }) : this[0] == u || this[0] == document ? self[e ? "pageYOffset" : "pageXOffset"] || h.boxModel && document.documentElement[n] || document.body[n] : this[0][n] : null
        }
    }), h.each(["Height", "Width"], function (e, t) {
        var n = t.toLowerCase();
        h.fn["inner" + t] = function () {
            return this[0] ? h.css(this[0], n, !1, "padding") : null
        }, h.fn["outer" + t] = function (e) {
            return this[0] ? h.css(this[0], n, !1, e ? "margin" : "border") : null
        };
        var r = t.toLowerCase();
        h.fn[r] = function (e) {
            return this[0] == u ? "CSS1Compat" == document.compatMode && document.documentElement["client" + t] || document.body["client" + t] : this[0] == document ? Math.max(document.documentElement["client" + t], document.body["scroll" + t], document.documentElement["scroll" + t], document.body["offset" + t], document.documentElement["offset" + t]) : e === c ? this.length ? h.css(this[0], r) : null : this.css(r, "string" == typeof e ? e : e + "px")
        }
    })
}();
