try {
    /*var isFlashInstalled = (function() {
        var b = new function() { var n = this; n.c = !1; var a = "ShockwaveFlash.ShockwaveFlash", r = [{ name: a + ".7", version: function(n) { return e(n) } }, { name: a + ".6", version: function(n) { var a = "6,0,21"; try { n.AllowScriptAccess = "always", a = e(n) } catch (r) { } return a } }, { name: a, version: function(n) { return e(n) } }], e = function(n) { var a = -1; try { a = n.GetVariable("$version") } catch (r) { } return a }, i = function(n) { var a = -1; try { a = new ActiveXObject(n) } catch (r) { a = { activeXError: !0 } } return a }; n.b = function() { if (navigator.plugins && navigator.plugins.length > 0) { var a = "application/x-shockwave-flash", e = navigator.mimeTypes; e && e[a] && e[a].enabledPlugin && e[a].enabledPlugin.description && (n.c = !0) } else if (-1 == navigator.appVersion.indexOf("Mac") && window.execScript) for (var t = -1, c = 0; c < r.length && -1 == t; c++) { var o = i(r[c].name); o.activeXError || (n.c = !0) } } () };
        return b.c;
    })();



    $(document).ready(function() {
        if (isFlashInstalled) {
            if ($(window).width() < 992) {
                $('.convert-embled-element').css('display', 'none');
                $('.convert-img').css('display', 'block');
            } else {
                $('.convert-embled-element').css('display', 'block');
                $('.convert-img').css('display', 'none');
            };
        } else {
            $('.convert-embled-element').css('display', 'none');
            $('.convert-img').css('display', 'block');
        };
    });

    $(window).load(function(){

    });

    $(window).resize(function() {
        if(isFlashInstalled){
            if ($(window).width() < 992) {
                $('.convert-embled-element').css('display', 'none');
                $('.convert-img').css('display', 'block');
            } else {
                $('.convert-embled-element').css('display', 'block');
                $('.convert-img').css('display', 'none');
            };
        } else {
            $('.convert-embled-element').css('display', 'none');
            $('.convert-img').css('display', 'block');
        };
    });*/

}
catch(e){

    console.log('develop_2.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}