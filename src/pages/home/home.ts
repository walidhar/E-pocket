import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PageProvider } from '../../providers/page/page';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;
  slides : any [];
  constructor(public navCtrl: NavController,
              public data: PageProvider,) {

  }

  ionViewDidLoad(){
    setTimeout(() => this.splash = false, 4000);
    this.slides = this.data.slides();
  }

  open(){
    this.navCtrl.push(LoginPage);
  }
}
