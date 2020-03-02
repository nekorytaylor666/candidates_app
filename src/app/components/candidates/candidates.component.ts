import { Component, OnInit } from "@angular/core";
import { CandidateService } from "../../services/candidate.service";
import { Candidate } from "../../services/candidate";

@Component({
  selector: "app-candidates",
  templateUrl: "./candidates.component.html",
  styleUrls: ["./candidates.component.css"]
})
export class CandidatesComponent implements OnInit {
  candidates: Candidate[];
  selectedCandidate: Candidate;

  constructor(private candidateService: CandidateService) {}

  getCandidates(): void {
    this.candidateService.getCandidates().subscribe((data: Candidate[]) => {
      this.candidates = data;
    });
  }

  onSelect(candidate: Candidate): void {
    this.selectedCandidate = candidate;
  }

  ngOnInit() {
    this.getCandidates();
  }
}
