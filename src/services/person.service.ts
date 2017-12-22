import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Events} from "ionic-angular";

@Injectable()
export class PersonService {

  constructor(public http: Http,
              public events: Events) {

    events.subscribe('update', () => {
      // setTimeout(() => {
        this.http.get('https://randomuser.me/api/').subscribe(data => {
          localStorage.setItem('person', JSON.stringify(data.json().results[0]));
          // console.log('requested new person');
          events.publish('updated');
        });
      // }, 2000);
    });

    events.publish('update');
  }

}
