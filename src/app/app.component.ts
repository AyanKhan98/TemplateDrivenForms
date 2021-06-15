import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { EnrollmentService } from './enrollment.service';
import {User} from './user'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userModel=new User('Ayan');
  constructor( private _enrollmentService: EnrollmentService){}

  onSubmit()
  {
    this._enrollmentService.enroll(this.userModel).subscribe(
      data=>console.log('Success',data),
      error=>console.log('error',error));
      
    
  }
}
