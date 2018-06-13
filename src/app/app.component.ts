import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    arrs=[0,0,0,0];
    bulbs=['../assets/images/off.png','../assets/images/off.png','../assets/images/off.png','../assets/images/off.png'];
    btns=['ON','ON','ON','ON'];
    status:boolean=false;
    
    currentValue;
    changeBulb(currentValue) {
      if(this.status==false) {
       // console.log(this.status);
        this.status=true;
        this.bulbs[currentValue]="../assets/images/on.png";
        this.btns[currentValue]="OFF";

      }

      else {
        //console.log(this.status);
        this.status=false;
        this.bulbs[currentValue]="../assets/images/off.png";
        this.btns[currentValue]="ON";

      }
    }
}


