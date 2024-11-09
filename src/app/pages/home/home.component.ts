import { ButtonComponent } from '@/app/components/ui/button/button.component';
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {HeroComponent} from '@/app/sections/home/hero/hero.component';
import {CarouselComponent} from '@/app/sections/home/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
