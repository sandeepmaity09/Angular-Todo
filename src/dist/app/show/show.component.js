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
var core_1 = require("@angular/core");
var app_taskservices_1 = require("../app.taskservices");
var ShowComponent = (function () {
    // index: number;
    function ShowComponent(service) {
        // this.tasksArr = this.service.tasks;
        this.service = service;
        this.showFlag = true;
        this.editFlag = false;
        // task: Tasks;
        this.tasksArr = [];
        // this.service.getData().subscribe(data=>{
        //     this.taskData = data;
        //     console.log(data);
        // },(err:any)=>{
        //     console.log(err)
        // },()=>{
        //     console.log("Completed");
        // });
    }
    // constructor(private service: TaskService) {
    //     this.tasksArr = this.service.tasks;
    // }
    //
    ShowComponent.prototype.ngOnInit = function () {
        //this.tasksArr = this.service.tasks;
        this.reload();
        //console.log(JSON.stringify(this.tasksArr));
    };
    ShowComponent.prototype.reload = function () {
        var _this = this;
        this.service.getData().subscribe(function (data) {
            _this.tasksArr = data;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Completed");
        });
    };
    //
    // deleteTask(index:number){
    //     this.service.tasks.splice(index,1);
    // }
    //
    // editTask(index: number) {
    //     this.editFlag = true;
    //     this.showFlag = false;
    //     this.index = index;
    //
    //     this.task = this.service.tasks[index]
    // }
    //
    // updateData(date:string,title:string,descrip:string,priority:string){
    //     this.service.tasks[this.index].date = date;
    //     this.service.tasks[this.index].title = title;
    //     this.service.tasks[this.index].descrip = descrip;
    //     this.service.tasks[this.index].priority = priority;
    //     this.editFlag=false;
    //     this.showFlag=true;
    // }
    //
    ShowComponent.prototype.deleteTask = function (index) {
        this.reload();
        this.service.delete(this.tasksArr[index]._id);
    };
    ShowComponent.prototype.backtoHome = function () {
        this.editFlag = false;
        this.showFlag = true;
    };
    ShowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: './show.component.html',
            styleUrls: ['./show.component.css']
        }), 
        __metadata('design:paramtypes', [app_taskservices_1.TaskService])
    ], ShowComponent);
    return ShowComponent;
}());
exports.ShowComponent = ShowComponent;
//# sourceMappingURL=show.component.js.map