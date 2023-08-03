import { Route } from '@angular/router';
import { AllOffersComponent } from './components/all-offers/all-offers.component';
import { CreateOfferComponent } from './components/create-offer/create-offer.component';
import { OfferComponent } from './offer.component';

export default [
  {
    path: '',
    component: OfferComponent,
    children: [
      { path: '', component: AllOffersComponent },
      { path: 'create', component: CreateOfferComponent },
    ],
  },
] as Route[];
