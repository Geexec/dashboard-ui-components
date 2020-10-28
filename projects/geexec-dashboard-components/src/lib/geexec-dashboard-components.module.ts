import { NgModule } from '@angular/core';
import { GeexecDashboardComponentsComponent } from './geexec-dashboard-components.component';
import { GxHeadingComponent } from './gx-heading/gx-heading.component';



@NgModule({
  declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent],
  imports: [
  ],
  exports: [GeexecDashboardComponentsComponent,GxHeadingComponent]
})
export class GeexecDashboardComponentsModule { }
