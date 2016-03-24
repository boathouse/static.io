var Onw3dViewer = function(e) {
    var bu = 'http://git.on-web.com.ua/';
    this.modc = null;
    this.al = null;
    this.options = {
        params: {
            menu: !1,
            wmode: "direct",
            quality: "high",
            scale: "noScale",
            salign: "TL",
            bgcolor: "#000000",
            allowfullscreen: "true",
            allowScriptAccess: "always"
        },
        player_path: bu + "viewer.swf",
        logo_type: "0",
        container_id: "scene",
        vars: {
            version: "2.1",
            logo_type: "0",
            models_path: bu + "models/",
            textures_path: bu + "textures/",
            xml_path: bu + "xml/",
            loc: window.location.href
        }
    }, e.version && (this.options.vars.version = e.version), e.container_id && (this.options.container_id = e.container_id), e.logo_type && (this.options.logo_type = e.logo_type), e.player_path && (this.options.player_path = e.player_path), e.models_path && (this.options.vars.models_path = e.models_path), e.textures_path && (this.options.vars.textures_path = e.textures_path), e.xml_path && (this.options.vars.xml_path = e.xml_path), this.swfobject = function() {
        function e() {
            if (!$) {
                try {
                    var e = F.getElementsByTagName("body")[0].appendChild(F.createElement("span"));
                    e.parentNode.removeChild(e)
                } catch (t) {
                    return
                }
                $ = !0;
                for (var e = x.length, n = 0; e > n; n++) x[n]()
            }
        }

        function t(e) {
            $ ? e() : x[x.length] = e
        }

        function n(e) {
            if (typeof L.addEventListener != A) L.addEventListener("load", e, !1);
            else if (typeof F.addEventListener != A) F.addEventListener("load", e, !1);
            else if (typeof L.attachEvent != A) u(L, "onload", e);
            else if ("function" == typeof L.onload) {
                var t = L.onload;
                L.onload = function() {
                    t(), e()
                }
            } else L.onload = e
        }

        function a() {
            var e = F.getElementsByTagName("body")[0],
                t = F.createElement(T);
            t.setAttribute("type", I);
            var n = e.appendChild(t);
            if (n) {
                var a = 0;
                ! function() {
                    if (typeof n.GetVariable != A) {
                        var o = n.GetVariable("$version");
                        o && (o = o.split(" ")[1].split(","), P.pv = [parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10)])
                    } else if (10 > a) return a++, void setTimeout(arguments.callee, 10);
                    e.removeChild(t), n = null, i()
                }()
            } else i()
        }

        function i() {
            var e = B.length;
            if (e > 0)
                for (var t = 0; e > t; t++) {
                    var n = B[t].id,
                        a = B[t].callbackFn,
                        i = {
                            success: !1,
                            id: n
                        };
                    if (0 < P.pv[0]) {
                        var d = f(n);
                        if (d)
                            if (!h(B[t].swfVersion) || P.wk && 312 > P.wk)
                                if (B[t].expressInstall && r()) {
                                    i = {}, i.data = B[t].expressInstall, i.width = d.getAttribute("width") || "0", i.height = d.getAttribute("height") || "0", d.getAttribute("class") && (i.styleclass = d.getAttribute("class")), d.getAttribute("align") && (i.align = d.getAttribute("align"));
                                    for (var c = {}, d = d.getElementsByTagName("param"), p = d.length, u = 0; p > u; u++) "movie" != d[u].getAttribute("name").toLowerCase() && (c[d[u].getAttribute("name")] = d[u].getAttribute("value"));
                                    s(i, c, n, a)
                                } else l(d), a && a(i);
                        else m(n, !0), a && (i.success = !0, i.ref = o(n), a(i))
                    } else m(n, !0), a && ((n = o(n)) && typeof n.SetVariable != A && (i.success = !0, i.ref = n), a(i))
                }
        }

        function o(e) {
            var t = null;
            return (e = f(e)) && "OBJECT" == e.nodeName && (typeof e.SetVariable != A ? t = e : (e = e.getElementsByTagName(T)[0]) && (t = e)), t
        }

        function r() {
            return !M && h("6.0.65") && (P.win || P.mac) && !(P.wk && 312 > P.wk)
        }

        function s(e, t, n, a) {
            M = !0, b = a || null, E = {
                success: !1,
                id: n
            };
            var i = f(n);
            i && ("OBJECT" == i.nodeName ? (w = d(i), g = null) : (w = i, g = n), e.id = N, (typeof e.width == A || !/%$/.test(e.width) && 310 > parseInt(e.width, 10)) && (e.width = "310"), (typeof e.height == A || !/%$/.test(e.height) && 137 > parseInt(e.height, 10)) && (e.height = "137"), F.title = F.title.slice(0, 47) + " - Flash Player Installation", a = P.ie && P.win ? "ActiveX" : "PlugIn", a = "MMredirectURL=" + L.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + a + "&MMdoctitle=" + F.title, t.flashvars = typeof t.flashvars != A ? t.flashvars + ("&" + a) : a, P.ie && P.win && 4 != i.readyState && (a = F.createElement("div"), n += "SWFObjectNew", a.setAttribute("id", n), i.parentNode.insertBefore(a, i), i.style.display = "none", function() {
                4 == i.readyState ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10)
            }()), c(e, t, n))
        }

        function l(e) {
            if (P.ie && P.win && 4 != e.readyState) {
                var t = F.createElement("div");
                e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(d(e), t), e.style.display = "none",
                    function() {
                        4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                    }()
            } else e.parentNode.replaceChild(d(e), e)
        }

        function d(e) {
            var t = F.createElement("div");
            if (P.win && P.ie) t.innerHTML = e.innerHTML;
            else if ((e = e.getElementsByTagName(T)[0]) && (e = e.childNodes))
                for (var n = e.length, a = 0; n > a; a++) 1 == e[a].nodeType && "PARAM" == e[a].nodeName || 8 == e[a].nodeType || t.appendChild(e[a].cloneNode(!0));
            return t
        }

        function c(e, t, n) {
            var a, i = f(n);
            if (P.wk && 312 > P.wk) return a;
            if (i)
                if (typeof e.id == A && (e.id = n), P.ie && P.win) {
                    var o, r = "";
                    for (o in e) e[o] != Object.prototype[o] && ("data" == o.toLowerCase() ? t.movie = e[o] : "styleclass" == o.toLowerCase() ? r += ' class="' + e[o] + '"' : "classid" != o.toLowerCase() && (r += " " + o + '="' + e[o] + '"'));
                    o = "";
                    for (var s in t) t[s] != Object.prototype[s] && (o += '<param name="' + s + '" value="' + t[s] + '" />');
                    i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + r + ">" + o + "</object>", _[_.length] = e.id, a = f(e.id)
                } else {
                    s = F.createElement(T), s.setAttribute("type", I);
                    for (var l in e) e[l] != Object.prototype[l] && ("styleclass" == l.toLowerCase() ? s.setAttribute("class", e[l]) : "classid" != l.toLowerCase() && s.setAttribute(l, e[l]));
                    for (r in t) t[r] != Object.prototype[r] && "movie" != r.toLowerCase() && (e = s, o = r, l = t[r], n = F.createElement("param"), n.setAttribute("name", o), n.setAttribute("value", l), e.appendChild(n));
                    i.parentNode.replaceChild(s, i), a = s
                }
            return a
        }

        function p(e) {
            var t = f(e);
            t && "OBJECT" == t.nodeName && (P.ie && P.win ? (t.style.display = "none", function() {
                if (4 == t.readyState) {
                    var n = f(e);
                    if (n) {
                        for (var a in n) "function" == typeof n[a] && (n[a] = null);
                        n.parentNode.removeChild(n)
                    }
                } else setTimeout(arguments.callee, 10)
            }()) : t.parentNode.removeChild(t))
        }

        function f(e) {
            var t = null;
            try {
                t = F.getElementById(e)
            } catch (n) {}
            return t
        }

        function u(e, t, n) {
            e.attachEvent(t, n), O[O.length] = [e, t, n]
        }

        function h(e) {
            var t = P.pv;
            return e = e.split("."), e[0] = parseInt(e[0], 10), e[1] = parseInt(e[1], 10) || 0, e[2] = parseInt(e[2], 10) || 0, t[0] > e[0] || t[0] == e[0] && t[1] > e[1] || t[0] == e[0] && t[1] == e[1] && t[2] >= e[2] ? !0 : !1
        }

        function v(e, t, n, a) {
            if (!P.ie || !P.mac) {
                var i = F.getElementsByTagName("head")[0];
                i && (n = n && "string" == typeof n ? n : "screen", a && (S = C = null), C && S == n || (a = F.createElement("style"), a.setAttribute("type", "text/css"), a.setAttribute("media", n), C = i.appendChild(a), P.ie && P.win && typeof F.styleSheets != A && 0 < F.styleSheets.length && (C = F.styleSheets[F.styleSheets.length - 1]), S = n), P.ie && P.win ? C && typeof C.addRule == T && C.addRule(e, t) : C && typeof F.createTextNode != A && C.appendChild(F.createTextNode(e + " {" + t + "}")))
            }
        }

        function m(e, t) {
            if (V) {
                var n = t ? "visible" : "hidden";
                $ && f(e) ? f(e).style.visibility = n : v("#" + e, "visibility:" + n)
            }
        }

        function y(e) {
            return null != /[\\\"<>\.;]/.exec(e) && typeof encodeURIComponent != A ? encodeURIComponent(e) : e
        }
        var w, g, b, E, C, S, A = "undefined",
            T = "object",
            I = "application/x-shockwave-flash",
            N = "SWFObjectExprInst",
            L = window,
            F = document,
            k = navigator,
            j = !1,
            x = [function() {
                j ? a() : i()
            }],
            B = [],
            _ = [],
            O = [],
            $ = !1,
            M = !1,
            V = !0,
            P = function() {
                var e = typeof F.getElementById != A && typeof F.getElementsByTagName != A && typeof F.createElement != A,
                    t = k.userAgent.toLowerCase(),
                    n = k.platform.toLowerCase(),
                    a = /win/.test(n ? n : t),
                    n = /mac/.test(n ? n : t),
                    t = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                    i = !1,
                    o = [0, 0, 0],
                    r = null;
                if (typeof k.plugins != A && typeof k.plugins["Shockwave Flash"] == T) !(r = k.plugins["Shockwave Flash"].description) || typeof k.mimeTypes != A && k.mimeTypes[I] && !k.mimeTypes[I].enabledPlugin || (j = !0, i = !1, r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), o[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10), o[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10), o[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                else if (typeof L.ActiveXObject != A) try {
                    var s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    s && (r = s.GetVariable("$version")) && (i = !0, r = r.split(" ")[1].split(","), o = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)])
                } catch (l) {}
                return {
                    w3: e,
                    pv: o,
                    wk: t,
                    ie: i,
                    win: a,
                    mac: n
                }
            }();
        return function() {
                P.w3 && ((typeof F.readyState != A && "complete" == F.readyState || typeof F.readyState == A && (F.getElementsByTagName("body")[0] || F.body)) && e(), $ || (typeof F.addEventListener != A && F.addEventListener("DOMContentLoaded", e, !1), P.ie && P.win && (F.attachEvent("onreadystatechange", function() {
                    "complete" == F.readyState && (F.detachEvent("onreadystatechange", arguments.callee), e())
                }), L == top && function() {
                    if (!$) {
                        try {
                            F.documentElement.doScroll("left")
                        } catch (t) {
                            return void setTimeout(arguments.callee, 0)
                        }
                        e()
                    }
                }()), P.wk && function() {
                    $ || (/loaded|complete/.test(F.readyState) ? e() : setTimeout(arguments.callee, 0))
                }(), n(e)))
            }(),
            function() {
                P.ie && P.win && window.attachEvent("onunload", function() {
                    for (var e = O.length, t = 0; e > t; t++) O[t][0].detachEvent(O[t][1], O[t][2]);
                    for (e = _.length, t = 0; e > t; t++) p(_[t]);
                    for (var n in P) P[n] = null;
                    P = null;
                    for (var a in swfobject) swfobject[a] = null;
                    swfobject = null
                })
            }(), {
                registerObject: function(e, t, n, a) {
                    if (P.w3 && e && t) {
                        var i = {};
                        i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = a, B[B.length] = i, m(e, !1)
                    } else a && a({
                        success: !1,
                        id: e
                    })
                },
                getObjectById: function(e) {
                    return P.w3 ? o(e) : void 0
                },
                embedSWF: function(e, n, a, i, o, l, d, p, f, u) {
                    var v = {
                        success: !1,
                        id: n
                    };
                    P.w3 && !(P.wk && 312 > P.wk) && e && n && a && i && o ? (m(n, !1), t(function() {
                        a += "", i += "";
                        var t = {};
                        if (f && typeof f === T)
                            for (var y in f) t[y] = f[y];
                        if (t.data = e, t.width = a, t.height = i, y = {}, p && typeof p === T)
                            for (var w in p) y[w] = p[w];
                        if (d && typeof d === T)
                            for (var g in d) y.flashvars = typeof y.flashvars != A ? y.flashvars + ("&" + g + "=" + d[g]) : g + "=" + d[g];
                        if (h(o)) w = c(t, y, n), t.id == n && m(n, !0), v.success = !0, v.ref = w;
                        else {
                            if (l && r()) return t.data = l, void s(t, y, n, u);
                            m(n, !0)
                        }
                        u && u(v)
                    })) : u && u(v)
                },
                switchOffAutoHideShow: function() {
                    V = !1
                },
                ua: P,
                getFlashPlayerVersion: function() {
                    return {
                        major: P.pv[0],
                        minor: P.pv[1],
                        release: P.pv[2]
                    }
                },
                hasFlashPlayerVersion: h,
                createSWF: function(e, t, n) {
                    return P.w3 ? c(e, t, n) : void 0
                },
                showExpressInstall: function(e, t, n, a) {
                    P.w3 && r() && s(e, t, n, a)
                },
                removeSWF: function(e) {
                    P.w3 && p(e)
                },
                createCSS: function(e, t, n, a) {
                    P.w3 && v(e, t, n, a)
                },
                addDomLoadEvent: t,
                addLoadEvent: n,
                getQueryParamValue: function(e) {
                    var t = F.location.search || F.location.hash;
                    if (t) {
                        if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return y(t);
                        for (var t = t.split("&"), n = 0; n < t.length; n++)
                            if (t[n].substring(0, t[n].indexOf("=")) == e) return y(t[n].substring(t[n].indexOf("=") + 1))
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (M) {
                        var e = f(N);
                        e && w && (e.parentNode.replaceChild(w, e), g && (m(g, !0), P.ie && P.win && (w.style.display = "block")), b && b(E)), M = !1
                    }
                }
            }
    }(), this.init = function(e) {this.options.vars.add = '';
        this.options.vars.boat = e, this.options.vars.logo_type = this.options.logo_type, this.options.vars.view_mode = "0", this.swfobject.embedSWF(this.options.player_path + "?v=" + this.options.vars.version, this.options.container_id, "100%", "100%", "11.0.1.152", "", this.options.vars, this.options.params, {})
    }, this.close = function() {
        document.body.removeChild(this.modc), window.detachEvent ? window.detachEvent("onresize", this.al) : window.removeEventListener && window.removeEventListener("resize", this.al, !1)
    }, this.reload = function(a,b) {
        this.options.vars.add = b;
        console.log(a+':'+b);
        console.log(this.options);
    }, this.modal = function(e) {this.options.vars.add = '';
        this.options.vars.boat = e, this.options.vars.logo_type = this.options.logo_type, this.options.vars.view_mode = "1";
        this.modc = document.createElement("div");
        this.modc.id = "modal", document.body.appendChild(this.modc);
        var n = document.createElement("div");
        n.id = "modal-cont", this.modc.appendChild(n);
        this.al = function() {
            var e = document.getElementById("modal-cont");
            e && (e.style.height = window.innerHeight + "px")
        };
        this.swfobject.embedSWF(this.options.player_path + "?v=" + this.options.vars.version, "modal-cont", "100%", "100%", "11.0.1.152", "", this.options.vars, this.options.params, {}), window.attachEvent ? window.attachEvent("onresize", this.al) : window.addEventListener && window.addEventListener("resize", this.al, !0), this.al()
    }
};