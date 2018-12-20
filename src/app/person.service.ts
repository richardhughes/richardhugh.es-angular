import {Injectable} from '@angular/core';
import {Person} from './Person';
import {SocialLink} from './SocialLink';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor() {
    }

    getPerson(): Person {
        return {
            name: 'Richard Hughes',
            email: 'iam@richardhugh.es',
            socialLinks: this.getSocialLinks()
        };
    }

    private getSocialLinks(): Array<SocialLink> {
        return [
            {name: 'Github', link: 'https://github.com/richardhughes', icon: 'fab fa-github-square fa-2x'},
            {name: 'LinkedIn', link: 'https://www.linkedin.com/in/richardhughes9/', icon: 'fab fa-linkedin fa-2x'},
            {name: 'Facebook', link: '', icon: ''}
        ];
    }
}
