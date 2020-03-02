import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidatesComponent } from "./components/candidates/candidates.component";
import { CandidateDetailComponent } from "./components/candidate-detail/candidate-detail.component";

const routes: Routes = [
  {
    path: "candidates",
    component: CandidatesComponent,
    data: { title: "Heroes List" }
  },
  {
    path: "candidate/:candidateId",
    component: CandidateDetailComponent,
    data: { title: "Heroes List" }
  },
  { path: "", redirectTo: "/candidates", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
