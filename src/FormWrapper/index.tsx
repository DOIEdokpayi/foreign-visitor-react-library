import * as React from 'react';
import { IFormWrapperProps } from './IFormWrapperProps';
import { IFormWrapperState } from './IFormWrapperState';
import { IFieldStatus } from './IFieldStatus';
import { IFormWrapperContext } from './IFormWrapperContext';
import { FormWrapperStatusEnum } from './FormWrapperStatusEnum';
import { parseJSONValues } from './parseJSONValues';
import { handleChange } from './handleChange';
import { handleBlur } from './handleBlur';
const emptyStatus = new Map<string, IFieldStatus>();
export class FormWrapper extends React.Component<IFormWrapperProps, IFormWrapperState>{
    private setFieldValueFunc: (field: string, value: any, shouldValidate?: boolean) => void;
    private getContext(): IFormWrapperContext {
        return {
            handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => handleChange(event, this.setFieldValueFunc),
            handleBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
                handleBlur(
                    event,
                    (
                        fieldName: string,
                        fieldStatus: IFieldStatus) => {
                        const newstatus = this.state.status || new Map<string, IFieldStatus>();
                        if (fieldStatus.status !== FormWrapperStatusEnum.dirty) {
                            newstatus.set(fieldName, { status: FormWrapperStatusEnum.dirty });
                            this.setState({ status: newstatus });
                        }
                    },
                    this.state.status ? this.state.status.get(event.target.name) : undefined);
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
            status: new Map<string, IFieldStatus>(),
            formValuesJSON: JSON.stringify(this.props.initialValues)
        };
        this.setFieldValueFunc = this.setFieldValue.bind(this);
    }
    public handleTextFieldChange(target: HTMLInputElement): void {
        this.setFieldValue(target.name, target.value, true);
    }
    public handleCheckBoxChange(target: HTMLInputElement): void {
        this.setFieldValue(target.name, target.checked, true);
    }
    public handleFormChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void {
        switch (event.target.type) {
            case "text":
                this.handleTextFieldChange(event.target as HTMLInputElement);
                break;
            case "checkbox":
                this.handleCheckBoxChange(event.target as HTMLInputElement);
                break;
            default:
                this.setFieldValue(event.target.name, event.target.value, true);
                break;
        }
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