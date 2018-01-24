import { Component } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Region, MarcketUnit } from './model/inputControls.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  getData(inputForm: NgForm): void {
    console.log(inputForm.value)
  }

  region = 'All';

  regions: Region[] = [
    { name: 'All' },
    { name: 'APAC' },
    { name: 'brazil' },
    { name: 'east asia' },
    { name: 'europe' },
    { name: 'latin america' },
    { name: 'middle east' },
    { name: 'north america' }
  ];

  marcketUnit = 'All';

  marcketUnits: MarcketUnit[] = [
    { name: 'All' },
    { name: 'MU Benelux' },
    { name: 'MU Brazil' },
    { name: 'MU CHATA' },
    { name: 'MU Central & Eastern Europe' },
    { name: 'MU Commonwealth Independent States' },
    { name: 'MU France' },
    { name: 'MU Germany' },
    { name: 'MU Greater China' },
    { name: 'MU Iberia' },
    { name: 'MU India' },
    { name: 'MU Latin America' },
    { name: 'MU Middle East and Africa' },
    { name: 'MU Nordic & BALTIC' },
    { name: 'MU North America' },
    { name: 'MU SEA and Oceania' },
    { name: 'MU SEM' },
    { name: 'MU UK & Ireland' }
  ];

  siteCountry = 'All';
  siteId = 'All';
}
