import jsonwebtoken from "jsonwebtoken"

async function getToken(payload){
    return new Promise((resolve,reject)=>{
        jsonwebtoken.sign(
            payload,
            'mypass',
            {
                expiresIn:'1d'
            },
            (err,token)=>{
                if(err){
                    reject(err)
                }
                resolve(token)
            }
        )
    })

}
export {getToken}