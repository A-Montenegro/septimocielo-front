import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from 'src/selective-preloading-strategy.service';

const routes: Routes = [
  {path: '',  redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,       {
    enableTracing: false, // <-- debugging purposes only
    preloadingStrategy: SelectivePreloadingStrategyService,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
