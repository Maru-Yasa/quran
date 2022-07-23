import fs from 'fs'
import quranData from '../../../data/quran.json'
export default function handler(req, res) {
    try {
        res.status(200).json({
            status: 'success',
            data: quranData,
            msg: 'success fetching all surah'
        })
    } catch (error) {
        res.status(200).json({
            error: error
        })
    }

}
