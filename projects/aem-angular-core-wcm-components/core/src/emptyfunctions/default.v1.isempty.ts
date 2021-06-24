
export interface DefaultV1Model{
    html: string;
}

export function DefaultV1IsEmptyFn(props:DefaultV1Model): boolean{
    return props.html == null || props.html.trim().length === 0;
}