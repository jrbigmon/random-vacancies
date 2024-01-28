import { Apartment } from '../apartments/apartment';
import { Vacancy } from '../vacancies/vacancy';

export interface IApartmentToVacancy {
  id?: string;
  vacancy: Vacancy;
  apartment: Apartment;
}