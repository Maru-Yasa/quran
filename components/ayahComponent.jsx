import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { Container } from "react-bootstrap"

export default function AyahComponent({ ayahs, surah, scrollCallback, last }) {
    const router = useRouter()
    const lastRef = useRef(null)
    const topRef = useRef(null)

    const numberToArabic = (n) => n.replace(/\d/g,d=>"٠١٢٣٤٥٦٧٨٩"[d]).replace(/\./g, "٫");


    const handleClick = (ayah_number) => {
        const data = {
            number: ayah_number,
            surah : {
                name: surah.name,
                number_of_surah: surah.number_of_surah
            }
        }
        localStorage.setItem("last_surah", JSON.stringify(data))
    }

    useEffect(() => {
        scrollCallback(lastRef)
    })

    return (

        <Container className="mb-5">

        <div className="row mt-5 justify-content-center">
            <div id="top" ref={topRef} className="col-12 text-secondary text-center">
                <span>Long tap the ayah to save progress</span>
            </div>  
            {ayahs.map((ayah, index) => {
                return (<>

                    {index == 0 && surah.number_of_surah != 1 ? (<>
                    
                        <div key={index} className="col-10 my-2 p-2 my-bg my-rounded text-center">
                            <span className="arabic text-center my-1 fs-3">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
                        </div>

                        <motion.div whileTap={{rotate:[0,5,0]}} onClick={() => { handleClick(ayah.number) }} id={ayah.number} className="col-10 my-2 p-2 row my-bg my-rounded">
                            <div className="col row">
                                <div className="col-12 text-end arabic fs-4">
                                    {ayah.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")}
                                </div>
                                {/* <div className="col-12 my-3 text-start text-primary">
                                    { arabicToLatin(ayah.text) }
                                </div> */}
                                <div className="col-12 my-3 translate text-start">
                                    {ayah.translation_id}
                                </div>
                            </div>
                            <div className="col-2 arabic-number fw-bold">
                                {numberToArabic(String(ayah.number))}
                            </div>
                        </motion.div> 

                    </>) : (<>
                    
                        <motion.div whileTap={{rotate:[0,5,-5]}} ref={ ayah.number == last.number && surah.number_of_surah == last.surah.number_of_surah ? lastRef : null} onClick={() => { handleClick(ayah.number) }} id={ayah.number} className="col-10 my-2 py-4 px-2 row my-bg my-rounded">
                            <div className="col row">
                                <div className="col-12 text-end arabic fs-4">
                                    {ayah.text}
                                </div>
                                <div className="col-12 my-3 translate text-start">
                                    {ayah.translation_id}
                                </div>
                            </div>
                            <div className="col-2 arabic-number fw-bold">
                                {numberToArabic(String(ayah.number))}
                            </div>
                        </motion.div>                                
                    
                    </>)}


                
                </>)
            })}
        </div>

    </Container>

    )

} 