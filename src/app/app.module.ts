import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { RegisterComponent } from './register/register.component';
import { fakeBackendProvider } from './fake-backend';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { UploadService } from './uploads/shared/upload.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UploadsListComponent } from './uploads/uploads-list/uploads-list.component';
import { UploadDetailComponent } from './uploads/upload-detail/upload-detail.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { AngularFireDatabase  } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfilComponent,
    UploadsListComponent,
    UploadDetailComponent,
    UploadFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FacebookModule.forRoot(),
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule
  ],
  providers: [
        UserService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        UploadService,
        AngularFireDatabase,
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
