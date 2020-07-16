import { Component, OnInit } from '@angular/core';
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons";
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'
import * as $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faAirFreshener = faAirFreshener;


  //Parallax configurations
  innerHeaderContainer: IParallaxScrollConfig = {
    parallaxSpeed: 0,
    parallaxSmoothness: 0,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'linear',
    parallaxThrottleTime: 0
  };

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      gsap.to(".navbar", {
        scrollTrigger: {
          trigger: ".trigger-1",
          toggleActions: "restart none none reset",
        },
        position: "relative",
        backgroundColor: "#52FFB8",
        bottom: "0",
        color: "#fff",
      })

      gsap.to('.my-svg polygon', {
        rotation: '360',
        duration: 15,
        repeat: -1,
        ease: 'linear',
        transformOrigin: '50% 50%',
      })


      gsap.to('.my-svg .st1', {
        direction: 'reverse',
        scale: 1.5,
        rotation: '-360',
        duration: 5,
        repeat: -1,
        ease: 'linear',
        transformOrigin: '50% 50%',
      })

      gsap.to('.my-svg .st2', {
        rotation: '360',
        duration: 9,
        repeat: -1,
        ease: 'linear',
        transformOrigin: '50% 50%',
      })





    });
  }

}
