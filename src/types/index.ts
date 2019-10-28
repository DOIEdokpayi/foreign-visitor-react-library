export interface IContact {
  FirstName: string;
  LastName: string;
  EMail: string;
  BusinessPhone: string;
}
export interface IContactFunc {
  (contact: IContact): void
}
export interface IErrorHandlerFunc {
  (ErrorMessage?: string, Stack?: string): JSX.Element
}
export interface ISponsor {
  Name: string;
  Telephone: string;
  Email: string
}

export interface ISponsorFunc {
  (sponsor: ISponsor): void
}

export interface IVisit {
  ArrivalDate: Date;
  DepartureDate: Date;
  DownloadLink: string;
}

export interface IVisitFunc {
  (visit: IVisit): void
}

export interface IVisitor {
  FirstName: string;
  LastName: string;
  PlaceOfBirth: string;
}
export interface IVisitorFunc {
  (visitor: IVisitor): void
}

export interface ILocation {
  Facility: string;
  StreetAddress: string;
  City: string;
  State: string;
}
export interface ILocationFunc {
  (location: ILocation): void
}
export interface ITermsAndConditionsFormValues {
  TermsAccepted: boolean;
}
export interface ITermsAndConditionsFormSubmissionAction {
  (formData: ITermsAndConditionsFormValues): void
}
export enum RequestStatusEnum {
  Approved, NotApproved, Incomplete, Invalid, NotApplicable
}

export enum ThreatLevelEnum {
  Urgent, High, Medium, Low, None, NotApplicable

}

export enum EnumFormGroupStatus {
  Initial,
  Success,
  Warning,
  Error
}

export interface IBaseFieldProps {
  ClassName?: string;
  DisplayName: string;
  Error?: string;
  HelpText?: string;
  Index?: number;
  status: EnumFormGroupStatus;
}
