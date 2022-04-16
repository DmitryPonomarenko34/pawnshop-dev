import webpack from "webpack-stream";
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

export const js = () => {
  return app.gulp.src(app.path.src.js, {
      sourcemaps: app.isDev
    })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        message: "Error <%= error.message %>"
      })
    ))
    .pipe(webpack({
      mode: app.isBuild ? 'production' : 'development',
      entry: {
        main: './src/js/main.js',
        default: './src/js/default.js',
      },
      output: {
        filename: '[name].js',
      },
    }))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
}