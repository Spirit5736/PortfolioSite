import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-test-pf2',
  standalone: true,
  templateUrl: './test-pf2.component.html',
  styleUrl: './test-pf2.component.scss',
})
export class TestPf2Component {
 

  constructor(private sanitizer: DomSanitizer) {
    const params = new URLSearchParams({
      id: "AKocvsNvWq",
      type: 'Car',
      identifier: 'GY20NYU',
      identifierType: 'Vrm',
      isNew: 'false',
      cashPrice: '18995',
      imageUrl: 'https://www.dealermanager.co.uk/images/202310/large/DM2300-dttvmkcz.jpg',
      linkBackUrl: 'https://www.scarsltd.co.uk/detail/1316837/used-mercedes-benz-cla-1-3-cla-200-amg-line-4dr-semi-automatic-oldham',
      mileage: '70000',
      registrationDate: '2020-07-10',
      registrationNumber: 'WX68VME',
      depositDefaultValue: '10.00',
      depositDefaultType: 'Percentage',
      termDefaultValue: '60',
      annualMileageDefaultValue: '8000'
    });

    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:4200/budget?${params.toString()}`);
    console.log(this.iframeSrc.toString());
  }

  iframeSrc: SafeResourceUrl;
}
