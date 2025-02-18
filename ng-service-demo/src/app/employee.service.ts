import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(){
    return[
      {
        id: 101,
        firstname: "Joseph",
        lastname: "Dizon",
        email: "jdizon@hau.edu.ph"
      },
      {
        id: 102,
        firstname: "James",
        lastname: "Atienza",
        email: "jatienza@hau.edu.ph"
      },
      {
        id: 103,
        firstname: "John",
        lastname: "Cena",
        email: "jcena@hau.edu.ph"
      },
      {
        id: 104,
        firstname: "Chester Lance",
        lastname: "Cruz",
        email: "cscruz2@hau.edu.ph"
      }
    ]
  }
  constructor() { }
}
