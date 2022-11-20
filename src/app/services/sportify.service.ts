import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportifyService {

  // !      key expires after every hour requiring renewal at https://api.spotify.com/v1/search
  // !      Select scope while generating the bearer token
  // TODO   Refactor code to automate AuthorizationKey renewal [Sportify Authorization Code Flow]
  //    https://developer.spotify.com/console/get-search-item/
  authorizationKey = 'Bearer BQBf-nIko8zP5PR9C10szjtIoTcZQmAyI0-ks3YjN_rDHv8jkmfN1Q0s-tWn5gVI_TvZx3QcaWAWe6ZAdzUVFT2R-DcrRZCxeRLzi4flBjCGAbqnOteNaJ6jwTT1oiYHVkX9o0Cr5xQFqonKZQd5SW2lbtQckgZNupQkiWaVIEBUOPRQVDwG4KK9ugVFwyhteCM';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.authorizationKey
    })
  };

  constructor(private _httpClient: HttpClient) { }

  // Get all Artist
  public getAllArtist(searchQuery): Observable<any> {
    //  * Refactor code to include filter from user
    let endPoint = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&limit=6`;
    return this._httpClient.get<any>(endPoint, this.httpOptions);
  }

  // Get Artist details
  public getArtist(artistId): Observable<any> {
    let endPoint = `https://api.spotify.com/v1/artists/${artistId}`;
    return this._httpClient.get<any>(endPoint, this.httpOptions)
  }

  // Get artist albums
  public getArtistAlbums(artistId): Observable<any> {
    let endPoint = `	https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this._httpClient.get<any>(endPoint, this.httpOptions)
  }
 
}