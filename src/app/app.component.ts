import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'caseStudy';
  menuClicked() {
    // const buttonNav = document.querySelector('.btn-mobile-nav');
    const header = document.querySelector('.header');
    header?.classList.toggle('nav-open');
  }
}
