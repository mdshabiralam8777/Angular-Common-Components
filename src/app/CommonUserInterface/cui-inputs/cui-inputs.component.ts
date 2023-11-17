import { Component,EventEmitter,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cui-inputs',
  templateUrl: './cui-inputs.component.html',
  styleUrls: ['./cui-inputs.component.scss']
})
export class CuiInputsComponent implements OnInit{
  @Output() fromInput = new EventEmitter<string>();
  inputValue : string = '';
  ngOnInit(): void {

  }
  // dedouncing for performance, to reduce unnecessary inputs
  debounce(func :any,wait: number) {
    let timerId: any;
    return function(...args: any) {
      clearTimeout(timerId);
      timerId =  setTimeout(() => {
        func.apply(args);
      }, wait);
    }
  }

  debouncedLog = this.debounce((_value:any) => {
    if(this.inputValue) {
      this.fromInput.emit(this.inputValue);
    }
  },500)

  onInput(): void {
    this.debouncedLog(this.inputValue);
  }
}
