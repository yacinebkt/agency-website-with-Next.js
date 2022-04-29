import React,{ useState, useCallback, useEffect} from 'react'

interface ScrollValue {
    innerWidth :  number
}

export const SizeContext = React.createContext<ScrollValue>({innerWidth:0})
 
const SizeOpserve:React.FC = ({children}) => {
    
    const [innerWidth, setInnerWidth] = useState(0)

    const handleResize = useCallback (()=> {
        setInnerWidth(window.innerWidth)
    },[] )

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize, {passive: true} )
        return () =>  window.removeEventListener('resize', handleResize)
    },[handleResize])


    return (
        <SizeContext.Provider value={{innerWidth}}>
            {children}
        </SizeContext.Provider>
    )
}


export default SizeOpserve