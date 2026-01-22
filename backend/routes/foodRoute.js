import express from 'express'
import { addfood } from '../controllers/foodController.js'
import multer from 'multer'

const foodRouter = express.Router();

// Image storage Engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => { // cb-> callBack function
        return cb(null, `${Date.now()}${file.originalname}`)
        // file.originalname -> file extention
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"), addfood);


export default foodRouter;