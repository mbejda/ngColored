(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('ngcolored.config', [])
      .value('ngcolored.config', {
          debug: true
      });

  // Modules
  
  angular.module('ngcolored.directives', []);
  
  
  
  
  angular.module('ngcolored',
      [
        'ngcolored.config',
        'ngcolored.directives'
      ]);

})(angular);

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


