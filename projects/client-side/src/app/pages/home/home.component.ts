import { Component, OnInit } from '@angular/core';
import { Reviews } from '../../interface/slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeContent! : any
  arrowRight! : boolean
  arrowLeft! : boolean 
  constructor() { }

  ngOnInit(): void {
    this.activeContent = this.review.filter(res => res.isActive === true)
  }

  review: Array<Reviews> = [
    {
      image: 'assets/images/review1.webp',
      name: 'Stilinski Biles',
      occupation: 'Smartass',
      details: 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.',
      isActive: true,
      id: 0
    },
    {
      image: 'assets/images/review2.webp',
      name: 'Allison Argent',
      occupation: 'Hunter',
      details: 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.',
      isActive: false,
      id: 1
    },
    {
      image: 'assets/images/review3.webp',
      name: 'Scott McCall',
      occupation: 'True Alpha',
      details: 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.',
      isActive: false,
      id: 2
    },
    {
      image: 'assets/images/review1.webp',
      name: 'Derek Hale',
      occupation: 'Demon Wolf',
      details: 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.',
      isActive: false,
      id: 3
    },
    {
      image: 'assets/images/review2.webp',
      name: 'Kate Argent',
      occupation: 'Hunter turned killer',
      details: 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.',
      isActive: false,
      id: 4
    },
    {
      image: 'assets/images/review3.webp',
      name: 'Decaulion',
      occupation: 'Blind Alpha',
      details: 'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.',
      isActive: false,
      id: 5
    },

  ]
  navRightArrow(id: number){
    if( id < this.review.length){
      this.review[id].isActive = false
    }
    if ((id + 1) < this.review.length){
      this.review[id + 1].isActive = true
      this.arrowLeft = true
      this.activeContent = this.review.filter(res => res.isActive === true)
    }else{
      this.arrowRight = false
    }
  }
  navLeftArrow(id: number){
    if( id < this.review.length){
      this.review[id].isActive = false
    }
    if ((id - 1) >= 0) {
      this.review[id - 1].isActive = true
      this.arrowRight = true
      this.activeContent = this.review.filter(res => res.isActive === true)
    }else{
      this.arrowLeft = false
    }
  }
}
