import { TabsPage } from './../tabs/tabs';
import { ThirdPage } from './../third/third';
import { CarteBankPage } from './../carte-bank/carte-bank';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-questionnaire',
  templateUrl: 'questionnaire.html',
})
export class QuestionnairePage {
  id: number;
  step1 : string;
  step2 : string;
  step3 : string;
  step4 : string;
  title1 : string;
  title2 : string;
  title2_2 : string;
  title3 : string;
  title3_2 : string;
 constructor(public navCtrl: NavController) {
     this.id=0;
     this.step1 = "step";
     this.step2 = "step";
     this.step3 = "step";
     this.step4 = "step";
     this.title1 = "Do you have to pay rent?";
     this.title2 = "Do you prefer to pay rent using "; 
     this.title2_2 = "cash and in person?"; 
     this.title3 = "Or, would you prefer to tranfer ";
     this.title3_2 = "the rent money automaticly?";
 }
 back(){
  this.navCtrl.push(ThirdPage);
 }
 
 MyFunction(){
   if(this.id==4){
    this.id=0;
     this.navCtrl.push(TabsPage);
     
   }
   
   console.log("id is :",this.id);
   if(this.id==0){
     this.step1 = "step done";
     this.step2 = "step";
     this.step3 = "step";
     this.step4 = "step";
     this.title1 = "How often do you go shopping?";
     this.title2 = "What are the goods you spend money on the most?";
     this.title3 = "How much do you spend on shopping?";
     this.id = this.id + 1;
   }
   else if(this.id==1){
     this.step1 = "step";
     this.step2 = "step done";
     this.step3 = "step";
     this.step4 = "step";
     this.title1 = "Do you want to start saving money?";
     this.title2 = "Do you have any transactions?";
     this.title3 = "Any other expenses?";
     this.id = this.id + 1;
   }
   else if(this.id==2){
     this.step1 = "step";
     this.step2 = "step";
     this.step3 = "step done";
     this.step4 = "step";
     this.title1 = "Do you have to pay rent?";
     this.title2 = "Do you prefer to pay rent using "; 
     this.title2_2 = "cash and in person?"; 
     this.title3 = "Or, would you prefer to tranfer ";
     this.title3_2 = "the rent money automaticly?";
     this.id = this.id + 1;
   }
   else if(this.id==3){
     this.step1 = "step";
     this.step2 = "step";
     this.step3 = "step";
     this.step4 = "step done";
     this.id = this.id + 1;
     
   }
   
 }
}
