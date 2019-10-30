/**
 * @class ResponseForm
 */

import * as React from 'react';
import { IResponseFormProps } from './IResponseFormProps';
import { FormWrapper } from '../FormWrapper';
import { IFormWrapperContext } from '../FormWrapper/IFormWrapperContext';
import { IResponseFormValues } from './IResponseFormValues';
import { FormGroup } from '../Fields/FormGroup';
import { FormWrapperStatusEnum } from '../FormWrapper/FormWrapperStatusEnum';
import { RequestStatusEnum } from '../types';

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
                    if (!values.requeststatus) {
                        status.set("requeststatus", {
                            error: "Request Status is Required!",
                            status: FormWrapperStatusEnum.error
                        });
                    }
                    else {
                        status.set("requeststatus", {
                            status: FormWrapperStatusEnum.validated
                        });
                    }
                    return status;
                }}

                renderFormFields={(ctx: IFormWrapperContext) => {
                    const { handleChange, status } = ctx;
                    const requestStatus = (status.get("requeststatus") || { status: FormWrapperStatusEnum.initial }).status;
                    const values = getValues(ctx);
                    return <React.Fragment>
                        <FormGroup associatedFieldId={"requeststatus"} displayName={"Request Status"} status={requestStatus}>
                            <select
                                aria-describedby={"requeststatusstatus"}
                                required={true}
                                id={"requeststatus"}
                                name={"requeststatus"}
                                className="form-control"
                                value={values.requestStatus}
                                onChange={handleChange}>
                                <option value={RequestStatusEnum.Approved}>Approved</option>
                                <option value={RequestStatusEnum.Incomplete}>Incomplete</option>
                                <option value={RequestStatusEnum.Invalid}>Invalid</option>
                                <option value={RequestStatusEnum.NotApplicable}>Not Applicable</option>
                                <option value={RequestStatusEnum.NotApproved}>Not Approved</option>
                            </select>
                        </FormGroup>
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
