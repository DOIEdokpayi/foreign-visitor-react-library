import { IValidateTelephoneResults, ValidateTelephone } from "validate-telephone";
import { IValidationResult } from "../types";

function ValidateTelephoneField(telephoneNumber: string): IValidationResult {
  const telephoneValidationResults: IValidateTelephoneResults = ValidateTelephone(telephoneNumber, "US");
  return {
    IsError: telephoneValidationResults.IsValid,
    Message: telephoneValidationResults.Message
  };
}

export default ValidateTelephoneField;