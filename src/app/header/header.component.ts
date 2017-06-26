import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('loginModal') public addLoginModal: ModalDirective;
  @ViewChild('registerModal') public addRegisterModal: ModalDirective;

  // user: Observable<firebase.User>;

  constructor(private authService: AuthService, private router: Router) {
    // this.user = afAuth.authState;

  }

  ngOnInit() {
  }

  onLogin(){
    //TODO: implement login service
    this.authService.login('test@testemail.com','yourpassword');
    this.addLoginModal.hide();
    this.router.navigate(['logged-in']);
  }

  onRegister(){
    //TODO: implement register service
    this.authService.createUser('test@testemail.com','yourpassword');
    this.addRegisterModal.hide();
    this.router.navigate(['logged-in']);
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
