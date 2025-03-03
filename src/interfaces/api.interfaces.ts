import { BM_TYPE } from '../constants';

export interface Structure {
  name?: string;
  id?: string;
  rdfs_label?: string;
  b_type?: BM_TYPE;
}

export interface Row {
  anatomical_structures: Array<Structure>;
  cell_types: Array<Structure>;
  biomarkers: Array<Structure>;
}

export interface AtlasApiResponse {
  data: Row[];
}

export interface EBIApiResponse {
  _embedded: {
    terms: {
      label: string;
      description?: string[];
      annotation: { definition?: string };
      obo_id: string;
      iri: string;
    }[];
  };
}
