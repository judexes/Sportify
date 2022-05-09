import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportifyService {

  // !      key expires after every hour requiring renewal at https://api.spotify.com/v1/search
  // TODO   Refactor code to automate AuthorizationKey renewal [Sportify Authorization Code Flow]
  private authorizationKey = 'Bearer BQAARKlNO4mPu3VHhG_KJQoHmvOXXyNPxtC7IrI2EHC0i41jvJkmWOo01wk_HoZRwNtYZgCUNM1I7biP83r-XoFJZYohQVaHWW13X7HhNkYxhNQlg-ZalJIPCZVOf_QAf2LMlfd4Vg_f-ra77YKQJ6k9B83clMNKnRU';

  private httpOptions = {
    headers : new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'Authorization' : this.authorizationKey
    })
  };

  constructor(private _httpClient: HttpClient) { }

  // Get all Artist
  public getAllArtist(searchQuery):Observable<any>{
    //  * Refactor code to include filter from user
    let endPoint = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&limit=6`;
    return this._httpClient.get<any>(endPoint, this.httpOptions);
  }

  // Get Artist details
  public getArtist(artistId):Observable<any>{
    let endPoint = `https://api.spotify.com/v1/artists/${artistId}`;
    return this._httpClient.get<any>(endPoint, this.httpOptions)
  }

  // Get artist albums
  public getArtistAlbums(artistId):Observable<any>{
    let endPoint = `	https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this._httpClient.get<any>(endPoint, this.httpOptions)
  }

}