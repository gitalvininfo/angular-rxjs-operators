import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./combination/combination.module').then(m => m.CombinationModule)
  },
  {
    path: 'rate-limiting',
    loadChildren: () => import('./rate-limiting/rate-limiting.module').then(m => m.RateLimitingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
