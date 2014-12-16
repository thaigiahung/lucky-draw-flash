function removeCookie(name) {
    document.cookie = encodeURI(name) + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.infory.vn;path=/';
}
function setCookie(cname, cvalue, exdays) {
    var expires = "";
    if(exdays !== 0)
    {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        expires = ";expires=" + d.toGMTString();
    }

    document.cookie = encodeURI(cname) + "=" + encodeURI(cvalue) + expires + ";domain=.infory.vn;path=/";
}
function getCookie(cname) {
    var name = encodeURI(cname) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return decodeURI(c.substring(name.length, c.length));
    }

    return undefined;
}