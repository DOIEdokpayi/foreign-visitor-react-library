import * as React from 'react';
import { CheckBoxField } from '../Fields/Checkbox';
import { FormWrapper } from '../FormWrapper';
import { IFormValidateProps } from '../FormWrapper/IFormValidateProps';
import { IFormWrapperContext } from '../FormWrapper/IFormWrapperContext';
import { FormWrapperStatusEnum, ITermsAndConditionsFormValues } from '../types';
import { ConvertFieldValue } from './ConvertFieldValue';
import { ITermsAndConditionsFormProps } from './ITermsAndConditionsFormProps';



export function TermsAndConditionsForm(props: ITermsAndConditionsFormProps): JSX.Element {

    return (
        <FormWrapper
            convertFieldValue={ConvertFieldValue}
            initialValues={{ termsaccepted: false }}
            onSubmit={(ctx: IFormWrapperContext) => {
                props.SubmitActionFunc(ctx.values as ITermsAndConditionsFormValues);
            }}
            onValidate={(props: IFormValidateProps) => {
                const { status, values } = props;
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
                const error = hasError && TermsAcceptedStatus ? TermsAcceptedStatus.error : undefined;
                const checked = (ctx.values as ITermsAndConditionsFormValues).termsaccepted;

                return <React.Fragment>
                    <CheckBoxField 
                        checked={checked}
                        description={error}
                        displayName={"I accept the terms and conditions"} 
                        id={"termsaccepted"} 
                        name={"termsaccepted"} 
                        status={TermsAcceptedStatus ? TermsAcceptedStatus.status : FormWrapperStatusEnum.initial} onChange={ctx.handleChange} />
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


