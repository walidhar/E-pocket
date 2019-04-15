import { CardsPage } from './../cards/cards';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-carte-bank',
  templateUrl: 'carte-bank.html',
})
export class CarteBankPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarteBankPage');
  }
  PushCard(){
    this.navCtrl.push(CardsPage);
  }

}
