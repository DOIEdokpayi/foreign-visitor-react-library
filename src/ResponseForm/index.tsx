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
import { RequestStatusEnum, ThreatLevelEnum } from '../types';
import { IFormWrapperFieldStatus } from '../FormWrapper/IFormWrapperFieldStatus';

export default class ResponseForm extends React.Component<IResponseFormProps> {
    private fileInputRef:React.RefObject<HTMLInputElement>;
    constructor(props: IResponseFormProps){
        super(props);
        this.fileInputRef = React.createRef<HTMLInputElement>();
    }
    public render(): JSX.Element {
        const values: IResponseFormValues = { ...this.props }
        return (
            <FormWrapper
                initialValues={values}
                onSubmit={(ctx: IFormWrapperContext) => {
                    const { SubmitPageFunc } = this.props;
                    const values: IResponseFormValues = getValues(ctx);
                    const fileInput: HTMLInputElement = this.fileInputRef.current as HTMLInputElement;
                    var reader = new FileReader();
                    values.attachment = [];
                    reader.onload = ()=>{
                        if(values.attachment){
                            values.attachment.push(reader.result as ArrayBuffer);
                        }
                    }
                    if(fileInput.files){ // not null
                        
                        for(let i = 0; i< fileInput.files.length; i++){
                            const file = fileInput.files[i];
                            if(file){
                               reader.readAsArrayBuffer(file);
                            }
                            
                        }
                    }
                    
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

                    const requestStatus = getFieldStatus(status, "requeststatus");
                    const subjectStatus = getFieldStatus(status, "subject");
                    const threatlevelStatus = getFieldStatus(status, "threatlevel");
                    const firstnameStatus = getFieldStatus(status, "firstname");
                    const lastnameStatus = getFieldStatus(status, "lastname");
                    const bureauStatus = getFieldStatus(status, "bureau");
                    const officeStatus = getFieldStatus(status, "office");
                    const approvalauthoritysignatureStatus = getFieldStatus(status, "approvalauthoritysignature");
                    const authorityemailStatus = getFieldStatus(status, "authorityemail");
                    const responsedateStatus = getFieldStatus(status, "responsedate");
                    const attachmentStatus = getFieldStatus(status, "attachment");
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
                        <FormGroup associatedFieldId={"subject"} displayName={"Subject"} status={subjectStatus} >
                            <input
                                aria-describedby={"subjectstatus"}
                                className={"form-control"}
                                id={"subject"}
                                name={"subject"}
                                onChange={handleChange}
                                type="text"
                                required={true}
                                value={values.subject}
                            />
                        </FormGroup>
                        <FormGroup associatedFieldId={"feedback"} displayName={"Feedback/Next Steps"} status={subjectStatus} >
                            <textarea
                                aria-describedby={"feedbackstatus"}
                                className={"form-control"}
                                id={"feedback"}
                                name={"feedback"}
                                onChange={handleChange}
                                required={true}
                                value={values.feedback}
                            />
                        </FormGroup>
                        <FormGroup associatedFieldId={"threatlevel"} displayName={"Threat Level"} status={threatlevelStatus} >
                            <div className="btn-group" data-toggle="buttons">
                                <label className="btn btn-primary active">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value={ThreatLevelEnum.Urgent}
                                        name="threatlevel"
                                        id="threatlevel1"
                                        checked={threatLevelOptionChecked(ThreatLevelEnum.Urgent, values.threatlevel)} /> Urgent
                                </label>
                                <label className="btn btn-primary">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value={ThreatLevelEnum.High}
                                        name="threatlevel"
                                        id="threatlevel2"
                                        checked={threatLevelOptionChecked(ThreatLevelEnum.High, values.threatlevel)} /> High
                                </label>
                                <label className="btn btn-primary">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value={ThreatLevelEnum.Medium}
                                        name="threatlevel"
                                        id="threatlevel3"
                                        checked={threatLevelOptionChecked(ThreatLevelEnum.Medium, values.threatlevel)} /> Medium
                                </label>
                                <label className="btn btn-primary">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value={ThreatLevelEnum.Low}
                                        name="threatlevel"
                                        id="threatlevel3"
                                        checked={threatLevelOptionChecked(ThreatLevelEnum.Low, values.threatlevel)} /> Low
                                </label>
                                <label className="btn btn-primary">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value={ThreatLevelEnum.None}
                                        name="threatlevel"
                                        id="threatlevel3"
                                        checked={threatLevelOptionChecked(ThreatLevelEnum.None, values.threatlevel)} /> None
                                </label>
                                <label className="btn btn-primary">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        value={ThreatLevelEnum.NotApplicable}
                                        name="threatlevel"
                                        id="threatlevel3"
                                        checked={threatLevelOptionChecked(ThreatLevelEnum.NotApplicable, values.threatlevel)} /> Not Applicable
                                </label>
                            </div>
                        </FormGroup>

                        <div className="form-group">
                            <label className="control-label col-sm-2">Requestor</label>
                            <div className="col-sm-10">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <FormGroup associatedFieldId={"firstname"} displayName={"First Name"} status={firstnameStatus} >
                                                <textarea
                                                    aria-describedby={"firstnamestatus"}
                                                    className={"form-control"}
                                                    id={"firstname"}
                                                    name={"firstname"}
                                                    onChange={handleChange}
                                                    required={true}
                                                    value={values.firstname}
                                                />
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-6">
                                            <FormGroup associatedFieldId={"lastname"} displayName={"Last Name"} status={lastnameStatus} >
                                                <textarea
                                                    aria-describedby={"lastnamestatus"}
                                                    className={"form-control"}
                                                    id={"lastname"}
                                                    name={"lastname"}
                                                    onChange={handleChange}
                                                    required={true}
                                                    value={values.lastname}
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2">Requestor Bureau Office</label>
                            <div className="col-sm-10">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <FormGroup associatedFieldId={"bureau"} displayName={"Bureau"} status={bureauStatus} >
                                                <textarea
                                                    aria-describedby={"bureaustatus"}
                                                    className={"form-control"}
                                                    id={"bureau"}
                                                    name={"bureau"}
                                                    onChange={handleChange}
                                                    required={true}
                                                    value={values.bureau}
                                                />
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-6">
                                            <FormGroup associatedFieldId={"office"} displayName={"Office"} status={officeStatus} >
                                                <textarea
                                                    aria-describedby={"officestatus"}
                                                    className={"form-control"}
                                                    id={"office"}
                                                    name={"office"}
                                                    onChange={handleChange}
                                                    required={true}
                                                    value={values.office}
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormGroup associatedFieldId={"approvalauthoritysignature"} displayName={"Approval Authority Signature"} status={approvalauthoritysignatureStatus} >
                            <input
                                aria-describedby={"approvalauthoritysignaturestatus"}
                                className={"form-control"}
                                id={"approvalauthoritysignature"}
                                name={"approvalauthoritysignature"}
                                onChange={handleChange}
                                type="text"
                                required={true}
                                value={values.approvalauthoritysignature}
                            />
                        </FormGroup>
                       
                        <FormGroup associatedFieldId={"authorityemail"} displayName={"Authority E-mail"} status={authorityemailStatus} >
                            <input
                                aria-describedby={"authorityemailstatus"}
                                className={"form-control"}
                                id={"authorityemail"}
                                name={"authorityemail"}
                                onChange={handleChange}
                                type="text"
                                required={true}
                                value={values.authorityemail}
                            />
                        </FormGroup>
                       
                        <FormGroup associatedFieldId={"responsedate"} displayName={"Response Date"} status={responsedateStatus} >
                            <input
                                aria-describedby={"responsedatestatus"}
                                className={"form-control"}
                                id={"responsedate"}
                                name={"responsedate"}
                                onChange={handleChange}
                                type="date"
                                required={true}
                                value={dateValue(values.responsedate || new Date)}
                            />
                        </FormGroup>
                        <FormGroup associatedFieldId={"attachment"} displayName={"Attachment"} status={attachmentStatus} >
                            <input
                                aria-describedby={"attachmentstatus"}
                                className={"form-control"}
                                id={"attachment"}
                                multiple={true}
                                name={"attachment"}
                                type="file"
                                ref={this.fileInputRef}
                                required={false}
                            />
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

function threatLevelOptionChecked(threatLevel: ThreatLevelEnum, value?: ThreatLevelEnum, ): boolean {
    return value === threatLevel;
}
function getFieldStatus(status: IFormWrapperFieldStatus, fieldName: string) {
    return (status.get(fieldName) || { status: FormWrapperStatusEnum.initial }).status;
}

function getValues(ctx: IFormWrapperContext) {
    const { formData } = ctx;
    const values: IResponseFormValues = {};
    formData.forEach((value: FormDataEntryValue, key) => values[key] = value.valueOf());
    return values;
}

function formatDate(date:Date):string{
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2,"0");
    const dash = "-";
    return year + dash + month + dash + day;
}

function dateValue(dateValue:string|Date):string{
    return typeof dateValue === "string" ? dateValue : formatDate(dateValue);
}