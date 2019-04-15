import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RendezVousPage } from '../rendez-vous/rendez-vous';


@Component({
  selector: 'page-rendez-vous-item-two',
  templateUrl: 'rendez-vous-item-two.html',
})
export class RendezVousItemTwoPage {
  houre : string ;
  //items : [];
  minute : string;
  ext : string;
  all: string;
  slides : any[];
  items:any = [];
  index: number;
  static itemsStatic : any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.houre = navParams.get('houre');
     this.minute = navParams.get('minute');
     this.ext = navParams.get('ext');
     console.log(this.houre +':'+this.minute+" "+this.ext);
     this.all = this.houre +':'+this.minute+""+this.ext;
    
  }
  
  ionViewDidLoad() {
    RendezVousItemTwoPage.itemsStatic.unshift(this.all);
    this.items=RendezVousItemTwoPage.itemsStatic;
    console.log(this.items);
  }
  remove(id){
    //this.index= this.items.indexOf(item);
    //console.log(this.index);
    if (this.index !== -1) {
      //RendezVousItemTwoPage.itemsStatic.splice(this.index, 1);
      //RendezVousItemTwoPage.itemsStatic.remove(item);
    }  
    RendezVousItemTwoPage.itemsStatic.splice(id, 1);
    this.items=RendezVousItemTwoPage.itemsStatic;
    //console.log(this.items);
  }


  back(){
    this.navCtrl.push(RendezVousPage);
  }

}
