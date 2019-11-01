import * as React from 'react';
import { IFormWrapperProps } from './IFormWrapperProps';
import { IFormWrapperState } from './IFormWrapperState';
import { IFieldStatus } from './IFieldStatus';
import { IFormWrapperContext } from './IFormWrapperContext';
import { FormWrapperStatusEnum } from './FormWrapperStatusEnum';
const emptyStatus = new Map<string, IFieldStatus>();
export class FormWrapper extends React.Component<IFormWrapperProps, IFormWrapperState>{
    private getContext(): IFormWrapperContext {
        return {
            handleChange: this.handleFormChange.bind(this),
            isSubmitting: this.state.isSubmitting !== undefined ? this.state.isSubmitting : false,
            isValidating: this.state.isValidating !== undefined ? this.state.isValidating : false,
            resetForm: this.resetForm.bind(this),
            setFieldValue: this.setFieldValue.bind(this),
            setSubmitting: this.setSubmitting.bind(this),
            status: this.state.status || emptyStatus,
            values: JSON.parse(this.state.formValuesJSON as string)
        };
    }
    constructor(props: IFormWrapperProps) {
        super(props);
        this.state = {
            isResetting: false,
            isSubmitting: false,
            isValidating: false,
            status: new Map<string, IFieldStatus>()
        };
    }
    public handleFormChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void {
        this.setFieldValue(event.target.id, event.target.value, true);
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
        this.setState({ formValuesJSON: JSON.stringify(values) });
        if (shouldValidate && handleValidation) {
            this.setState({ status: handleValidation(this.getContext()) });
        }
    }


    public setSubmitting(isSubmitting: boolean): void {
        this.setState({ isSubmitting: isSubmitting });
    }

    public render(): React.ReactElement<IFormWrapperProps> {
        const {
            formClassName,
            renderFormFields } = this.props;
        return <form
            className={formClassName || "form-horizontal"}
            onSubmit={this.onSubmitHandler.bind(this)}
            onReset={this.onResetHandler.bind(this)}
        >
            {renderFormFields(this.getContext())}
        </form>;
    }
}