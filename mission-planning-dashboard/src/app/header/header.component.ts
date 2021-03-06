import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  constructor() { }

  ngOnInit() {
  }

  changeMissionName(newName: string){
    this.missionName = newName;
    return false;
  }

  changeRocketName(newName: string){
    this.rocketName = newName;
    return false;
  }

}
