import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'task1', 
    loadChildren: () => import('./task1/task1.module').then( m => m.Task1PageModule)
  },
  {
    path: 'task2',
    loadChildren: () => import('./task2/task2.module').then( m => m.Task2PageModule)
  },
  {
    path: 'task3',
    loadChildren: () => import('./task3/task3.module').then( m => m.Task3PageModule)
  },
  {
    path: 'lab2',
    loadChildren: () => import('./lab2/lab2.module').then( m => m.Lab2PageModule)
  },
  {
    path: 'lab3',
    loadChildren: () => import('./lab3/lab3.module').then( m => m.Lab3PageModule)
  },
  {
    path: 'lab4',
    loadChildren: () => import('./lab4/lab4.module').then( m => m.Lab4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
