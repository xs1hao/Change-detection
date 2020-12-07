import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiblingComponent implements OnInit {

    @Input() userGroup;
    currentUser:any;
  constructor() { }

  ngOnInit() {
  }

  sibling(data) {
      this.currentUser = data;
  }

}
