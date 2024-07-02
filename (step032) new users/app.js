var current_users = ['aish', 'alaya', 'jennice', 'saim', 'kainat'];
var new_users = ['saim'];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users === new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will need to enter new user name"));
    }
    else
        (console.log("".concat(new_users, " is available")));
});
