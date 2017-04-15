import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { ResetPassword } from '../pages/reset-password/reset-password';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthData } from '../providers/auth-data';

const firebaseConfig = {
    apiKey: "AIzaSyDIxZ9uRPh0ZiYm8SMnA5ZPb-8Be-H1azY",
    authDomain: "authproject-98a3f.firebaseapp.com",
    databaseURL: "https://authproject-98a3f.firebaseio.com",
    projectId: "authproject-98a3f",
    storageBucket: "authproject-98a3f.appspot.com",
    messagingSenderId: "907103145700"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Signup,
    ResetPassword
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Signup,
    ResetPassword
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData
  ]
})
export class AppModule {}
