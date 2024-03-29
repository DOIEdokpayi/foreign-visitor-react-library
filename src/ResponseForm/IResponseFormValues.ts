import { IStringIndexable, RequestStatusEnum, ThreatLevelEnum } from "../types";

export interface IResponseFormValues extends IStringIndexable {
    [key:string]: any;
    approvalauthoritysignature?: string;
    attachment?:ArrayBuffer[];
    authorityemail?: string;
    bureau?: string;
    cc?: string[];
    email?: string;    
    firstname?: string;
    feedback?: string;
    lastname?: string;
    office?: string;
    requeststatus?: RequestStatusEnum;
    threatlevel?: ThreatLevelEnum;
    responsedate?: Date;
    subject?: string;
}