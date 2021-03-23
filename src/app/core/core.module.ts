import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/erro-404/error.404.component";
import { NavbarComponent } from "./component/navbar/navbar.component";


@NgModule({
    declarations: [
        NavbarComponent,
        Error404Component
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404Component
            }
        ])
    ]
})
export class CoreModule{

}