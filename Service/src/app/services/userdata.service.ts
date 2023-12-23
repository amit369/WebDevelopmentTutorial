import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() {}

  users() {
    return [
      {
        name: 'Anil',
        age: 28,
        email: 'anil@test.com',
      },
      {
        name: 'Sunil',
        age: 28,
        email: 'sunil@test.com',
      },
      {
        name: 'Peter',
        age: 28,
        email: 'peter@test.com',
      },
    ];
  }
}
