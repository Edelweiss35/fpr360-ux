
import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';


import { OnboardingPartnerDetailsComponent } from './onboarding-partner-details/onboarding-partner-details.component';
import { OnboardingPartnerClientsComponent } from './onboarding-partner-clients/onboarding-partner-clients.component';
import { OnboardingPartnerReportsComponent } from './onboarding-partner-reports/onboarding-partner-reports.component';
import { OnboardingPartnerMerchantComponent } from './onboarding-partner-merchant/onboarding-partner-merchant.component';
import { OnboardingPartnerComponent } from './onboarding-partner.component';
const innerOnboardingPartner: Routes = [
    { path: 'details', component: OnboardingPartnerDetailsComponent },
    { path: 'clients', component: OnboardingPartnerClientsComponent },
    { path: 'reports', component: OnboardingPartnerReportsComponent },
    { path: 'merchant', component: OnboardingPartnerMerchantComponent },
    
  ];
  @NgModule({
    // prettier-ignore
    imports: [
        OnboardingPartnerComponent,
        OnboardingPartnerDetailsComponent,
        OnboardingPartnerClientsComponent,
        OnboardingPartnerReportsComponent,
        OnboardingPartnerMerchantComponent,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: []
})
export class OnboardingPartnerModule {}
