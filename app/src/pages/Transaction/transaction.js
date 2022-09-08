import React from 'react'
import Background from "../../components/Background/background";
import EachOverview from '../../components/EachOverview/eachoverview'
import TransactionOverview from '../../components/TransactionOverview/transactionoverview'
function transaction() {
  return (
    <div>
            <Background/>
            <EachOverview props='Transaction' text='Transaction Overview'/>
            <TransactionOverview />
    </div>
  )
}

export default transaction