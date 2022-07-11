import { Component, Input, OnInit } from '@angular/core';
import { MyAlbum } from '../my-album';

@Component({
  selector: 'app-my-album',
  templateUrl: './my-album.component.html',
  styleUrls: ['./my-album.component.scss']
})
export class MyAlbumComponent implements OnInit {

  @Input("currentAlbum") album!:MyAlbum;
  
  constructor() {}

  ngOnInit(): void {
  }

}
