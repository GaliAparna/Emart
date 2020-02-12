import { Component, OnInit } from '@angular/core';
import {Tasks} from '../models/tasks';
import {TaskService} from '../services/task.service';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  private task:Tasks;
  private isNew:boolean;
  private sDate:string;
  private eDate:string;

  constructor( private contServ:TaskService,
    private routeData:ActivatedRoute,
    private router:Router
    ) { }


  ngOnInit() {

    this.routeData.params.subscribe(
      (params)=>{
        let taskId=params['cid'];
        if(taskId==undefined){
          this.isNew=true;
          this.task=new Tasks();
          this.sDate=(new Date()).toISOString().substr(0,10);
          this.eDate=(new Date()).toISOString().substr(0,10);
        }
        else{
          this.task=this.contServ.get(taskId);
          this.isNew=false;
          this.sDate=this.task.startDate.toISOString().substr(0,10);
          this.eDate=this.task.endDate.toISOString().substr(0,10);

        }
      }
      );
  }
  startDateUpdate(){
    this.task.startDate=new Date(this.sDate);

  }
  endDateUpdate(){
    this.task.endDate=new Date(this.eDate);

  }

  save(){
    if(this.isNew){
      this.contServ.add(this.task);

    }else{
      this.contServ.update(this.task);
    }
    this.router.navigateByUrl("/");
  }


}
