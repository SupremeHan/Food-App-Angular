import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigateByUrl('login');
};
  btnClick1= function () {
  this.router.navigateByUrl('signup');
};
}


