// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'nl2br', 'monospaced.elastic', 'ngCordova', 'ngAlertify'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // login screen
  .state('login', {
    cache: false,
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'login'
  })

  // register screen
  .state('register', {
    cache: false,
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'registrar'
  })

  // Home screen
  .state('home', {
    cache: false,
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  //Inicio
  .state('inicio', {
    cache: false,
    url: '/inicio',
    templateUrl: 'templates/inicio.html',
    controller: 'HomeCtrl'
  
  })

  // Emisora
.state('emisora', {
    url: '/emisora',
    templateUrl: 'templates/emisora.html',
    controller: 'ExampleController'
  })

 // Agregar Contacto
.state('agregar', {
    url: '/agregar',
    templateUrl: 'templates/agregar.html',
    controller: 'HomeCtrl'
  })

  

  // View post detail
  .state('post', {
    url: '/post/:postId',
    templateUrl: 'templates/post.html',
    controller: 'PostCtrl'
  })

  // Chat list
  .state('chats', {
    url: '/chats',
    templateUrl: 'templates/chats.html',
    controller: 'ChatCtrl'
  })

  .state('chat-detail', {
    url: '/chats/:chatId',
    templateUrl: 'templates/chat-detail.html',
    controller: 'ChatDetailCtrl'
  })

  // List of notifications
  .state('notifications', {
    url: '/notifications',
    templateUrl: 'templates/notifications.html',
    controller: 'NotificationsCtrl'
  })

  // Contact list
  .state('contacts', {
    url: '/contacts',
    templateUrl: 'templates/contacts.html',
    controller: 'ContactsCtrl'
  })

  // User profile
  .state('user', {
    url: '/user/:userId',
    templateUrl: 'templates/user.html',
    controller: 'UserCtrl'
  })

  // Setting page
  .state('setting', {
    url: '/setting',
    templateUrl: 'templates/setting.html',
    controller: 'SettingCtrl'
  })

  .state('acercade', {
    url: '/acercade',
    templateUrl: 'templates/acerca.html',
    controller: 'AcercaCtrl'
  })

  .state('edit_perfil', {
    url: '/edit_perfil',
    templateUrl: 'templates/edit_perfil.html',
    controller: 'UserCtrl'
  })

  .state('cambiar_contrasena', {
    cache: false,
    url: '/cambiar_contrasena',
    templateUrl: 'templates/cambiar_contrasena.html',
    controller: 'c_clave'
  })

  .state('restaurar', {
    url: '/restaurar',
    templateUrl: 'templates/restaurar.html',
    controller: 'restaurar'
  })

  .state('solicitudes', {
    url: '/solicitudes',
    templateUrl: 'templates/solicitudes.html',
    controller: 'SettingCtrl'
  })

  .state('s_recibidas', {
    url: '/s_recibidas',
    templateUrl: 'templates/s_recibidas.html',
    controller: 'SettingCtrl'
  })

  .state('s_enviadas', {
    url: '/s_enviadas',
    templateUrl: 'templates/s_enviadas.html',
    controller: 'SettingCtrl'
  })

    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
