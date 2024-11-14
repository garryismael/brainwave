import {Component} from '@angular/core';
import {ButtonComponent} from "@/app/components/ui/button/button.component";
import {NgOptimizedImage} from "@angular/common";
import {SectionComponent} from '@/app/components/section/section.component';
import {NgIconComponent, provideIcons} from '@ng-icons/core';
import {remixAddBoxLine, remixFileList2Line, remixHomeSmile2Line, remixSearchLine} from '@ng-icons/remixicon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage, SectionComponent, NgIconComponent],
  viewProviders: [provideIcons({remixHomeSmile2Line, remixFileList2Line, remixSearchLine, remixAddBoxLine})],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
