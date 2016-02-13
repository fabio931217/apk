angular.module('starter', ['ionic'])

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

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.pictures', {
    url: '/pictures',
    views: {
      'tab-pictures': {
        templateUrl: 'templates/tab-pictures.html',
        controller: 'PicturesCtrl'
      }
    }
  })

  .state('tab.icons', {
    url: '/icons',
    views: {
      'tab-icons': {
        templateUrl: 'templates/tab-icons.html',
        controller: 'IconsCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/pictures');

})

.controller('PicturesCtrl', function($scope) {
  $scope.timeline = [{
    date: new Date(),
    title: "I am here",
    author: "Ludo Anderson",
    profilePicture: "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg",
    text: "Lorem ipsum dolor sit amet",
    type: "location"

  }, {
    date: new Date(),
    title: "For my friends",
    author: "Sara Orwell",
    profilePicture: "https://lh5.googleusercontent.com/-ZadaXoUTBfs/AAAAAAAAAAI/AAAAAAAAAGA/19US52OmBqc/photo.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    type: "text"

  }, {
    date: new Date(),
    title: "Look at my video!",
    author: "Miranda Smith",
    profilePicture: "https://static.licdn.com/scds/common/u/images/apps/plato/home/photo_profile_headshot_200x200_v2.jpg",
    text: "Lorem ipsum dolor sit amet",
    type: "video"

  }, {
    date: new Date(),
    title: "Awesome picture",
    author: "John Mybeweeg",
    profilePicture: "http://www.lawyersweekly.com.au/images/LW_Media_Library/LW-602-p24-partner-profile.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    type: "picture"
  }]
})
