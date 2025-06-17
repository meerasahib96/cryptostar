import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
