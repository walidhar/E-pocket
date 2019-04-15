import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { StreamingMedia } from '@ionic-native/streaming-media';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PageProvider } from '../providers/page/page';
import { ThirdPage } from '../pages/third/third';
import { VideoTuPage } from '../pages/video-tu/video-tu';
import { ProfilPage } from '../pages/profil/profil';
import { CardsPage } from '../pages/cards/cards';
import { TabsPage } from '../pages/tabs/tabs';
import { SmartWalletPage } from '../pages/smart-wallet/smart-wallet';
import { AddCatPage } from '../pages/add-cat/add-cat';
import { MorePage } from '../pages/more/more';
import { SignupPage } from '../pages/signup/signup';
import { QuestionnairePage } from '../pages/questionnaire/questionnaire';
import { CarteBankPage } from '../pages/carte-bank/carte-bank';
import { RendezVousPage } from '../pages/rendez-vous/rendez-vous';
import { RendezVousItemPage } from '../pages/rendez-vous-item/rendez-vous-item';
import { RendezVousItemTwoPage } from '../pages/rendez-vous-item-two/rendez-vous-item-two';
import { QRcodePage } from '../pages/q-rcode/q-rcode';
import { FacturationPage } from '../pages/facturation/facturation';
import { LocalisationPage } from '../pages/localisation/localisation';
import { SupportPage } from '../pages/support/support';
import { EditPage } from '../pages/edit/edit';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ThirdPage,
    ProfilPage,
    VideoTuPage,
    CardsPage,
    TabsPage,
    SmartWalletPage,
    AddCatPage,
    MorePage,
    SignupPage,
    QuestionnairePage,
    CarteBankPage,
    RendezVousPage,
    RendezVousItemPage,
    RendezVousItemTwoPage,
    QRcodePage,
    FacturationPage,
    LocalisationPage,
    SupportPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ThirdPage,
    ProfilPage,
    VideoTuPage,
    CardsPage,
    TabsPage,
    SmartWalletPage,
    AddCatPage,
    MorePage,
    SignupPage,
    QuestionnairePage,
    CarteBankPage,
    RendezVousPage,
    RendezVousItemPage,
    RendezVousItemTwoPage,
    QRcodePage,
    FacturationPage,
    LocalisationPage,
    SupportPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PageProvider,
    Camera,
    Geolocation,
    BarcodeScanner,
    FingerprintAIO
  ]
})
export class AppModule {}
