import {Component,OnInit} from '@angular/core';
import {Tasks} from '../taskdetails';
import {TaskService} from "../app.taskservices";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    moduleId:module.id,
    selector:'home',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

    //taskArr:Tasks[] = [];
    task:Tasks = new Tasks();
    filler:string = ''
    constructor(private service:TaskService){}

    ngOnInit(){
        // this.taskArr = this.service.tasks;
    }

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

    submit(date:string,title:string,description:string,priority:string){

        this.task={
            date:date,
            title:title,
            description:description,
            priority:priority
        }

        this.service.add(this.task);

        this.filler = ' ';

        // this.task.date=' ';
        // this.task.title=' ';
        // this.task.descrip=' ';
        // this.task.priority=' ';
    }
}
