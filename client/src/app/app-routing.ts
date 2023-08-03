// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/routes') /* .then((mod) => mod.DASHBOARD_ROUTING) */,
  },
  {
    path: 'offer',
    loadChildren: () =>
      import('./offer/routes') /* .then((mod) => mod.OFFER_ROUTING) */,
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
