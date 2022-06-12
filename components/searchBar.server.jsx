import Link from "next/link"
import { useEffect } from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function SearchBar({ searchCallback }){

    const [search, setSearch] = useState("")
    const [last, setLast] = useState({})
    const handleChange = (event) => {
        setSearch(event.target.value.toLowerCase())
    }

    useEffect(() => {
        searchCallback(search)
    }, [search])

    useEffect(() => {
        if(localStorage.getItem("last_surah")){
            setLast(JSON.parse(localStorage.getItem("last_surah")))
        }
    }, [])

    return (<>
    
    
        <div className="row justify-content-center">

            <div className="col-12">
                <span className="fw-bold text-primary text-brand">Quran</span>
            </div>
                <motion.div className="inner-carousel px-3 col-12 row justify-content-start">

                    {last.number > 0 ? (<Link href={`/surah/${last.surah.number_of_surah}#${last.number}`}>
                            <motion.div whileTap={{scale: 0.9}} className="col-12 bg-primary text-white p-2 my-rounded">
                                <div className="">
                                    <span className="fw-bold">Latest read</span>
                                </div>
                                <div className="">
                                    <span>{last.surah.name} | {last.number}</span>
                                </div>
                            </motion.div>
                    </Link>) : (<>
                    
                    </>)}
    
                </motion.div>            
            <div className="col-12 mt-1 p-3 bg-white position-sticky search-div">
                <input type="text" onChange={(event) => handleChange(event)}  className="form-control search" placeholder="Search Surah" />
            </div>

        </div>
    
    </>)
}