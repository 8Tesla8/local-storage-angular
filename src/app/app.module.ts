import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { InfoService } from './service/info.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    EditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
