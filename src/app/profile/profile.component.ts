import {Component, OnInit} from '@angular/core';
import {Person} from '../Person';
import {PersonService} from '../person.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

    public person: Person;

    constructor(
        private personService: PersonService
    ) {
    }

    ngOnInit() {
        this.person = this.personService.getPerson();
    }

}
