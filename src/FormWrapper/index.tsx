import * as React from 'react';
import { FormWrapperStatusEnum } from './FormWrapperStatusEnum';
import { handleBlur } from './handleBlur';
import { handleChange } from './handleChange';
import { IFieldStatus } from './IFieldStatus';
import { IFormWrapperContext } from './IFormWrapperContext';
import { IFormWrapperProps } from './IFormWrapperProps';
import { IFormWrapperState } from './IFormWrapperState';
import { newFormWrapperFieldStatus } from './newFormWrapperFieldStatus';
import { parseJSONValues } from './parseJSONValues';
import { IFormValidateProps } from './IFormValidateProps';
import { IFormWrapperFieldStatus } from './IFormWrapperFieldStatus';
const emptyStatus = new Map<string, IFieldStatus>();
export class FormWrapper extends React.Component<IFormWrapperProps, IFormWrapperState>{
    private setFieldValueFunc: (field: string, value: any, shouldValidate?: boolean) => void;
    private setStatusFunc: (fieldName: string, fieldStatus: IFieldStatus) => void;
    private getContext(): IFormWrapperContext {
        return {
            handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => handleChange(event, this.setFieldValueFunc),
            handleBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
                const { onValidate } = this.props;
                handleBlur(
                    event,
                    this.setStatusFunc,
                    this.state.status ? this.state.status.get(event.target.name) : undefined);
                if (onValidate) {
                    this.handleValidation(onValidate);
                }
            },
            isSubmitting: this.state.isSubmitting !== undefined ? this.state.isSubmitting : false,
            isValidating: this.state.isValidating !== undefined ? this.state.isValidating : false,
            resetForm: this.resetForm.bind(this),
            setFieldValue: this.setFieldValueFunc,
            setSubmitting: this.setSubmitting.bind(this),
            status: this.state.status || emptyStatus,
            values: parseJSONValues(this.state.formValuesJSON || "{}", this.props.convertFieldValue)
        };
    }
    constructor(props: IFormWrapperProps) {
        super(props);
        this.state = {
            isResetting: false,
            isSubmitting: false,
            isValidating: false,
            status: newFormWrapperFieldStatus(),
            formValuesJSON: JSON.stringify(this.props.initialValues)
        };
        this.setFieldValueFunc = this.setFieldValue.bind(this);
        this.setStatusFunc = this.setStatus.bind(this);
    }
    private handleValidation(onValidate: (props: IFormValidateProps) => IFormWrapperFieldStatus): void {
        this.setState({ isValidating: true });
        this.setState({
            status: onValidate({
                status: this.state.status ? this.state.status : newFormWrapperFieldStatus(),
                values: parseJSONValues(this.state.formValuesJSON || "{}", this.props.convertFieldValue)
            })
        });
        this.setState({ isValidating: false });
    }

    public setStatus(fieldName: string, fieldStatus: IFieldStatus): void {
        const newstatus = this.state.status || newFormWrapperFieldStatus();
        newstatus.set(fieldName, fieldStatus);
        this.setState({ status: newstatus });
    }
    public setFormDataFromInitialiValues(): FormData {
        const { initialValues } = this.props;
        const formData = new FormData();
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                const unKnownData = initialValues[key];
                formData.append(key, (unKnownData as object).toString());
            }
        }
        return formData;
    }
    public onSubmitHandler(): void {
        const {
            onSubmit: handleSubmit,
            onValidate: handleValidation
        } = this.props;
        const status = handleValidation ? handleValidation(this.getContext()) : emptyStatus
        let isValid: boolean = true;
        status.forEach((fieldStatus: IFieldStatus) => {
            if (fieldStatus.status === FormWrapperStatusEnum.error) {
                isValid = false;
            }
        })
        if (isValid) {
            handleSubmit(this.getContext());
        }
    }
    public onResetHandler(): void {
        const {
            onReset: handleReset,
            initialValues
        } = this.props;
        if (handleReset) {
            this.setState({ isResetting: true });
            handleReset(initialValues);
            this.setState({ isResetting: false });
        }
    }
    public onChange(): void {

    }
    public resetForm(): void {
        const {
            initialValues
        } = this.props;
        this.setState({ formValuesJSON: JSON.stringify(initialValues) });
        this.onResetHandler();
    }

    public setFieldValue(field: string, value: any, shouldValidate?: boolean): void {
        const {
            convertFieldValue,
            onValidate: handleValidation
        } = this.props;
        const getValue = convertFieldValue ? convertFieldValue : (key: string, value: any) => { console.log(key); return value.toString(); };
        const values = JSON.parse(this.state.formValuesJSON || "{}");
        values[field] = getValue(field, value);
        const newJSONValues = JSON.stringify(values)
        this.setState({ formValuesJSON:  newJSONValues});
        if (shouldValidate && handleValidation) {
            this.setState({
                status: handleValidation({
                    status: this.state.status ? this.state.status : newFormWrapperFieldStatus(),
                    values: parseJSONValues(newJSONValues)
                })
            });
        }
    }


    public setSubmitting(isSubmitting: boolean): void {
        this.setState({ isSubmitting: isSubmitting });
    }

    public render(): React.ReactElement<IFormWrapperProps> {
        const {
            formClassName,
            renderFormFields
        } = this.props;
        return <form
            className={formClassName || "form-horizontal"}
            onSubmit={this.onSubmitHandler.bind(this)}
            onReset={this.onResetHandler.bind(this)}
        >
            {renderFormFields(this.getContext())}
        </form >;
    }
}



