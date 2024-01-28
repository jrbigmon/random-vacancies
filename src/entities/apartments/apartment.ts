import { randomUUID } from "crypto";
import { IApartment } from './apartment.interface';

export class Apartment {
  private _id: string;
  private _number: string;
  private _tower: string;

  constructor(number: string, tower: string, id?: string) {
    this._number = number;
    this._tower = tower;
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

  get tower(): string {
    return this._tower;
  }

  set tower(value: string) {
    this._tower = value;
  }

  public create({ number, tower }: IApartment): Apartment {
    const apartment = new Apartment(number, tower);

    return apartment;
  }
}
