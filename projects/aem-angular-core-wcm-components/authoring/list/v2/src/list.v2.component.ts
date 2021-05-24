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



import {Component, Input} from "@angular/core";
import {
    AbstractRoutedCoreComponent, ListV2IsEmptyFn, ListV2Item,
    ListV2Model,
    RoutedCoreComponentModel
} from "@adobe/aem-core-components-angular-base/core";




@Component({
    selector: 'core-list-v2',
    templateUrl: './list.v2.component.html'
})
export class ListV2Component extends AbstractRoutedCoreComponent implements ListV2Model{

    baseCssClass = 'cmp-list';

    @Input() items:ListV2Item[];
    @Input() dateFormatString;
    @Input() showDescription;
    @Input() showModificationDate;
    @Input() linkItems;

    get isEmpty(): boolean {
        return ListV2IsEmptyFn(this);
    }
}