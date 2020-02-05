import {useEffect, useRef} from 'react'

 const usePrevCount = (value) => {

const prevCountRef = useRef();

    useEffect(() => {
      prevCountRef.current = value;
    },);
    const prevCount = prevCountRef.current;

    return (prevCount)
}

export default usePrevCount