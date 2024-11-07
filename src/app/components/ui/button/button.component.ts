import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgClass, NgOptimizedImage } from '@angular/common';
import { cva } from 'class-variance-authority';
import { cn } from '../../../../lib/utils';
import { SvgGradientRightComponent } from './svg-gradient-right/btn-gradient-right.component';
import { SvgWhiteLeftComponent } from './svg-white-left/btn-white-left.component';
import { SvgWhiteRightComponent } from './svg-white-right/btn-white-right.component';
import { SvgGradientLeftComponent } from './svg-gradient-left/btn-gradient-left.component';
import { RouterLink } from '@angular/router';

const buttonStyles = cva('', {
  variants: {
    variant: {
      gradient: 'border-t-b-gradient',
      white: 'bg-white',
    },
  },
  defaultVariants: {
    variant: 'gradient',
  },
});

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    NgClass,
    SvgGradientLeftComponent,
    SvgGradientRightComponent,
    SvgWhiteLeftComponent,
    SvgWhiteRightComponent,
    RouterLink
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant: 'gradient' | 'white' = 'gradient';
  @Input() classButtonContainer: string = '';
  @Input() href: string = "";
  @Output() click: EventEmitter<any> = new EventEmitter();

  get buttonClass() {
    return cn(buttonStyles({ variant: this.variant }));
  }

  get buttonContainerClass() {
    return cn(
      'btn',
      'relative flex items-center h-full gap-0',
      this.classButtonContainer
    );
  }

  handleClick(event: MouseEvent) {
    event.stopPropagation();
    this.click.emit();
  }
}
