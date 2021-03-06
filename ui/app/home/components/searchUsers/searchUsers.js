
'use strict';
/**
 * Created by julian on 25/07/16.
 */

import angular from 'angular';
import { SearchUsersComponent } from './searchUsers.component';
import PageNavigator from '../../scripts/directives/page.navigator.dir.js';
import RoleService from '../../scripts/services/gcba.role.srv';





const searchUsers = angular
    .module('searchUsers', [])
    .component('searchUsersComponent', SearchUsersComponent)
    .service('RoleService', RoleService)
    .directive('pageNavigator', PageNavigator.directiveFactory)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('users', {
                url: '/users?nameOrMail',
                component: 'searchUsersComponent'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default searchUsers;