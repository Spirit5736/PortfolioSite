import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @HostListener('document:mousemove', ['$event'])
  title = 'PortfolioSite';


  constructor(
  ) { }

  // Обработчик движения мыши
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const image = document.getElementById('movingImage');
    if (image) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const centerX = screenWidth / 2;
      const centerY = screenHeight / 2;

      const offsetX = (event.clientX - centerX) / centerX;
      const offsetY = (event.clientY - centerY) / centerY;

      const moveX = offsetX * 10;
      const moveY = offsetY * 10;

      image.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

