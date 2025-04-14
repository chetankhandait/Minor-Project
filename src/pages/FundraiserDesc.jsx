 import React from 'react'
 import { MdOutlineDescription } from "react-icons/md";

 const FundraiserDesc = () => {
   return (
     <div>
       <h2 className='uppercase flex items-center text-xl my-6'>
        <MdOutlineDescription/>
        description 
       </h2>
       <p className=' leading-loose '>
       Dear Alumni,
 
 With heavy hearts, we come together to inform you of the untimely and tragic passing of Sunil Yadav, an alumnus of IIT Delhi, Batch of 2018, B.Tech, CE.
  <br/>
 Sunil was known not only for his academic excellence but also for his significant contributions to the sports community. His sudden passing has left a deep void in our hearts and, more importantly, has placed his family in an incredibly difficult situation.
 <br/>

 Sunil was the sole breadwinner for his family, which includes his father, a former paramilitary personnel who had to retire early due to personal reasons; his devoted mother, a housewife; his wife; and his unemployed married brother, who is currently struggling to find stable employment.
 <br/>

 In this challenging time, we request your help in launching a crowd-funding initiative with the goal of raising Rs. 10 lakhs to support Sunil’s family. This assistance will help alleviate the financial burden of long-standing education and marriage loans, providing them with some stability as they navigate this period of profound grief.
 <br/>

 Your contribution through this crowd-funding effort would make a significant impact, offering both financial relief and emotional support to Sunil’s family during this difficult time.
 Thank you for considering this heartfelt appeal.
       </p>
     </div>
   )
 }
 
 export default FundraiserDesc
 