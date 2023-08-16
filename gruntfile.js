module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: { // ambiente de desenvolvimento
                files: {
                    "./build/styles/main.css": "./src/styles/main.less"
                }
            },
            production: { // ambiente de produção
                options: {
                    compress: true, // min css
                },
                files: {
                    "./build/styles/main.min.css": "./src/styles/main.less"
                }
            }
        },
        sass: {
            options: {
                style: "compressed"
            },
            dist: {
                files: {
                    "./build/styles/main2.css": "./src/styles/main.scss"
                }
            }
        },
        concurrent: {
            target: ["less","sass"]
        }
    })

    grunt.loadNpmTasks("grunt-contrib-less"); // inicialização do plugin less
    grunt.loadNpmTasks("grunt-contrib-sass"); // inicialização do plugin sass
    grunt.loadNpmTasks("grunt-concurrent"); // inicialização do plugin sass
    grunt.registerTask("default", ["concurrent"]);
}