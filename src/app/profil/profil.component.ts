import { environment } from '../../environments/environment';
import { Upload } from '../uploads/shared/upload';
import { UploadService } from '../uploads/shared/upload.service';
import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginOptions, LoginResponse } from 'ngx-facebook';
import * as firebase from 'firebase/app';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  UriAlbums: string[] = [];
  htmlVariable = '';
  accessToken: string;
  currentUpload: Upload;
  selectedFiles: FileList;
  constructor(private fb: FacebookService, private upSvc: UploadService, private sanitizer: DomSanitizer) {
    const initParams: InitParams = {
      appId: '339441313195722',
      cookie: true,
      xfbml: true,
      version: 'v2.10'
    };
    fb.init(initParams);
  }
  ngOnInit() {

  }
  loginWithOptions() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'user_photos'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        this.accessToken = res.authResponse.accessToken;
      })
      .catch(this.handleError);
  }
  getAlbumsAndPhotos() {
      this.fb.api('/me/albums?fields=cover_photo')
      .then((res: any) => {
        for ( const image of res.data){
          if ( image.cover_photo !== undefined) {
           const uri = 'https://graph.facebook.com/v2.10/' + image.id
          + '/picture?access_token=' + this.accessToken;
            this.UriAlbums.push(uri);

          }
                   }
        })
      .catch(this.handleError);
  }
  uploadToFireBase(uri: string) {
    const file = this.urlToFile(uri);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);
  }
    urlToFile( uri: string): File {
    const byteString = atob(btoa(uri.split(',')[1]));
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], {
      type: 'image/jpeg'
      });
    return new File([blob], 'image.jpg');
  }

    private handleError(error) {
      if ( error.type === 'OAuthException') {
        alert('Please grant access before displaying');
      }
    console.error('Error processing action', error);
  }
}
