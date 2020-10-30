import { NgModule } from '@angular/core';
import { GeexecDashboardComponentsComponent } from './geexec-dashboard-components.component';
import { GxHeadingComponent } from './gx-heading/gx-heading.component';
import { GxInputComponent } from './forms/gx-input/gx-input.component';



@NgModule({
  declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent],
  imports: [
  ],
  exports: [GeexecDashboardComponentsComponent,GxHeadingComponent,GxInputComponent]
})
export class GeexecDashboardComponentsModule { }
