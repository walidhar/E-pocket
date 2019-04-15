import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PageProvider {

  slides(){
    return [
      {
        title: "MANAGEMENT",
        text: "Managing monthly expenses based on the users personal needs by notifying them in case of exceeding the budget.",
        image: "assets/illustration/1.svg",
      },
      {
        title: "MAPPING",
        text: "Mapping system that shows nearby ATMs.",
        image: "assets/illustration/2.svg",
      },
      {
        title: "QR PAYMENT",
        text: "Payment via QR code.",
        image: "assets/illustration/3.svg",
      },
      {
        title: "BOOKING",
        text: "Booking appointments to visit bank agencies.",
        image: "assets/illustration/4.svg",
      }
     ]
  }

  cards(){
    return [
      {
        title: "Bank Transfer",
        subtitle: "Salary",
        price: "+ 850.00 MAD",
        date:"13 Nov 2017 12:45 AM"
      },
      {
        title: "Home Rent",
        subtitle: "Pay",
        price: "- 350.00 MAD",
        date:"13 Nov 2017 12:45 AM"
      },
      {
        title: "Supermarket",
        subtitle: "Shoping",
        price: "- 237.59 MAD",
        date:"13 Nov 2017 12:45 AM"
      },
      {
        title: "Transfer",
        subtitle: "Salary",
        price: "+ 285.00 MAD",
        date:"13 Nov 2017 12:45 AM"
      },
      {
        title: "Bank Transfer",
        subtitle: "Salary",
        price: "+ 850.00 MAD",
        date:"13 Nov 2017 12:45 AM"
      },
      {
        title: "Bank Transfer",
        subtitle: "Salary",
        price: "+ 850.00 MAD",
        date:"13 Nov 2017 12:45 AM"
      },
      {
        title: "Bank Transfer",
        subtitle: "Salary",
        price: "+ 850.00 MAD",
        date:"13 Nov 2017 12:45 AM"
      },
    ]
  }
}


