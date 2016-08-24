"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var global_1 = require('../global');
var rxjs_1 = require('rxjs');
var MNote = (function () {
    function MNote(G) {
        var _this = this;
        this.G = G;
        this.httpStatus = new rxjs_1.Observable(function (observer) {
            setInterval(function () {
                observer.next(_this.G.httpStatus);
            }, 500);
        });
        this.sub = this.httpStatus.subscribe(function (value) {
            switch (value) {
                case 200:
                    _this.title = '操作成功';
                    break;
                case 401:
                    _this.title = 'TOKEN 失效';
                    break;
                case 404:
                    _this.title = '页面不存在';
                    break;
                case 500:
                    _this.title = '操作失败';
                    break;
            }
            if (value) {
                setTimeout(function () {
                    _this.G.httpStatus = 0;
                    _this.title = '';
                }, 2000);
            }
        });
    }
    MNote.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MNote = __decorate([
        core_1.Component({
            selector: 'mNote',
            template: "{{title}}"
        }), 
        __metadata('design:paramtypes', [global_1.GLOBAL])
    ], MNote);
    return MNote;
}());
exports.MNote = MNote;
//# sourceMappingURL=mNote.direc.js.map