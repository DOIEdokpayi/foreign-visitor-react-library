/**
 * @class ResponseForm
 */

import * as React from 'react';
import { FormWrapper } from '../FormWrapper';
import { IFormWrapperContext } from '../FormWrapper/IFormWrapperContext';
import { IResponseFormProps } from './IResponseFormProps';
import { IResponseFormValues } from './IResponseFormValues';
import ResponseFormFields from './ResponseFormFields';
import { ResponseFormSubmit } from './ResponseFormSubmit';
import { ResponseFormValidate } from "./ResponseFormValidate";
import { ConvertFieldValue } from './ResponseFormFields/ConvertFieldValue';
export default class ResponseForm extends React.Component<IResponseFormProps> {
    private fileInputRef: React.RefObject<HTMLInputElement>;
    constructor(props: IResponseFormProps) {
        super(props);
        this.fileInputRef = React.createRef<HTMLInputElement>();
    }
    public render(): JSX.Element {
        const values: IResponseFormValues = { ...this.props }
        return (
            <FormWrapper
                convertFieldValue={ConvertFieldValue}
                initialValues={values}
                onSubmit={(ctx: IFormWrapperContext) =>
                    ResponseFormSubmit({ ctx: ctx, fileInput: this.fileInputRef.current as HTMLInputElement, submitPageFunc: this.props.SubmitPageFunc })
                }
                onValidate={ResponseFormValidate}

                renderFormFields={(ctx: IFormWrapperContext) => <ResponseFormFields 
                        handleChange={ctx.handleChange}
                        status={ctx.status}
                        values={ctx.values as IResponseFormValues} />

                }
            />
        );
    }
}

