import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "../home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
      BrowserModule,
      LayoutRoutingModule
    ],
    providers: [],
    bootstrap: []
  })
  export class LayoutModule { }