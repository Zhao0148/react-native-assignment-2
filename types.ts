export enum AvailableTypes {
  Users = "users",
  Addresses = "addresses",
  Banks = "banks",
  Appliances = "appliances",
  Beers = "beers",
  Blood_types = "blood_types",
  Credit_cards = "credit_cards",
}

export interface SampleSize {
    fetchSampleSize?: number;
}

export interface APIResponse<T> {
  data: T;
  status: number;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}
