import { IVisitListInformation } from "../types";
export interface IVisitsMasterDetailDispatchProps {
    DispatchVisitInfo: (info: IVisitListInformation) => void;
    DispatchAttachment: (attachments: FileList) => void;
}
