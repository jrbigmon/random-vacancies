import { ApartmentToVacancy } from "../../entities/apartments-to-vacancies/apartment-to-vacancy";
import { Apartment } from "../../entities/apartments/apartment";
import { Vacancy } from "../../entities/vacancies/vacancy";
import { IMerge } from "../merge/merge.interface";
import { RandomNumbersService } from "../random-numbers/random-numbers.service";
import { IRandomVacancies } from "./random-vacancies.interface";

export class RandomVacanciesService implements IRandomVacancies {
  private _apartmentsToVacancies: Set<ApartmentToVacancy> =
    new Set<ApartmentToVacancy>([]);

  protected apartments: Set<Apartment>;
  protected vacancies: Set<Vacancy>;
  protected mergeService: IMerge;

  constructor(
    apartments: Set<Apartment>,
    vacancies: Set<Vacancy>,
    mergeService: IMerge
  ) {
    this.apartments = apartments;
    this.vacancies = vacancies;
    this.mergeService = mergeService;
  }

  get apartmentsToVacancies(): Set<ApartmentToVacancy> {
    return this._apartmentsToVacancies;
  }

  private removeFromList(apartment: Apartment, vacancy: Vacancy) {
    this.apartments.delete(apartment);
    this.vacancies.delete(vacancy);
  }

  private addApartmentToVacancies(apartment: Apartment, vacancy: Vacancy) {
    const apartmentToVacancy = ApartmentToVacancy.create({
      apartment,
      vacancy,
    });

    this._apartmentsToVacancies.add(apartmentToVacancy);
  }

  public exec(): void {
    const apartmentLength = this.apartments.size;

    for (let i = 0; i < apartmentLength; i++) {
      const { firstValue: apartment, secondValue: vacancy } =
        this.mergeService.exec(
          this.apartments,
          this.vacancies,
          new RandomNumbersService()
        );

      this.removeFromList(apartment, vacancy);

      this.addApartmentToVacancies(apartment, vacancy);
    }
  }
}
