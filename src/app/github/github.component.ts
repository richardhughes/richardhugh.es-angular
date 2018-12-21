import {Component, OnInit} from '@angular/core';
import {GithubService} from '../github.service';
import {Repository} from '../Repository';
import {Router} from '@angular/router';

@Component({
    selector: 'app-github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.sass']
})
export class GithubComponent implements OnInit {

    public repositories;

    constructor(private githubService: GithubService, private router: Router) {
    }

    ngOnInit() {
        this.githubService.getAllRepositories().subscribe((data: Array<Repository>) => this.repositories = data);
    }

    goToGithub(repository: Repository) {
        window.location.href = repository.html_url;
    }
}
