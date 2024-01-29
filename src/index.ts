import { Apartment } from "./entities/apartments/apartment";
import { Vacancy } from "./entities/vacancies/vacancy";
import { MergeService } from "./services/merge/merge.service";
import { RandomVacanciesService } from "./services/random-vacancies/random-vacancies.service";

export class Program {
  static genApartments(quantity: number) {
    const list: Array<Apartment> = [];

    for (let i = 0; i < quantity; i++) {
      const apartment = Apartment.create({
        number: String(`ap-${i + 1}`),
        tower: "A",
      });

      list.push(apartment);
    }

    return list;
  }

  static genVacancies(quantity: number) {
    const list: Array<Vacancy> = [];

    for (let i = 0; i < quantity; i++) {
      const vacancy = Vacancy.create({ number: String(`vc-${i + 1}`) });

      list.push(vacancy);
    }

    return list;
  }

  static main(): void {
    const apartments = this.genApartments(350);
    const vacancies = this.genVacancies(350);

    const randomVacanciesService = new RandomVacanciesService(
      new Set(apartments),
      new Set(vacancies),
      new MergeService()
    );

    randomVacanciesService.exec();

    Array.from(randomVacanciesService.apartmentsToVacancies).forEach((value) =>
      console.log(value.toString())
    );
  }
}

Program.main();
