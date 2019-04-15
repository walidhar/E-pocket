import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RendezVousItemPage } from '../rendez-vous-item/rendez-vous-item';

@Component({
  selector: 'page-rendez-vous',
  templateUrl: 'rendez-vous.html',
})
export class RendezVousPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionV iewDidLoad RendezVousPage');
  }
  pushRedez_vous(){
    this.navCtrl.push(RendezVousItemPage);
  }

}
