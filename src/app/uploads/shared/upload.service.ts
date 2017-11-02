import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import { AngularFireModule  } from 'angularfire2';
import { Upload  } from './upload';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {
  constructor(private af: AngularFireModule, private db: AngularFireDatabase) { }
  private basePath = '/uploads';
  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        alert('Uploading the image ...') ;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        alert('Successfully uploaded!');
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      }
    );
  }

    private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
}

