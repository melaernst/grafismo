import { Component } from '@angular/core';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grafismos';
  obsValue = new Observable((observer) => {
    console.log("Observable starts")
    setTimeout(() => {
      observer.next(false);
      console.log("entra1")
    }, 10000);

    observer.next(true)
    console.log("entra2")
  })




}
