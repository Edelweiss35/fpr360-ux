import { Component, OnInit, Inject } from '@angular/core';
import { IndicatorsService } from '../../../../services/indicators.service';
import { CompanyService } from '../../../../services/data/company.service';
import { MatDialog } from '@angular/material';
import { RadioListItemsComponent } from '../../../../dialogs/radio-list-items/radio-list-items.component';
import { OnboardingPartnerComponent } from '../onboarding-partner.component';
import { CompanyList } from '../../../../models/company';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-onboarding-partner-merchant',
  templateUrl: './onboarding-partner-merchant.component.html',
  styleUrls: ['./onboarding-partner-merchant.component.scss']
})
export class OnboardingPartnerMerchantComponent implements OnInit {
    companyList: CompanyList[];
    dataArray = [];
    dialogName: string;
    merchantFlag = false;

    constructor(
        @Inject(OnboardingPartnerComponent) private parent: OnboardingPartnerComponent,
        public dialog: MatDialog,
        private indicatorsService: IndicatorsService,
        private companyListService: CompanyService,)
        {
            console.log("ngOnInit--");
            this.indicatorsService.setMerchantIndicator('true');

            this.companyListService.list(false).pipe(map( res => res.map(company => {const CompanyList: CompanyList = Object.assign({}, 
                company, 
                {active: false, included: false});
                return CompanyList;}))).subscribe((list) => this.companyList = list);
        }
        
        ngOnInit() {}

        ngAfterViewInit() {
            console.log("ngAfterViewInit--");
            setTimeout(() => {
                console.log("setTimeout");
                this.dataArray = this.companyList;
                this.dialogName = this.parent.partnerInnerMenu[3].name;
                const dialogRef = this.dialog.open(RadioListItemsComponent, {
                    data: {
                        dataArray: this.dataArray,
                        dialogName: this.dialogName
                    },
                    autoFocus: false
                });
                dialogRef.afterClosed().subscribe(result => {
                    console.log("afterClosed");
                    if(result){
                        this.parent.partnerInnerMenu.push({path: null,
                            name: result,
                            indicator: ''
                        });
                    }
                });
            });
        }
}