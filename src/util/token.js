const jwt = require('jsonwebtoken');

const checktoken = async (token, id, key) => lwt.verife(token, key, (err, decoded) =>{
   
   
const checkToken = async (token, id, key)  => {
    try{
        let decoded = await jwt.verify(token,  key);
        if(decoded){
            if(decoded.id==id) return true;
        }
        return false;
    }catch(e){
        return false
    }
}
});


const setToken = async (id, key) => {
    console.log(id);
    if(id) {
        return jwt.sign({id}, key, { expiresIn: 280800});
    }
    return false;
};

module.exports = {
    checktoken,
    setToken,
};