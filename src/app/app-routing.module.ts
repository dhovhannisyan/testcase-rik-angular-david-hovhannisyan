import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/management'
  },
  { 
    path: 'management', 
    loadComponent: () => import('./management/management-page/management-page.component').then(mod => mod.ManagementPageComponent)
  },
  { 
    path: 'subagents', 
    loadComponent: () => import('./subagents/subagents.component').then(mod => mod.SubagentsComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
