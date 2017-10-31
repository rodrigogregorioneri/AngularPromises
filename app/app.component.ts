import { Component } from '@angular/core';
 import { Http } from '@angular/http';

@Component({
    selector: 'my-app',
    viewProviders: [],
    template: '<h1>Hello World Angular</h1>'
})
export class AppComponent{
    constructor (http: Http){
        console.log(http.get('https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1')
        .subscribe(res => res.json()));      
      }
}