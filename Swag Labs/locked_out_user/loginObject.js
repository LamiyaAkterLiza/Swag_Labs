class loginObject{
    
    get EnterUserName(){
        return $ ("//input[@data-test='username']");
    }
    get EnterPassword(){
        return $ ("//input[@data-test='password']");
    }
    get ClickLogin(){
        return $ ("//input[@data-test='login-button']");
    } 
    get errorMessage(){
        return $ ("//h3[@data-test='error']");
    }
}

module.exports = new loginObject();