import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { MyAlbumComponent } from './my-album/my-album.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAlbumsComponent,
    MyAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
