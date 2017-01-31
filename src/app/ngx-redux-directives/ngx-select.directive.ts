import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
@Directive({
  selector: '[ngxSelect]',
  exportAs: 'ngxSelect'
})
export class NgxSelectDirective implements OnInit, OnDestroy {

  value$: Observable<any>;
  value: any;
  sub: Subscription;
  @Input() ngxSelect;
  constructor(private _ngRedux: NgRedux<any>) { }

  ngOnInit() {

    this.value$ = this._ngRedux.select(this.ngxSelect);
    this.value$.subscribe(n => this.value = n);

  }

  ngOnDestroy() {

    this.sub.unsubscribe();
  }
}
