import {Component, Input} from '@angular/core';
import {cn} from '@/lib/utils';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  @Input()
  containerClass = "";
  @Input()
  id="";

  @Input()
  corners= false;

  get mainClass() {
    return cn(
      'relative',
      this.containerClass,
    );
  }
}
