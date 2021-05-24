export interface TitleV2Model{
    text: string;
    linkURL: string;
    linkDisabled: boolean;
    type: string;
}

export function TitleV2IsEmptyFn(props:TitleV2Model): boolean{
    return props.text == null || props.text.trim().length === 0;
}