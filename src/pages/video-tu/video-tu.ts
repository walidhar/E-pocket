import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { ThirdPage } from '../third/third';
import { ProfilPage } from '../profil/profil';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-video-tu',
  templateUrl: 'video-tu.html',
})
export class VideoTuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private streamingMedia: StreamingMedia) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoTuPage');
  }

  retour(){
    this.navCtrl.push(ThirdPage);
  }

  play(){
      let options: StreamingVideoOptions = {
        successCallback: () => { console.log('Finished Video') },
        errorCallback: (e) => { console.log('Error: ', e) },
        orientation: 'portrait'
      };
      this.streamingMedia.playVideo('../../assets/imgs/Prototype.mp4', options);

  }

  next(){
    this.navCtrl.push(TabsPage);
  }

}
