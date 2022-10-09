"use strict";
exports.__esModule = true;
exports.Config = void 0;
var Config = /** @class */ (function () {
    function Config(options) {
        this.options = options;
    }
    Config.prototype.get = function (key, def) {
        var keys = key.split('.');
        var source = this.options;
        keys.forEach(function (k) {
            if (source) {
                source = source[k];
            }
        });
        if (!source && def) {
            if (typeof def === 'function') {
                source = def();
            }
            else {
                source = def;
            }
        }
        return source;
    };
    Config.prototype.has = function (key) {
        var keys = key.split('.');
        var source = this.options;
        keys.forEach(function (k) {
            if (source) {
                source = source[k];
            }
        });
        return !!source;
    };
    Config.prototype.set = function (key, value) {
        var keys = key.split('.');
        var source = this.options;
        keys.forEach(function (k) {
            if (source) {
                source = source[k];
            }
        });
        if (source) {
            source = value;
        }
        return source;
    };
    Config.prototype.all = function () {
        return this.options;
    };
    return Config;
}());
exports.Config = Config;
