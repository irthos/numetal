'use strict';

/**
* @ngdoc directive
* @name numetal.directive:content
* @description
* # content
*/
angular.module('numetal')
    .directive('content', function (State, Data, $rootScope, $timeout)
    {
        return {
            templateUrl: 'scripts/content/content-d.html',
            restrict: 'EA',
            controller: function ($scope, $attrs) {
                State.type = $attrs.type;
                getPageTags();
                function getPageTags(){
                    $timeout(function () {
                        var pageTags = 'metal work';
                        Data.object.content ? angular.forEach(Data.object.content[State.params].tags,function (tag) {
                            pageTags = pageTags + ', ' + tag;
                        }) : getPageTags();
                        $rootScope.tags = pageTags;
                    },1000);
                }
            }
        };
    });