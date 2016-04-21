import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome";
    public searchText: string = "";
    
    search() : void {
        console.log('search: ' + this.searchText);
    }
}