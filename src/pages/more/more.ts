import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QRcodePage } from '../q-rcode/q-rcode';
import { SupportPage } from '../support/support';


@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  qr() {
    this.navCtrl.push(QRcodePage)
  }

  support(){
    this.navCtrl.push(SupportPage)
  }

}
