import { SPUserProfileValue } from "../types";
export const defaultProfileValue = {
    __metadata: {},
    Key: "",
    Value: "",
    ValueType: ""
};
export function getProfileValue(profileValue?: SPUserProfileValue): string {
    return (profileValue || defaultProfileValue).Value;
}
