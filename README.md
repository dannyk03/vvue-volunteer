## Build Setup

### Environment variables
You can configure application via setting env variables before build project.

##### Supported:
`NODE_ENV`. Could be 'development' or 'production'
 <br />
`API_ROOT` - for development http://api2.staging.volunteer-vision.com
<br />
`CLIENT_SECRET`
</br />
`CLIENT_ID`


### Commands

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run all tests
yarn test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
