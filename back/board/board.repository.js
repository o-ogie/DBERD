const db = require('../models/db')

exports.findAll = async () =>{
    try{
        const listSql = await db.query(
            `SELECT boardIdx, userid, subject, registerBoard, hit FROM board;`
        )
        return listSql
    }catch(e){
        throw new Error(e.message)
    }
}

exports.create = async (userid, subject, content) => {
    try{
        const writeSql = `INSERT INTO board(userid, subject, contentBoard) VALUES ('${userid}', '${subject}', '${content}');`
        const [{insertId}] = await db.query(writeSql)

        const [[response]] = await db.query(`SELECT boardIdx, userid, subject, contentBoard, DATE_FORMAT(registerBoard, '%Y-%m-%d') as register From board WHERE boardIdx=${insertId};`)
        return response
    }catch(e){
        throw new Error(e)
    }
}

exports.findOne = async(id)=>{
    try{
        const viewSql = await db.query(
            `SELECT boardIdx, userid, contentBoard, DATE_FORMAT(registerBoard, '%Y-%m-%d') as register From board WHERE boardIdx=${id};`
        )
        return viewSql
    }catch(e){
        throw new Error(e.message)
    }
}

exports.modify = async(content,id)=>{
       try {
        console.log(content, id)
        const modifySql = await db.query(
            `UPDATE board SET contentBoard='${content}' WHERE boardIdx=${id};`
        )

        return modifySql
    }catch(e){
        throw new Error(e.message)
    }
}

exports.delete = async (id)=>{
    try{
        const deleteSql = await db.query(
            `DELETE FROM board WHERE boardIdx=${id}`
        )
        return deleteSql
    }catch(e){
        throw new Error(e.message)
    }
}