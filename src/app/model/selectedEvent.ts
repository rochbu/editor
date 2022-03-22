import { SelectionType } from './selection-type.enum';

export class SelectedEvent {
  type: SelectionType;
  fretboard: number;
  string: number;
  fret: number;
  label: string;

  public constructor(
    type: SelectionType,
    fretboard: number,
    string: number,
    fret: number,
    label: string
  ) {
    this.type = type;
    this.fretboard = fretboard;
    this.string = string;
    this.fret = fret;
    this.label = label;
  }
}
