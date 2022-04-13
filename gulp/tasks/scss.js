import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, {
      sourcemaps: app.isDev
    })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error <%= error.message %>"
      })
    ))
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ["last 3 version"],
      cascade: true
    }))
    //Раскоментировать если нужен не сжатый дубль файла стилей
    // .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
}