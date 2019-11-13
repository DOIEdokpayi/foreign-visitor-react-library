import { IStringIndexable } from "../types";

export function parseJSONValues(json:string, convertFieldValue?: (key: string, value: any) => any): IStringIndexable{
    const data:IStringIndexable = JSON.parse(json);
    if(convertFieldValue){
        for (const prop in data) {
            if (data.hasOwnProperty(prop)) {
                data[prop] = convertFieldValue(prop, data[prop]);                
            }
        }
    }
    
    return data
}