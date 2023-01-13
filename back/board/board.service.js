const repository = require('./board.repository')

exports.list = async () => {
    try{
        const [list] = await repository.findAll()
        console.log(list)
        return list
    }catch(e){
        throw new Error(e.message)
    }
}

exports.write = async ( userid, subject, content ) => {
    try{
        if(!content) throw new Error('content 없음')
        const result = await repository.create(userid, subject, content)
        return result
    }catch(e){
        throw new Error(e)
    }
}

exports.view = async (id) => {
    try{
        const result = await repository.findOne(id)
        return result
    }catch(e){
        throw new Error(e.message)
    }
}

exports.update = async(content, id) => {
    try{
        console.log(content,id)
        const [{changedRows}] = await repository.modify(content,id)
        if(changedRows<=0){
            throw new Error('수정된 데이터가 없으니, ID를 확인해주세요.')
        }
        return { result:changedRows}
    }catch(e){
        throw new Error(e)
    }
}

exports.remove = async (id) => {
    try{
        const [{affectedRows}] = await repository.delete(id)

        if(affectedRows<=0) throw new Error('삭제된 데이터가 없습니다. ID를 다시 확인해주세요.')
        return { result:affectedRows}
    }catch(e){
        throw new Error(e.message)
    }
}