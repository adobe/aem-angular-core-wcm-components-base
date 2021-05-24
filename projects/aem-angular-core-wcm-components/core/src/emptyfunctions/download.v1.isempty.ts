export interface DownloadV1LabelsModel {
    filename?: string
    filesize?: string;
    fileformat?: string;
}

export interface DownloadV1Model{
    url?: string
    title: string
    description?: string
    actionText?: string
    filename?: string
    format?: string
    size?: string
    extension: string
    displayFilename: boolean
    displaySize: boolean
    displayFormat: boolean
    labels: DownloadV1LabelsModel
}


export function DownloadV1IsEmptyFn(props:DownloadV1Model): boolean{
    return props.url == null || props.url.trim().length === 0;
}