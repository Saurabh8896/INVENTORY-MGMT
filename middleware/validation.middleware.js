import { error } from "console";
import { body , validationResult} from "express-validator";

const validationmiddleware = async (req, res, next)=>{

    const rules = [

        body('name').notEmpty().withMessage('Name is required'),
        body('price').isFloat({gt:0}).withMessage("Price should be positive"),
        body('imageUrl').custom((value, {req})=>{
            if(!req.file){
                throw new Error('Image is required')
            }
            return true
        })
     ]

    await Promise.all(rules.map((rule)=> rule.run(req)))

    var validationresult = validationResult(req)
        if(!validationresult.isEmpty()){
            return res.render('new-products',{
                errorMessage : validationresult.array()[0].msg,
            })
        }

        next();
}

export default validationmiddleware;