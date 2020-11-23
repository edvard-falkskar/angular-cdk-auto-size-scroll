import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoMaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { AppListComponent } from './scroll/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
