import { Routes } from '@angular/router';
import { Playground } from './pages/playground/playground';
import { Choice } from './pages/choice/choice';

export const routes: Routes = [
    {
        path: "", redirectTo: "playground", pathMatch: "full"
    },
    {
        path: "playground", component: Playground
    },
    {
        path: "choice", component: Choice
    }
];
