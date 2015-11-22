/**
 * Created by coichedid on 21/04/15.
 */
'use strict';
angular.module('ngcolored').directive('colored', [
  function() {
      return {
            scope: {
                color: '=',
                width: '@',
                height: '@',
                class: '@'
            },
            template: '<div class="{{class}}" style="background-color:{{color}};width:{{width}};height:{{height}}";></div>',
            link: function(scope, element, attrs) {
                if (attrs.class !== undefined) {
                    scope.class = attrs.class;
                } else {
                    attrs.class = 'panel panel-default';
                }

            }

        };
  }
]);


