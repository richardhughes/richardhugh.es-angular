import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSectionComponent } from './github-section.component';

describe('GithubSectionComponent', () => {
  let component: GithubSectionComponent;
  let fixture: ComponentFixture<GithubSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubSectionComponent ]
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
