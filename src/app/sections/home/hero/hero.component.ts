import { Component } from '@angular/core';
import {ButtonComponent} from "@/app/components/ui/button/button.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-hero',
  standalone: true,
    imports: [
        ButtonComponent,
        NgOptimizedImage
    ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
