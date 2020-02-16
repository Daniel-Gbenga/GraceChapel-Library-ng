import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';

import { AuthService } from '@app/services/auth.service';
import { AppState } from '../app-store.module';
import { Router } from '@angular/router';
import { SetInitialUser, LoginUser, RegisterUser, SetCurrentUser, AuthActionTypes } from '../actions/auth.action';
import { Observable } from 'rxjs';
import { mergeMap, tap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AddError, RemoveError } from '../actions/error.action';
import { User } from '@app/models/user';


@Injectable()
export class AuthEffects {
    constructor(
        private action$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router
    ) { }

    // @Effect()
    // setInitialUSer$: Observable<Action> = this.action$.pipe(
    //     ofType<SetInitialUser>(AuthActionTypes.SET_INITIAL_USER),
    //     tap(() => {
    //         this.store.dispatch(new RemoveError());
    //         this.router.navigate(['ideas']);
    //     }),
    //     mergeMap((action: SetInitialUser) => this.authService.whoami().pipe(
    //         map((user: User) => new SetCurrentUser(user)),
    //         catchError(err => {
    //             this.authService.token = null;
    //             return of(new AddError(err.error));
    //         })
    //     ))
    // );

    @Effect()
    loginUser$: Observable<Action> = this.action$.pipe(
        ofType<LoginUser>(AuthActionTypes.LOGIN_USER),
        tap(() => {
            this.store.dispatch(new RemoveError());
            this.router.navigate(['ideas']);
        }),
        mergeMap((action: LoginUser) =>
            this.authService.login(action.payload).pipe(
                map((user: User) => new SetCurrentUser(user)),
                catchError(err => {
                    this.authService.token = null;
                    return of(new AddError(err.error));
                })
            ))
    );

    @Effect()
    registerUser$: Observable<Action> = this.action$.pipe(
        ofType<RegisterUser>(AuthActionTypes.REGISTER_USER),
        tap(() => this.store.dispatch(new RemoveError())),
        mergeMap((action: RegisterUser) =>
            this.authService.register(action.payload).pipe(
                map((user: User) => new SetCurrentUser(user)),
                catchError(err => {
                    this.authService.token = null;
                    return of(new AddError(err.error));
                })
            ))
    );

}
