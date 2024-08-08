import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'job-search',
        component: JobSearchComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

];
