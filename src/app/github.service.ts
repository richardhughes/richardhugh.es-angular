import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Repository} from './Repository';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private http: HttpClient) {
    }

    getAllRepositories() {
        return this.http.get<Array<Repository>>('https://api.github.com/users/richardhughes/repos?sort=pushed');
    }
}
