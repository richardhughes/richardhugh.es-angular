import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GithubSectionComponent} from './github-section.component';
import {GithubComponent} from '../github/github.component';
import {NotForkPipe} from '../not-fork.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('GithubSectionComponent', () => {
    let component: GithubSectionComponent;
    let fixture: ComponentFixture<GithubSectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GithubSectionComponent, GithubComponent, NotForkPipe, TimeAgoPipe],
            providers: [HttpClient, HttpHandler]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GithubSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
