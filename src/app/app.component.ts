import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitSearch } from './git-search';
import { GitUsers } from './git-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService],
})
export class AppComponent implements OnInit {
  constructor(private GitSearchService: GitSearchService) {}
  ngOnInit() {
    /* this.GitSearchService.gitSearch('Angular 9')
      .then((response) => {
        var responseObject = response as GitSearch;
        alert('Total Libraries Found:' + responseObject.total_count);
      })
      .catch((error) => {
        alert('Error: ' + error.statusText);
      });

      this.GitSearchService.gitUsers('Moatez').then( (response) => {
        var responseObject = response as GitUsers;
        alert("Total Users Found:" + responseObject.total_count);
      }).catch( (error) => {
        alert("Error: " + error.statusText)
      }) */
  }
  title = 'GitHub Browser';
}
