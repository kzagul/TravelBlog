const db = require('../DBconnection')

//APIs
class ExcursionController {
    //API GET all Types of visiting
    async getAll(req, res, next) {
        try {
            let sql = 'SELECT * from excursion'
            let result = await db.query(sql)
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    async getAllFull(req, res, next) {
        try {
            let sql = `SELECT 
                            excursion.id, 
                            excursion.name, 
                            excursion.location, 
                            excursion.duration, 
                            excursion.about, 
                            typeofexcursion.typeexcursion,
                            typeofvisiting.typevisiting
                            
                        FROM 
                            excursion 
                        JOIN 
                            typeofexcursion 
                        ON 
                            excursion.typeexcursion_id = typeofexcursion.id
                        JOIN 
                            typeofvisiting 
                        ON 
                            excursion.typevisiting_id = typeofvisiting.id;`
            let result = await db.query(sql)
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    //API GET locate by id
    async getById(req, res, next){
        try{
            const id = req.params.id
            let sql = `SELECT * FROM excursion WHERE id = $1`
            let result = await db.query(sql, [id])
            // res.send(result)
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    //API POST new excursion
    async post(req, res, next){
        try{
            const {name, location, duration, about, typeexcursion_id, typevisiting_id} = req.body
            const result = await db.query(`INSERT INTO excursion (name, location, duration, about, typeexcursion_id, typevisiting_id) values($1, $2, $3, $4, $5, $6) RETURNING *`, [name, location, duration, about, typeexcursion_id, typevisiting_id])
            res.json(result.rows[0])
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    // //API PUT 
    async put(req, res, next){
        try{
            const {name, location, duration, about, typeexcursion_id, typevisiting_id} = req.body
            const id = req.params.id
            const result = await db.query(`UPDATE excursion SET name = $1, location = $2, duration = $3, about = $4, typeexcursion_id = $5, typevisiting_id = $6  WHERE id = $7 RETURNING *`, [name, location, duration, about, typeexcursion_id, typevisiting_id, id])
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }


    //API DELETE locate
    async delete(req, res, next){
        try{
            let sql = `DELETE FROM excursion WHERE id = $1`
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

module.exports = new ExcursionController()