import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('../menu/menu.module').then((m) => m.MenuPageModule),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('../tasks/tasks.module').then((m) => m.TasksPageModule),
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('../accounts/accounts.module').then(
            (m) => m.AccountsPageModule
          ),
      },
      {
        path: 'subscriptions',
        loadChildren: () =>
          import('../subscriptions/subscriptions.module').then(
            (m) => m.SubscriptionsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
