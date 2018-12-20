import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PageNotFoundComponent} from './page-not-found.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [PageNotFoundComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render Not Found in a h1 tag', () => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Not Found');
    });

    it('should render a message to the user to say go back to the homepage', () => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain('Sorry, this page does not exist! Please go back to the homepage.');
    });

    it('should contain a button', () => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button').textContent).toContain('Go Back to the Homepage');
    });
});
