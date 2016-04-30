System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidator;
    return {
        setters:[],
        execute: function() {
            UsernameValidator = (function () {
                function UsernameValidator() {
                }
                UsernameValidator.startsWithNumber = function (control) {
                    var code = control.value.charAt(0);
                    console.log('starts with Number validation ' + code);
                    if (control.value != "" &&
                        //((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122))
                        !isNaN(code)) {
                        console.log('startswith number true');
                        return { 
                            "startsWithNumber": true 
                        };
                    }
                    return null;
                };
                
                UsernameValidator.usernameTaken = function (control) {
                    console.log('username taken validation');
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value === "David") {
                                console.log('usernametake true');
                                resolve({ "usernameTaken": true });
                            }
                            else {
                                resolve(null);
                            }
                            ;
                        }, 1000);
                    });
                };
                return UsernameValidator;
            }());
            exports_1("UsernameValidator", UsernameValidator);
        }
    }
});
//# sourceMappingURL=usernameValidator.js.map