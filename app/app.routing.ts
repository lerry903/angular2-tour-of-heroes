import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }      from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

//路由配置
var appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
  		pathMatch: 'full'
  	},{
		path: 'heroes',
		component: HeroesComponent
	},{
		path: 'dashboard',
		component: DashboardComponent
	},{
		//带参数的路由
		path: 'detail/:id',
		component:HeroDetailComponent
	}
  
];

export var routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);