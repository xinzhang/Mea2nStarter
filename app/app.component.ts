import {Component} from 'angular2/core'

@Component({
    selector: 'my-app'
    template: `
        <h1>{{pageTtle}}</h1>
    ` 
})
export class AppComponent {
    pageTtle : string = "this is the first app component." 
}