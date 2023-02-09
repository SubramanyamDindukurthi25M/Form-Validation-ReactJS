import { useRouter } from "next/router"
import {motion as m} from 'framer-motion'
import Confetti from "react-confetti"
import { useEffect, useState } from "react"

export default function Success ()  {
    // Router
    const router = useRouter()

    const [pieces, setPieces] = useState(200)

    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0)
        }, 3000)
    }
    useEffect(() => {
        stopConfetti()
    }, [])

    return (
        <m.main 
            className='h-screen flex justify-center items-center' 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            exit={{opacity:0}}
        >
            <div className='bg-white rounded-lg w-1/2 text-gray-700 p-16'>
                <h1 className="text-3xl pb-4">
                    Thanks for subscription - <span className="text-yellow-500"> {router.query.name} </span> 
                </h1>
                <p>
                    We copied your <span className="text-gray-500">{router.query.email}</span> address and we will get back to you shortly!
                </p>
            </div>
            <Confetti
                gravity={0.2}
                numberOfPieces={pieces}
            />
        </m.main>
    )
}