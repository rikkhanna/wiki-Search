import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';


interface IWikisearch {
    query:{
      search:{
        title: string,
        wordcount: number,
        snippet: string
      }[]
    }
};

@Injectable({
  providedIn: 'root'
})
export class WikipediaserviceService {

  constructor(private http: HttpClient) { }

  search( term: string){
    return this.http.get<IWikisearch>("https://en.wikipedia.org/w/api.php",{
      params:{
        action:'query',
        format:'json',
        list:'search',
        utf8:'1',
        srsearch:term,
        origin: '*'
      }
    }).pipe(
      pluck('query','search')
    )
  }
}
