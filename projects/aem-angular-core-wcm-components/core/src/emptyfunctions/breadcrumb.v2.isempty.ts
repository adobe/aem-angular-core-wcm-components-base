import {NavigationItemModel} from "../model/NavigationItemModel";
import {RoutedCoreComponentModel} from "../model/RoutedCoreComponentModel";

export interface BreadCrumbV2ItemModel extends NavigationItemModel{
    active: boolean
    url: string
    title: string
}

export interface BreadCrumbV2Model extends RoutedCoreComponentModel{
    items: BreadCrumbV2ItemModel[]
    ariaLabelI18n: string
}

export function BreadCrumbV2IsEmptyFn(props: BreadCrumbV2Model): boolean {
    return props.items == null || props.items.length === 0;
}
