import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from 'framer-motion'
import Link from "next/link";
import ReactLoading from 'react-loading';
import SearchBar from "../components/searchBar.server";

export default function Home() {

  const [quran, setQuran] = useState([])
  const [quranFilter, setQuranFilter] = useState(quran)
  const [search, setSearch] = useState("a")
  const [loading, setLoading] = useState(true)
  const topRef = useRef(null)
  
  const searchCallback = useCallback((search) => {
    setSearch(search)
  }, [search])

  const searchRef = useRef(null)

  useEffect(() => {

    fetch('/api/quran').then(res => res.json()).then((data) => {
      setQuran(data)
      setQuranFilter(data)
    })

  }, [])

  useEffect(() => {
    setLoading(false)
  }, [quran])

  function filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(name).some(name => o[name].toLowerCase().includes(string.toLowerCase())));
  }

  const handlechange = (e) => {
    setSearch(searchRef.current.value)
  }

  useEffect(() => {

    const result = quran.filter((data) => {
      return data.name.toLowerCase().search(search) != -1
    })      
    setQuranFilter(result)

  }, [search])

  const handleFloatingButton = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
    
      <Container ref={topRef}>

        <SearchBar searchCallback={searchCallback} />

        {loading ? (<>
        
          <div className="row mt-3 justify-content-center">
            <div className="col-3 text-center">
              <ReactLoading type="spin" color="#00000" className="text-primary" />
            </div>

          </div>
        
        </>) : (<>
        
          <div className="row mt-3 justify-content-center">
            {quranFilter.map((surah, index) => {
              return (<Link href={`/surah/${surah.number_of_surah}`} key={surah.number_of_surah} passHref><motion.div whileTap={{scale:0.9}} className="row col-10 m-2 my-bg my-rounded p-2">
                <div className="col-8">
                  <div className="fw-bold text-primary">
                    {surah.number_of_surah}. {surah.name}
                  </div> 
                  <div className="">
                    <span className="text-secondary text-desc-surah">{surah.place} | {surah.number_of_ayah} ayat</span>
                  </div>               
                </div>
                <div className="col-4 text-end arabic">
                  {surah.name_translations.ar}
                </div>
              </motion.div></Link>)
            })}
          </div>        
        
        </>)}




      </Container>


      <div className="fixed-bottom d-flex justify-content-end">
                <button onClick={handleFloatingButton} className="bg-primary mb-5 mx-3 my-rounded fs-5 pmd-btn-fab p-2"><i className="text-white bi bi-arrow-up"></i></button>
      </div>

    </>
  )
}
