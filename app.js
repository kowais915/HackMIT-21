

alert("ffff")
const login = document.querySelector('button')
const logout = document.getElementById('signOff-button');

function loginF(){
    provider = new firebase.auth.GoogleAuthProvider();
                 firebase.auth().signInWithPopup(provider).then(function(result){

                    console.log("Success!");

                }).catch(function(err){

                    console.log(err);
                    console.log("Failed");
                })
}
