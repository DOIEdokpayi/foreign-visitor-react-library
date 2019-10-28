import * as React from 'react';
import { Formik, Field, FormikErrors, FormikHelpers, FormikProps } from "formik";
import { ITermsAndConditionsFormProps } from './ITermsAndConditionsFormProps';
import { CheckBoxField } from '../Fields/Checkbox';
import { ITermsAndConditionsFormValues } from '../types';



export class TermsAndConditionsForm extends React.Component<ITermsAndConditionsFormProps> {

    render() {
        return (
            <Formik
                initialValues={{ TermsAccepted: false }}
                onSubmit={(values: ITermsAndConditionsFormValues, formikHelpers: FormikHelpers<ITermsAndConditionsFormValues>) => {
                    this.props.SubmitActionFunc(values);
                    formikHelpers.setSubmitting(false);
                }}
                validate={(values: ITermsAndConditionsFormValues) => {
                    const errors: FormikErrors<ITermsAndConditionsFormValues> = {};
                    if (!values.TermsAccepted) {
                        errors.TermsAccepted = "You must accept the terms and conditions!";
                    }
                    return errors;
                }}

                render={(props: FormikProps<ITermsAndConditionsFormValues>) => <form className="form-horizontal">
                    <Field name="TermsAccept" component={CheckBoxField} />
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary">Continue</button>
                        </div>
                    </div>
                    {
                        props.errors.TermsAccepted ?
                            <div className="bg-danger">props.errors.TermsAccepted</div> : undefined
                    }
                </form>
                }
            />

        );
    }
}
