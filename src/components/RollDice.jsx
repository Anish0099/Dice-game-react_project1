import React, { useState } from 'react'
import styled from 'styled-components'
import Rules from './Rules'

const RollDice = ({ roleDice, currentDice, showRules, setShowRules }) => {




  return (
    <>
      <DiceContainer>

        <div className='dice'>

          <div className='dice_main'  onClick={roleDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt='dice1' />
            <div className="ptext">Click on Dice to roll</div>
          </div>
          <div className='rules'>
          {showRules && <Rules />}
          </div>

          </div>
          
        


        

        
      </DiceContainer>
    </>
  )
}

export default RollDice

const DiceContainer = styled.div`

.dice{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.dice_main{
display: flex;
align-items: center;
margin-top: 48px;
flex-direction: column;
max-width: 227px;
justify-content: center;
cursor: pointer;


}

.ptext{
  font-size: 24px;
}



.rules{
  display: flex;
  flex-direction: row;
  position: absolute;
  right:200px;
 
}
  
`