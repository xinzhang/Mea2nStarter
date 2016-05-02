import { PipeTransform, Pipe } from 'angular2/core';
import { IGame } from './game';

@Pipe({
    name: 'gamePlatformFilter'
})
export class GamePlatformFilterPipe implements PipeTransform {

    transform(value: IGame[], args: string[]): IGame[] {
        
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        
        if (filter == null )
            return value;
        
        return filter ? value.filter((g: IGame) =>
            g.platform.toLocaleLowerCase().indexOf(filter) != -1) : value;            
    }
}