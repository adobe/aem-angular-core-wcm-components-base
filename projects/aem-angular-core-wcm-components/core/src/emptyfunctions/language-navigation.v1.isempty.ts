import {NavigationV1Item, NavigationV1Model} from "./navigation.v1.isempty";

export interface LanguageNavigationV1Item extends NavigationV1Item{
    locale: string,
    country: string,
    language: string
    children?: LanguageNavigationV1Item[]
}

export interface LanguageNavigationV1Model extends NavigationV1Model{
    items:LanguageNavigationV1Item[]
}
