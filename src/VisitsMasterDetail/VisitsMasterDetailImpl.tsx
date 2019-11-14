import * as React from "react";
import Loading from "../loading";
import { IVisitsMasterDetailImplProps } from "./IVisitsMasterDetailImplProps";
import { FormWrapper } from "../FormWrapper";
import { VisitsMasterDetailSubmit } from "./VisistsMasterDetailSubmit";

export default function VisitsMasterDetailImpl(props: IVisitsMasterDetailImplProps): React.ReactElement<IVisitsMasterDetailImplProps> {
    const { hasUserProfile } = props;

    return hasUserProfile ? <FormWrapper
        initialValues={{}}
        onSubmit={VisitsMasterDetailSubmit}
        renderFormFields={() => <div />}

    /> : <Loading />;
}