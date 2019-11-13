function StringIsDefinedNotEmpty(value: string | undefined): boolean {
    return value !== undefined && value !== "" && value !== null;
}
export default StringIsDefinedNotEmpty;