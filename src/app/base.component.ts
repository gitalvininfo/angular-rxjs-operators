import { Observable, Subject } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';

@Component({
  template: ``
})
export class BaseComponent implements OnDestroy {
  private unsubscribeSubject = new Subject<void>();
  public unsubscribe$: Observable<any> = this.unsubscribeSubject.asObservable();


  stopSubscription(): void {
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    console.log('subscription stopped');
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}