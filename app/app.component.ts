import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    viewProviders: [],
    template: '<h1>Hello World Angular</h1>'
})
export class AppComponent{
    constructor (http: Http){
        console.log(http.get('https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1').map(res => res.json()));    
      }

/*  falta terminar

      search(term:string) {
        let promise = new Promise((resolve, reject) => {
          let apiURL = 'https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1';
          http.get(apiURL)
            .toPromise()
            .then(
              res => { // Success
                console.log(res.json());
                resolve();
              }
            );
        });
        return promise;
      }
*/
    }

