import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SmartWalletPage } from '../smart-wallet/smart-wallet';

@Component({
  selector: 'page-add-cat',
  templateUrl: 'add-cat.html',
})
export class AddCatPage {
  name: string;
  solde: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCatPage');
  }

  
  goTo2(){
    console.log(this.name);
    this.navCtrl.push(SmartWalletPage, {
      name: this.name,
      solde: this.solde
    });
  }

 




}
