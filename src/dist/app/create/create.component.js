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
var taskdetails_1 = require('../taskdetails');
var app_taskservices_1 = require("../app.taskservices");
var CreateComponent = (function () {
    function CreateComponent(service) {
        this.service = service;
        //taskArr:Tasks[] = [];
        this.task = new taskdetails_1.Tasks();
        this.filler = '';
    }
    CreateComponent.prototype.ngOnInit = function () {
        // this.taskArr = this.service.tasks;
    };
    // submit(date:string,title:string,descrip:string,priority:number){
    //
    //     this.task = {
    //         date:date,
    //         title:title,
    //         descrip:descrip,
    //         priority:priority
    //     }
    //
    //     this.service.tasks.push(this.task);
    //
    //     this.filler = ' ';
    //     // this.task.date=' ';
    //     // this.task.title=' ';
    //     // this.task.descrip=' ';
    //     // this.task.priority=' ';
    //
    // }
    CreateComponent.prototype.submit = function (date, title, description, priority) {
        this.task = {
            date: date,
            title: title,
            description: description,
            priority: priority
        };
        this.service.add(this.task);
        this.filler = ' ';
        // this.task.date=' ';
        // this.task.title=' ';
        // this.task.descrip=' ';
        // this.task.priority=' ';
    };
    CreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: './create.component.html',
            styleUrls: ['./create.component.css']
        }), 
        __metadata('design:paramtypes', [app_taskservices_1.TaskService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map