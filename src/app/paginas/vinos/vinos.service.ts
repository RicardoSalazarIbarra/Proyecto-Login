import { Vinos } from 'src/app/shared/modelos/vinos.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VinosService {
  vinos: Observable<Vinos[]>;

  private vinosCollection: AngularFirestoreCollection<Vinos>;

  constructor(private readonly afs: AngularFirestore) {
    this.vinosCollection = afs.collection<Vinos>('vinos');
    this.getVinos();
  }


  onEliminarVinos(empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.vinosCollection.doc(empId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  onGuardarVinos(vinos: Vinos, empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        const data = { id, ...vinos };
        const result = await this.vinosCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }


  private getVinos(): void {
    this.vinos = this.vinosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Vinos))
    );
  }
}