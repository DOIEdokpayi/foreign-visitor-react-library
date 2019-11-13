export default function getVisitorTitle(): string {
    return process.env.VISITOR_LIST || "Visitors";
}
