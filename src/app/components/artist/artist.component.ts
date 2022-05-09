import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SportifyService } from 'src/app/services/sportify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  public artistId:string;
  public artist:any;
  public albums:any;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _sportifyService:SportifyService
  ) { }

  ngOnInit(): void {

    // get artist id from browser url
    this._activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      this.artistId = paramMap.get('id');
    });

    // get artist from service
    this._sportifyService.getArtist(this.artistId).subscribe((data) => {
      this.artist = data;
    });

    // get artist albums from service
    this._sportifyService.getArtistAlbums(this.artistId).subscribe((data) => {
      this.albums = data.items;
      // console.log(this.albums);
    });
  }

  // public getArtistDetails() {
  //   this._sportifyService.getArtist(this.artistId).subscribe((data) => {

  //     this.artist = data;
  //   })
  // }

}
