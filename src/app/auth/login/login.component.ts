import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/utility/services/auth.service';
import { FacadeService } from 'src/app/utility/services/facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: this.fb.control('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: this.fb.control(''),
  });

  redirectUrl: string | null = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private auth: AuthService,
    private facade: FacadeService
  ) {}

  ngOnInit(): void {
    this.redirectUrl =
      this.activateRoute.snapshot.queryParamMap.get('redirectUrl');
  }

  submit(values: any): void {
    const token = this.facade.generateString(22);
    this.auth.login(token);

    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(['dashboard', 'products']);
    }
  }
}
