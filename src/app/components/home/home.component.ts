import { Component, OnInit } from '@angular/core';
import { SportifyService } from 'src/app/services/sportify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean;
  public searchQuery: string = null;
  public artists;
  public artistsGenres: string = null;
  // public tracks = [];

  constructor(
    private _sportifyService: SportifyService
  ) { }

  ngOnInit(): void {
  }

  // Searcg artist
  public searchArtist() {
    this._sportifyService.getAllArtist(this.searchQuery).subscribe((data) => {

      this.artists = data.artists.items;

      console.log((this.searchQuery).length);


    })
  }

  // Searcg track
  // public searchTrack() {
  //   this._sportifyService.getAllTrack(this.searchQuery).subscribe((data)=>{
  //     this.tracks = data.tracks.items;
  //   })
  // }

}
