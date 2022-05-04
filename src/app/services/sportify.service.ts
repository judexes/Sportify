import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportifyService {

  // !      key expires after every hour requiring renewal at https://api.spotify.com/v1/search
  // TODO   Refactor code to automate AuthorizationKey renewal [Sportify Authorization Code Flow]
  private authorizationKey = 'Bearer BQAEBTWVsvuDmS2gj6D9shkkryUvTWKm7MWkJqgcO8Kh1izCYtakIr3ccve1lGDYDrHDa2RASflWfTdH3HTOilvVGzZv6HVlW33KpwsnRui7qeQwi3ijIYSw7QbZvNlCDFeEqeFsNUqs5kPGBNODqlZtPoniD1q6vc0';

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
    const endPoint = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&limit=6`;

    return this._httpClient.get<any>(endPoint, this.httpOptions);
  }

}
