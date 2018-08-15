import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TapListComponent } from './tap-list/tap-list.component';
import { EditTapComponent } from './edit-tap/edit-tap.component';
import { NewTapComponent } from './new-tap/new-tap.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    TapListComponent,
    EditTapComponent,
    NewTapComponent,
    ProgressBarComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
