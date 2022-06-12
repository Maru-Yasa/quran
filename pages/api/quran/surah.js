import fs from 'fs'

export default function handler(req, res) {
    try {
        const surah = req.query.surah;
        var quran = JSON.parse(fs.readFileSync(`data/quran/surah/${surah}.json`, 'utf8'));
        res.status(200).json(quran)        
    } catch (error) {
        var quran = JSON.parse(fs.readFileSync(`data/quran/surah/${1}.json`, 'utf8'));
        res.status(200).json(quran)    
    }

}
  