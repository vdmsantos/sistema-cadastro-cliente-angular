import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MessageService } from 'primeng/api';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { ENVIRONMENT } from '../environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private firestore: AngularFirestore,
    private readonly messageService: MessageService,
    private localStorageService: LocalStorageService,
  ) {}

  async generateToken(user: any) {
    const payload = { username: user.username, type: user.type };
    return jwt.sign(payload, ENVIRONMENT.JWT_SECRET, { expiresIn: '1d' });
  }

  async register(username: string, password: string, type: 'admin' | 'student') {
    const usersRef = this.firestore.collection('users');
    const snapshot = await usersRef.ref.where('username', '==', username).get();

    if (!snapshot.empty) {
      this.showToastMessage('error', 'Usuário já existe');
      return;
    }

    const userData = {
      username,
      password,
      type,
    };

    userData['password'] = userData.type === 'admin'
      ? await bcrypt.hash(password, 10)
      : password;

    return usersRef.add(userData);
  }

  async login(username: string, password: string) {
    const usersRef = this.firestore.collection('users');
    const snapshot = await usersRef.ref.where('username', '==', username).get();

    if (snapshot.empty) {
      this.showToastMessage('error', 'Credenciais inválidas');
      return null;
    }

    const userDoc = snapshot.docs[0];
    const user = userDoc.data() as any;

    if (!user.password) {
      this.showToastMessage('error', 'Credenciais inválidas');
      return null;
    }

    const match = user.type === 'admin'
      ? await bcrypt.compare(password, user.password)
      : user.password === password;

    if (!match) {
      this.showToastMessage('error', 'Credenciais inválidas');
      return null;
    }

    user.accessToken = await this.generateToken(user);
    return this.localStorageService.setLoggedUser(user);
  }

  async deleteUser(username: string) {
    const usersRef = this.firestore.collection('users');
    const snapshot = await usersRef.ref.where('username', '==', username).get();

    if (snapshot.empty) {
      this.showToastMessage('error', 'Usuário não encontrado');
      return;
    }

    const userDoc = snapshot.docs[0];
    await userDoc.ref.delete();
  }

  private showToastMessage(severity: 'success' | 'error', message: string) {
    this.messageService.add({
      severity: severity,
      summary: message,
    });
  }
}
