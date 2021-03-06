/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


import {Component, HostBinding, Input} from "@angular/core";
import {
    AbstractRoutedCoreComponent, ImageV2IsEmptyFn,
    ImageV2Model,
    RoutedCoreComponentModel
} from "@adobe/aem-core-components-angular-base/core";

@Component({
    selector: 'core-image-v2',
    templateUrl: './image.v2.component.html',
})
export class ImageV2Component extends AbstractRoutedCoreComponent implements ImageV2Model{

    @Input() baseCssClass = 'cmp-image';

    @Input() src;
    @Input() alt;
    @Input() displayPopupTitle?;
    @Input() title?;
    @Input() link?;

    get hasTitle(): boolean {
        return !!this.title && this.title.trim().length > 0;
    }

    get hasLink(): boolean{
        return !!this.link && this.link.trim().length > 0;
    }

    get isEmpty(): boolean {
        return ImageV2IsEmptyFn(this);
    }

    get containerCssClass() {
        return `${this.baseCssClass} ${(this.isInEditor) ? ' cq-dd-image' : ''}`;
    }
}