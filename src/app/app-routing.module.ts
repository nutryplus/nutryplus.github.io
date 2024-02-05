import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const appRoute: Routes = [
    {path: '', redirectTo: '/dist/nutryplus-front-end/browser/index.html'}
]

@NgModule({
    imports: [
        RouterModule.forChild(appRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}