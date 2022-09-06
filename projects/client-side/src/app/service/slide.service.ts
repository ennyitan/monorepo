import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor() { }
  getSlides(){
    return([
      {img: "../../../assets/images/vintage.webp",
 
      },
      {img: "../../../assets/images/vint.webp",

      },
      {img: "../../../assets/images/old.webp",

      },
      {img: "../../../assets/images/oldvint.webp",

      },
      {img: "../../../assets/images/vintage.webp",
      
      },
     
    ])
  }
}
