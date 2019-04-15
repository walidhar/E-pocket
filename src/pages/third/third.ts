import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoTuPage } from '../video-tu/video-tu'
import { TabsPage } from '../tabs/tabs';
import { QuestionnairePage } from '../questionnaire/questionnaire';

@Component({
  selector: 'page-third',
  templateUrl: 'third.html'
})
export class ThirdPage {

  constructor(public navCtrl: NavController) {

  }
  showProfilePage() {
    this.navCtrl.push(VideoTuPage);
  }
  next(){
    this.navCtrl.push(QuestionnairePage);
  }
}
