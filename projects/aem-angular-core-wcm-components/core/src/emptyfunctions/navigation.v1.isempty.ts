import {NavigationItemModel} from "../model/NavigationItemModel";
import {RoutedCoreComponentModel} from "../model/RoutedCoreComponentModel";

export interface NavigationV1Item extends NavigationItemModel{
    level: number,
    active: boolean,
    title: string,
    url: string,
    lastModified: number,
    description?: string,
    path: string,
    children?: NavigationV1Item[]
}

export interface NavigationV1Model extends RoutedCoreComponentModel{
    items:NavigationV1Item[]
    accessibilityLabel?: string
}

export function NavigationV1IsEmptyFn(props:NavigationV1Model): boolean{
    return props.items == null || props.items.length === 0;
}
