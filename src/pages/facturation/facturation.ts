import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';


@Component({
  selector: 'page-facturation',
  templateUrl: 'facturation.html',
})
export class FacturationPage {
  dataTrans={};
  operation
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.dataTrans=navParams.get('Data');
    this.operation= navParams.get('operation');
  }


  done(){
      let alert = this.alertCtrl.create({
        title: 'Done !',
        subTitle: 'The operation was successful',
        buttons: ['Ok']
      });
      alert.present();
    }
  
}
