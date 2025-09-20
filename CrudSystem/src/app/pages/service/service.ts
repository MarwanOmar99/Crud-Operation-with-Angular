import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {
  role = 'admin';
  constructor() {
    if (this.role == 'admin') {
      console.log(this.role);
    }
  }
  ngOnInit() {
    console.log(this.role);
  }
}
