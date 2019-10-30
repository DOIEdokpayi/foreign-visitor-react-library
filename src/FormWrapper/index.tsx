import * as React from 'react';
import { IFormWrapperProps } from './IFormWrapperProps';
import { IFormWrapperState } from './IFormWrapperState';
import { IFieldStatus } from './IFieldStatus';
import { IFormWrapperContext } from './IFormWrapperContext';
import { FormFieldStatusEnum } from '../types';
const emptyStatus = new Map<string, IFieldStatus>();
export class FormWrapper<formValues extends object> extends React.Component<IFormWrapperProps<formValues>, IFormWrapperState>{
    private formRef: React.RefObject<HTMLFormElement>;
    private getContext(): IFormWrapperContext {
        return {
            formData: this.formRef.current ? new FormData(this.formRef.current) : new FormData(),
            handleChange: this.handleFormChange.bind(this),
            isSubmitting: this.state.isSubmitting !== undefined ? this.state.isSubmitting : false,
            isValidating: this.state.isValidating !== undefined ? this.state.isValidating : false,
            resetForm: this.resetForm.bind(this),
            setFieldValue: this.setFieldValue.bind(this),
            setSubmitting: this.setSubmitting.bind(this),
            status: this.state.status || emptyStatus
        };
    }
    constructor(props: IFormWrapperProps<formValues>) {
        super(props);
        this.state = {
            isResetting: false,
            isSubmitting: false,
            isValidating: false,
            status: new Map<string, IFieldStatus>()
        };
        this.formRef = React.createRef<HTMLFormElement>();
    }
    public handleFormChange(event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void{
       this.setFieldValue(event.target.id, event.target.value, true);
    }
    public setFormDataFromInitialiValues(): FormData {
        const { initialValues } = this.props;
        const formData = new FormData();
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                const unKnownData = initialValues[key] as unknown;
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
            if (fieldStatus.status === FormFieldStatusEnum.Error) {
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
        if (null !== this.formRef.current) {
            for (const key in initialValues) {
                if (initialValues.hasOwnProperty(key)) {
                    const element = initialValues[key] as unknown;
                    this.setFieldValue(key, element);
                }
            }
        }
        this.onResetHandler();
    }

    public setFieldValue(field: string, value: any, shouldValidate?: boolean): void {
        const {
            convertFieldValue,
            onValidate: handleValidation
        } = this.props;
        const getValue = convertFieldValue ? convertFieldValue : (key: string, value: any) => value.toString();
        if (null !== this.formRef.current) {
            const formElement: HTMLFormElement = this.formRef.current;
            const fieldElement: HTMLInputElement | HTMLTextAreaElement | null = formElement.querySelector("#" + field); // all input elements must set the id attribute
            if (fieldElement) {
                fieldElement.value = getValue(field, value);
                if (shouldValidate && handleValidation) {
                    this.setState({ status: handleValidation(this.getContext()) });
                }
            }
        }
    }
    public setSubmitting(isSubmitting: boolean): void {
        this.setState({ isSubmitting: isSubmitting });
    }

    public render(): React.ReactElement<IFormWrapperProps<formValues>> {
        const {
            formClassName,
            renderFormFields } = this.props;
        return <form
            className={formClassName || "form-horizontal"}
            ref={this.formRef}
            onSubmit={this.onSubmitHandler.bind(this)}
            onReset={this.onResetHandler.bind(this)}
        >
            {renderFormFields(this.getContext())}
        </form>;
    }
}