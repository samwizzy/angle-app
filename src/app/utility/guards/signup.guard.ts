import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from 'src/app/auth/signup/signup.component';

@Injectable({
  providedIn: 'root',
})
export class SignupGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canExit();
  }
}
