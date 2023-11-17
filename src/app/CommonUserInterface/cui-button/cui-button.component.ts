import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-button',
  templateUrl: './cui-button.component.html',
  styleUrls: ['./cui-button.component.scss']
})
export class CuiButtonComponent implements OnInit {
  @Input() buttonName: string = "Click Me";
  @Output() onClick = new EventEmitter<any>();
  @Input() dynamicStyles: any = {}

  btnOnClick(event:any) {
    this.onClick.emit(event);
  }

  ngOnInit() {


  }
}
