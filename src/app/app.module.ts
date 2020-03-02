import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CandidatesComponent } from "./components/candidates/candidates.component";
import { CandidateDetailComponent } from "./components/candidate-detail/candidate-detail.component";

@NgModule({
  declarations: [AppComponent, CandidatesComponent, CandidateDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
