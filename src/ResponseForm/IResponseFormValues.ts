import { RequestStatusEnum, ThreatLevelEnum } from "../types";

export interface IResponseFormValues {
    [key:string]: any;
    ApprovalAuthoritySignature?: string;
    AuthorityEmail?: string;
    Bureau?: string;
    CC?: string[];
    Email?: string;    
    FirstName?: string;
    Feedback?: string;
    LastName?: string;
    Office?: string;
    RequestStatus?: RequestStatusEnum;
    ThreatLevel?: ThreatLevelEnum;
    ResponseDate?: Date;
    Subject?: string;
}