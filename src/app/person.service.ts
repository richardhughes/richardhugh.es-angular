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
            jobTitle: 'Software Developer',
            socialLinks: this.getSocialLinks()
        };
    }

    private getSocialLinks(): Array<SocialLink> {
        return [
            {name: 'Github', link: 'https://github.com/richardhughes', icon: 'fab fa-github-square fa-3x'},
            {name: 'LinkedIn', link: 'https://www.linkedin.com/in/richardhughes9/', icon: 'fab fa-linkedin fa-3x'},
            {name: 'Twitter', link: 'https://twitter.com/MrRichieHughes', icon: 'fab fa-twitter-square fa-3x'},
            {name: 'StackOverflow', link: 'https://stackoverflow.com/users/2915099/richie-hughes',  icon: 'fab fa-stack-overflow fa-3x'}
        ];
    }
}
