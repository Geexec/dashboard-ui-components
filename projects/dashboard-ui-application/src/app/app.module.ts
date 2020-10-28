import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GeexecDashboardComponentsModule} from '../../../geexec-dashboard-components/src/lib/geexec-dashboard-components.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GeexecDashboardComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
