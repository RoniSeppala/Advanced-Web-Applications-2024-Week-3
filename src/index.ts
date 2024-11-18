import {Router, Request, Response} from "express"
import path from "path"


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

router.post("/sum", (req: Request, res: Response) => {
    let numbers: number[] = req.body.numbers
    let sum: number = 0

    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        sum = sum + element

    }
    try{
        res.json({"sum": sum})
    } catch (error: any) {
        console.log(`Error parsin JSON: ${error}`)
    }
})

router.post("/users", (req: Request, res: Response) => {
    console.log(req.body)
    res.json({"res":"gotted"})
})
export default router
