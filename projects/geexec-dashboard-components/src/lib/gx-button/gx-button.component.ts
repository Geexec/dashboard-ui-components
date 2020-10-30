import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gx-button',
  templateUrl: './gx-button.component.html',
  styleUrls: ['./gx-button.component.css']
})
export class GxButtonComponent implements OnInit {

  @Input() disabled;
  @Input() bgColor;
  constructor() { }

  ngOnInit(): void {
  }

}
