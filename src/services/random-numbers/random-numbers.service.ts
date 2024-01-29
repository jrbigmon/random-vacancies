import { IRandomNumbers } from './random-numbers.interface';

export class RandomNumbersService implements IRandomNumbers {
  
  exec(maxNumber: number): number {
    return Math.floor(Math.random() * maxNumber)
  }
}