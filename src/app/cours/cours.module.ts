import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoursInfoComponent } from "./cours.info.component";
import { CoursListComponent } from "./cours.list.component";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { StarModule } from "../shared/star/star.module";

@NgModule({
    declarations: [
        CoursListComponent,
        CoursInfoComponent,        
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'cours', component: CoursListComponent
            },
            {
                path: 'cours/info/:id', component: CoursInfoComponent
            },
        ])
    ]
})
export class CoursModule{

}
