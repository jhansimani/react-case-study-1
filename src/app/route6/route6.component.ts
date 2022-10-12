import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Route6Component implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}
  insertAfter(newNode: any, existingNode: any) {
    existingNode?.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
  scroll(event: any) {
    console.log(event);
    var element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // console.log('scrolled');
      if (
        this.el.nativeElement.offsetHeight + this.el.nativeElement.scrollTop >=
          this.el.nativeElement.scrollHeight &&
        event.deltaY > 0
      ) {
        console.log(event.deltaY > 0);

        // console.log('Scroll end recieved');
        let lastbox = this.el.nativeElement.getElementsByClassName('box');
        // console.log(lastbox);
        let lastboxvalue = lastbox.length - 1;
        for (let i = 0; i < 4; i++) {
          let newDiv = document.createElement('div');
          let button = document.createElement('button');
          lastboxvalue = lastboxvalue + 1;
          button.innerText = 'Button' + ' ' + lastboxvalue;
          newDiv.className = 'box';
          newDiv.appendChild(button);
          let id = document.getElementById('dynamic-wrapper');
          id?.appendChild(newDiv);
          button.addEventListener('click', this.buttonClicked.bind(this));
        }
      } else {
        // console.log('scrolled up');
      }
    }
  }
  buttonClicked(event: any) {
    console.log(event);
    alert(event.target.innerText + ' is clicked');
  }
}
