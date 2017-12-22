import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ViewImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-image',
  templateUrl: 'view-image.html',
})
export class ViewImagePage {

  image: string;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.image = navParams.get('image');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ViewImagePage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
