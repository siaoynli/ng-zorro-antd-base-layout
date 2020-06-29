import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const modules = [FormsModule, ReactiveFormsModule, HttpClientModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class ShareModule {}
