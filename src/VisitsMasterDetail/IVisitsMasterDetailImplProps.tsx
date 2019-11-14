import { VisitPriority, IVisitListInformation } from "../types";
export interface IVisitsMasterDetailImplBase {
    LEPortalArrivalDate?: Date;
    LEPortalDepartureDate?: Date;
    LEPortalForeignVisitorSponsorFir?: string;
    Title?: string;
    LEPortalPurposeOfVisit?: string;
    LEPortalSponsoringBureau?: string;
    LEPortalSponsorTelephone?: string;
    LEPortalSponsorEmail?: string;
    LEPortalForeignVisitorPriority?: VisitPriority;
    FirstName?: string;
    LastName?: string;
    Telephone?: string;
    Email?: string;
    Bureau?: string;
    EarliestArrivalDate: Date;
    Redirect: string;
}
export interface IVisitsMasterDetailImplProps extends IVisitsMasterDetailImplBase {
    hasUserProfile: boolean;
    listItemEntityTypeFullName: string;
    DispatchAttachment: (attachments: FileList) => void;
    DispatchVisitInfo: (info: IVisitListInformation) => void;
}
