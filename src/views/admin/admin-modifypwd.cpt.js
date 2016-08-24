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
var admin_model_1 = require('./admin.model');
var admin_serv_1 = require('./admin.serv');
var router_1 = require('@angular/router');
var global_1 = require('../common/global');
var resource_pool_1 = require('../common/resource-pool');
var mVEquals_validation_direc_1 = require('../common/directive/validation/mVEquals-validation.direc');
var AdminModifyPwdCpt = (function () {
    function AdminModifyPwdCpt(G, adminServ, $$, route, router) {
        this.G = G;
        this.adminServ = adminServ;
        this.$$ = $$;
        this.route = route;
        this.router = router;
        this.fm = new admin_model_1.Admin();
    }
    AdminModifyPwdCpt.prototype.save = function (form) {
        var _this = this;
        this.G.save(form, this, function (form) {
            var rp;
            if (_this.adminId === 'current') {
                rp = 'current';
                _this.fm.adminId = _this.G.current.adminId;
            }
            else {
                rp = 'admins';
                _this.fm.adminId = _this.adminId;
            }
            _this.$$[rp].patch(_this.fm).subscribe(function (res) {
                _this.fm = res.data;
            });
        });
    };
    AdminModifyPwdCpt.prototype.ngOnInit = function () {
        this.adminId = this.router.routerState.parent(this.route).snapshot.params['adminId'];
    };
    AdminModifyPwdCpt = __decorate([
        core_1.Component({
            selector: 'admin-form',
            templateUrl: 'views/admin/admin-modifypwd.form.html',
            directives: [mVEquals_validation_direc_1.MVEquals]
        }), 
        __metadata('design:paramtypes', [global_1.GLOBAL, admin_serv_1.AdminServ, resource_pool_1.ResourcePool, router_1.ActivatedRoute, router_1.Router])
    ], AdminModifyPwdCpt);
    return AdminModifyPwdCpt;
}());
exports.AdminModifyPwdCpt = AdminModifyPwdCpt;
//# sourceMappingURL=admin-modifypwd.cpt.js.map