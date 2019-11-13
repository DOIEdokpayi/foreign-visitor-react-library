function ArrayBufferToBase64(buffer: ArrayBuffer) {
    let binary: string = "";
    let bytes: Uint8Array = new Uint8Array(buffer);
    let len: number = bytes.byteLength;
    for (let i: number = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}

export default ArrayBufferToBase64;