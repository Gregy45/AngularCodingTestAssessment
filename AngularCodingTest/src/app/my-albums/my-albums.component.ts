import { Component, OnInit } from '@angular/core';
import { MyAlbum } from '../my-album';
import { MyAlbumsService } from '../my-albums.service';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.scss']
})
export class MyAlbumsComponent implements OnInit {

  myAlbums: MyAlbum[];

  constructor(private myAlbumsService: MyAlbumsService) { 
    this.myAlbums = [];
  }

  ngOnInit(): void {
    this.myAlbumsService.getAllAlbums().subscribe(
      (response:MyAlbum[])=>{
        this.myAlbums = response;
      }
      );
  }

}
