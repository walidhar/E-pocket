import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PageProvider } from '../../providers/page/page';
import { CarteBankPage } from '../carte-bank/carte-bank';
import { SignupPage } from '../signup/signup';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  datas:any = [];
  cards : any [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public data: PageProvider,) {
      for(let index = 0; index < 10; index++){
        this.datas.push(index)
      }
  }

  ionViewDidLoad() {
    this.cards = this.data.cards();
    
}

addCard(){
  this.navCtrl.push(CarteBankPage);
}

profil() {
  this.navCtrl.push(EditPage)
}

}
