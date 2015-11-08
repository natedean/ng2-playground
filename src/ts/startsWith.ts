import { Pipe } from 'angular2/angular2';

@Pipe({
    name: 'startsWith'
})
export class StartsWith{
    transform(value:Array){
        return value;
    }
}