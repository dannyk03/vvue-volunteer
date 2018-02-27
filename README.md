## Build Setup

### Environment variables
You can configure application via setting env variables before build project.

##### Supported:
`NODE_ENV`. Could be 'development' or 'production'
 <br />
 Check the current variables in `config/dev.env.js` <br/>
 `Default user` - user@volunteer-vision.com <br/>
 `Default password` - start123 <br/>


### Commands

``` bash
# install dependencies
npm i
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
