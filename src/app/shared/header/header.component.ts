import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/ui/button/button.component';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menu= "";

  toggle() {
    if (this.menu === "" || this.menu === "active") {
      this.menu = "inactive";
    } else {
      this.menu = "active";
    }
    console.log(this.menu);
  }

  get menuClass() {
    return {
      "active": this.menu === "active",
      "inactive": this.menu === "inactive",
    }
  }
}
