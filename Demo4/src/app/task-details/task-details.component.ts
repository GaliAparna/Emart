import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service';
import {ActivatedRoute} from '@angular/router';
import {Tasks} from '../models/tasks';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  private task:Tasks;

  constructor
  (private constServ:TaskService,
    private routeDate:ActivatedRoute) { 
    
    
  }

  ngOnInit() {
    this.routeDate.params.subscribe(
      (params)=>{
        let taskId=params['id'];
        if(taskId){
          this.task=this.constServ.get(taskId);
        }
      
      }
    );
  }

}
