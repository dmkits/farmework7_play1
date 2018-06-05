// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/',
  domCache:true
});


//$$('#my-login-screen .login-button').on('click', function () {
//  var uname = $$('#my-login-screen input[name = "username"]').val();
//  var pwd = $$('#my-login-screen input[name = "password"]').val();
//
//  app.alert('Username: ' + uname + ', Password: ' + pwd, function () {
//    app.closeModal('#my-login-screen');
//  });
//});


 //Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  if(!(username=="user" && password=='123') ){
    // Alert username and password
    //app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
    app.dialog.alert("Wrong password or login");
  }else{
    console.log('!!!!! Login wright');
    //app.views.create('#main_content-view');
   // mainView.router.loadPage({url:'./main_content.html', ignoreCache:true, reload:true });

    //var tableView = app.views.create('#main_content_view', {
    //  url: '/main_content.html'
    //});

     //mainView.route({name:'main_content_view'});


  }
  // Close login screen
  //app.loginScreen.close('#my-login-screen');
  //$$('#my-login-screen .login-button').path='/main_content/';


  //var contentView = app.views.create('.main_content', {
  //  url: './pages/main_content.html'
  //});

});
