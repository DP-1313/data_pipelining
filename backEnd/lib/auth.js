module.exports = {
    isOwner: function(request, response) {
        if (request.user) {
            return true;
        } else {
            return false;
        }
    },
    statusUI: function(request, response) {
        var authStatusUI = '<a href="/auth/login">Login</a> | <a href="/auth/register>Register</a>';
        if (this.isOwner(request, response)) {
            console.log('status test',request.user.username)
            authStatusUI = `${request.user.username} | <a href="/auth/logout">Logout</a>`;
        }
        return authStatusUI;
    }
}



