import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Common-Components';
  btnName  : string = "CLick me Test anything";
  parentStyles = {
    backgroundColor: '#000000', // Initial background color
    fontSize: '16px', // Initial font size
    color: '#fff' // Initial text color
    // Add more dynamic properties as needed
  };
  CallSomething(event :any) : void {
    let btnDoc= event.target;
    btnDoc.style.backgroundColor = "#fff000";
    btnDoc.style.color = "#000"
    btnDoc.textContent = "I have been clicked";
    setTimeout(() => {
      btnDoc.textContent = this.btnName;
      btnDoc.style.backgroundColor = this.parentStyles.backgroundColor;
      btnDoc.style.color = this.parentStyles.color;
    }, 5000);
  }

  takeDataFromInput(event :any):void {
    console.log("takeDataFromInput", event);
  }
}
