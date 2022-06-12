import fs from 'fs'

export default function handler(req, res) {
    try {
        fetch(`https://quran-api.maruyasa.repl.co/api/v1/quran`).then(res => res.json())
        .then(quran => {
            res.status(200).json(quran) 
        })
    } catch (error) {
        res.status(200).json({
            error: error
        })
    }

}
