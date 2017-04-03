module.exports = function(grunt){

  //config
  grunt.initConfig({
    //pass in options to plugins, references to files etc
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'style.css': 'style.scss'
            }
        }
    },
    postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 2 version']})
                ]
            },
            dist: {
                src: '*.css'
            }
        },
        watch: {
       styles: {
           files: ['style.scss'],
           tasks: ['sass','postcss',]
       }
   },
   browserSync: {
    dev: {
        bsFiles: {
            src : [
                'style.css',
                'index.html'
            ]
        },
        options: {
            watchTask: true,
            server: './'
        }
    }
}

  });

  //load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-postcss');
grunt.loadNpmTasks('grunt-browser-sync');


  //register tasks
grunt.registerTask('default', ['browserSync', 'watch']);

};
