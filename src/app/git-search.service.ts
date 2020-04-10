import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { GitUsers } from './git-users';

import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class GitSearchService {
  cachedValues: Array<{
    [query: string]: GitSearch;
  }> = [];

  cachedUsersValues: Array<{
    [query: string]: GitUsers;
  }> = [];

  constructor(private http: HttpClient) {}

  gitSearch = (query: string) => {
    let promise = new Promise((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query]);
      } else {
        this.http
          .get('https://api.github.com/search/repositories?q=' + query)
          .toPromise()
          .then((response) => {
            resolve(response as GitSearch)
          })
          .catch((error)=> {
            reject(error);
          });
      }
    });

    return promise;
  };

  gitUsers = (query: string) => {
    let promise = new Promise((resolve, reject) => {
      if (this.cachedUsersValues[query]) {
        resolve(this.cachedUsersValues[query]);
      } else {
        this.http
          .get('https://api.github.com/search/users?q=' + query)
          .toPromise()
          .then((response) => {
            resolve(response as GitUsers)
          })
          .catch((error)=> {
            reject(error);
          });
      }
    });

    return promise;
  };
}
