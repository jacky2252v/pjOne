import React from 'react'

const LPThree = () => {
  return (
    <div className='mb-16'>
      <div className="flex justify-between m-16">
      <div>
        <h1 className="uppercase text-8xl tracking-wider">Work</h1>
        <h1 className="uppercase text-8xl tracking-wider">Exprience</h1>
      </div>

      <p className="font-light text-xl">03</p>
    </div>
    <div className="flex justify-between mt-28">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex-row ml-24 justify-between">
          <h1 className="uppercase tracking-wider font-serif">Agency Work</h1>
          <p className="font-light mb-2">Grayerville Graphic Studio</p>
          <p className="font-light">⎼ Head of Creatives (2020-2022)</p>
          <p className="font-light mb-2">⎼ Art Director (2018-2020)</p>
          <p className="font-light mb-2">JKLI Design Studio</p>
          <p className="font-light">⎼ Senior Designer (2016-2018)</p>
          <p className="font-light mb-2">⎼ Junior Designer (2015-2016)</p>
        </div>

        <div className="flex-row ml-24 justify-between">
          <h1 className="uppercase tracking-wider font-serif">Freelance Work</h1>
          <p className="font-light">Full-time Illustrator</p>
          <p className="font-light mb-2">(2022-present)</p>
          <p className="font-light">Part-time Graphic Designer & Illustrator</p>
          <p className="font-light">JKLI Design Studio</p>
          <p className="font-light mb-2">(2021-2022)</p>
        </div>
      </div>
      <img src="./img/PJ-13.jpg" alt="" className="h-[200px] mr-24" />
    </div>
    </div>
  )
}

export default LPThree
