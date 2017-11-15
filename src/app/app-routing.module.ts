import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SeattleComponent } from './seattle/seattle.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: "/sanjose"
    },
    {
        path: 'sanjose',
        pathMatch: 'full',
        component: SanjoseComponent,
        children: []
    },
    {
        path: 'seattle',
        pathMatch: 'full',
        component: SeattleComponent,
        children: []
    },
    {
        path: 'burbank',
        pathMatch: 'full',
        component: BurbankComponent,
        children: []
    },
    {
        path: 'dallas',
        pathMatch: 'full',
        component: DallasComponent,
        children: []
    },
    {
        path: 'dc',
        pathMatch: 'full',
        component: DcComponent,
        children: []
    },
    {
        path: 'chicago',
        pathMatch: 'full',
        component: ChicagoComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }