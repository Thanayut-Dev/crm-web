import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  manuList = [
    {
      "name": "dashboard",
      "icon": "icon-deals"
    },
    {
      "name": "dashboard",
      "icon": "icon-contacts11"
    },
    {
      "name": "dashboard",
      "icon": "icon-companies"
    },
    {
      "name": "dashboard",
      "icon": "icon-products"
    },
    {
      "name": "dashboard",
      "icon": "icon-activities"
    },
    {
      "name": "dashboard",
      "icon": "icon-dashboards"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
