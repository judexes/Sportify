import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportifyService {

  private authorizationKey = 'Bearer BQBnj-jGtNgjKkDZ8FPtJAPXbAI0GikNW1pxEw7WL-JXD_ExrMHnmE7avMSv-WGP7LD3iGQZaLRq0j6It13WPzEtrrL3Xl3dVRBNn0FmxCpwqRUUNU8vqhhzWhR-L4xwmIw1nt8WvAgxS6Bchy4NbnrQ1IH5Q6oS-XA';

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
    const endPoint = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`;

    return this._httpClient.get<any>(endPoint, this.httpOptions);
  }

  // Get all Tracks
  // public getAllTrack(searchQuery):Observable<any>{
  //   const endPoint = `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`;

  //   return this._httpClient.get<any>(endPoint, this.httpOptions);
  // }

  // Get all Album
  public getAllAlbum(searchQuery){
    let albumUrl = `https://api.spotify.com/v1/search?q=${searchQuery}&type=album`;
  }

}
