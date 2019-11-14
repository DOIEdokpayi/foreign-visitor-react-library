import * as React from "react";
import { IFormFieldsBase } from "../../types";
import { IVisitsMasterDetailImplBase } from "../IVisitsMasterDetailImplProps";
import { dateValue } from "../../ResponseForm/dateValue";
import BasicField from "./BasicField";
export interface IFormFieldsProps extends IFormFieldsBase {
    values: IVisitsMasterDetailImplBase;
}
export default function FormFields(props: IFormFieldsProps): JSX.Element {
    const { handleBlur, handleChange, status, values } = props;
    return <React.Fragment>
        <BasicField
            displayName="Arrival Date"
            handleBlur={handleBlur}
            handleChange={handleChange}
            id="LEPortalArrivalDate"
            status={status}
            type="date"
            value={values.LEPortalArrivalDate ? dateValue(values.LEPortalArrivalDate) : dateValue(new Date)}
        />
        <BasicField
            displayName="Departure Date"
            handleBlur={handleBlur}
            handleChange={handleChange}
            id="LEPortalDepartureDate"
            status={status}
            type="date"
            value={values.LEPortalDepartureDate ? dateValue(values.LEPortalDepartureDate) : dateValue(new Date)}
        />

        <BasicField
            displayName="Sponsor First Name"
            handleBlur={handleBlur}
            handleChange={handleChange}
            id="LEPortalForeignVisitorSponsorFir"
            status={status}
            type="text"
            value={values.LEPortalForeignVisitorSponsorFir || ""}
        />

        <BasicField
            displayName="Sponsor Last Name"
            handleBlur={handleBlur}
            handleChange={handleChange}
            id="Title"
            status={status}
            type="text"
            value={values.Title || ""}
        />

        <BasicField
            displayName="Purpose of Visit"
            handleBlur={handleBlur}
            handleChange={handleChange}
            id="LEPortalPurposeOfVisit"
            status={status}
            type="text"
            value={values.LEPortalPurposeOfVisit || ""}
        />

    </React.Fragment>
}