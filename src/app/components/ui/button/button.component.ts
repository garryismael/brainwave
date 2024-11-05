import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import { cva } from 'class-variance-authority';
import {cn} from '../../../../lib/utils';

const buttonStyles = cva('', {
  variants: {
    variant: {
      gradient: "border-t-b-gradient",
      white: "bg-white"
    },
  },
  defaultVariants: {
    variant: 'gradient',
  },
});

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() variant: "gradient" | "white" = "gradient";
  @Input() classButtonContainer: string = "";
  @Output() click: EventEmitter<any> = new EventEmitter();

  get buttonClass() {
    return cn(buttonStyles({ variant: this.variant }));
  }

  get buttonContainerClass(){
    return cn("btn", "relative flex items-center h-full gap-0", this.classButtonContainer);
  }

  handleClick(event: MouseEvent) {
    event.stopPropagation();
    this.click.emit();
  }
}
