export default function getCountryInfoTitle(): string {
    return process.env.COUNTRY_INFO_LIST || "Foreign Visitor Country Information";
}
