import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ThirdPage } from '../third/third';
import { SignupPage } from '../signup/signup';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  pincode: any = '';
  hiddenCard: any = 2

  constructor( public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private faio: FingerprintAIO ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
btnClicked(e){
    if(this.pincode.length < 4){
      this.pincode += e.target.innerHTML
    }
}

erase(){
    this.pincode = this.pincode.substring(0,this.pincode.length-1)
}

next(){
  this.navCtrl.push(ThirdPage);
}

signUp(){
  this.navCtrl.push(SignupPage);
}
password() {
  let alert = this.alertCtrl.create({
    title: 'Tape your Email:',
    inputs: [
      {
        name: 'email',
        placeholder: 'Email ...'
      },
    ],
    buttons: [
      {
        text: 'Ok',
        role: 'cancel',
        handler: data => {
          console.log('Ok clicked');
        }
      },
      // {
      //   text: 'Login',
      //   handler: data => {
      //     if (User.isValid(data.username, data.password)) {
      //       // logged in!
      //     } else {
      //       // invalid login
      //       return false;
      //     }
      //   }
      // }
    ]
  });
  alert.present();
}

login() {
  this.faio.show({
    clientId: 'Fingerprint-Demo',
    clientSecret: 'password', // Only Android
    localizedFallbackTitle: 'Use Pin', // Only iOS
    localizedReason: 'Please authenticate' // Only iOS
  })
    .then((result: any) => {
      this.navCtrl.setRoot(ThirdPage);
    })
    .catch((error: any) => {
      console.log('err: ', error);
    });
}


}

