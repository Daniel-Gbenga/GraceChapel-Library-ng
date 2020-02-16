import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthState } from './reducers/auth.reducer';

export interface AppState {
  // error: ErrorStateMatcher;
  auth: AuthState;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppStoreModule { }
