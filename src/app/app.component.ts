import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { increment, decrement } from '../actions/counter.actions';
@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  count: number = 0;
  constructor(private _ngRedux: NgRedux<any>) { }

  counterFn(state) {
    console.log(this.count++);
    return state.counter;
  }

  increment() {
    this._ngRedux.dispatch(increment());
  }

  decrement() {
    this._ngRedux.dispatch(decrement());
  }
}
