import { Component, OnInit } from "@angular/core";
import { Candidate, Mark } from "../../services/candidate";
import { ActivatedRoute } from "@angular/router";
import { CandidateService } from "../../services/candidate.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-candidate-detail",
  templateUrl: "./candidate-detail.component.html",
  styleUrls: ["./candidate-detail.component.css"]
})
export class CandidateDetailComponent implements OnInit {
  candidate: Candidate;
  id: string;
  candidateMarks: Mark[];
  values = ["Good", "Neutral", "Bad"];
  isOkay: boolean;
  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService
  ) {}

  checkIsOkay() {
    const goodValues = this.candidateMarks.filter(
      (mark: Mark) => mark.value === "Good"
    );
    const countOfGoods = goodValues.length;
    this.isOkay = countOfGoods >= 4;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("candidateId");
      this.candidateService
        .getCandidateById(this.id)
        .subscribe((data: Candidate) => {
          this.candidate = data;
          this.candidateMarks = [...this.candidate.marks];
          this.checkIsOkay();
        });
    });
  }

  updateCandidate() {
    this.candidate.marks = [...this.candidateMarks];
    console.log(this.candidate);
    this.candidate.gender = "male";
    this.checkIsOkay();
    this.candidateService
      .updateCandidateById(this.id, this.candidate)
      .subscribe(res => console.log(res));
  }
}
