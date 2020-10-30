import { NgModule } from '@angular/core';
import { GeexecDashboardComponentsComponent } from './geexec-dashboard-components.component';
import { GxHeadingComponent } from './gx-heading/gx-heading.component';
import { GxInputComponent } from './forms/gx-input/gx-input.component';
import { GxButtonComponent } from './gx-button/gx-button.component';



@NgModule({
  declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent, GxButtonComponent],
  imports: [
  ],
  exports: [GeexecDashboardComponentsComponent,GxHeadingComponent,GxInputComponent,GxButtonComponent]
})
export class GeexecDashboardComponentsModule { }
