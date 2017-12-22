import {Component, ViewChild} from '@angular/core';
import {Menu, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {SettingsPage} from "../pages/settings/settings";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  @ViewChild(Menu)
  menu: Menu;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}> = [{
    title: 'Главная',
    icon: 'home',
    component: HomePage
  },{
    title: 'Настройки',
    icon: 'settings',
    component: SettingsPage
  }];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}

