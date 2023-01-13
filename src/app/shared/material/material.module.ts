import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

const materialComponents = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
];

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, ...materialComponents],
  exports: [...materialComponents],
})
export class MaterialModule {}
