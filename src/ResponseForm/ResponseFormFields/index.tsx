/**
 * @class ResponseFormFields
 */

import * as React from 'react';
import { FormGroup } from '../../Fields/FormGroup';
import { RadioButton } from '../../Fields/RadioButton';
import { FormWrapperStatusEnum, RequestStatusEnum, ThreatLevelEnum } from '../../types';
import { dateValue } from '../dateValue';
import { getFieldStatus } from '../getFieldStatus';
import { threatLevelOptionChecked } from '../threatLevelOptionChecked';
import { ccHandler } from './ccHandler';
import { ccRemoveHandler } from './ccRemoveHandler';
import { ccUpdateHandler } from './ccUpdateHandler';
import { IResponseFormFieldsProps } from './IResponseFormFieldsProps';

export default class ResponseFormFields extends React.Component<IResponseFormFieldsProps>{
    private lastCCInputRef: React.RefObject<HTMLInputElement>;
    constructor(props: IResponseFormFieldsProps) {
        super(props);
        this.lastCCInputRef = React.createRef<HTMLInputElement>();
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
        const emailStatus = getFieldStatus(status, "email");
        const ccStatus = getFieldStatus(status, "cc");
        const threatLevelValueConvert = (value: ThreatLevelEnum) => ThreatLevelEnum[value].toString();
        return <React.Fragment>
            <FormGroup
                associatedFieldId={"requeststatus"}
                description={requestStatus.error || "Status of Foreign Visitor request set by Counter Intelligence"}
                displayName={"Request Status"}
                status={requestStatus.status}>
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
                description={subjectStatus.error || "Subject of email"}
                displayName={"Subject"}
                status={subjectStatus.status} >
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
                description={feedbackStatus.error || "Feedback from Counter Intelligence regarding visit"}
                displayName={"Feedback/Next Steps"}
                status={feedbackStatus.status} >
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
                description={threatlevelStatus.error || "Level of threat assigned by Counter Intelligence"}
                displayName={"Threat Level"}
                status={threatlevelStatus.status} >
                <div className="btn-group" data-toggle="buttons">
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.Urgent, values.threatlevel)}
                        fieldName={"threatlevel"}
                        id={"threatlevel1"}
                        label={"Urgent"}
                        setFieldValue={setFieldValue}
                        value={ThreatLevelEnum.Urgent}
                        valueConverter={threatLevelValueConvert}
                    />
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.High, values.threatlevel)}
                        fieldName={"threatlevel"}
                        id={"threatlevel2"}
                        label={"High"}
                        setFieldValue={setFieldValue}
                        value={ThreatLevelEnum.High}
                        valueConverter={threatLevelValueConvert}
                    />
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.Medium, values.threatlevel)}
                        fieldName={"threatlevel"}
                        id={"threatlevel3"}
                        label={"Medium"}
                        setFieldValue={setFieldValue}
                        value={ThreatLevelEnum.Medium}
                        valueConverter={threatLevelValueConvert}
                    />
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.Low, values.threatlevel)}
                        fieldName={"threatlevel"}
                        id={"threatlevel4"}
                        label={"Low"}
                        setFieldValue={setFieldValue}
                        value={ThreatLevelEnum.Low}
                        valueConverter={threatLevelValueConvert}
                    />
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.None, values.threatlevel)}
                        fieldName={"threatlevel"}
                        id={"threatlevel5"}
                        label={"None"}
                        setFieldValue={setFieldValue}
                        value={ThreatLevelEnum.None}
                        valueConverter={threatLevelValueConvert}
                    />
                    <RadioButton
                        checked={threatLevelOptionChecked(ThreatLevelEnum.NotApplicable, values.threatlevel)}
                        fieldName={"threatlevel"}
                        id={"threatlevel6"}
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
                                    description={firstnameStatus.error || "Requestor's first name"}
                                    displayName={"First Name"}
                                    status={firstnameStatus.status} >
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
                                    description={lastnameStatus.error || "Requestor's last name"}
                                    displayName={"Last Name"}
                                    status={lastnameStatus.status} >
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
                                    description={bureauStatus.error || "Requestor's Bureau"}
                                    displayName={"Bureau"} status={bureauStatus.status} >
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
                                    description={officeStatus.error || "Requestor's office information"}
                                    displayName={"Office"}
                                    status={officeStatus.status} >
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
                associatedFieldId={"email"}
                description={emailStatus.error || "Requestor Email address"}
                displayName="Email Address"
                status={emailStatus.status}>
                <input
                    aria-describedby={"emailstatus"}
                    className={"form-control"}
                    id={"email"}
                    name={"email"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    required={true}
                    value={values.email || ""}
                />
            </FormGroup>
            {
                values.cc ? values.cc.map((emailAddress: string, index: number) =>
                    <div
                        className="container-fluid"
                        key={"ccformgroup" + index.toString()}>
                        <div className="row">
                            <div className="col-sm-10">
                                <FormGroup
                                    associatedFieldId={"cc" + index.toString()}
                                    description={ccStatus.error || "Carbon Copy Email Address"}
                                    displayName={"CC"}
                                    status={ccStatus.status} >
                                    <input
                                        aria-describedby={"cc" + index.toString() + "status"}
                                        ref={index === (values.cc || []).length - 1 ? this.lastCCInputRef : undefined}
                                        className={"form-control"}
                                        id={"cc" + index.toString()}
                                        name={"cc" + index.toString()}
                                        onBlur={handleBlur}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                            ccUpdateHandler({
                                                emailAddress: event.target.value,
                                                index: index,
                                                setFieldValue: setFieldValue,
                                                values: values
                                            })
                                        }
                                        type="email"
                                        required={true}
                                        value={emailAddress}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-sm-2">
                                <a
                                    className={"btn btn-primary"}
                                    href="#"
                                    onClick={() => ccRemoveHandler({
                                        index: index,
                                        setFieldValue: setFieldValue,
                                        values: values
                                    })}><i className="fa fa-trash" aria-hidden="true"></i> Remove CC </a>
                            </div>
                        </div>
                    </div>
                ) : undefined
            }
            <FormGroup
                associatedFieldId="ccaddbtn"
                description="Add an email address who will be Carbon Copied"
                displayName="New Carbon Copy"
                status={ccStatus.status}>
                <a
                    className={"btn btn-primary"}
                    href="#"
                    id={"ccadbtn"}
                    onClick={() => ccHandler({ setFieldValue: setFieldValue, values: values })}>
                    <i className="fa fa-plus-circle" aria-hidden="true"></i> New CC
                </a>
            </FormGroup>
            <FormGroup
                associatedFieldId={"approvalauthoritysignature"}
                description={approvalauthoritysignatureStatus.error || "First name and last name of approving authority"}
                displayName={"Approval Authority Signature"}
                status={approvalauthoritysignatureStatus.status} >
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
                description={authorityemailStatus.error || "Authority's email address"}
                displayName={"Authority E-mail"}
                status={authorityemailStatus.status} >
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
                description={responsedateStatus.error || "Date of response"}
                displayName={"Response Date"}
                status={responsedateStatus.status} >
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
                    ref={this.props.fileInputRef}
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
    public componentDidMount(): void {
        if (this.props.values.cc && this.props.values.cc.length > 0 && this.lastCCInputRef.current) {
            this.lastCCInputRef.current.focus();
        }
    }
}