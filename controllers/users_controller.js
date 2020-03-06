const db = require('../database')

module.exports = {
    
    check_user(req,res,next){
        const req_data = req.body
        const id_check = req_data.id
        const sql = 'select student_code from users'
        const checkpoint = false
        
        db.query(sql,(err,data)=>{
            lenght = Object.keys(data).length   //lenght of json_data_table
            
            for (i = 0;i<lenght;i++){
                if(id_check == data[i].student_code){   //check id that ever have or not
                    console.log("Have ever!!!");
                    checkpoint = true
                    break
                }
            }

            if(checkpoint==true){
                res.sendStatus(204)
                res.end()
            }else{
                console.log("Don't have this id!!");
                const temp_sql = 'insert into users (student_code) values(' + id_check + ')'
                db.query(temp_sql,(err,data)=>{ //add new id in users table
                    if(err){
                        console.log(err);
                    }
                    res.sendStatus(201)
                    res.end()
                })
            }

        })
    } 
}