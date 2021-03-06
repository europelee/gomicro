let chalk   = require('chalk');
let leftpad = require('left-pad');

let BAR = '=====================================================================';

exports.prompt = function() {

    return  '\n' +
            chalk.blue(BAR) +
            '\n' +
            chalk.gray(leftpad('Go workspaces like to be created a certain way', 57)) +
            '\n' +
            `${chalk.gray(leftpad(`(e.g. `, 17))}${chalk.green(`$GOPATH/src/github.com/frankgreco/gomicro`)}${chalk.gray(`)`)}` +
            '\n' +
            chalk.gray(leftpad('To do this, let\'s get some information about your project', 63)) +
            '\n' +
            chalk.blue(BAR) +
            '\n'

}

exports.write = function() {

    return  '\n' +
            chalk.green(BAR) +
            '\n' +
            chalk.gray(leftpad(`Creating your workspace...`, 49)) +
            '\n' +
            chalk.green(BAR)

}

exports.certs = function() {
    return  '\n' +
            chalk.green(BAR) +
            '\n' +
            chalk.gray(leftpad(`Creating certificates...`, 47)) +
            '\n' +
            chalk.green(BAR)
}

exports.init = function(errors) {

    var message =   '\n' +
                    chalk.yellow(BAR) +
                    '\n' +
                    `${chalk.gray(leftpad(`Welcome to`, 35))}${chalk.bold.blue(` gomicro`)}!` +
                    '\n' +
                    chalk.gray(`This Yeoman generator aims to scaffold a robust RESTful microservice.`) +
                    '\n';

    errors.forEach((error, index) => {
        message += `\n${chalk.red(leftpad(`[ERROR] ${error}`, 22 + error.length))}`
    })

    message += errors.length > 0
        ? `\n\n${chalk.white(leftpad(`Please fix the above errors and try again`, 55))}\n`
        : `${chalk.white(leftpad(`Let\'s get started!`, 43))}\n`

    message += chalk.yellow(BAR)

    return message

}

exports.end = function(params) {

    return  chalk.magenta(BAR) +
            '\n' +
            chalk.gray(leftpad(`You\'re almost done! Your workspace has been created here:`, 63)) +
            '\n' +
            chalk.white.bold(leftpad(`$GOPATH/src/${params.vcs}/${params.user}/${params.project}/`, 54)) +
            '\n' +
            chalk.gray(leftpad(`To complete your setup, run the following commands in your workspace:`, 55)) +
            '\n' +
            chalk.white(leftpad('$ ', 25)) + chalk.cyan(`make [local-dev]`) +
            '\n' +
            chalk.white(leftpad('$ ', 25)) + chalk.cyan(`./${params.project} --help`) +
            '\n' +
            chalk.magenta(BAR)

}
