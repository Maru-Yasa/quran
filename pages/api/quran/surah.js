import fs from 'fs'

export default async function handler(req, res) {
    try {
        var surah = req.query.surah;
        if(surah > 114) surah = 1
        const dataSurah = await import(`../../../data/surah/${surah}.json`)
        res.status(200).json({
            status: 'success',
            data: dataSurah,
            msg: 'success fethicng data surah'
        })
    } catch (error) {
        console.log(error);
    }

}
  