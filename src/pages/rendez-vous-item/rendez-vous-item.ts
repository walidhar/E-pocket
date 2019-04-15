import { RendezVousItemTwoPage } from './../rendez-vous-item-two/rendez-vous-item-two';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RendezVousPage } from '../rendez-vous/rendez-vous';


@Component({
  selector: 'page-rendez-vous-item',
  templateUrl: 'rendez-vous-item.html',
})
export class RendezVousItemPage {
  id : number;
  left : string;
  right : string;
  booleanHoure : boolean;
  booleanMinute : boolean;
  name : string;
  houre : string;
  minute : string;
  hourePush : string;
  minutePush : string;
  
    constructor(public navCtrl: NavController) {
      this.id = -1;
      this.left  = "RecHoure";
      this.right = "RecMinute";
      this.booleanHoure = true;
      this.booleanMinute = false;
      this.houre = "--";
      this.minute = "--";
      this.hourePush = "";
      this.minutePush = "";
      
    }
  function1(){
    this.id = 0;
    this.left  = "RecMinute";
    this.right = "RecHoure";
    this.booleanHoure = false;
    this.booleanMinute = true;
  }
  function2(){
    this.id = 1;
    this.left  = "RecHoure";
    this.right = "RecMinute";
    this.booleanHoure = true;
    this.booleanMinute = false;
  }
  clickedHoure(event){
    //console.log(event.srcElement.value);
    //console.log(event.target.value);
  
  }
  onItemSelectorHoure(value :any) {
    this.houre = value;
    this.hourePush = value;
    this.hourePush =this.hourePush.replace(' AM','');
    console.log(this.hourePush);
    }
  
  onItemSelectorMinute(value :any) {
    this.minute = value;
    this.minutePush = value;
    this.minutePush = this.minutePush.replace(' Min','');;
    console.log(this.minutePush);
    }
    
    PushItem(){
      this.navCtrl.push(RendezVousItemTwoPage, {
        houre: this.hourePush,
        minute: this.minutePush,
        ext: "AM"
      });
    }

    back(){
      this.navCtrl.push(RendezVousPage);
    }
  }
  