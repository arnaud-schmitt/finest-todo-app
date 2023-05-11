import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { createAuth } from 'src/shared/models/auth';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });
  title$ = this.route.title;

  ngOnInit() {
    this.loginForm.clearValidators();
    this.loginForm.controls.email.valueChanges
      .subscribe((email) => {
        if (this.loginForm.valid) {
          this.authService.setEmail(email as string);
        }
      })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['auth', 'password']);
    }
  }
}
