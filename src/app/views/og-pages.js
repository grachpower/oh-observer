// You probably don't want to use globals, but this is just example code
var fbAppId = '279875379221772';
var objectToLike = 'http://www.seshmefitness.com.au/';

/*
 * This is boilerplate code that is used to initialize
 * the Facebook JS SDK.  You would normally set your
 * App ID in this code.
 */

// Additional JS functions here
window.fbAsyncInit = function() {
    FB.init({
        appId      : fbAppId, // App ID
        status     : true,    // check login status
        cookie     : true,    // enable cookies to allow the
                              // server to access the session
        xfbml      : true,     // parse page for xfbml or html5
        // social plugins like login button below
        version     : 'v3.0',  // Specify an API version
    });

    // Put additional init code here
};

// Load the SDK Asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);

    // setTimeout(function() {
    //     window.location.href = 'http://www.seshmefitness.com.au/';
    // }, 0);
}(document, 'script', 'facebook-jssdk'));

/*
 * This function makes a call to the og.likes API.  The
 * object argument is the object you like.  Other types
 * of APIs may take other arguments. (i.e. the book.reads
 * API takes a book= argument.)
 *
 * Because it's a sample, it also sets the privacy
 * parameter so that it will create a story that only you
 * can see.  Remove the privacy parameter and the story
 * will be visible to whatever the default privacy was when
 * you added the app.
 *
 * Also note that you can view any story with the id, as
 * demonstrated with the code below.
 *
 * APIs used in postLike():
 * Call the Graph API from JS:
 *   https://developers.facebook.com/docs/reference/javascript/FB.api
 * The Open Graph og.likes API:
 *   https://developers.facebook.com/docs/reference/opengraph/action-type/og.likes
 * Privacy argument:
 *   https://developers.facebook.com/docs/reference/api/privacy-parameter
 */

function postLike() {
    FB.api(
        'https://graph.facebook.com/me/og.likes',
        'post',
        { object: objectToLike,
            privacy: {'value': 'SELF'} },
        function(response) {
            if (!response) {
                alert('Error occurred.');
            } else if (response.error) {
                document.getElementById('result').innerHTML =
                    'Error: ' + response.error.message;
            } else {
                document.getElementById('result').innerHTML =
                    '<a href=\"https://www.facebook.com/me/activity/' +
                    response.id + '\">' +
                    'Story created.  ID is ' +
                    response.id + '</a>';
            }
        }
    );
}