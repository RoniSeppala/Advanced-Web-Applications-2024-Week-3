import {Router, Request, Response} from "express"

const router: Router = Router()

router.get("/hello", (req: Request, res: Response) => {
    try{
        res.json({"msg":"Hello World!"})
    } catch (error: any) {
        console.log(`Error parsing JSON: ${error}`)
    }
})

router.get("/echo/:id", (req: Request, res: Response) => {
    let id: string = req.params.id
    try {res.json({"id": id})
} catch (error: any) {
    console.log(`Error parsing JSON: ${error}`)
}
})

export default router
