import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GithubComponent} from './github.component';
import {TimeAgoPipe} from 'time-ago-pipe';

describe('GithubComponent', () => {
    let component: GithubComponent;
    let fixture: ComponentFixture<GithubComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GithubComponent, TimeAgoPipe]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GithubComponent);
        component = fixture.componentInstance;
        component.repository = {
            fork: false,
            name: '',
            html_url: '',
            stargazers_count: 1,
            watchers_count: 1,
            description: '',
            pushed_at: '2018-01-01 00:00:00'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
