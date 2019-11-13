import * as React from "react";
import { IVisitorsMasterDetailDispatchProps } from "./IVisitorsMasterDetailDispatchProps";
import { IVisitorsMasterDetailProps } from "./IVisitorsMasterDetailProps";
import MasterDetailURL from "../MasterDetailURL";
import { IVisitor } from "../types";

export default function VisitorsMasterDetail(props: IVisitorsMasterDetailProps & IVisitorsMasterDetailDispatchProps): JSX.Element {
    const { DispatchDelete, EditVisitorUrl, Visitors } = props;
    return <MasterDetailURL<IVisitor>
        BackUrl={"VisitInformation"}
        Data={Visitors}
        DeleteAction={DispatchDelete}
        DeleteConfirm={"Are you sure that you want to delete this visitor?"}
        DeleteText={"Delete"}
        DetailText={"Edit"}
        DetailUrl={(id: string) => {
            return { pathname: EditVisitorUrl + "/" + id };
        }}
        Fields={
            new Map<string, string>([
                ["Title", "Last Name"],
                ["LEPortalVisitorFirstName", "First Name"],
                ["LEPortalPlaceofBirth", "Place of Birth"]
            ])
        }
        NewText={"New Visitor"}
        NewUrl={() => {
            return { pathname: EditVisitorUrl };
        }}
        NextUrl={"Escorts"}
    />
}