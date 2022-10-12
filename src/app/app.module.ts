import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { TimeLimitComponent } from './router4/time-limit/time-limit.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, HomeComponent, TimeLimitComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule,HttpClientModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
