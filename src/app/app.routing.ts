import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { TapListComponent } from './tap-list/tap-list.component';
import { KegDetailComponent }   from './keg-detail/keg-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'taps',
        component: TapListComponent
    },
    {
        path: 'taps/:id',
        component: KegDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);