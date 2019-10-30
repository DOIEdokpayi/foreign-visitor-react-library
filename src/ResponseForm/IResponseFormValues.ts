import { RequestStatusEnum, ThreatLevelEnum } from "../types";

export interface IResponseFormValues {
    [key:string]: any;
    approvalauthorityaignature?: string;
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