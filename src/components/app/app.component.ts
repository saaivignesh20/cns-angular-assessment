import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Structure } from '../../interfaces';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private resourceId = '1SqNmcPDB8PrZF1BhzgdKBxkfLcCR8VYMAkSIbnK_AXA/949267305';
  uniqueAnatomicalStructures: Structure[] = [];

  constructor(private api: ApiService, private dialog: MatDialog) {
    this.fetchAnatomicalDataFromApi();
  }

  /**
   * Fetches the anatomical data from the API.
   */
  private fetchAnatomicalDataFromApi() {
    this.api.getData(this.resourceId).subscribe((data) => {
      const rows = data.data;
      let allAnatomicalStructures: Structure[] = [];
      rows.forEach((row) => (allAnatomicalStructures = allAnatomicalStructures.concat(row.anatomical_structures)));
      this.uniqueAnatomicalStructures = this.createUniqueAnatomicalStructureList(allAnatomicalStructures);
    });
  }

  /**
   * Creates and returns a list of unique anatomical structures from given array.
   * @param anatomicalStructures Array containing list all anatomical structures fetched.
   * @returns Unique list of anatomical structures.
   */
  private createUniqueAnatomicalStructureList(anatomicalStructures: Structure[]) {
    const uniqueNames = new Set();
    const uniqueAnatomicalStructures: Structure[] = [];
    anatomicalStructures.forEach((structure) => {
      if (!uniqueNames.has(structure?.name)) {
        uniqueNames.add(structure?.name);
        uniqueAnatomicalStructures.push(structure);
      }
    });

    return uniqueAnatomicalStructures;
  }

  /**
   * Shows additional information dialog for the selected anatomical structure.
   * @param structureId Unique ID of the anatomical structure.
   */
  public showAdditionalInformation(structureId: string) {
    if (!structureId) {
      this.dialog.open(DetailsDialogComponent, {
        data: null
      });
    } else {
      console.log('Show additional information for structure with id:', structureId.replace(':', '_'));
      this.api.getStructureAdditionalInformation(structureId.replace(':', '_')).subscribe((additionalInfo) => {
        const termsElement = additionalInfo._embedded.terms[0];
        const name = termsElement.label;
        const description = termsElement?.description?.[0] || termsElement?.annotation?.definition || '-';
        const ontologyLink = termsElement?.obo_id;
        const iri = termsElement?.iri;

        console.log({
          name,
          description,
          ontologyLink,
          iri
        });

        this.dialog.open(DetailsDialogComponent, {
          data: {
            name,
            description,
            ontologyLink,
            iri
          },
          width: '50%'
        });
      });
    }
  }
}
