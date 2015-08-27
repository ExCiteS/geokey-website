module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'build/img'
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/css/global.css': 'css/main.scss',
                    'build/css/geokey.css': 'css/geokey.scss'
                }
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, src: ['css/fonts/*'], dest: 'build/'},
                    {expand: true, src: ['css/octicons/*'], dest: 'build/'},
                    {expand: true, src: ['css/bootstrap.min.css'], dest: 'build/'},
                    {expand: true, src: ['css/syntax.css'], dest: 'build/'},
                    {expand: true, src: ['js/*'], dest: 'build/'}
                ]
            }
        },

        watch: {
            options: {
                livereload: true,
            },

            images: {
                files: ['img/**/*.{png,jpg,gif,svg}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            },

            css: {
                files: ['css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['imagemin', 'sass', 'copy', 'watch']);
};
