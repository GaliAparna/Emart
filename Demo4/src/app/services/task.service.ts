import { Injectable } from '@angular/core';
import {Tasks} from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks:Tasks[];



  constructor() { 
    this.tasks=[
      {taskId:101,taskName:"Assignment",startDate:new Date("1-20-1999"),endDate:new Date("30-10-2018")},
      {taskId:102,taskName:"Java",startDate:new Date("3-10-1989"),endDate:new Date("30-10-1989")},
      {taskId:103,taskName:"c++",startDate:new Date("5-2-1990"),endDate:new Date("30-2-1990")},
      {taskId:104,taskName:"python",startDate:new Date("1-20-1999"),endDate:new Date("30-20-1999")}
      
    ];
  }
  getAll():Tasks[]{
    return this.tasks;
  }
  get(id:number){
    return this.tasks.find((c)=>(c.taskId==id));
  }

  add(task:Tasks){
    this.tasks.push(task);
  }

  update(task:Tasks){
    let index=this.tasks.findIndex((c)=>(c.taskId===task.taskId));
    if(index>-1){
      this.tasks[index]=task;

    }
  }

  delete(id:number){
    let index=this.tasks.findIndex((c)=>(c.taskId===id));
    if(index>-1){
      this.tasks.splice(index,1);
    }
  }
}
