import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-quote',
  templateUrl:'./quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Stephen', "Some People will appreciate you. Some willcriticise you.....In both the cases you are the beneficiary.....One will motivateyou..while the Other will improveyou.", new Date(2020, 6, 11)),
    new Quote(3, 'Edu nush', "Dont give the devil a ride coz his always want to drive.", new Date(2020, 11, 12)),
    new Quote(4, 'Lewis k ', "Only a lyf live for others is worth living.", new Date(2020, 11, 6)),
    new Quote(5, 'Gift Shilla', "If you want to archieve good things start humbling .", new Date(2020, 11, 6)),
    new Quote(6, 'Icy spice', "The only joy in the world is to begin since a journey of a thousand miles starts with a single step.", new Date(2020, 11, 6)),
    new Quote(6, 'David ', "You only live once, but if you do it right, once is enough.", new Date(2020, 11, 7)),
    new Quote(6, 'Ian n', " loughter is an istant vacation.", new Date(2020, 11, 7)),


  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  upvote(index) {
    this.quotes[index].like++;
  }
  downvote(index) {
    this.quotes[index].unlike++;
  }


  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);

    }
  }



  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name} Quote?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
