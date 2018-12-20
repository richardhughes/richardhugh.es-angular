import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    backToHomepage() {
        return this.router.navigate(['/']);
    }

}
