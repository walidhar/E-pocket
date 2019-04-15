import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { SmartWalletPage } from '../smart-wallet/smart-wallet';
import { MorePage } from '../more/more';
import { CardsPage } from '../cards/cards';
import { RendezVousPage } from '../rendez-vous/rendez-vous';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  profilPage = ProfilPage;
  smartwalletPage = SmartWalletPage;
  more = MorePage;
  cardsPage = CardsPage;
  RendezVousPage = RendezVousPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
