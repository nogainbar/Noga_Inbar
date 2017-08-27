module.exports = {
  plugins: [
    require('postcss-import')(),
    require('autoprefixer')(),
    require('postcss-custom-media')(),
    // require('postcss-clean')(),
    require('postcss-custom-properties')(),
    require('postcss-nested')(),
    require('postcss-simple-vars')()
  ]
}
