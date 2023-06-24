import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(login: string, senha: string) {
    console.log(login, senha);
  }
}
