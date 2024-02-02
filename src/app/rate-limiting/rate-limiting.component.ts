import { Component, OnInit } from '@angular/core';
import { interval, sampleTime, takeUntil, throttleTime } from 'rxjs';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-rate-limiting',
  templateUrl: './rate-limiting.component.html',
  styleUrls: ['./rate-limiting.component.scss']
})
export class RateLimitingComponent extends BaseComponent implements OnInit {


  ngOnInit(): void {
    // this.throttleTimeOperator();
    this.sampleTimeOperator();
  }

  // only emits values every 2 seconds, regardless of how frequently sourceObservable emits values.
  private throttleTimeOperator(): void {
    const sourceObservable = interval(1000);

    const throttledObservable = sourceObservable.pipe(
      throttleTime(1000) // Throttle emissions to every 2 seconds
    );

    throttledObservable
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(value => {
      console.log(value);
    });
  }

  private sampleTimeOperator(): void {
    const sourceObservable = interval(1000); // Emits values every second

    const sampledObservable = sourceObservable.pipe(
      sampleTime(2000) // Sample values every 2 seconds
    );

    sampledObservable
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(value => {
      console.log(value);
    });
  }
}
