import {Component} from '@angular/core';
import {Events, Loading, LoadingController, ModalController} from 'ionic-angular';

import {ViewImagePage} from "../view-image/view-image";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  _person: any;
  loading: Loading;

  dob: Date;

  get person(): any {
    return this._person;
  }

  constructor(public modalCtrl: ModalController,
              public events: Events,
              public loadingCtrl: LoadingController) {
    this._person = JSON.parse(localStorage.getItem('person'));


    events.subscribe('updated', () => {
      this._person = JSON.parse(localStorage.getItem('person'));
      if (this.loading)
        this.loading.dismiss();
    });
  }

  viewBig() {
    let data = {
      image: this.person.picture.large
    };

    this.modalCtrl.create(ViewImagePage, data).present();
  }

  updatePerson() {
    this.events.publish('update');

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

}
