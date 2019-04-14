import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiles = [
    {
      title: 'YOUTH AND ADULT PROJECTS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel justo lorem. Nunc ipsum sem, malesuada bibendum ligula eu, consectetur condimentum dolor.',
      icon: 'group',
    },
    {
      title: 'EVS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel justo lorem. Nunc ipsum sem, malesuada bibendum ligula eu, consectetur condimentum dolor. Cras in nisl sit amet orci luctus commodo nec ut orci.',
      icon: 'school',
    },
    {
      title: 'COMMUNITY ACTIVITIES',
      description: 'Vestibulum quis tortor non elit lobortis lacinia. Donec ac placerat nisl. Quisque at dictum leo. In mi sem, auctor et enim sed, semper dignissim dui. Phasellus in laoreet ligula.',
      icon: 'local_hotel',
    },
  ];

  team = [
    {
      name: 'Darth Vader',
      imageUrl: 'https://images.fatherly.com/wp-content/uploads/2018/12/darthvader-header.jpg?q=65&enable=upscale&w=600',
      role: 'Chairperson'
    },
    {
      name: 'Thanos',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/JBJzwCXmTJs0NgnFtSPm_f5SMyw=/0x0:2000x1000/1200x800/filters:focal(654x138:974x458)/cdn.vox-cdn.com/uploads/chorus_image/image/59408999/Thanos_MCU.0.jpg',
      role: 'Vice-chairperson'
    },
    {
      name: 'The Joker',
      imageUrl: 'https://images.spot.im/v1/production/rqhe6wdojg1pnzgmr5cp',
      role: 'EVS coordinator'
    },
    {
      name: 'Kylo Ren',
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/kylo-ren-db-main_e2e6f666.jpeg?region=0%2C0%2C1560%2C878&width=960',
      role: 'Head of research department'
    },
    {
      name: 'Voldemort',
      imageUrl: 'https://www.gannett-cdn.com/-mm-/1d10b02c47124839540f95461e99b239519c4db7/c=364-0-2508-1206/local/-/media/2017/02/09/USATODAY/usatsports/vol4.jpg?width=3200&height=1680&fit=crop',
      role: 'Web-developer'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
