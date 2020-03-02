import { Injectable } from "@angular/core";
import { Candidate } from "./candidate";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CandidateService {
  constructor(private http: HttpClient) {}

  getCandidates() {
    return this.http.get("http://localhost:3000/users");
  }

  getCandidateById(id: string) {
    let candidate: Candidate;
    return this.http.get(`http://localhost:3000/users/${id}`);
  }

  updateCandidateById(id: string, data: Candidate) {
    console.log(id, data);
    return this.http.put(`http://localhost:3000/users/${id}`, data);
  }
}
