const signup = async (req,res,next)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).send("All field required to filled")
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error")
    }
}