import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';
  user: any;


  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      (user: any)=>{
        this.user = user.results[0];
        console.log(this.user);
      },
      (err) => {
        this.toastr.error(err.status, "Error in API, Reloading...")
        setTimeout(()=>window.location.reload(), 500);
      }
    )
  }
}
