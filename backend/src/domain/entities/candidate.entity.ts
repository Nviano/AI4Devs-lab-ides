import { CandidateCV } from './candidate-cv.entity';

export class Candidate {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly address: string,
    public readonly education: number,
    public readonly experience: number,
    public readonly cv?: CandidateCV | null,
    public readonly id?: number,
  ) {}
}
