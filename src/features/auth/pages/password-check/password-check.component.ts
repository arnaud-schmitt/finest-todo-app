import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { createAuth } from 'src/shared/models/auth';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-password-check',
  templateUrl: './password-check.component.html',
  styleUrls: ['./password-check.component.scss']
})
export class PasswordCheckComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  loginForm = this.fb.group({
    password: ['', Validators.compose([Validators.required])],
  });

  title$ = this.route.title;

  ngOnInit() {
    this.loginForm.controls.password.valueChanges
      .subscribe((password) => {
        this.authService.setPassword(password as string);
      })
    this.authService.user$.subscribe((user) => {
      if (user.authenticated) {
        this.router.navigate(['home']);
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.authenticate();
    }
  }
}
