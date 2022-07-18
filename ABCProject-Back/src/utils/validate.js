'use strict'

exports.validateData = async (data) =>{
    try{
        let keys = Object.keys(data), msg = '';

        for(let key of keys){
            if(data[key] !== null && data[key] !== undefined && data[key] !== '') continue;
            msg += `The params ${key} is required\n`
        }
        return msg.trim();
    }catch(err){
        console.log(err);
    }
}

exports.checkUpdate = async (data)=>{
    try{
        if(Object.entries(data).length === 0) return false;
        else return true;
    }catch(err){
        console.log(err);
    }
}
