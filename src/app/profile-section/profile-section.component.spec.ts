import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileSectionComponent} from './profile-section.component';
import {ProfileComponent} from '../profile/profile.component';
import {GithubSectionComponent} from '../github-section/github-section.component';
import {GithubComponent} from '../github/github.component';
import {NotForkPipe} from '../not-fork.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ProfileSectionComponent', () => {
    let component: ProfileSectionComponent;
    let fixture: ComponentFixture<ProfileSectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileSectionComponent, ProfileComponent, GithubSectionComponent, GithubComponent, NotForkPipe, TimeAgoPipe],
            providers: [HttpClient, HttpHandler]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
