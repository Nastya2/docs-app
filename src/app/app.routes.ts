import { Routes } from '@angular/router';
import { ViewComponent } from './components/view-component/view.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: "viewer",
        component: AppComponent,
        children: [
            {
                path: "view/:id",
                component: ViewComponent
            },
            // {
            //     path: "**",
            //     pathMatch: "full",
            //     redirectTo: "/viewer/view/1"
            // }
        ],
        
    
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "/viewer/view/1"
    }
    
];
