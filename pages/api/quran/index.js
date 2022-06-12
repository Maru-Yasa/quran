import fs from 'fs'

export default function handler(req, res) {
    try {
        var quran = JSON.parse(fs.readFileSync('data/quran.json', 'utf8'));
        res.status(200).json(quran)
    } catch (error) {
        res.status(200).json({
            error: error
        })
    }

}
  