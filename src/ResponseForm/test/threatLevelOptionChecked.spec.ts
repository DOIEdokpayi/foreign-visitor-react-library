import { threatLevelOptionChecked } from "../threatLevelOptionChecked";
import { ThreatLevelEnum } from "../../types";

test("threatLevelOptionChecked should be true", () => {
    const expected = true;
    const actual = threatLevelOptionChecked(ThreatLevelEnum.High, ThreatLevelEnum.High);
    expect(actual).toBe(expected);
});
test("threatLevelOptionChecked should be false", () => {
    const expected = false;
    const actual = threatLevelOptionChecked(ThreatLevelEnum.High, ThreatLevelEnum.Low);
    expect(actual).toBe(expected);
});


test("threatLevelOptionChecked should be false if value is undefined", () => {
    const expected = false;
    const actual = threatLevelOptionChecked(ThreatLevelEnum.High);
    expect(actual).toBe(expected);
});