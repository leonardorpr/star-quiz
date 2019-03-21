# React Boilerplate

:fire: start projects without wasting time with settings

## Get started

```bash
$ yarn install
$ yarn start
```

open your browser [http://localhost:3000](http://localhost:3000)

## Dependencies

```
- axios                         // web requests / ajax
- @material-ui/core             // UI framework
- @material-ui/styles           // styled-components on materila-ui
- big.js                        // calculate
- connected-react-router        // connect redux with react router
- history                       // access browser history
- moment                        // manipulate dates
- prop-types                    // check type of props
- ramda                         // utilities
- react                         // core
- react-dom                     // core
- react-flexbox-grid            // grid system
- react-intl                    // internationalization
- react-redux                   // manage global state
- react-router-dom              // routes
- react-table                   // facilitates creation of tables
- redux                         // manage global state
- redux-saga                    // manage side effects
- reduxsauce                    // Redux pattern
- redux-logger                  // redux logs
- styled-components             // create style based CSS-IN-JS
- uppy                          // file uploader
- validate.js                   // validations
```

## Structure

```
react-boilerplate/                           // root directory
├── config                                   // webpack configuration
├── public                                   // statics file
├── scripts                                  // start, test and build scripts
├── src/                                     // source directory
│     ├── assets/                               // brands & colors of project
│     ├── components/                           // main files of project
│     │  ├── app/                                 // screens of project
│     │  ├── config/                              // configurations, example: i18n & theme
│     │  ├── resources/                           // reusable components
│     │  ├── routes/                              // project routes
│     ├── core/                                 // managing and processing project data
│     │  ├── entity/                              // classes that represent the project data
│     │  ├── enum/                                // enum
│     │  ├── repository/                          // calls the service and handles the data it receives
│     │  ├── service/                             // services calls, API, for example
│     │  ├── store/                               // redux and yours plugins configuration
│     ├── spec/                              // tests
│     ├── utils/                             // util functions
│     ├── app.js                             // mount view
│     └── index.js                           // project root
├── .editorconfig                            // uniform the text editor behavior
├── .eslintrc.json                           // specific rules for eslint
├── .gitignore                               // ignore the specific files when using git
├── LICENSE                                  // license information
├── package.json                             // npm entry file
├── README.md                                // just what you see now
└── yarn.lock                                // lock file autogenerated by yarn
```

## TODO

- [ ] Auth Feature
- [ ] Branch with boilerplate without Material UI
- [ ] Branch without Redux Duck Pattern

## Author

:octocat: [Leonardo Pinheiro](https://github.com/leonardorpr)
