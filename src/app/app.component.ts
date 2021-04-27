import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eds-dashboard';

  opened: boolean = true

  onToggleSideNav(){
    console.log("toggle working")
    this.opened = ! this.opened
  }
}
