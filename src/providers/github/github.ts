

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
/*
  Generated class for the GithubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubProvider {

  public urlBase = 'https://api.github.com'

  count:number = 0;

  constructor(public http:Http) {
    console.log('Hello GithubProvider Provider');
  }
  increment():number{
    return ++this.count;

  }

  getUsers():Observable<[{}]>{
    return this.http.get(`${this.urlBase}/users`)
    .map((res:Response)=> res.json() as [{}])
  }


}
