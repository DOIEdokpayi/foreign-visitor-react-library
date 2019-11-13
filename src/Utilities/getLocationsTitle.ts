function getLocationsTitle(): string {
    return process.env.LOCATIONS_LIST || "Locations";
}
export default getLocationsTitle;
