import * as React from 'react';
import { ITermsAndConditionsFormProps } from './ITermsAndConditionsFormProps';
import { CheckBoxField } from '../Fields/Checkbox';
import { ITermsAndConditionsFormValues } from '../types';
import { FormWrapper } from '../FormWrapper';
import { IFormWrapperContext } from '../FormWrapper/IFormWrapperContext';
import { FormWrapperStatusEnum } from '../FormWrapper/FormWrapperStatusEnum';
import { ConvertFieldValue } from './ConvertFieldValue';



export function TermsAndConditionsForm(props: ITermsAndConditionsFormProps): JSX.Element {

    return (
        <FormWrapper
            convertFieldValue={ConvertFieldValue}
            initialValues={{ termsaccepted: false }}
            onSubmit={(ctx: IFormWrapperContext) => {
                props.SubmitActionFunc(ctx.values as ITermsAndConditionsFormValues);
            }}
            onValidate={(ctx: IFormWrapperContext) => {
                const { status, values } = ctx;
                if (!values.termsaccepted) {
                    status.set("termsaccepted", {
                        error: "You must accept the terms and conditions!",
                        status: FormWrapperStatusEnum.error
                    });
                }
                else {
                    status.set("termsaccepted", {
                        status: FormWrapperStatusEnum.validated
                    });
                }
                return status;
            }}

            renderFormFields={(ctx: IFormWrapperContext) => {
                const TermsAcceptedStatus = ctx.status.get("termsaccepted");
                const hasError = TermsAcceptedStatus ? TermsAcceptedStatus.status === FormWrapperStatusEnum.error : false;
                const error = hasError && TermsAcceptedStatus ? TermsAcceptedStatus.error : "";
                const checked = (ctx.values as ITermsAndConditionsFormValues).termsaccepted;

                return <React.Fragment>
                    <CheckBoxField checked={checked} displayName={"I accept the terms and conditions"} id={"termsaccepted"} name={"termsaccepted"} status={TermsAcceptedStatus ? TermsAcceptedStatus.status : FormWrapperStatusEnum.initial} onChange={ctx.handleChange} />
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


