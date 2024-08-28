// Import required modules
import gulp from 'gulp'
import cleanCSS from 'gulp-clean-css';

// Define the minify CSS task
gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css') // Source folder for CSS files
    .pipe(cleanCSS({ compatibility: 'ie8' })) // Minify the CSS files
    .pipe(gulp.dest('dist/css')); // Destination folder for minified CSS files
});

// Default task that runs when you type "gulp" in the terminal
gulp.task('default', gulp.series('minify-css'));
