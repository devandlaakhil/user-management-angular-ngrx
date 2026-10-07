import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../user.model';
import * as UserActions from "../../store/users/users.actions";
import * as UserSelectors from "../../store/users/users.selectors";
import { take } from 'rxjs';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-user-form',
  styleUrl: './user-form.css',
  templateUrl: './user-form.html',
})
export class UserForm {

  fb = inject(FormBuilder);
  store = inject(Store);
  router = inject(Router);
  route = inject(ActivatedRoute);

  isEditMode = false;
  userId: string | null = null;
  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    role: ['User', Validators.required]
  });

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.isEditMode = true;
      this.loadUserForEdit();
    }
  }

  loadUserForEdit(): void {
    /*
     * We will get the user from the NgRx store.
     */
    this.store.select(
      (state: any) => state.users.users
    ).subscribe((users: User[]) => {
      const user = users.find(
        (item) => item.id === this.userId
      );
      if (user) {
        this.userForm.patchValue({
          name: user.name,
          email: user.email,
          role: user.role
        });
      }
    });
  }



  submit(): void {

    // Check whether form is valid
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const formValue = this.userForm.getRawValue();

    // EDIT USER
    if (this.isEditMode && this.userId) {

      const user: User = {
        id: this.userId,
        name: formValue.name!,
        email: formValue.email!,
        role: formValue.role!
      };

      this.store.dispatch(
        UserActions.updateUser({ user })
      );

    }

    // ADD USER
    else {

      this.store
        .select(UserSelectors.selectUsers)
        .pipe(take(1))
        .subscribe(users => {

          // Find the highest existing ID
          const maxId = users.reduce((max, user) => {
            return Math.max(max, Number(user.id));
          }, 0);

          // Create new user with next ID
          const user: User = {
            id: String(maxId + 1),
            name: formValue.name!,
            email: formValue.email!,
            role: formValue.role!
          };

          this.store.dispatch(
            UserActions.addUser({ user })
          );

        });
    }

    // Go back to users page
    this.router.navigate(['/users']);
  }



  cancel(): void {
    this.router.navigate(['/users']);
  }
}
