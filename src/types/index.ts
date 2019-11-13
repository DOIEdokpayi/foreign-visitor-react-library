import getFileBuffer from "../Utilities/getFileBuffer";

export type BusinessAssociation = "Government" | "Private Sector" | "Academic" | "Non-Profit";

export interface country {
  Code: string;
  "English Name": string;
  "French Name": string;
}
export type HideElementFunc = () => void;

export interface ICommonFieldsBase extends IHasMetadata {
  VisitId?: number;
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
export interface ICommonFieldsBase extends IHasMetadata {
  VisitId?: number;
}

export type ICommonFields = ICommonFieldsBase & IStringIndexable;

export interface IContact extends ICommonFields {
  Title?: string;
  FirstName?: string;
  FullName?: string;
  EMail?: string;
  Company?: string;
  JobTitle?: string;
  WorkPhone?: string;
  HomePhone?: string;
  CellPhone?: string;
  WorkFax?: string;
  WorkAddress?: string;
  WorkCity?: string;
  WorkState?: string;
  WorkZip?: string;
  WorkCountry?: string;
  WebPage?: string;
  Comments?: string;
}

export interface IContactFunc {
  (contact: IContact): void
}

export interface IHasMetadata {
  __metadata?: ISPListItemMetadata;
}

export interface IErrorHandlerFunc {
  (ErrorMessage?: string, Stack?: string): JSX.Element
}

export interface IMasterDetailProps {
  DeleteConfirm: string;
  DeleteText: string;
  DetailText: string;
  NewText: string;
  Fields: Map<string, string>; // values are Table header fields keys access data  
}

export interface IPair<T> {
  value: T;
  Key: string;
}

export interface IProgressUpdate {
  IsComplete: boolean;
  Progress: number; // fractional value between 0 and 1
  Started: boolean;
}

export interface IStringIndexable {
  [key: string]: any;
}

export interface ISPListItemMetadata {
  etag?: string;
  id?: string;
  type?: string;
  uri?: string;
}


export interface ISponsor extends ISPListItemMetadata {
  Name: string;
  Telephone: string;
  Email: string
}

export interface DeferredURI {
  uri: string
}
export interface ODATADeferred {
  __deferred: DeferredURI;
}

export interface ISPListItem extends IHasMetadata {
  Title: string;
}

export interface ISPHyperLinkField extends IHasMetadata {
  Description: string;
  Url: string;
}

export interface ISPNewListItem {
  AttachmentFiles: ODATADeferred;
  Attachments: boolean;
  AuthorId: number;
  ContentType: ODATADeferred;
  ContentTypeId: string;
  Created: Date;
  EditorId: number;
  FieldValuesAsHtml: ODATADeferred;
  FieldValuesAsText: ODATADeferred;
  FieldValuesForEdit: ODATADeferred;
  File: ODATADeferred;
  FileSystemObjectType: number;
  FirstUniqueAncestorSecurableObject: ODATADeferred;
  Folder: ODATADeferred;
  GUID: string;
  GetDlpPolicyTip: ODATADeferred;
  ID: number;
  Id: number;
  Modified: Date;
  OData__UIVersionString: string;
  ParentList: ODATADeferred;
  RoleAssignments: ODATADeferred;
  __metadata: ISPListItemMetadata;
}
export interface ISPListItemPostResponse {
  d: ISPNewListItem;
}

export interface ISponsorFunc {
  (sponsor: ISponsor): void
}

export interface IVisit extends ISPListItemMetadata {
  ArrivalDate: Date;
  DepartureDate: Date;
  DownloadLink: string;
}

export interface IVisitFunc {
  (visit: IVisit): void
}

export interface IVisitorFunc {
  (visitor: IVisitor): void
}

export interface IVisitor extends ICommonFields {
  Title?: string;
  LEPortalVisitorFirstName?: string;
  LEPortalVisitorMiddleName?: string;
  Gender?: Sex;
  LEPortalPlaceofBirth?: string;
  Birthday?: Date;
  LEPortalCitizenshipCountry?: string;
  LEPortalCurrentResidenceCountry?: string;
  Organization?: string;
  LEPortalOrganizationAddress?: string;
  LEPortalOrgEmail?: string;
  LEPortalOrgPhone?: string;
  LEPortalOtherNamesUsed?: string;
  LEPortalBusinessAssociation?: BusinessAssociation;
}

export interface ILocation extends ICommonFields {
  Title?: string;
  LEPortalForeignVisitorStreetAddr?: string;
  LEPortalForeignVisitorFacilityPh?: string;
  LEPortalForeignVisitorFacilityCi?: string;
  LEPortalUSStatesAndTerritories?: string;
  LEPortalZipCode?: string;
  LEPortalFacilityRoomNumber?: string;
  LEPortalFacilityFloorNumber?: number;
}

export interface ILocationFunc {
  (location: ILocation): void
}
export interface ITermsAndConditionsFormValues extends IStringIndexable {
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
export enum FormWrapperStatusEnum {
  initial, // after reset or empty form
  dirty, // field has changed
  error, // field has error
  validated // field has been validated
}

export type Sex = "Female" | "Male";

export interface SPUserProfileResponse{
  d: SPUserProfile;
}

export interface SPUserProfileValue {
  __metadata: ISPListItemMetadata;
  Key: string;
  Value: string;
  ValueType: string;
}

export interface SPUserProfileProperties {
  results: SPUserProfileValue[];
  UserUrl: string;
}

export interface SPUserProfile {
  AccountName: string;
  DisplayName: string;
  Email: string;
  ExtendedManagers: { results: string[] };
  ExtendedReports: {
      results: string;
      __metadata: ISPListItemMetadata;
  }
  IsFollowed: boolean;
  LatestPost: string;
  Peers: {
      results: string[];
      __metadata: ISPListItemMetadata;
  }
  PersonalUrl: string;
  PictureUrl: string;
  Title: string;
  UserProfileProperties: SPUserProfileProperties;
  UserUrl: string;
  __metadata: ISPListItemMetadata;
}
export interface IReduxStateVisitorLookup {
  VisitorID?: string;
}

export interface ISPListItemVisitorLookup {
  VisitorId?: number;
}
export type ITelephone = ISPListItem & IStringIndexable & IReduxStateVisitorLookup;
export type ISPTelephone = ISPListItem & IStringIndexable & ISPListItemVisitorLookup;

export type IEmail = ISPListItem & IStringIndexable & IReduxStateVisitorLookup;
export type ISPEmail = ISPListItem & IStringIndexable & ISPListItemVisitorLookup;

export interface IPassportInformationBase {
  Title?: string;
  LEPortalPassPortIssuanceDate?: Date;
  LEPortalPassPortExpirationDate?: Date;
  LEPortalPassPortIssuingCountry?: string;
}

export type IPassportInformation = IPassportInformationBase & IStringIndexable & IReduxStateVisitorLookup;
export type ISPPassportInformation = IPassportInformationBase & IStringIndexable & ISPListItemVisitorLookup & IHasMetadata;
export type VisitPriority = "Immediate" | "Priority" | "Important" | "Routine";

export interface IVisitListInformation {
  LEPortalArrivalDate?: Date;
  LEPortalDepartureDate?: Date;
  LEPortalForeignVisitorSponsorFir?: string;
  Title?: string;
  LEPortalPurposeOfVisit?: string;
  LEPortalSponsoringBureau?: string;
  LEPortalSponsorTelephone?: string;
  LEPortalSponsorEmail?: string;
  LEPortalForeignVisitorPriority?: VisitPriority;
  [key: string]: any;
}

export type StateContainer<T> = Map<string, T>;
export type ContactContainer = StateContainer<IContact>;
export type LocationContainer = StateContainer<ILocation>;
export type VisitorsContainer = StateContainer<IVisitor>;
export type PassportsContainer = StateContainer<IPassportInformation>;
export type VisitorAttachmentContainer = StateContainer<FileData[]>;
export type TelephoneContainer = StateContainer<ITelephone>;
export type EmailContainer = StateContainer<IEmail>

export class FileData {
  Buffer?: ArrayBuffer;
  Name: string;
  Error?: any;
  constructor(file: File) {
      this.Name = file.name;
      getFileBuffer(file)
          .then((buffer: ArrayBuffer) => this.Buffer = buffer)
          .catch((reason: any) => this.Error = reason);
  }
}

export interface IAppState { //  each property is the name of a reducer
  AcceptTerms: boolean;
  Passports: PassportsContainer;
  EditEscorts: string;
  EditLocations: string;
  EditTranslators: string;
  EditVisitors: string;
  EmailAddresses: EmailContainer
  Escorts: ContactContainer;
  Locations: LocationContainer;
  RequestDigest: string;
  Telephones: TelephoneContainer;
  TermsRedirect: string;
  Translators: ContactContainer;
  VisitAttachments: FileData[];
  VisitorAttachments: VisitorAttachmentContainer;
  VisitInfo: IVisitListInformation;
  Visitors: VisitorsContainer;
  VisitorsRedirect: string;
}

export interface IForeignVisitData {
  AcceptTerms: boolean;
  EmailAddresses: IEmail[];
  Escorts: IContact[];
  Locations: ILocation[];
  PassportInformation: IPassportInformation[];
  TelephoneNumbers: ITelephone[];
  Translators: IContact[];
  VisitAttachments: FileData[];
  VisitInformation: IVisitListInformation;
  Visitors: VisitorsContainer;
  VisitorAttachments: VisitorAttachmentContainer;
}

export class SPContact implements IHasMetadata {
  __metadata: ISPListItemMetadata;
  Title: string;
  FirstName: string;
  FullName?: string;
  EMail: string;
  Company?: string;
  JobTitle?: string;
  WorkPhone?: string;
  HomePhone?: string;
  CellPhone?: string;
  WorkFax?: string;
  WorkAddress?: string;
  WorkCity?: string;
  WorkState?: string;
  WorkZip?: string;
  WorkCountry?: string;
  WebPage?: ISPHyperLinkField;
  Comments?: string;
  constructor(contact: IContact, defaultType?: string) {
      this.__metadata = !!contact.__metadata ? contact.__metadata :
          { type: defaultType as string };
      this.Title = contact.Title as string;
      this.FirstName = contact.FirstName as string;
      this.EMail = contact.EMail as string;
      this.FullName = contact.FullName;
      this.Company = contact.Company;
      this.JobTitle = contact.JobTitle;
      this.WorkPhone = contact.WorkPhone;
      this.HomePhone = contact.HomePhone;
      this.CellPhone = contact.CellPhone;
      this.WorkFax = contact.WorkFax;
      this.WorkAddress = contact.WorkAddress;
      this.WorkCity = contact.WorkCity;
      this.WorkAddress = contact.WorkAddress;
      this.WorkState = contact.WorkState;
      this.WorkZip = contact.WorkZip;
      this.WorkCountry = contact.WorkCountry;
      this.WebPage = !!contact.WebPage ? {
          __metadata: { type: "SP.FieldUrlValue" },
          Description: this.FirstName + " " + this.Title,
          Url: contact.WebPage
      } : undefined;
      this.Comments = contact.Comments;
  }
}

export interface IValidationResult {
  IsError: boolean;
  Message?: string;
}



