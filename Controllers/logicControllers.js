exports.postLogic = (req, res, next) => {
    console.log("Request:", req.body);
    
     const data = req.body;
    if(!data || Array.isArray(data)){
        return res.status(400)
        .send({
            "is_Success": false,
            "user_id": "shivamsingh",
            "msg": "An array is required"
        })
    }

    let alphabets = [];
    let numbers = [];
    data.map((ele)=> {
        if(isNaN(ele)){
            alphabets.push(ele);
        } else{numbers.push(ele);}
    })

    res.send({
        "is_success": true,
        "user_id": "Shivam singh",
        "email": "shivamfacejee@gmail.com",
        "roll_number": "0101EC191115",
        "numbers": numbers,
        "alphabets": alphabets
    })
}