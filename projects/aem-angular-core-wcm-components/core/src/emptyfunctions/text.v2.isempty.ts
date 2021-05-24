
export interface TextV2Model {
    text?: string;
    richText: boolean
}

export function TextV2IsEmptyFn(props:TextV2Model): boolean{
    return props.text == null || props.text.trim().length === 0;
}