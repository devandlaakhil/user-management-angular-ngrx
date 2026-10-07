import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { async, Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import * as UserActions from "../../store/users/users.actions";
import * as UserSelectors from "../../store/users/users.selectors";
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule, AsyncPipe],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList implements OnInit {
  store = inject(Store);
  router = inject(Router)
  users$: Observable<User[]> = this.store.select(UserSelectors.selectUsers);
  loading$: Observable<boolean> = this.store.select(UserSelectors.selectLoading);

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers())
  }

  addUser(): void {
    this.router.navigate(['/users/add']);
  }

  editUser(user: User): void {
    this.router.navigate(['/users/edit', user.id]);
  }

  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.store.dispatch(
        UserActions.deleteUser({ id })
      );
    }
  }
}
