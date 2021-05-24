
export interface DefaultV1Model{
    aHtml: string;
}

export function DefaultV1IsEmptyFn(props:DefaultV1Model): boolean{
    return props.aHtml == null || props.aHtml.trim().length === 0;
}