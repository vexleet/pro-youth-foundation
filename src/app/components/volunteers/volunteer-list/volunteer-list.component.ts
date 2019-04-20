import { ActivatedRoute } from '@angular/router';
import { VolunteerService } from './../../../core/services/volunteer.service';
import { Component, OnInit } from '@angular/core';
import { IVolunteer } from 'src/app/core/models';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { filter, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css']
})
export class VolunteerListComponent implements OnInit {
  dataSource = new VolunteerDataSource(this.volunteerService, this.route);
  displayedColumns = ['fullName', 'telephone', 'age', 'gender', 'button'];

  constructor(
    private volunteerService: VolunteerService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

}

export class VolunteerDataSource extends DataSource<any> {
  constructor(
    private volunteerService: VolunteerService,
    private route: ActivatedRoute) {
    super();
  }
  connect(): Observable<IVolunteer[]> {
    const idOfProject = this.route.snapshot.params['id'];

    return this.volunteerService.getAll()
      .pipe(map(volunteers => volunteers.filter(volunteer => volunteer.idOfProject === idOfProject)));
  }
  disconnect() { }
}
