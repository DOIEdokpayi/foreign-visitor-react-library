/**
 * @class ResponseForm
 */

import * as React from 'react';
import { IResponseFormProps } from './IResponseFormProps';
import { FormWrapper } from '../FormWrapper';
import { IFormWrapperContext } from '../FormWrapper/IFormWrapperContext';
import { IResponseFormValues } from './IResponseFormValues';
import { FormFieldStatusEnum } from '../types';

export default class ResponseForm extends React.Component<IResponseFormProps> {
    public render(): JSX.Element {
        const values: IResponseFormValues = { ...this.props }
        return (
            <FormWrapper
                initialValues={values}
                onSubmit={(ctx: IFormWrapperContext) => {
                    const { SubmitPageFunc } = this.props;
                    const values: IResponseFormValues = getValues(ctx);
                    SubmitPageFunc(values);
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
                    console.log(ctx);
                    return <React.Fragment>

                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-primary">Submit Feedback to Requester</button>
                            </div>
                        </div>
                    </React.Fragment>
                }

                }
            />
        );
    }
}

function getValues(ctx: IFormWrapperContext) {
    const { formData } = ctx;
    const values: IResponseFormValues = {};
    formData.forEach((value: FormDataEntryValue, key) => values[key] = value.valueOf());
    return values;
}
