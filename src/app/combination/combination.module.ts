import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombinationComponent } from './combination.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: CombinationComponent
  },
];

@NgModule({
  declarations: [
    CombinationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CombinationModule { }
