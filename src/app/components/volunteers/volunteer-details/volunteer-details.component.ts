import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IVolunteer } from 'src/app/core/models';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.css']
})
export class VolunteerDetailsComponent implements OnInit {
  volunteer: IVolunteer;

  constructor(private route: ActivatedRoute) {
    this.volunteer = this.route.snapshot.data['volunteerDetails'];
  }

  ngOnInit() {
  }

}
