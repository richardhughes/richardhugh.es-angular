import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../Repository';

@Component({
    selector: 'app-github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.sass']
})
export class GithubComponent implements OnInit {

    @Input() repository: Repository;

    constructor() {
    }

    ngOnInit() {
    }

    goToGithub(repository: Repository) {
        window.location.href = repository.html_url;
    }
}
