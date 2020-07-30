import React, {useState, useEffect} from "react"
import styles from './sidebar.module.css'

export default function Sidebar ({sideList, setSideCurrent}){
  const [shown, setShown] = useState(0);
  useEffect(()=>{
    setSideCurrent(0);
  },[]);
  const onClickEvent = (pressed)=>()=>{
    setSideCurrent(pressed);
    setShown(pressed);
  }
  return(
    <div className={styles.sidebarWrapper}>
      <ul>
        {sideList.map((item, index)=><li key={index} ><a className={styles[`sideMenu${(shown === index) ? `On` : `Off`}`]} onClick={onClickEvent(index)}>{item}</a></li>)}
      </ul>
    </div>
  )
}