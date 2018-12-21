import {Pipe, PipeTransform} from '@angular/core';
import {Repository} from './Repository';
import {isNullOrUndefined} from 'util';

@Pipe({
    name: 'notFork'
})
export class NotForkPipe implements PipeTransform {

    transform(value: Array<Repository>, args?: any): any {
        if (isNullOrUndefined(value)) {
            return value;
        }
        return value.filter(repository => !repository.fork);
    }

}
