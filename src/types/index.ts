export interface ISPListId{
  Id: number;
}
export interface IContact extends ISPListId {
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
export interface IInitialValues {
  [key: string]: any;
}

export interface ISponsor  extends ISPListId{
  Name: string;
  Telephone: string;
  Email: string
}

export interface ISponsorFunc {
  (sponsor: ISponsor): void
}

export interface IVisit  extends ISPListId{
  ArrivalDate: Date;
  DepartureDate: Date;
  DownloadLink: string;
}

export interface IVisitFunc {
  (visit: IVisit): void
}

export interface IVisitor  extends ISPListId{
  FirstName: string;
  LastName: string;
  PlaceOfBirth: string;
}
export interface IVisitorFunc {
  (visitor: IVisitor): void
}

export interface ILocation  extends ISPListId{
  Facility: string;
  StreetAddress: string;
  City: string;
  State: string;
}
export interface ILocationFunc {
  (location: ILocation): void
}
export interface ITermsAndConditionsFormValues extends IInitialValues {
  termsaccepted: boolean;
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
export enum FormWrapperStatusEnum{
  initial, // after reset or empty form
  dirty, // field has changed
  error, // field has error
  validated // field has been validated
}
export interface IBaseFieldProps {
  className?: string;
  description?: string;
  disabled?: boolean;
  displayName: string;
  error?: string;
  id: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  required?: boolean;
  status?: FormWrapperStatusEnum;
  value?: any;
}
