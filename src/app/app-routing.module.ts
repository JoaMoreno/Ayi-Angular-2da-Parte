import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewContentChildComponent } from './components/14042020-contentChild/view-content-child/view-content-child.component';
import { ViewViewChildComponent } from './components/15042020-viewChild/view-view-child/view-view-child.component';
import { PipesComponent } from './components/16042020-pipes/pipes.component';
import { Component1Component } from './components/17042020-localStorage/component1/component1.component';


const routes: Routes = [
  {path: "contentChild", component: ViewContentChildComponent},
  {path: "viewChild", component: ViewViewChildComponent},
  {path: "pipes", component: PipesComponent},
  {path: "local-storage", component: Component1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
