import {RoutedCoreComponentModel} from "../model/RoutedCoreComponentModel";

export interface ListV2Item extends RoutedCoreComponentModel{
    url?:string
    lastModified?:number
    lastModifiedFormatted?:string
    description?:string
    path:string
    title:string
}


export interface ListV2Model extends RoutedCoreComponentModel{
    items:ListV2Item[]
    dateFormatString: string
    showDescription: boolean
    showModificationDate: boolean
    linkItems: boolean
}

export function ListV2IsEmptyFn(props:ListV2Model): boolean{
    return props.items == null || props.items.length === 0;
}
