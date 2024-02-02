import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, combineLatest, concat, forkJoin, interval, merge, of, pipe, take, takeUntil, withLatestFrom, zip } from 'rxjs';
import { BaseComponent } from '../base.component';


@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.scss']
})
export class CombinationComponent extends BaseComponent {



  ngOnInit(): void {
    // this.mergeOperator();
    // this.concatOperator();
    // this.zipOperator();
    // this.combineLatestOperator();
    // this.withLatestFromOperator();
    this.forkJoinOperator();
  }

  // 😭 subscribes to all observables simultaneously, and as soon as any of them emits a value, 
  private mergeOperator(): void {
    const observable1 = interval(10000);
    const observable2 = interval(5000);

    const mergedObservable = merge(observable1, observable2);

    mergedObservable
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(value => {
      console.log(value);
    });
  }

  // ☠️ works by subscribing to the next observable only after the previous one has completed.
  private concatOperator(): void {
    const observable1 = of(1, 2, 3); 
    const observable2 = interval(5000);  

    const concatenatedObservable = concat(observable1, observable2);

    concatenatedObservable
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(value => {
      console.log(value);
    });
  }

  // 😫 waits for both observable1 and observable2 to emit at least one value before producing combinations.
  private zipOperator(): void {
    const observable1 = interval(5000); 
    const observable2 = interval(10000);

    const zippedObservable = zip(observable1, observable2);

    zippedObservable
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(([value1, value2]) => {
      console.log(value1, value2);
    });
  }

  // 😭 emits a combination whenever any of the source observables emits a new value
  private combineLatestOperator(): void {
    const observable1 = interval(5000);
    const observable2 = interval(10000);

    const combinedObservable = combineLatest([observable1, observable2]);

    combinedObservable
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(([value1, value2]) => {
      console.log(value1, value2);
    });
  }

  // 😝 is used to create an observable that combines the latest values from dataObservable with the most recent value from triggerObservable
  private withLatestFromOperator(): void {
    const triggerObservable = interval(10000);
    const dataObservable = interval(5000);

    const combinedObservable = dataObservable.pipe(
      withLatestFrom(triggerObservable)
    );

    combinedObservable
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(([dataValue, triggerValue]) => {
      console.log(dataValue, triggerValue);
    });
  }

  // will wait for all passed observables to emit and complete and then it will emit an array or an object with last values from corresponding observables.
  private forkJoinOperator(): void {
    const observable1 = interval(1000).pipe(take(3)); // Emits values every second, completes after 3 emissions
    const observable2 = interval(1500).pipe(take(2)); // Emits values every 1.5 seconds, completes after 2 emissions

    forkJoin([observable1, observable2]).subscribe(values => {
      console.log(values);
    });
  }
}
