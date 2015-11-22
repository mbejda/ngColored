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
