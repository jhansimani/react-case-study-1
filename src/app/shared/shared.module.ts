import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormatdatePipe } from './formatdate.pipe';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [SortPipe, FormatdatePipe, LoaderComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [SortPipe, FormatdatePipe, LoaderComponent],
})
export class SharedModule {}
