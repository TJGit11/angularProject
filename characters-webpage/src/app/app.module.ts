import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { charactersComponent } from './characters/characters.component';
import { characterDetailComponent } from './character-detail/character-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    charactersComponent,
    characterDetailComponent,
    MessagesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
