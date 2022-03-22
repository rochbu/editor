export class Tone {
  string: number;
  fret: number;
  label: string;

  public constructor(string: number, fret: number, label: string) {
    this.string = string;
    this.fret = fret;
    this.label = label;
  }
}
