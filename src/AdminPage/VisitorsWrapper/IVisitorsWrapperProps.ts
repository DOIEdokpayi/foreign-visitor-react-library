import { IVisitorFunc, IVisitor } from "../../types";

export interface IVisitorsWrapperProps{
    visitors?: IVisitor[];
    ClickHandler: IVisitorFunc;
}