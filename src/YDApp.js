import React from 'react';
import YDMenu from './YDMenu';


const YDApp = () => {
  

  return (
    <div>YDApp
        <div>
            <div>
                <h1>YARN DRAWER</h1>
                <p>A sincere effort to make it less tangled in every way that matters</p>
            </div>
            <div>
                <a><button>Register</button></a>
                <a><button>Sign-in</button></a>
            </div>
            <YDMenu></YDMenu>
        </div>
        
    </div>
  )
}

export default YDApp