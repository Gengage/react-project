import { useState, useEffect } from 'react'

function useCounter(arrLength){
    // 1초마다 자동으로 숫자를 카운팅하는 로직
    const [count, setCount] = useState(0);

    useEffect( () => {
        const increaseCount = () => { 
          clearTimeout(timerID)
          setCount(count + 1)
        }
        const timerID = setTimeout(increaseCount, 1000)
        return () => {
          clearTimeout(timerID)
        }
    }, [count]) // count 상태가 업데이트될때마다 최신 count 값을 이용하여 콜백함수를 실행함
    
    return count % arrLength // 배열의 길이에 따라 해당 배열의 인덱스값을 반환
}
export default useCounter