var gulp = require('gulp');
var nodemon = require('gulp-nodemon')

gulp.task('watch', function(){
   nodemon({
       script: './server/server.js',
       ext: 'js',
       ignore : ['app/*', './node_modules/*'],
       env: {
           PORT: 4001
       },              
   })
   .on('restart', function() {
       console.log('Restarted');
   });
});