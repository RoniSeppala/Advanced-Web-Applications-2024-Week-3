import {Router, Request, Response} from "express"

const router: Router = Router()

router.get("/hello", (req: Request, res: Response) => {
    res.json("Hello World")
})

export default router