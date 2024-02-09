import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.scss']
})
export class AngularPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Non Formatted value 
  
  amount = 223.4567;
  placeName = "marineDrive";
  mark = 0.8945;
  today = new Date();
  name = "Adnan Ahmad";

}
