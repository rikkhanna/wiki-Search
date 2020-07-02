import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaserviceService {

  constructor() { }

  search( term: string){
    console.log(`Term is ${term} used for wikipedia service`);
  }
}
