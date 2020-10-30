import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'gx-input',
  templateUrl: './gx-input.component.html',
  styleUrls: ['./gx-input.component.css']
})
export class GxInputComponent implements OnInit {

  constructor() { }

  @Input() type;
  @Input() required;
  @Input() label;
 
  ngOnInit(): void {
  }

}
