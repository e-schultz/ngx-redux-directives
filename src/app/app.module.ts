import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { IAppState, rootReducer, middleware, enhancers } from '../store';
import { NgxReduxDirectivesModule } from './ngx-redux-directives/ngx-redux-directives.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgxReduxDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>) {
    ngRedux.configureStore(rootReducer, {}, [...middleware], [...enhancers]);
  }
}
