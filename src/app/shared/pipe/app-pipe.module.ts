import { NgModule } from "@angular/core";
import { ReplacePipe } from "./replace.pipes";


@NgModule({
    declarations: [
        ReplacePipe
    ],
    exports: [
        ReplacePipe
    ]

})
export class AppPipeModule{

}