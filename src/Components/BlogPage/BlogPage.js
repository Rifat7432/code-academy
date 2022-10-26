import React from "react";

const BlogPage = () => {
  return (
    <div className="py-5">
      <div className="shadow p-5 w-75 mx-auto my-4 rounded">
        <h2> what is cors?</h2>
        <p>
          Cross-origin resource sharing (CORS) is a browser security feature
          that restricts cross-origin HTTP requests that are initiated from
          scripts running in the browser. If your REST API's resources receive
          non-simple cross-origin HTTP requests, you need to enable CORS
          support.
        </p>
      </div>
      <div className="shadow p-5 w-75 mx-auto my-4 rounded">
        <h2>
           Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more.
        </p>
      </div>
      <div className="shadow p-5 w-75 mx-auto my-4 rounded">
        <h2>How does the private route work?</h2>
        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in</p>
      </div>
      <div className="shadow p-5 w-75 mx-auto my-4 rounded">
        <h2> What is Node? How does Node work?</h2>
        <p>Node. js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend.</p>
      </div>
    </div>
  );
};

export default BlogPage;
