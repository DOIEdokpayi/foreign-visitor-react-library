export default function getListItemEntityType(listTitle: string): Promise<string>{
    return new Promise<string>(
        (resolve:(value:string)=>void, reject:(reason:any)=>void)=>{
            if(typeof _spPageContextInfo !== "undefined"){
                const url:string = _spPageContextInfo.webAbsoluteUrl  + `/_api/Web/Lists/getbytitle('${listTitle}')/ListItemEntityTypeFullName`;
                fetch(url, {
                    credentials: "same-origin",
                    headers: {
                        accept: "application/json;odata=verbose",
                        "content-type": "application/json;odata=verbose"
                    }
                }).then((response: Response) => {
                    if (response.ok) {
                        response.json()
                            .then((data: {d:{ListItemEntityTypeFullName:string}}) => resolve(data.d.ListItemEntityTypeFullName));
                    } else {
                        reject(response.statusText);
                    }
                }).catch((reason: any) => reject(reason));
            }
            else{
                reject("SharePoint Page Context is not defined!");
            }
        }
    );
}