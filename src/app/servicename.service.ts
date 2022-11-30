import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicenameService {

  constructor(private http:HttpClient) { }
fetchCourses=()=>
{
  return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
}
addCourse=(dataToSend:any)=>
{
  return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
}

}
