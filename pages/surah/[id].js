import Link from "next/link"
import { useRouter } from "next/router"
import { useRef } from "react"
import { useEffect, useState } from "react"
import AyahComponent from "../../components/ayahComponent"
import { useCallback } from "react"
import { lazy } from "react"

export default function Surah() {
    const router = useRouter()
    const surah_id = router.query.id
    const [surah, setSurah] = useState({})
    const lastRef = useRef(null)
    const [last, setLast] = useState({})
    const topRef = useRef(null)



    const scrollCallback = useCallback((lastRef) => {
        if(lastRef.current) scrollTo(lastRef)
    }, [])

    useEffect(() => {
        import(`../../data/surah/${surah_id}.json`).then((data) => {
            setSurah(data)
        })
        
        if(localStorage.getItem('last_surah')){
            const last = JSON.parse(localStorage.getItem('last_surah'))
            setLast(last)
        }

    }, [])

    const handleFloatingButton = () => {
        topRef.current.scrollIntoView({ behavior: "smooth" })
    }
      
    const scrollTo = (ref) => {
        const element = ref.current;
        const offset = 45;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        // lastRef.current.scrollIntoView()
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }

    return (<>
            {surah.name_translations ? (<>
            
                <div ref={topRef} className="row justify-content-center">
                    <div className="col-12 m-0 row fixed-top bg-white border border-top-0">
                        <div className="col-2 py-1 mx-0">
                            <Link href="/"><span className="fs-5 text-primary back fw-bold"><i className="fw-bold bi bi-arrow-return-left"></i></span></Link>
                        </div>
                        <div className="col fs-4 text-primary fw-bold text-start">
                            <div className="my-0">
                                {surah.name}
                            </div>
                        </div>
                    </div>
                </div>            
            

                <AyahComponent last={last} scrollCallback={scrollCallback} ayahs={surah.verses} surah={{name: surah.name, number_of_surah: surah.number_of_surah}} />

            </>) : (<></>)}    

    
            <div className="fixed-bottom d-flex justify-content-end">
                <button onClick={handleFloatingButton} className="bg-primary mb-5 mx-3 my-rounded fs-5 pmd-btn-fab p-2"><i className="text-white bi bi-arrow-up"></i></button>
            </div>

    
    </>)


}