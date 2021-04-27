import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleSideNav = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
