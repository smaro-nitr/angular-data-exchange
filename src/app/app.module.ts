import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { RootComponent } from "./component/root/root.component";
import { ComponentOneComponent } from './component/component-one/component-one.component';
import { ComponentTwoComponent } from './component/component-two/component-two.component';

@NgModule({
  declarations: [
    RootComponent,
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
