import svgSprite from 'gulp-svg-sprite';

export const iconsMono = () => {
  return app.gulp.src(app.path.src.iconsMono)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "ICONS",
        message: "Error <%= error.message %>"
      })
    ))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../mono/spriteMono.svg"
        },
      },
      shape: {
        transform: [{
          svgo: {
            plugins: [{
                inlineStyles: true
              },
              {
                removeViewBox: false
              },
              {
                removeDoctype: true
              },
              {
                removeXMLProcInst: true
              },
              {
                removeUselessStrokeAndFill: false,
              },
              {
                removeXMLNS: true
              },
              {
                removeAttrs: {
                  attrs: ['class', 'data-name', 'fill', 'stroke'],
                },
              },
            ],
          },
        }, ],
      },
    }))
    .pipe(app.gulp.dest(app.path.build.iconsMono))
    .pipe(app.plugins.browserSync.stream());
}

export const iconsMulti = () => {
  return app.gulp.src(app.path.src.iconsMulti)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "ICONS",
        message: "Error <%= error.message %>"
      })
    ))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../multi/spriteMulti.svg"
        },
      },
      shape: {
        transform: [{
          svgo: {
            plugins: [{
                inlineStyles: true
              },
              {
                removeViewBox: false
              },
              {
                removeDoctype: true
              },
              {
                removeXMLProcInst: true
              },
              {
                removeUselessDefs: false
              },
              {
                removeUselessStrokeAndFill: false,
              },
              {
                removeXMLNS: true
              },
              {
                removeAttrs: {
                  attrs: ['class', 'data-name', ],
                },
              },
            ],
          },
        }, ],
      },
    }))
    .pipe(app.gulp.dest(app.path.build.iconsMulti))
    .pipe(app.plugins.browserSync.stream());
}