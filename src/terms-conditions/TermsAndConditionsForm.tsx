import * as React from 'react';
import { FormTemplate } from "bootstrap3formtemplates";
import { DOIFormComponent, EnumFieldType, FieldValue, SubmitActionFunc } from "doiforms";

export interface ITermsAndConditionsFormProps {
    ErrorHandler: (ErrorMessage?: string, Stack?: string) => JSX.Element;
    SubmitPageFunc: () => JSX.Element;
    SubmitAction: SubmitActionFunc;
    TermsAccepted: boolean;
}
const rejectionMessage: string = "You must accept the terms and conditions!";
export class TermsAndConditionsForm extends React.Component<ITermsAndConditionsFormProps> {
    render() {

        return (
            <DOIFormComponent
                ErrorHandler={this.props.ErrorHandler}
                Fields={[
                    {
                        DisplayName: "I accept the terms and conditions:",
                        Id: "TermsAccept",
                        InitialValue: this.props.TermsAccepted,
                        Name: "TermsAccept",
                        Order: 0,
                        Required: true,
                        Type: EnumFieldType.checkbox,
                        Validation: (checkBox: FieldValue) => {
                            return {
                                IsError: !checkBox,
                                Message: rejectionMessage
                            };
                        }
                    },
                    {
                        DisplayName: "Continue",
                        Id: "continue",
                        Name: "continue",
                        Order: 1,
                        Required: true,
                        Type: EnumFieldType.submit
                    }
                ]}
                FormTemplate={FormTemplate}
                SubmitPage={this.props.SubmitPageFunc()}
                SubmitAction={this.props.SubmitAction}
            />
        );
    }
}
