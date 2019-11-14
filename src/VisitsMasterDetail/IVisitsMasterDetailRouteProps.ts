import { IVisitListInformation, SPUserProfile } from "../types";

export interface IVisitsMasterDetailRouteProps extends IVisitListInformation {
    userProfileService: ()=> Promise<SPUserProfile>;
    EarliestArrivalDate: Date;
    Redirect: string;
    listItemEntityTypeFullName: string;
};
