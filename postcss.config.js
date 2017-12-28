module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-simple-vars')(),
    require('autoprefixer')(),
    require('postcss-custom-media')(),
    require('postcss-custom-properties')(),
    require('postcss-nested')(),
    require('postcss-clean')()
  ]
}
