import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstApp';

  name:string="Muhammed Mehti GÜLER";
  name2:string|number|undefined|null =10;
  name3="Deneme Name";
  ngModelDegisken:string="sasas";

  metod(){
    alert("Çalıştım");
  }
}
