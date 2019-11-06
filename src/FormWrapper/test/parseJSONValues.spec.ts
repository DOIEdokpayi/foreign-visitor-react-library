import { parseJSONValues } from "../parseJSONValues"
import { IResponseFormValues } from "../../ResponseForm/IResponseFormValues";
import { ThreatLevelEnum } from "../../types";
import { ConvertFieldValue } from "../../ResponseForm/ResponseFormFields/ConvertFieldValue";

test("parseJSONValues basic parsing", () => {
    const expected = { "a": 2 };
    const actual = parseJSONValues(JSON.stringify(expected));
    expect(actual["a"]).toBe(expected["a"]);
});

test("parseJSONValues parse IResponseFormat ThreatLevel field", () => {
    const expected: IResponseFormValues = { threatlevel: ThreatLevelEnum.Urgent };
    const actual: IResponseFormValues = parseJSONValues("{\"threatlevel\":\"Urgent\"}", ConvertFieldValue) as IResponseFormValues;
    expect(actual.threatlevel).toBe(expected.threatlevel);
})