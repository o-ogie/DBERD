const service = require('./board.service')

exports.getList = async (req,res,next) => {
    try{
        const list = await service.list()
        res.json(list)
    }catch(e){
        next(e)
    }
}

exports.postWrite = async ( req, res, next ) => {
    try {
        const userid ='web7722'
        const {subject, content} = req.body
        const data = await service.write(userid, subject, content)
        res.json(data)
    }catch(e){
        next(e)
    }
}

exports.getView = async ( req, res, next ) => {
    try {
        const {id} = req.params
        const [data] = await service.view(id)

        res.json(data)
    }catch(e){
        next(e)
    }
}

exports.modify = async ( req, res, next ) => {
    try{
        const {id} = req.params
        const {content} = req.body
        const data = await service.update(content,id)
        res.json(data)
    }catch(e){
        next(e)
    }
}

exports.delete = async (req,res,next) => {
    try{
        const {id} = req.params
        const data = await service.remove(id)
        res.json(data)
    }catch(e){
        next(e)
    }
}