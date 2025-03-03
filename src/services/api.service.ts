import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EBI_API_BASE_URI, HRA_API_BASE_URI } from '../constants';
import { AtlasApiResponse, EBIApiResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Gets data from the Human Atlas API specified by its unique resource ID.
   * @param resourceId The unique identifier of the resource to be fetched.
   * @returns Object containing data obtained from the API.
   */
  public getData(resourceId: string) {
    return this.http.get<AtlasApiResponse>(`${HRA_API_BASE_URI}/${resourceId}`);
  }

  /**
   * Gets data about a specific anatomical structure from EBI API
   * @param structureId Unique ID of the structure.
   * @returns Object containing additional information about queried structure.
   */
  public getStructureAdditionalInformation(structureId: string) {
    return this.http.get<EBIApiResponse>(`${EBI_API_BASE_URI}/${structureId}`);
  }
}
