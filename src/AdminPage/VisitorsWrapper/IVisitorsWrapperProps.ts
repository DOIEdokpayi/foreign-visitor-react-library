import { IVisitor, IVisitorFunc } from "../../types";

export interface IVisitorsWrapperProps{
    visitors?: IVisitor[];
    ClickHandler: IVisitorFunc;
}