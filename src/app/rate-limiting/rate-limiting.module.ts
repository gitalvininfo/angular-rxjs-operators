import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateLimitingComponent } from './rate-limiting.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: RateLimitingComponent
  },
];


@NgModule({
  declarations: [
    RateLimitingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RateLimitingModule { }
