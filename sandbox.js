const password = 'password123456789@';

if(password.length >= 12 && password.includes('@')){
    console.log('that password is super strong');
} else if(password.length >= 8 || password.includes('@','£','$')&& password.length >= 5){
    console.log('that password is strong enough');
}else{
    console.log('that password is too weak');
}

function greet(){
    console.log('Waaassssssssssap');
}

const speak = function(){
    console.log('good day');
};

great();
speak();