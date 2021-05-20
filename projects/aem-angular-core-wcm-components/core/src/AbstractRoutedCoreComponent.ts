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

import {AbstractCoreComponent} from "./AbstractCoreComponent";
import {Component, Input} from "@angular/core";
import {RoutedCoreComponentModel} from "./model/RoutedCoreComponentModel";


/**
 * AbstractRoutedCoreComponent
 * This core component contains 1 or more links.
 * We want to be able to control SPA routing with a property coming from the model.
 */
export abstract class AbstractRoutedCoreComponent extends AbstractCoreComponent implements RoutedCoreComponentModel{

    /**
     * Flag the entire core component to have routed links
     */
    @Input() routed;

    /**
     * Determine if an individual item (such as navigation entry or list link) should be routed or not.
     *
     * item: the entry item in a component, think of a link that belongs to a collection of links in the navigation.
     *       we can specify here to disable routing, or to overrule routing of the base component
     * base component: the component itself, think of the navigation itself.
     *       we can specify the default behaviour of all items here.
     *
     * The following scenarios result in routing:
     * Scenario 1: The item or the base component don't have anything set, we assume true (except for external links starting with http)
     * Scenario 2: The base component has routing on false, but the item has it on true (item takes precedence)
     * Scenario 3: The base component or item, or both, have the routing values set to true.
     *
     * The following scenario does NOT result in routing:
     * Scenario 1: The base component has routing enabled, but the item has it set to false
     * @param item
     */
    isItemRouted(item:RoutedCoreComponentModel): boolean{

        const itemRoutedSpecified  = typeof item.routed === 'boolean';
        const componentRoutedSpecified = typeof this.routed === 'boolean';

        if(!itemRoutedSpecified && !componentRoutedSpecified){
            //if nothing specified, assume we route.
            return true;
        }else if(itemRoutedSpecified){
            //only the item is specified
            return item.routed;
        }else if(componentRoutedSpecified){
            return this.routed;
        }
    }

}