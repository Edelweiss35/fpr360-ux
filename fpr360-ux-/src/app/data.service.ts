import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CompanyList } from '../app/models/company'

/**
 * Service for processing company-related Http requests.
 * 
 * @export
 * @class CompanyService
 */
@Injectable()
export class CompanyListService {

  constructor(private http: HttpClient) { }

  /**
   * Returns a list of companies.
   *
   * @param {boolean} [partners]
   * @returns {Observable<Company[]>}
   * @memberof CompanyService
   */
  list(value): Observable<CompanyList[]> {
    // TODO: When call REST API pass partners as a query parameter to filter the
    // companies returned.  Here we will simulate it by filtering the results
    // after the companies are loaded.
    return this.http.get<CompanyList[]>('assets/data/companyList.json')
      .map(
        (res) => res
      );
  }
}