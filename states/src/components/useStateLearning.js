import React, { useState } from 'react';


const Counter = () => {

    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1);
    }

    return (
        <button onClick={increament}>{count}</button>
    )
}

export default Counter;

// const Signin = () => {

//     const [signedin, setsignedin] = useState(false)

//     const handleSignin = () => {
//         setsignedin(true);
//     }


//     const handleSignout = () => {
//         setsignedin(false);
//     }



//     return (

//         <div>

//             {signedin ? (<div>
//                 <button>Sign Out</button>
//                 <p>Welcome back, good to see you in here</p>
//             </div>) :
//                 (<div>
//                     <button>Signin</button>
//                     <p>Please Sign in</p>
//                 </div>)
//             }

//         </div>

//     )

// }

// export default Signin;
