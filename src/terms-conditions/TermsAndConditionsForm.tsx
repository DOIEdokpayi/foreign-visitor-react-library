import * as React from 'react';
import { ITermsAndConditionsFormProps } from './ITermsAndConditionsFormProps';
import { CheckBoxField } from '../Fields/Checkbox';
import { ITermsAndConditionsFormValues, FormFieldStatusEnum } from '../types';
import { FormWrapper } from '../FormWrapper';
import { IFormWrapperContext } from '../FormWrapper/IFormWrapperContext';



export function TermsAndConditionsForm(props: ITermsAndConditionsFormProps): JSX.Element {

    return (
        <FormWrapper
            initialValues={{ TermsAccepted: false }}
            onSubmit={(ctx: IFormWrapperContext) => {
                const values: ITermsAndConditionsFormValues = getValues(ctx);
                props.SubmitActionFunc(values);
            }}
            onValidate={(ctx: IFormWrapperContext) => {
                const { status } = ctx;
                const values = getValues(ctx);
                if (!values.TermsAccepted) {
                    status.set("TermsAccepted", {
                        error: "You must accept the terms and conditions!",
                        status: FormFieldStatusEnum.Error
                    });
                }
                else {
                    status.set("TermsAccepted", {
                        status: FormFieldStatusEnum.Success
                    });
                }
                return status;
            }}

            renderFormFields={(ctx: IFormWrapperContext) => {
                const TermsAcceptedStatus = ctx.status.get("TermsAccepted");
                const hasError = TermsAcceptedStatus ? TermsAcceptedStatus.status === FormFieldStatusEnum.Error : false;
                const error = hasError && TermsAcceptedStatus ? TermsAcceptedStatus.error : "";
                const checked = getValues(ctx).TermsAccepted;

                return <React.Fragment>
                    <CheckBoxField checked={checked} displayName={"I accept the terms and conditions"} id={"TermsAccepted"} name={"TermsAccepted"} status={TermsAcceptedStatus ? TermsAcceptedStatus.status : FormFieldStatusEnum.Initial} onChange={ctx.handleChange} />
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary">Continue</button>
                        </div>
                    </div>
                    {
                        hasError ?
                            <p className="bg-danger">{error}</p> : undefined
                    }
                </React.Fragment>
            }

            }
        />

    );
}

function getValues(ctx: IFormWrapperContext) {
    const values: ITermsAndConditionsFormValues = { TermsAccepted: false };
    values.TermsAccepted = Boolean(ctx.formData.get("TermsAccepted"));
    return values;
}

