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

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractRoutedCoreComponent, ButtonV1Model, ButtonV1IsEmptyFn} from "@adobe/aem-core-components-angular-base/core";

@Component({
    selector: 'core-button-v1',
    templateUrl: './button.v1.component.html',
    host: {
        '[attr.data-cq-data-path]':'cqPath'
    },
})
export class ButtonV1Component extends AbstractRoutedCoreComponent implements ButtonV1Model{

    @Input() baseCssClass = 'cmp-button';
    @Input() text?;
    @Input() link?;
    @Input() icon?;
    @Input() ariaLabel?;

    @Output() public clickRequest = new EventEmitter<MouseEvent>();

    get iconClass():string{
        return `${this.baseCssClass}__icon ${this.baseCssClass}__icon--${this.icon}`;
    }

    onClick() {
        this.clickRequest.emit();
    }

    get isEmpty(): boolean {
        return ButtonV1IsEmptyFn(this);
    }
}
