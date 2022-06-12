import fs from 'fs'

export default function handler(req, res) {
    try {
        const surah = req.query.surah;
        fetch(`https://quran-api.maruyasa.repl.co/api/v1/quran/surah?surah=${surah}`).then(res => res.json())
        .then(quran => {
            res.status(200).json(quran) 
        })
    } catch (error) {
        const surah = req.query.surah;
        fetch(`https://quran-api.maruyasa.repl.co/api/v1/quran/surah?surah=1`).then(res => res.json())
        .then(quran => {
            res.status(200).json(quran) 
        }) 
    }

}
  