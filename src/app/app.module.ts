import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './doc-list/search/search.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { DocItemComponent } from './doc-list/doc-item/doc-item.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { UserItemComponent } from './user-management/user-list/user-item/user-item.component';
import { NewUserComponent } from './user-management/new-user/new-user.component';

const appRoutes: Routes = [
  { path: '', component: DocListComponent },
  { path: 'users', component: UserManagementComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    DocListComponent,
    DocItemComponent,
    UserManagementComponent,
    UserListComponent,
    UserItemComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
