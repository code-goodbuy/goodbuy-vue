# Troubleshooting

This is the place where we collect all the problems we had with our
Vue App and how we solved them for future reference.

## CORS on locale development

When we try to access the backend over localhost, the CORS policy jumps into
place and prevents us from accessing the endpoint. This is fixed by adding this:
```javascript
devServer: {
  proxy: process.env.BASE_API_URL,
},
```

to our `vue.config.js` file. The `BASE_API_URL` is saved inside our `.dev.development` file
as a variable.

Furthermore, this also requires us to set the `.env.development` variable `VUE_APP_BASE_API_URL` to an empty string, since our `vue.config.js` file now already sets that information.
