import { Component, OnInit } from '@angular/core';
import {Person} from '../Person';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.sass']
})
export class ProfileSectionComponent implements OnInit {
    public person: Person;

    constructor(
        private personService: PersonService
    ) {
    }

    ngOnInit() {
        this.person = this.personService.getPerson();
    }

}
