(function () {
    return (function () {
        var _window$location = __get$(window, "location");
        var hostname         = __get$(_window$location, "hostname"),
            port             = __get$(_window$location, "port");
        return hostname + ':' + port;
    });
})();
