import { Component} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent{
  strData:string;
  numData:number;
  date:Date;

  constructor() {
    this.strData="Hello welcome to the world SPA";
    this.numData=Math.PI;
    this.date=new Date();
   }

  
}
