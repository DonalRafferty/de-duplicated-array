module.exports = function (grunt) {
    // Project config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: {
                    'public/build/flatten.min.js': ['app/utilities.js']
                }
            }
        },
        jshint: {
            files: ['gruntfile.js', 'main.js', 'app/*.js'],
            options: {
                node: true,
                globals: {
                    'console': false
                }
            }
        },
        simplemocha: {
            options: {
                globals: ['expect'],
                timeout: 1000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'spec'
            },
            all: {src: ['tests/app/*.js']}
        },
        watch: {
            scripts: {
                files: ['app/*.js', 'tests/app/*.js'],
                tasks: ['mocha-test'],
                options: {
                    nocase: true,
                    nospawn: false
                }
            }
        },
        mochacov: {
            test: {
                options: {
                    reporter: 'spec',
                    require: ['should']
                },
                files: 'tests/app/*.js'
            },
            coverage: {
                options: {
                    reporter: 'html-cov',
                    require: ['should'],
                    coverage: true,
                    output: 'reports/coverage/app/coverage.html'
                },
                files: { src: 'tests/app/*.js' }
            }
        }
    });

    // Load the plugin that provides the specified config tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-mocha-cov');

    // Default task(s)
    grunt.registerTask('default', ['uglify']);
    //Mocha Test task
    grunt.registerTask('mocha-test', ['jshint', 'simplemocha', 'mochacov:coverage']);
    //coverage
    grunt.registerTask('coverage', ['mochacov:coverage']);
};