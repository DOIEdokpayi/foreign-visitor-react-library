function MakeId(length: number): string{
    if(length < 1){
        throw new Error("length must be at least 1!");
    }
    let id: string = "";
    const possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i: number = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random()* possible.length));
    }
    return id;
}

export default MakeId;