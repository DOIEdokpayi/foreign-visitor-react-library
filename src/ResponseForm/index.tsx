/**
 * @class ResponseForm
 */

import * as React from 'react';
import { IResponseFormProps } from './IResponseFormProps';
import { FormTemplate } from "bootstrap3formtemplates";
import { DOIFormComponent, EnumFieldType } from "doiforms";
import { RequestStatusEnum, ThreatLevelEnum } from '../types';

export default class ResponseForm extends React.Component<IResponseFormProps> {
    public render(): JSX.Element {
        return (
            <DOIFormComponent
                ErrorHandler={this.props.ErrorHandler}
                Fields={[
                    {
                        DisplayName: "Request Status",
                        Id: "RequestStatus",
                        InitialValue: this.props.RequestStatus,
                        Name: "RequestStatus",
                        Order: 0,
                        Required: true,
                        Type: EnumFieldType.select,
                        Options: [
                            {Value:RequestStatusEnum.Approved, Text: "Approved"},
                            {Value:RequestStatusEnum.NotApproved, Text: "Not Approved"},                            
                            {Value:RequestStatusEnum.Incomplete, Text: "Incomplete"},                            
                            {Value:RequestStatusEnum.Invalid, Text: "Invalid"},                            
                            {Value:RequestStatusEnum.NotApplicable, Text: "Not Applicable"}
                        ]
                    },
                    {
                        DisplayName: "Subject",
                        Id: "Subject",
                        InitialValue: this.props.Subject,
                        Name: "Subject",
                        Order: 1,
                        Required: true,
                        Type: EnumFieldType.text
                    },
                    {
                        DisplayName: "Feedback",
                        Id: "Feedback",
                        InitialValue: this.props.Feedback,
                        Name: "Feedback",
                        Order: 2,
                        Required: true,
                        Type: EnumFieldType.textarea
                    },
                    {
                        DisplayName: "Threat Level",
                        Id: "ThreatLevel",
                        InitialValue: this.props.ThreatLevel,
                        Name: "ThreatLevel",
                        Order: 3,
                        Required: true,
                        Type: EnumFieldType.radio,
                        Options: [
                            {Value:ThreatLevelEnum.Urgent, Text: "Urgent"},
                            {Value:ThreatLevelEnum.High, Text: "High"},                            
                            {Value:ThreatLevelEnum.Medium, Text: "Medium"},                            
                            {Value:ThreatLevelEnum.Low, Text: "Low"},
                            {Value:ThreatLevelEnum.None, Text: "None"},                            
                            {Value:ThreatLevelEnum.NotApplicable, Text: "Not Applicable"}
                        ]
                    },
                    {
                        DisplayName: "Requestor First Name",
                        Id: "FirstName",
                        InitialValue: this.props.FirstName,
                        Name: "FirstName",
                        Order: 4,
                        Required: true,
                        Type: EnumFieldType.text
                    },
                    {
                        DisplayName: "Requestor Last Name",
                        Id: "LastName",
                        InitialValue: this.props.LastName,
                        Name: "LastName",
                        Order: 5,
                        Required: true,
                        Type: EnumFieldType.text
                    },
                    {
                        DisplayName: "Requestor Bureau",
                        Id: "Bureau",
                        InitialValue: this.props.Bureau,
                        Name: "Bureau",
                        Order: 5,
                        Required: true,
                        Type: EnumFieldType.text
                    },
                    {
                        DisplayName: "Requestor Office",
                        Id: "Office",
                        InitialValue: this.props.Office,
                        Name: "Office",
                        Order: 6,
                        Required: true,
                        Type: EnumFieldType.text
                    },
                    {
                        DisplayName: "Email",
                        Id: "Email",
                        InitialValue: this.props.Email,
                        Name: "Email",
                        Order: 5,
                        Required: true,
                        Type: EnumFieldType.text
                    },
                ]}
                FormTemplate={FormTemplate}
                SubmitPage={this.props.SubmitPageFunc()}
                SubmitAction={this.props.SubmitAction}
            />
        );
    }
}