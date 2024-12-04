import { describe, expect, it } from 'vitest';
import { calcTotalPrice } from './app.js';

describe('calcTotalPrice', () => {
  it('should calculate the total correctly', () => {
    expect(calcTotalPrice(10,2)).toBe(20);
    expect(calcTotalPrice(5.5,3)).toBe(16.5);
  });
  it('should not accept negative numbers', () => {
    const negativeResult = () => {
      calcTotalPrice(-20,2);
    }
    expect(negativeResult).toThrow();
  });
});