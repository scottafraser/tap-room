import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TapsComponent } from './taps/taps.component';


import { AppComponent } from './app.component';
import { TapListComponent } from './tap-list/tap-list.component';
import { EditTapComponent } from './edit-tap/edit-tap.component';
import { NewTapComponent } from './new-tap/new-tap.component';


@NgModule({
  declarations: [
    AppComponent,
    TapsComponent,
    TapListComponent,
    EditTapComponent,
    NewTapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
