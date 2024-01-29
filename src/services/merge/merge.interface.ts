import { IRandomNumbers } from '../random-numbers/random-numbers.interface';

export interface IMerge {
  exec<T, Z>(
    firstArray: Set<T>,
    secondArray: Set<Z>,
    randomNumber: IRandomNumbers,
  ): { firstValue: T; secondValue: Z };
}
