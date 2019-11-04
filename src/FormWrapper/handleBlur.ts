import { IFieldStatus } from "./IFieldStatus";
import { FormWrapperStatusEnum } from "./FormWrapperStatusEnum";

export function handleBlur(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, setStatus: (fieldName: string, status: IFieldStatus) => void, fieldStatus?: IFieldStatus, ): void {
    const fieldName = event.target.name;
    fieldStatus = fieldStatus || { status: FormWrapperStatusEnum.initial };
    if (fieldStatus && fieldStatus.status !== FormWrapperStatusEnum.dirty) {
        setStatus(fieldName, { status: FormWrapperStatusEnum.dirty })
    }
}