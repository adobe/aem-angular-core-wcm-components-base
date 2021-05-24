import {RoutedCoreComponentModel} from "../model/RoutedCoreComponentModel";

export interface ButtonV1Model extends RoutedCoreComponentModel{
    text?: string;
    link?: string;
    icon?: string;
    ariaLabel?: string;
}

export function ButtonV1IsEmptyFn(props:ButtonV1Model): boolean{
    return props.text == null || props.text.trim().length === 0;
}