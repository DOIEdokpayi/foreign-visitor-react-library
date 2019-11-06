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
import { RadioButton } from '../../Fields/RadioButton';

export default class ResponseFormFields extends React.Component<IResponseFormFieldsProps>{
    private fileInputRef: React.RefObject<HTMLInputElement>;
    constructor(props: IResponseFormFieldsProps) {
        super(props);
        this.fileInputRef = React.createRef<HTMLInputElement>();
    }
    public render(): JSX.Element {
        const { handleBlur, handleChange, setFieldValue, status, values } = this.props;

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
        const threatLevelValueConvert = (value: ThreatLevelEnum) => ThreatLevelEnum[value].toString();
        return <React.Fragment>
            <FormGroup
                associatedFieldId={"requeststatus"}
                description={"Status of Foreign Visitor request set by Counter Intelligence"}
                displayName={"Request Status"}
                status={requestStatus}>
                <select
                    aria-describedby={"requeststatusstatus"}
                    required={true}
                    id={"requeststatus"}
                    name={"requeststatus"}
                    className="form-control"
                    defaultValue={"-1"}
                    value={values.requestStatus ? RequestStatusEnum[values.requestStatus] : undefined}
                    onBlur={handleBlur}
                    onChange={handleChange}>
                    <option value={"-1"}>Select a Request Status</option>
                    <option value={RequestStatusEnum.Approved}>Approved</option>
                    <option value={RequestStatusEnum.Incomplete}>Incomplete</option>
                    <option value={RequestStatusEnum.Invalid}>Invalid</option>
                    <option value={RequestStatusEnum.NotApplicable}>Not Applicable</option>
                    <option value={RequestStatusEnum.NotApproved}>Not Approved</option>
                </select>
            </FormGroup>
            <FormGroup
                associatedFieldId={"subject"}
                description={"Subject of email"}
                displayName={"Subject"}
                status={subjectStatus} >
                <input
                    aria-describedby={"subjectstatus"}
                    className={"form-control"}
                    id={"subject"}
                    name={"subject"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    required={true}
                    value={values.subject || ""}
                />
            </FormGroup>
            <FormGroup
                associatedFieldId={"feedback"}
                description={"Feedback from Counter Intelligence regarding visit"}
                displayName={"Feedback/Next Steps"}
                status={feedbackStatus} >
                <textarea
                    aria-describedby={"feedbackstatus"}
                    className={"form-control"}
                    id={"feedback"}
                    name={"feedback"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required={true}
                    value={values.feedback || ""}
                />
            </FormGroup>
            <FormGroup
                associatedFieldId={"threatlevel"}
                description={"Level of threat assigned by Counter Intelligence"}
                displayName={"Threat Level"}
                status={threatlevelStatus} >
                <div className="btn-group" data-toggle="buttons">
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.Urgent, values.threatlevel)}
                        fieldName={"threatlevel"}
                        handleChange={handleChange}
                        label={"Urgent"}
                        setFieldValue={setFieldValue}
                        value={ThreatLevelEnum.Urgent}
                        valueConverter={threatLevelValueConvert}
                    />
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.High, values.threatlevel)}
                        fieldName={"threatlevel"}
                        handleChange={handleChange}
                        label={"High"}
                        setFieldValue={setFieldValue}
                        value={ThreatLevelEnum.High}
                        valueConverter={threatLevelValueConvert}
                    />
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.Medium, values.threatlevel)}
                        fieldName={"threatlevel"}
                        handleChange={handleChange}
                        label={"Medium"}
                        setFieldValue={setFieldValue}
                        value={ThreatLevelEnum.Medium}
                        valueConverter={threatLevelValueConvert}
                    />
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.Low, values.threatlevel)}
                        fieldName={"threatlevel"}
                        handleChange={handleChange}
                        label={"Low"}                        
                        setFieldValue={setFieldValue}
                        value={ThreatLevelEnum.Low}
                        valueConverter={threatLevelValueConvert}
                    />
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.None, values.threatlevel) || (undefined === values.threatlevel)}
                        fieldName={"threatlevel"}
                        handleChange={handleChange}
                        label={"None"}
                        setFieldValue={setFieldValue}
                        value={ThreatLevelEnum.None}
                        valueConverter={threatLevelValueConvert}
                    />
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.NotApplicable, values.threatlevel)}
                        fieldName={"threatlevel"}
                        handleChange={handleChange}
                        label={"Not Applicable"}
                        setFieldValue={setFieldValue}
                        value={ThreatLevelEnum.NotApplicable}                        
                        valueConverter={threatLevelValueConvert}
                    />
                </div>
            </FormGroup>

            <div className="form-group">
                <label className="control-label col-sm-2">Requestor</label>
                <div className="col-sm-10">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <FormGroup
                                    associatedFieldId={"firstname"}
                                    description={"Requestor's first name"}
                                    displayName={"First Name"}
                                    status={firstnameStatus} >
                                    <input
                                        aria-describedby={"firstnamestatus"}
                                        className={"form-control"}
                                        id={"firstname"}
                                        name={"firstname"}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required={true}
                                        type={"text"}
                                        value={values.firstname || ""}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-sm-6">
                                <FormGroup
                                    associatedFieldId={"lastname"}
                                    description={"Requestor's last name"}
                                    displayName={"Last Name"}
                                    status={lastnameStatus} >
                                    <input
                                        aria-describedby={"lastnamestatus"}
                                        className={"form-control"}
                                        id={"lastname"}
                                        name={"lastname"}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required={true}
                                        type={"text"}
                                        value={values.lastname || ""}
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
                                <FormGroup
                                    associatedFieldId={"bureau"}
                                    description={"Requestor's Bureau"}
                                    displayName={"Bureau"} status={bureauStatus} >
                                    <input
                                        aria-describedby={"bureaustatus"}
                                        className={"form-control"}
                                        id={"bureau"}
                                        name={"bureau"}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required={true}
                                        type={"text"}
                                        value={values.bureau || ""}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-sm-6">
                                <FormGroup
                                    associatedFieldId={"office"}
                                    description={"Requestor's office information"}
                                    displayName={"Office"}
                                    status={officeStatus} >
                                    <input
                                        aria-describedby={"officestatus"}
                                        className={"form-control"}
                                        id={"office"}
                                        name={"office"}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required={true}
                                        type={"text"}
                                        value={values.office || ""}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FormGroup
                associatedFieldId={"approvalauthoritysignature"}
                description={"First name and last name of approving authority"}
                displayName={"Approval Authority Signature"}
                status={approvalauthoritysignatureStatus} >
                <input
                    aria-describedby={"approvalauthoritysignaturestatus"}
                    className={"form-control"}
                    id={"approvalauthoritysignature"}
                    name={"approvalauthoritysignature"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    required={true}
                    value={values.approvalauthoritysignature || ""}
                />
            </FormGroup>
            <FormGroup
                associatedFieldId={"authorityemail"}
                description={"Authority's email address"}
                displayName={"Authority E-mail"}
                status={authorityemailStatus} >
                <input
                    aria-describedby={"authorityemailstatus"}
                    className={"form-control"}
                    id={"authorityemail"}
                    name={"authorityemail"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    required={true}
                    value={values.authorityemail || ""}
                />
            </FormGroup>
            <FormGroup
                associatedFieldId={"responsedate"}
                description={"Date of response"}
                displayName={"Response Date"}
                status={responsedateStatus} >
                <input
                    aria-describedby={"responsedatestatus"}
                    className={"form-control"}
                    id={"responsedate"}
                    name={"responsedate"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="date"
                    required={true}
                    value={dateValue(values.responsedate || new Date)}
                />
            </FormGroup>
            <FormGroup
                associatedFieldId={"attachment"}
                description={"supporting documents"}
                displayName={"Attachment"}
                status={FormWrapperStatusEnum.initial} >
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