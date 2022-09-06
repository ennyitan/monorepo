import { Component, OnInit } from '@angular/core';
import { slide } from '../../interface/slide';
import { SlideService } from '../../service/slide.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
 slides: slide[]=[]
 slideShow: number = 0

  constructor(private slideService: SlideService) { }

  ngOnInit(): void {
    this.slides = this.slideService.getSlides()

    setInterval(() =>{
      this.slideShow++
      if(this.slideShow > this.slides.length-1){
        this.slideShow = 0;
      }
    },3000)

    
  }
                           
}
