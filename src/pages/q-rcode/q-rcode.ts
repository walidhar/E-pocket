import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { FacturationPage } from '../facturation/facturation';


@Component({
  selector: 'page-q-rcode',
  templateUrl: 'q-rcode.html',
})
export class QRcodePage {
  data={};
  option:BarcodeScannerOptions;
  constructor(public navCtrl: NavController,public barcodeScanner: BarcodeScanner) {

  }
  scan(){
    this.option ={
      prompt: "Please scan your Code"
    }
    this.barcodeScanner.scan(this.option).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
      this.navCtrl.push(FacturationPage, {
        operation: "Scanner",
        Data: this.data
      }); 
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
