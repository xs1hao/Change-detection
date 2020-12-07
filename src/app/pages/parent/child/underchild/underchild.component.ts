import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-underchild',
  templateUrl: './underchild.component.html',
  styleUrls: ['./underchild.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnderchildComponent implements OnInit {

    @Input() data;
    currentUser:any;
  constructor() { }

  ngOnInit() {
  }

  underCHind(item) {
      item.showLogin = !item.showLogin;
      this.currentUser = item;
  }

}
