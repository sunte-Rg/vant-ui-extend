var e, i = "ontouchstart" in window;
document.createTouch || (document.createTouch = function (t, n, e, i, a, r, s) {
    return new o(n, e, {
        pageX: i,
        pageY: a,
        screenX: r,
        screenY: s,
        clientX: i - window.pageXOffset,
        clientY: a - window.pageYOffset
    }, 0, 0)
}),
document.createTouchList || (document.createTouchList = function () {
    for (var t = a(), n = 0; n < arguments.length; n++) t[n] = arguments[n];
    return t.length = arguments.length,
        t
});
var o = function (t, n, e, i, o) {
    i = i || 0,
        o = o || 0,
        this.identifier = n,
        this.target = t,
        this.clientX = e.clientX + i,
        this.clientY = e.clientY + o,
        this.screenX = e.screenX + i,
        this.screenY = e.screenY + o,
        this.pageX = e.pageX + i,
        this.pageY = e.pageY + o
};

function a() {
    var t = [];
    return t.item = function (t) {
        return this[t] || null
    },
        t.identifiedTouch = function (t) {
            return this[t + 1] || null
        },
        t
}
function r(t) {
    return function (n) {
        var i, o, a;
        1 === n.which && (("mousedown" === n.type || !e || e && !e.dispatchEvent) && (e = n.target), i = t, o = n, (a = document.createEvent("Event")).initEvent(i, !0, !0), a.altKey = o.altKey, a.ctrlKey = o.ctrlKey, a.metaKey = o.metaKey, a.shiftKey = o.shiftKey, a.touches = c(o), a.targetTouches = c(o), a.changedTouches = s(o), e.dispatchEvent(a), "mouseup" === n.type && (e = null))
    }
}
function s(t) {
    var n = a();
    return n.push(new o(e, 1, t, 0, 0)),
        n
}
function c(t) {
    return "mouseup" === t.type ? a() : s(t)
}
function l() {
    for (var t = [window, document.documentElement], n = ["ontouchstart", "ontouchmove", "ontouchcancel", "ontouchend"], e = 0; e < t.length; e++)
        for (var i = 0; i < n.length; i++) t[e] && void 0 === t[e][n[i]] && (t[e][n[i]] = null)

    window.addEventListener("mousedown", r("touchstart"), !0);
    window.addEventListener("mousemove", r("touchmove"), !0);
    window.addEventListener("mouseup", r("touchend"), !0);
}
l();
