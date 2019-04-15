import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ThirdPage } from '../third/third';


@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Take a Picture',
          handler: () => {
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }
            
            this.camera.getPicture(options).then((imageData) => {
             // imageData is either a base64 encoded string or a file URI
             // If it's base64 (DATA_URL):
             let mypic = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
             // Handle error
            });
          }
        },
        {
          text: 'Get a Picture',
          handler: () => {
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.FILE_URI,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              saveToPhotoAlbum:false
            }
            
            this.camera.getPicture(options).then((imageData) => {
             // imageData is either a base64 encoded string or a file URI
             // If it's base64 (DATA_URL):
             let mypic = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
             // Handle error
            });
          }
        }
      ]
    });
    alert.present();
  }

  next(){
    this.navCtrl.push(ThirdPage);
  }


}
