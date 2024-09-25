import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
//Обработчик движения мыши
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
