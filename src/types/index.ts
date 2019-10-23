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
  export interface IContact {
    FirstName: string;
    LastName: string;
    EMail: string;
    BusinessPhone: string;
  }
  export interface ILocation {
    Facility: string;
    StreetAddress: string;
    City: string;
    State: string;
  }
  
  export enum RequestStatusEnum {
    Approved, NotApproved, Incomplete, Invalid, NotApplicable
  }
  
  export enum ThreatLevelEnum {
    Urgent, High, Medium, Low, None, NotApplicable
  
  }
  