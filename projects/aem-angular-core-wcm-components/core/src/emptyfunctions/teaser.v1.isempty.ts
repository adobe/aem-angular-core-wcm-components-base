export function TeaserV1IsEmptyFn(props:TeaserV1Model): boolean{
    return !props.title || !props.description
}

export interface TeaserV1Action {
    title: string
    URL: string
    routed?: boolean
}

export interface TeaserV1Model{
    pretitle?: string
    title?: string
    description?: string
    titleType: string
    linkURL: string
    actionsEnabled: boolean
    imageLinkHidden: boolean
    titleLinkHidden: boolean
    actions: TeaserV1Action[]
    imagePath: string
}

