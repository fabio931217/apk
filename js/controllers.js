angular.module('starter.controllers', [])

.controller("ExampleController", function($scope, $cordovaMedia, $ionicLoading) {
 
    $scope.play = function(src) {
        var media = new Media(src, null, null, mediaStatusCallback);
        $cordovaMedia.play(media);
    }
 
    var mediaStatusCallback = function(status) {
        if(status == 1) {
            $ionicLoading.show({template: 'Loading...'});
        } else {
            $ionicLoading.hide();
        }
    }
 
})



// Authentication controller
// Put your login, register functions here
.controller('AuthCtrl', function($scope, $location, $ionicHistory, $ionicSideMenuDelegate, $state, $ionicPopup,loginService) {
  // hide back butotn in next view
  $ionicHistory.nextViewOptions({
    disableBack: true
  });



  // disabled swipe menu
 
console.log(localStorage.getItem("usuario"));
         console.log(localStorage.getItem("clave"));
    $scope.data ={};

    if(localStorage.getItem("usuario"))
    {
       $location.url("/inicio");
      // $state.go('inicio');
    }
    else
    {
      
    }

         $scope.login = function() {
        loginService.loginUser($scope.data.identificacion, $scope.data.clave).success(function(data) {
       localStorage.setItem("usuario", $scope.data.identificacion);
        localStorage.setItem("clave", $scope.data.clave);

         
            $state.go('inicio');
        }).error(function(data) {
              var alertPopup = $ionicPopup.alert({
                title: 'Acceso Denegado!',
                okType: 'button-assertive',
                template: 'Por favor verifique sus datos!'
            });
        });
    }

    $scope.login_q = function() {

      window.localStorage.clear();

      console.log(localStorage.getItem("usuario"));
         console.log(localStorage.getItem("clave"));
        
            $state.go('login');
     
    }

})
// Home controller
.controller('HomeCtrl', function($scope, Posts, $state, $ionicHistory) {

  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  if(localStorage.getItem("usuario"))
    {
       
    }
    else
    {
      $state.go('login');
    }

console.log(localStorage.getItem("usuario"));
         console.log(localStorage.getItem("clave"));
      

  // get list posts froms service
  $scope.posts = Posts.all();

  // toggle like button
  $scope.toggleLike = function (post) {
    // if user liked
    if(post.liked) {
      post.likeCount--;
    } else {
      post.likeCount++;
    }
    post.liked = !post.liked;
  };

  // view post
  $scope.viewPost = function(postId) {
    $state.go('post', {postId: postId});
  }

  // view user
  $scope.viewUser = function(userId) {
    $state.go('user', {userId: userId});
  }


})

// Chat controller, view list chats and chat detail
.controller('ChatCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();

  // remove a conversation
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  // mute a conversation
  $scope.mute = function(chat) {
    // write your code here
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicScrollDelegate, $ionicActionSheet, $timeout) {
  //$scope.chat = Chats.get($stateParams.chatId);
  $scope.chat = Chats.get(0);

  $scope.sendMessage = function() {
    var message = {
      type: 'sent',
      time: 'Just now',
      text: $scope.input.message
    };

    $scope.input.message = '';

    // push to massages list
    $scope.chat.messages.push(message);

    $ionicScrollDelegate.$getByHandle('mainScroll').scrollBottom();
  };

  // hover menu
  $scope.onMessageHold = function(e, itemIndex, message) {
    // show hover menu
    $ionicActionSheet.show({
      buttons: [
        {
          text: 'Copy Text'
        }, {
          text: 'Delete Message'
        }
      ],
      buttonClicked: function(index) {
        switch (index) {
          case 0: // Copy Text
            //cordova.plugins.clipboard.copy(message.text);

            break;
          case 1: // Delete
            // no server side secrets here :~)
            $scope.chat.messages.splice(itemIndex, 1);
            break;
        }

        return true;
      }
    });
  };

})




.controller('PostCtrl', function($scope, Posts, $state) {
  // get list posts froms service
  $scope.post = Posts.get(0);

  // toggle like button
  $scope.toggleLike = function (post) {
    // if user liked
    if(post.liked) {
      post.likeCount--;
    } else {
      post.likeCount++;
    }
    post.liked = !post.liked;
  };

  // view user function
 
})

// Notifications controller
.controller('NotificationsCtrl', function($scope, Notifications) {
  // get list posts from service
  $scope.notifications = Notifications.all();
})

// ContactsCtrl controller
.controller('ContactsCtrl', function($scope, Contacts, $state) {
  // get list posts froms service
  $scope.contacts = Contacts.all();

  // view contact function
  $scope.viewContact = function(contactId) {
    $state.go('user', {userId: contactId});
  }
})

// UserCtrl controller
.controller('UserCtrl', function($scope, Contacts, Posts, $stateParams) {
  // get contact from Contacts service
  // set the userId here
  $scope.user = Contacts.get(0);
  // attach post to this contact
  angular.extend($scope.user, {
    'followers': 199,
    'following': 48,
    'favorites': 14,
    'posts': Posts.all()
  });
})

// SettingCtrl controller
.controller('SettingCtrl', function($scope){

})
