import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProfilPage } from '../pages/profil/profil';
import { CardsPage } from '../pages/cards/cards';
import { TabsPage } from '../pages/tabs/tabs';
import { AddCatPage } from '../pages/add-cat/add-cat';
import { SmartWalletPage } from '../pages/smart-wallet/smart-wallet';
import { SignupPage } from '../pages/signup/signup';
import { SupportPage } from '../pages/support/support';
import { RendezVousItemPage } from '../pages/rendez-vous-item/rendez-vous-item';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  // rootPage:any = CardsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });

  }


  
}

