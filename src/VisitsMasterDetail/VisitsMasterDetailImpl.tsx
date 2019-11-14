import * as React from "react";
import Loading from "../loading";
import { IVisitsMasterDetailImplProps, IVisitsMasterDetailImplBase } from "./IVisitsMasterDetailImplProps";
import { FormWrapper } from "../FormWrapper";
import { VisitsMasterDetailSubmit } from "./VisistsMasterDetailSubmit";
import FormFields from "./FormFields";
import { IFormWrapperContext } from "../FormWrapper/IFormWrapperContext";

export default function VisitsMasterDetailImpl(props: IVisitsMasterDetailImplProps): React.ReactElement<IVisitsMasterDetailImplProps> {
    const { hasUserProfile } = props;

    return hasUserProfile ? <FormWrapper
        initialValues={{}}
        onSubmit={VisitsMasterDetailSubmit}
        renderFormFields={(ctx: IFormWrapperContext) =>
            <FormFields
                handleBlur={ctx.handleBlur}
                handleChange={ctx.handleChange}
                setFieldValue={ctx.setFieldValue}
                status={ctx.status}
                values={ctx.values as IVisitsMasterDetailImplBase}
            />

        }

    /> : <Loading />;
}