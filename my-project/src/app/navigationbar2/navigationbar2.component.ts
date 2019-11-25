import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationbar2',
  templateUrl: './navigationbar2.component.html',
  styleUrls: ['./navigationbar2.component.css']
})
export class Navigationbar2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }

}
