import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router"
import { MaterialModule } from './material/material.module';
import { AppbarComponent } from './appbar/appbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [MaterialModule, AppbarComponent, FooterComponent],
})
export class SharedModule {}
