import { RequestStatusEnum, ThreatLevelEnum } from "../../types";

export function ConvertFieldValue(key: string, value: any): any {
    const stringConverter = (value: string) => value;
    const converter = {
        "approvalauthoritysignature": stringConverter,
        "authorityemail": stringConverter,
        "bureau": stringConverter,
        "cc": (value: string[]) => value,
        "email": stringConverter,
        "firstname": stringConverter,
        "feedback": stringConverter,
        "lastname": stringConverter,
        "office": stringConverter,
        "requeststatus": (value: string) => RequestStatusEnum[value],
        "threatlevel": (value: string) => ThreatLevelEnum[value],
        "responsedate": (value: string) => new Date(value),
        "subject": stringConverter
    };
    return converter[key](value);
}