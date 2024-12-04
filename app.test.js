import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { calcTotalPrice } from './app.js';
import { app } from './app.js';

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

describe('GET /api/sample-endpoint', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app).get('/api/sample-endpoint');
      
//      vitest assertions
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Update to this message : Hello from the sample endpoint and the price is 6');
    });
});
