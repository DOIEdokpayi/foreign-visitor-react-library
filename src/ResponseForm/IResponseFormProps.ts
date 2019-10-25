import { RequestStatusEnum, ThreatLevelEnum, IErrorHandlerFunc } from "../types";
import { SubmitActionFunc } from "doiforms";


export interface IResponseFormProps {
    ApprovalAuthorutySignature?: string;
    AuthorityEmail?: string;
    Bureau?: string;
    CC?: string;
    Email?: string;
    ErrorHandler: IErrorHandlerFunc;
    FirstName?: string;
    Feedback?: string;
    LastName?: string;
    Office?: string;
    RequestStatus?: RequestStatusEnum;
    ThreatLevel?: ThreatLevelEnum;
    ResponseDate?: Date;
    Redirect: string;
    Subject?: string;
    SubmitAction: SubmitActionFunc;
    SubmitPageFunc: () => JSX.Element;
}