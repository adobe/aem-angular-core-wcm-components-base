import {RoutedCoreComponentModel} from "../model/RoutedCoreComponentModel";

export interface ImageV2Model extends RoutedCoreComponentModel{
    src: string
    alt: string
    displayPopupTitle?: boolean
    title?: string
    link?: string
}

export function ImageV2IsEmptyFn(props:ImageV2Model) {
    return (!props.src) || props.src.length === 0;
}

