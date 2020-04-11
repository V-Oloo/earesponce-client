import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTwelveComponent } from './components/pages/home-twelve/home-twelve.component';
import { ErrorComponent } from './components/pages/error/error.component';

const routes: Routes = [
    {path: '', component: HomeTwelveComponent},
    {path: 'error', component: ErrorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
