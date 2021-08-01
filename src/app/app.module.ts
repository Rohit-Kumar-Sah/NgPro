import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { TDComponent } from './content/TemplateDrivenForms/td/td.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    TDComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
