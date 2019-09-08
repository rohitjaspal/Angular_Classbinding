import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'classbinding';
  datavalue = false;
  data = {
    'text-success': this.datavalue,
    'text-warning': !this.datavalue
  };
}
