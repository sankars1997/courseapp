import { Component } from '@angular/core';
import { ServicenameService } from '../servicename.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private api:ServicenameService){
  api.fetchCourses().subscribe(
    (response)=>{
this.data=response;
    }
  )
  }

  data:any=[]
  

}