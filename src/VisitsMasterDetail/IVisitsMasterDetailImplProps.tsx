import { VisitPriority, IVisitListInformation } from "../types";
export interface IVisitsMasterDetailImplProps {
    hasUserProfile: boolean;
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
    listItemEntityTypeFullName: string;
    DispatchAttachment: (attachments: FileList) => void;
    DispatchVisitInfo: (info: IVisitListInformation) => void;
}
