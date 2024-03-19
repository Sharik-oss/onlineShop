import { Routes } from '@angular/router';
import { JustDisplayComponent } from './just-display/just-display.component';
import { CreatingLocationsComponent } from './creating-locations/creating-locations.component';

export const routes: Routes = [
    {
        path: '',
        component: JustDisplayComponent
    },
    {
        path: 'create',
        component: CreatingLocationsComponent
    }
];
