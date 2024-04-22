import React from 'react'
import './Card.css'

//variant : 초기 로딩시 적용할 주요 스타일
//sx : 이벤트에 의해 동적으로 변경되는 스타일 
function Card({children,handleHover,handleClick,variant,sx}){
    return (
        <div className={`Card-container ${variant}`} onClick={handleClick} onMouseEnter={handleHover}>
            <div className='Card-contents'>
                {children}
            </div>
        </div>
    )
}
export default Card

Card.defaultProps = {
    children:"",
    handleHover:()=>console.log("마우스 호버"),
    handleClick:()=>console.log("마우스 클릭"),
}