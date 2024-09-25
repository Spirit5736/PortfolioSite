import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 // @HostListener('document:mousemove', ['$event'])
  title = 'PortfolioSite';


  constructor(
    public sanitizer : DomSanitizer
  ) { }

  

  getUrl(post : string)
  {
    return this.sanitizer.bypassSecurityTrustResourceUrl(post);
  }
}
