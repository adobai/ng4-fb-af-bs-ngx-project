import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})

export class RegisterModalComponent implements OnInit {

    @ViewChild('registerModal') public registerModal: ModalDirective;
    isShowModal: boolean = false;
    registerForm: FormGroup;

    constructor(private authService: AuthService){

    }

    ngOnInit() {
      this.registerForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'fname': new FormControl(null, Validators.required),
        'lname': new FormControl(null, Validators.required),
        'regpassword': new FormControl(null, Validators.required),
        'confpassword': new FormControl(null, Validators.required)
      });
    }


    show(){ this.isShowModal = true; }
    hide(){ this.registerModal.hide(); }
    onHidden(){ this.isShowModal = false; }

    onRegister(){

      this.authService.createUser('email', 'password');
      this.registerModal.hide();
  }
}
