import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ComponentOneComponent } from "./component/component-one/component-one.component";
import { ComponentTwoComponent } from "./component/component-two/component-two.component";

const appRoutes: Routes = [
  {
    path: "one",
    component: ComponentOneComponent
  },
  {
    path: "two",
    component: ComponentTwoComponent
  },
  {
    path: "",
    redirectTo: "one",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
