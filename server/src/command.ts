// let configs = (function () {
//     let instance : number;
//     let Singleton = function (options:Object) {
//         this.defaultOptions = {                                     
//             general_help: "Below there's a list of commands that you can use.\nYou can use autofill by pressing the TAB key, autocompleting if there's only 1 possibility, or showing you a list of possibilities.",
//             ls_help: "List information about the files and folders (the current directory by default).",
//             cat_help: "Read FILE(s) content and print it to the standard output (screen).",
//             whoami_help: "Print the user name associated with the current effective user ID and more info.",
//             date_help: "Print the system date and time.",
//             help_help: "Print this menu.",
//             clear_help: "Clear the terminal screen.",
//             reboot_help: "Reboot the system.",
//             cd_help: "Change the current working directory.",
//             mv_help: "Move (rename) files.",
//             rm_help: "Remove files or directories.",
//             rmdir_help: "Remove directory, this command will only work if the folders are empty.",
//             touch_help: "Change file timestamps. If the file doesn't exist, it's created an empty one.",
//             sudo_help: "Execute a command as the superuser.",
//             welcome: "Welcome to FTW (Fake Terminal Website)! :)\nIn order for you to start customizing the texts, go to js/main.js and replace the texts located at the configs var.\nIn that same file, you can define all the fake files you want as well as their content. This files will appear on the sidenav.\nAlso, don't forget to change the colors on the css/main.css file as well as the website title on the index.html file.\nNow in order to get started, feel free to either execute the 'help' command or use the more user-friendly colored sidenav at your left.\nIn order to skip text rolling, double click/touch anywhere.",
//             internet_explorer_warning: "NOTE: I see you're using internet explorer, this website won't work properly.",
//             welcome_file_name: "welcome_message.txt",
//             invalid_command_message: "<value>: command not found.",
//             reboot_message: "Preparing to reboot...\n\n3...\n\n2...\n\n1...\n\nRebooting...\n\n",
//             permission_denied_message: "Unable to '<value>', permission denied.",
//             sudo_message: "Unable to sudo using a web client.",
//             usage: "Usage",
//             file: "file",
//             file_not_found: "File '<value>' not found.",
//             username: "Username",
//             hostname: "Host",
//             platform: "Platform",
//             accesible_cores: "Accessible cores",
//             language: "Language",
//             value_token: "<value>",
//             host: "example.com",
//             user: "guest",
//             is_root: false,
//             type_delay: 20
//         };
//         options = options || Singleton.defaultOptions;
//         for (var key in Singleton.defaultOptions) {
//             this[key] = options[key] || Singleton.defaultOptions[key];
//         }
//     };
    
//     return {
//         getInstance: function (options) {
//             instance === void 0 && (instance = new Singleton(options));
//             return instance;
//         }
//     };
// })();
// let cmds = {
//     LS: { value: "ls", help: configs.getInstance().ls_help },
//     CAT: { value: "cat", help: configs.getInstance().cat_help },
//     WHOAMI: { value: "whoami", help: configs.getInstance().whoami_help },
//     DATE: { value: "date", help: configs.getInstance().date_help },
//     HELP: { value: "help", help: configs.getInstance().help_help },
//     CLEAR: { value: "clear", help: configs.getInstance().clear_help },
//     REBOOT: { value: "reboot", help: configs.getInstance().reboot_help },
//     CD: { value: "cd", help: configs.getInstance().cd_help },
//     MV: { value: "mv", help: configs.getInstance().mv_help },
//     RM: { value: "rm", help: configs.getInstance().rm_help },
//     RMDIR: { value: "rmdir", help: configs.getInstance().rmdir_help },
//     TOUCH: { value: "touch", help: configs.getInstance().touch_help },
//     SUDO: { value: "sudo", help: configs.getInstance().sudo_help }
// };


// export default {
//     guest:{
//         is_root:false,
        
//     },
//     admin:{

//     }
// }