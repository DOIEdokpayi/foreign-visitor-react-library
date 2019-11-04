/**
 * @class ResponseFormFields
 */

import * as React from 'react';
import { FormGroup } from '../../Fields/FormGroup';
import { RequestStatusEnum, ThreatLevelEnum } from '../..';
import { FormWrapperStatusEnum } from '../../FormWrapper/FormWrapperStatusEnum';
import { getFieldStatus } from '../getFieldStatus';
import { threatLevelOptionChecked } from '../threatLevelOptionChecked';
import { dateValue } from '../dateValue';
import { IResponseFormFieldsProps } from './IResponseFormFieldsProps';

export default class ResponseFormFields extends React.Component<IResponseFormFieldsProps>{
    private fileInputRef: React.RefObject<HTMLInputElement>;
    constructor(props: IResponseFormFieldsProps) {
        super(props);
        this.fileInputRef = React.createRef<HTMLInputElement>();
    }
    public render(): JSX.Element {
        const { handleChange, status, values } = this.props;

                    const requestStatus = getFieldStatus(status, "requeststatus");
                    const subjectStatus = getFieldStatus(status, "subject");
                    const feedbackStatus = getFieldStatus(status, "feedback");
                    const threatlevelStatus = getFieldStatus(status, "threatlevel");
                    const firstnameStatus = getFieldStatus(status, "firstname");
                    const lastnameStatus = getFieldStatus(status, "lastname");
                    const bureauStatus = getFieldStatus(status, "bureau");
                    const officeStatus = getFieldStatus(status, "office");
                    const approvalauthoritysignatureStatus = getFieldStatus(status, "approvalauthoritysignature");
                    const authorityemailStatus = getFieldStatus(status, "authorityemail");
                    const responsedateStatus = getFieldStatus(status, "responsedate");
                    return <React.Fragment>
                        <FormGroup associatedFieldId={"requeststatus"} displayName={"Request Status"} status={requestStatus}>
                            <select
                                aria-describedby={"requeststatusstatus"}
                                required={true}
                                id={"requeststatus"}
                                name={"requeststatus"}
                                className="form-control"
                                defaultValue={"-1"}
                                value={values.requestStatus ? RequestStatusEnum[values.requestStatus] : undefined}
                                onChange={handleChange}>
                                <option value={"-1"}>Select a Request Status</option>
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
                                value={values.subject||""}
                            />
                        </FormGroup>
                        <FormGroup associatedFieldId={"feedback"} displayName={"Feedback/Next Steps"} status={feedbackStatus} >
                            <textarea
                                aria-describedby={"feedbackstatus"}
                                className={"form-control"}
                                id={"feedback"}
                                name={"feedback"}
                                onChange={handleChange}
                                required={true}
                                value={values.feedback||""}
                            />
                        </FormGroup>
                        <FormGroup associatedFieldId={"threatlevel"} displayName={"Threat Level"} status={threatlevelStatus} >
                            <div className="btn-group" data-toggle="buttons">
                                <label className="btn btn-primary active">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        name="threatlevel"
                                        id="threatlevel1"
                                        value={ThreatLevelEnum.Urgent}
                                        checked={threatLevelOptionChecked(
                                                ThreatLevelEnum.Urgent, 
                                                values.threatlevel)} /> Urgent
                                </label>
                                <label className="btn btn-primary">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        onClick={()=>alert("THreat Level High!")}
                                        name="threatlevel"
                                        id="threatlevel2"
                                        value={ThreatLevelEnum.High}
                                        checked={threatLevelOptionChecked(ThreatLevelEnum.High, values.threatlevel)} /> High
                                </label>
                                <label className="btn btn-primary">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        name="threatlevel"
                                        id="threatlevel3"
                                        value={ThreatLevelEnum.Medium}
                                        checked={threatLevelOptionChecked(ThreatLevelEnum.Medium, values.threatlevel)} /> Medium
                                </label>
                                <label className="btn btn-primary">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        name="threatlevel"
                                        id="threatlevel3"
                                        value={ThreatLevelEnum.Low}
                                        checked={threatLevelOptionChecked(ThreatLevelEnum.Low, values.threatlevel)} /> Low
                                </label>
                                <label className="btn btn-primary">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        name="threatlevel"
                                        id="threatlevel3"                                        
                                        value={ThreatLevelEnum.None}
                                        checked={threatLevelOptionChecked(ThreatLevelEnum.None, values.threatlevel)} /> None
                                </label>
                                <label className="btn btn-primary">
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        name="threatlevel"
                                        value={ThreatLevelEnum.NotApplicable}
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
                                                <input
                                                    aria-describedby={"firstnamestatus"}
                                                    className={"form-control"}
                                                    id={"firstname"}
                                                    name={"firstname"}
                                                    onChange={handleChange}
                                                    required={true}
                                                    type={"text"}
                                                    value={values.firstname||""}
                                                />
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-6">
                                            <FormGroup associatedFieldId={"lastname"} displayName={"Last Name"} status={lastnameStatus} >
                                                <input
                                                    aria-describedby={"lastnamestatus"}
                                                    className={"form-control"}
                                                    id={"lastname"}
                                                    name={"lastname"}
                                                    onChange={handleChange}
                                                    required={true}
                                                    type={"text"}
                                                    value={values.lastname||""}
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
                                                <input
                                                    aria-describedby={"bureaustatus"}
                                                    className={"form-control"}
                                                    id={"bureau"}
                                                    name={"bureau"}
                                                    onChange={handleChange}
                                                    required={true}
                                                    type={"text"}
                                                    value={values.bureau||""}
                                                />
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-6">
                                            <FormGroup associatedFieldId={"office"} displayName={"Office"} status={officeStatus} >
                                                <input
                                                    aria-describedby={"officestatus"}
                                                    className={"form-control"}
                                                    id={"office"}
                                                    name={"office"}
                                                    onChange={handleChange}
                                                    required={true}
                                                    type={"text"}
                                                    value={values.office||""}
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
                                value={values.approvalauthoritysignature||""}
                            />
                        </FormGroup>
                        <FormGroup associatedFieldId={"authorityemail"} displayName={"Authority E-mail"} status={authorityemailStatus} >
                            <input
                                aria-describedby={"authorityemailstatus"}
                                className={"form-control"}
                                id={"authorityemail"}
                                name={"authorityemail"}
                                onChange={handleChange}
                                type="email"
                                required={true}
                                value={values.authorityemail||""}
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
                        <FormGroup associatedFieldId={"attachment"} displayName={"Attachment"} status={FormWrapperStatusEnum.initial} >
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
                    </React.Fragment>;
    }
    
}