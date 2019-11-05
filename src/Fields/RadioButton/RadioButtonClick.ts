import { ThreatLevelEnum } from "../../types";

export function radioButtonClick(value: ThreatLevelEnum, fieldName: string, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void): void {
    setFieldValue(fieldName, value, true);
}