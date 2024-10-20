import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: "viewer",
        component: AppComponent,
        children: [
            {
                path: "view/:id",
                component: AppComponent
            },
        ],
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "/viewer/view/1"
    }
    
];
