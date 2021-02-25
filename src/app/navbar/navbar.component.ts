import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {

  buttons = {
    "home": {
      icon: "lnr lnr-home",
      text: "Home"
    }
  }


  constructor(private route: ActivatedRoute) {

  }

  getActivatedButton(): void {
    this.route.fragment.subscribe((fragment: string) => {
      console.log("My hash fragment is here => ", fragment)
    })
  }
  ngOnInit(): void {
    this.getActivatedButton();
  }

}
