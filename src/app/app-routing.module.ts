
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
