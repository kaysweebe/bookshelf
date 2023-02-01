import express from "express";
import { Response, Request } from "express"
import { appDataSource } from "./data-source";
import { Book } from "./entity/Book";

// Initialize database
appDataSource.initialize()
.then(() => console.log("Data source has been initialized") )
.catch((error) => console.log(error))

// Declare app
const app = express();
const port = 3300;

// Register routes
app.get("/books", async function (req: Request, res: Response) {
    const results = await appDataSource.getRepository(Book).find()
    res.json(results)
})

app.post("/books", async function (req: Request, res: Response) {
    const book = await appDataSource.getRepository(Book).create(req.body)
    const results = await appDataSource.getRepository(Book).save(book)
    return res.send(results)
})


app.put("/books/:id", async function (req: Request, res: Response) {
    const book = await appDataSource.getRepository(Book).findOneBy({
        id: req.params.id,
    })
    appDataSource.getRepository(Book).merge(book as Book, req.body)
    const results = await appDataSource.getRepository(Book).save(book as Book)
    return res.send(results)
})

app.delete("/books/:id", async function (req: Request, res: Response) {
    const results = await appDataSource.getRepository(Book).delete(req.params.id)
    return res.send(results)
})

// Start app
app.listen (port, () =>
    console.log(`Listening on port ${port}`)
);
  


  