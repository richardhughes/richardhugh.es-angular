import {getTestBed, TestBed} from '@angular/core/testing';

import {GithubService} from './github.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('GithubService', () => {

    let injector: TestBed;
    let service: GithubService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GithubService]
        });
        injector = getTestBed();
        service = injector.get(GithubService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should return an Observable', () => {
        const exampleRepositories = [
            {
                fork: false,
                name: '',
                html_url: '',
                stargazers_count: 1,
                watchers_count: 1,
                description: '',
                pushed_at: '2018-01-01 00:00:00'
            }
        ];

        service.getAllRepositories().subscribe(repository => {
            expect(repository.length).toBe(1);
            expect(repository).toEqual(exampleRepositories);
        });

        const req = httpMock.expectOne(`https://api.github.com/users/richardhughes/repos?sort=pushed`);
        expect(req.request.method).toBe('GET');
        req.flush(exampleRepositories);
    });
});
