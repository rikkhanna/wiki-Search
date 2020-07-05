import { Component } from '@angular/core';
import { WikipediaserviceService } from './wikipediaservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wsearch';
  pages = [];
  constructor(private wikipedia: WikipediaserviceService){}

  onSearchTerm(term: string){
    this.wikipedia.search(term).subscribe((pages: [] ) => {
      this.pages = pages;
    });
  }
}
