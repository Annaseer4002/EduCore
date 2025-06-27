const HandleValidation = (req, res, next)=> {

    try {
        
  const { email, password, userName} = req.body

     if(!email){
        return res.status(400).json({message: 'All field required'})
     }

     if(!password){
        return res.status(400).json({message: 'All field required'})
     }

     if(!userName){
        return res.status(400).json({message: 'All field required'})
     }

     if(password.length < 6) {
        return res.status(400).json({message: 'Password must be at least 6 characters long'})
     }

     next();



    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }

   
}


const Authorization = (req, res, next) => {
    try {
        const token = req.headers('Authorization');
        
        if(!token){
            return res.status(401).json({ message: 'Unauthorized access' });
        }

        console.log(token);
        





    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
}

module.exports = {
    HandleValidation,
    Authorization
}

