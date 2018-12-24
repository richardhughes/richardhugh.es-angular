import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import {Repository} from '../Repository';

@Component({
  selector: 'app-github-section',
  templateUrl: './github-section.component.html',
  styleUrls: ['./github-section.component.sass']
})
export class GithubSectionComponent implements OnInit {

    public repositories;

    constructor(private githubService: GithubService) {
    }

    ngOnInit() {
        this.githubService
            .getAllRepositories()
            .subscribe((data: Array<Repository>) => this.repositories = data);
    }
}
