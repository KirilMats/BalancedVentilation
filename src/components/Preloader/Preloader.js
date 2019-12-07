import React from 'react';
import c from "./Preloader.module.css";

export default () => {
    return(
        <div className={c.preloader_wrap}>
          <div className={c.machine}>
            <div className={c.propeller}>
              <div className={c.blade}></div>
              <div className={c.blade}></div>
              <div className={c.blade}></div>
              <div className={c.blade}></div>
              <div className={c.blade}></div>
              <div className={c.blade}></div>
              <div className={c.blade}></div>
              <div className={c.blade}></div>
              <div className={c.blade}></div>
              <div className={c.blade}></div>
            </div>
          </div>
        </div>
    ) 
}