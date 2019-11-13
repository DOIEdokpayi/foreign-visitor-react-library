function genericMapToArray<T>(map: Map<string, T>): T[] {
    const data: T[] = [];
    let iter: IterableIterator<T> = map.values();
    let result: IteratorResult<T> = iter.next();
    while (!result.done) {
        data.push(result.value);
        result = iter.next();
    }
    return data;
}

export default genericMapToArray;