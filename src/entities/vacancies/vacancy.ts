import { randomUUID } from "crypto";
import { IVacancy } from './vacancy.interface';

export class Vacancy {
  private _id: string;
  private _number: string;

  constructor(number: string, id?: string) {
    this._number = number;
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get number(): string {
    return this._number;
  }

  set number(value: string) {
    this._number = value;
  }

  static create({ number, id }: IVacancy): Vacancy {
    const vacancy = new Vacancy(number, id);

    return vacancy;
  }
}
