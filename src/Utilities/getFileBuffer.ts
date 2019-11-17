export default function getFileBuffer(file: File): Promise<ArrayBuffer> {
    const reader: FileReader = new FileReader();
    return new Promise<ArrayBuffer>(
        (
            resolve: (data: ArrayBuffer) => void,
            reject: (reason: any) => void) => {
            reader.onload = () => resolve(reader.result as ArrayBuffer);
            reader.onerror = () => reject(reader.error);
            reader.readAsArrayBuffer(file);
        });
}