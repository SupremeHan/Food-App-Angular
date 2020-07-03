// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB_EjFIjAvruNFU0r0pQyFdK1cK-fIsKfk",
    authDomain: "foodapp-5fef9.firebaseapp.com",
    databaseURL: "https://foodapp-5fef9.firebaseio.com",
    projectId: "foodapp-5fef9",
    storageBucket: "foodapp-5fef9.appspot.com",
    messagingSenderId: "316441894776",
    appId: "1:316441894776:web:8232daba541765fc45f28d",
    measurementId: "G-31GZ81DYK8"
  },

  dialogFlow: {
    angularBot : "a36a19a0788c4754b59c39e07186b74a"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
