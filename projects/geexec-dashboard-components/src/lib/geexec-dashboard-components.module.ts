import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeexecDashboardComponentsComponent } from './geexec-dashboard-components.component';
import { GxHeadingComponent } from './gx-heading/gx-heading.component';
import { GxInputComponent } from './forms/gx-input/gx-input.component';
import { GxButtonComponent } from './gx-button/gx-button.component';



@NgModule({
  declarations: [GeexecDashboardComponentsComponent, GxHeadingComponent, GxInputComponent, GxButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [GeexecDashboardComponentsComponent,GxHeadingComponent,GxInputComponent,GxButtonComponent]
})
export class GeexecDashboardComponentsModule { }
