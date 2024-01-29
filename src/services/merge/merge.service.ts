import { IRandomNumbers } from "../random-numbers/random-numbers.interface";
import { IMerge } from "./merge.interface";

export class MergeService implements IMerge {
  exec<T, Z>(
    firstArray: Set<T>,
    secondArray: Set<Z>,
    randomNumber: IRandomNumbers
  ): { firstValue: T; secondValue: Z } {
    const firstIndex = randomNumber.exec(firstArray.size);
    const secondIndex = randomNumber.exec(secondArray.size);

    const firstValue = Array.from(firstArray)[firstIndex];
    const secondValue = Array.from(secondArray)[secondIndex];

    return {
      firstValue,
      secondValue,
    };
  }
}
