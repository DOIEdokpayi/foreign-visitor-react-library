export default function getTranslatorTitle(): string {
    return process.env.TRANSLATORS_LIST || "Translators";
}
