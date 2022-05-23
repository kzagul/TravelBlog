const db = require('../DBConnection.js')

//APIs
class TypeOfExcursionController {
    //API GET all Types of excursions
    async getAll(req, res, next) {
        try {
            let sql = `SELECT * FROM typeofexcursion`
            let result = await db.query(sql)
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    //API GET 
    async getById(req, res, next){
        try{
            const id = req.params.id
            let sql = `SELECT * FROM typeofexcursion WHERE id = $1`
            let result = await db.query(sql, [id])
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    //API POST 
    async post(req, res, next){
        try{
            const {typeexcursion} = req.body
            const result = await db.query(`INSERT INTO typeofexcursion (typeexcursion) values($1) RETURNING *`, [typeexcursion])
            res.json(result.rows[0])
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    //API PUT 
    async put(req, res, next){
        try{
            const {typeexcursion} = req.body
            const id = req.params.id
            const result = await db.query(`UPDATE typeofexcursion SET typeexcursion = $1 WHERE id = $2 RETURNING *`, [typeexcursion, id])
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    //API DELETE 
    async delete(req, res, next){
        try{
            let sql = `DELETE FROM typeofexcursion WHERE id = $1`
            let id = req.params.id
            const result = await db.query(sql, [id])
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
}

module.exports = new TypeOfExcursionController()