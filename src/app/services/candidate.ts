export interface Candidate {
  _id: string;
  index: number;
  picture: string;
  age: number;
  mainLang: string;
  experience: number;
  salary: number;
  relocate: boolean;
  degree: string;
  publications: number;
  recomendation: string;
  hireManagerMark: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
  about: string;
  marks: Mark[];
}

export interface Mark {
  type: string;
  value: string;
}
