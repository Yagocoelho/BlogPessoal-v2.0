import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


  usuario: Usuario = new Usuario

  confirmarSenha: string

  tipoUsuario: string

  constructor(
    private authServise: AuthService,
    private router: Router
     ) { }

  ngOnInit(){
    window.scroll(0,0)

    

  }

  cSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tUsuario(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsuario

    if(this.usuario.senha != this.confirmarSenha){
      alert("A senha está diferente")
    }else{
      this.authServise.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.router.navigate(["/entrar"])
      alert("Usuário cadastrado com sucesso!")
      })
    }
  }
}