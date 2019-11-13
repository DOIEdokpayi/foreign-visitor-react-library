import { IValidationResult } from "../types";

function ValidateZipCode(ZipCode: string | undefined): IValidationResult {
    const isValidZip: boolean = !!ZipCode && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(ZipCode as string);
    return {
        IsError: !isValidZip,
        Message: isValidZip ? undefined : "Enter zip codes in the format XXXXX or XXXXX-XXXX"
    };
}

export default ValidateZipCode;