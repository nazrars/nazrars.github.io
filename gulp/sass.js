module.exports = function () {
    var fs = require('fs');
    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');

    var sassOptions = { style: 'expanded' };
    var paths = {
        css:  'assets/css',
        scss: 'assets/scss'
    };

    gulp.task('sass:clean', function () {
    //        console.log('removing ' + paths.css);
    //
    //        fs.unlink(paths.css, function (err) {
    //          if (err) {
    //              throw err;
    //          }
    //          console.log('successfully deleted ' + paths.css);
    //        });

    });

    gulp.task('sass:build', function () {
        console.log('building ' + paths.css);

        return gulp.src(paths.scss + '/index.scss')
                .pipe(sass(sassOptions))
                .pipe(autoprefixer(['last 2 versions', 'ie >= 9' ]))
                .pipe(gulp.dest(paths.css))
                .on('end', function (){ return 'built to ' + paths.css + '/index.css'; });
    });

    gulp.task('sass:watch', ['sass:build'], function () {
        console.log('watching ' + paths.scss);

        gulp.watch(['**/*.scss'], ['sass:build']);
    });

    gulp.task('sass', ['sass:watch']);
};
