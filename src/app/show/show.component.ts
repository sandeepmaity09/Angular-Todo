import {Component, OnInit} from "@angular/core";
import {TaskService} from "../app.taskservices";
import {RetTask} from "../returntaskdetails";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

    showFlag = true;
    editFlag = false;

    // task: Tasks;
    tasksArr:RetTask[] = [];

    // index: number;

    constructor(private service:TaskService){
        // this.tasksArr = this.service.tasks;

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

    ngOnInit() {

        //this.tasksArr = this.service.tasks;
        this.reload();
        //console.log(JSON.stringify(this.tasksArr));
    }

    reload() {
        this.service.getData().subscribe(data => {
            this.tasksArr = data;
        }, (err: any) => {
            console.log(err)
        }, () => {
            console.log("Completed");
        });
    }
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

    deleteTask(index:string){
        this.reload();
        this.service.delete(this.tasksArr[index]._id);
    }


    backtoHome(){
        this.editFlag=false;
        this.showFlag=true;
    }

}