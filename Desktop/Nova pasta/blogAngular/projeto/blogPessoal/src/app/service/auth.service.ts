import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(UsuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar', UsuarioLogin)
  }

  cadastrar(Usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', Usuario)
  }

  atualizar(Usuario:Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('http://localhost:8080/usuarios/cadastrar', Usuario)
  }
  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`)
  }


  logado() {
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }


}
