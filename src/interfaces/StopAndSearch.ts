interface StopAndSearchData {
  age_range: string;
  self_defined_ethnicity: string;
  outcome_linked_to_object_of_search: string | null;
  datetime: string;
  removal_of_more_than_outer_clothing: boolean;
  operation: boolean;
  officer_defined_ethnicity: string;
  object_of_search: string;
  involved_person: boolean;
  gender: string;
  legislation: string;
  location: {
    latitude: string;
    street: {
      id: number;
      name: string;
    };
    longitude: string;
  };
  outcome: boolean;
  type: string;
  operation_name: string | null;
}

export type { StopAndSearchData };
