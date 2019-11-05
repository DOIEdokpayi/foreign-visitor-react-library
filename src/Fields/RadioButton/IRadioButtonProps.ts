import { ThreatLevelEnum } from "../../types";

export interface IRadioButtonProps {
    className?: string;
    checked?: boolean;
    isDefaultOption?: boolean;
    fieldName: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    id?: string;
    label: string;
    threatLevel: ThreatLevelEnum;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}
