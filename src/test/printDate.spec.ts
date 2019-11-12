import { printDate } from "../printDate";

test("printDate produces string", () => {
    const expected = "string";
    const actual = printDate(new Date())
    expect(typeof actual).toBe(expected);
});

test("printDate 1/1/2019", () => {
    const expected = "1/1/2019";
    const actual = printDate(new Date(2019, 0, 1))
    expect(actual).toBe(expected);
});

test("printDate 12/1/2019", () => {
    const expected = "12/1/2019";
    const actual = printDate(new Date(2019, 11, 1))
    expect(actual).toBe(expected);
});

test("printDate 6/1/2019", () => {
    const expected = "6/1/2019";
    const actual = printDate(new Date(2019, 5, 1))
    expect(actual).toBe(expected);
});


test("printDate 3/23/2025", () => {
    const expected = "3/23/2025";
    const actual = printDate(new Date(2025, 2, 23))
    expect(actual).toBe(expected);
});