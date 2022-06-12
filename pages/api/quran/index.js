import fs from 'fs'

export default function handler(req, res) {
    var quran = JSON.parse(fs.readFileSync('data/quran.json', 'utf8'));
    res.status(200).json(quran)
}
  