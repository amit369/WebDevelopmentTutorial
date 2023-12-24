import { Injectable } from '@angular/core';

interface dataType {
  name : string,
  id : number,
  indian : string,
  address : any
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getData()
  {
    const data : dataType = {
      name : 'Anil Kumar',
      id : 100 , 
      indian : "yes",
      address : "42, Noida"
    }
    return data;
  }
}
