import {Component} from '@angular/core';
import {ButtonComponent} from "@/app/components/ui/button/button.component";
import {NgOptimizedImage} from "@angular/common";
import {SectionComponent} from '@/app/components/section/section.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage, SectionComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
