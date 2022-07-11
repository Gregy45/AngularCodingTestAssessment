import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { MyAlbum } from './my-album';

@Injectable({
  providedIn: 'root'
})
export class MyAlbumsService {

  constructor(private httpClient: HttpClient) { }

  getAllAlbums():Observable<MyAlbum[]>{
    return this.httpClient.get<MyAlbum[]>("https://jsonplaceholder.typicode.com/photos");
  }
}
