import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PageProvider } from '../../providers/page/page';
import { EditPage } from '../edit/edit';
// import { CardsPage } from '../../pages/cards/cards';
// import { SmartWalletPage } from '../../pages/smart-wallet/smart-wallet';
// import { RdvPage } from '../../pages/rdv/rdv';
// import { MorePage } from '../../pages/more/more';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  cards : any [];
  // Cards = 'CardsPage';
  // SmartWallet = 'SmartWalletPage';
  // Profil = 'ProfilPage';
  // RDV = 'rdvPage';
  // more = 'morePage';

  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public data: PageProvider,) {
  }

  ionViewDidLoad() {
      this.cards = this.data.cards();
      
  }

  edit(){
    this.navCtrl.push(EditPage)
  }

}
