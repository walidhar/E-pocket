import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { AddCatPage } from '../add-cat/add-cat';


@Component({
  selector: 'page-smart-wallet',
  templateUrl: 'smart-wallet.html',
})
export class SmartWalletPage {
  public hidden:boolean = true;
  name: string;
  items:any = [];
  static itemsStatic : any = [];

  @ViewChild(Slides) slides: Slides
  show_fab: Boolean = false
  show_bottom_sec: Boolean = false



  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController) {
                
                this.name = navParams.get('name');

                SmartWalletPage.itemsStatic.unshift(this.name);

                this.items=SmartWalletPage.itemsStatic;
                console.log(this.items);

  }


  
  
  ionViewDidLoad() {
    
    let self = this
    setTimeout(() => self.slideChanged(), 100);

    
  }

  // toggleBottom(){
  //   this.show_bottom_sec = !this.show_bottom_sec
  //   console.log(this.show_bottom_sec)
  // }

  slideChanged(){
    console.log(this.slides)
    this.show_fab = this.slides.getActiveIndex() == 0 ? true : false
  }

  addCat(){
    this.navCtrl.push(AddCatPage);
  }

  Alert() {

    if (this.hidden == false) {

      let alert = this.alertCtrl.create({
        title: 'SmartWallet',
        message: 'Disable SmartWallet.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Activate',
            handler: () => {
              this.hidden = true;
            }
          }
        ]
      });
      alert.present();
    }

  }
}
