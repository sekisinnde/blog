// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: 'AIzaSyCxBTjiEeh1vPbytBcNnB4Os-HT5GsNdTI',
    authDomain: 'chat-demo-e1e46.firebaseapp.com',
    databaseURL: 'https://chat-demo-e1e46.firebaseio.com',
    projectId: 'chat-demo-e1e46',
    storageBucket: 'chat-demo-e1e46.appspot.com',
    messagingSenderId: "243794076886"
  }

};
