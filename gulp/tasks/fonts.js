export const fonts = () => {
  return app.gulp.src(app.path.src.fonts)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS",
        message: "Error <%= error.message %>"
      })
    ))
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.plugins.browserSync.stream())
}