import { randomUUID } from "crypto";
import { Apartment } from "../apartments/apartment";
import { Vacancy } from "../vacancies/vacancy";
import { IApartmentToVacancy } from './apartment-to-vacancy.interface';

export class ApartmentToVacancy {
  private _id: string;
  private _vacancy: Vacancy;
  private _apartment: Apartment;

  constructor(vacancy: Vacancy, apartment: Apartment, id?: string) {
    this._vacancy = vacancy;
    this._apartment = apartment;
    this._id = id ?? randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get vacancy(): Vacancy {
    return this._vacancy;
  }

  get apartment(): Apartment {
    return this._apartment;
  }

  public create({ apartment, vacancy, id }: IApartmentToVacancy) {
    const randomVacancy = new ApartmentToVacancy(vacancy, apartment, id);

    return randomVacancy;
  }
}
