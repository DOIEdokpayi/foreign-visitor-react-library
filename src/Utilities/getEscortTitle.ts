export default function getEscortTitle(): string {
    return process.env.ESCORTS_LIST || "Foreign Visitors Escorts";
}
