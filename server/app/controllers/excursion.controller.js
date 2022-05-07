const db = require('../DBconnection')

//APIs
class ExcursionController {
    //API GET all Types of visiting
    async getAll(req, res, next) {
        try {
            let sql = 'SELECT * from excursion'
            // let sql = `SELECT * 
            //             FROM excursion 
            //             JOIN typeofexcursion 
            //             ON excursion.typeexcursion_id = typeofexcursion.id
            //             JOIN typeofvisiting 
            //             ON excursion.typevisiting_id = typeofvisiting.id;`
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
    // //API POST new locate
    // async postLocate(req, res, next){
    //     try{
    //         const {address, longitude, latitude} = req.body
    //         // console.log(name, surname)
    //         const result = await db.query(`INSERT INTO locate (address, longitude, latitude) values($1, $2, $3) RETURNING *`, [address, longitude, latitude])
    //         res.json(result.rows[0])
    //     }
    //     catch (error){
    //         console.error(error)
    //         next(error)
    //     }
    // }
    // //API PUT locate
    // async putLocate(req, res, next){
    //     try{
    //         const {address, longitude, latitude} = req.body
    //         const id = req.params.id
    //         // console.log(name, surname)
    //         const result = await db.query(`UPDATE locate SET address = $1, longitude = $2, latitude = $3 WHERE id = $4 RETURNING *`, [address, longitude, latitude, id])
    //         res.json(result.rows)
    //     }
    //     catch (error){
    //         console.error(error)
    //         next(error)
    //     }
    // }
    // //API DELETE locate
    // async deleteLocate(req, res, next){
    //     try{
    //         let sql = `DELETE FROM locate WHERE id = $1`
    //         let id = req.params.id
    //         const result = await db.query(sql, [id])
    //         res.json(result.rows)
    //     }
    //     catch (error){
    //         console.error(error)
    //         next(error)
    //     }
    // }
}

module.exports = new ExcursionController()