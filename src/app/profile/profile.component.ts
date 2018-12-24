import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../Person';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
    @Input() person: Person;

    constructor() {
    }

    ngOnInit() {
    }

}
