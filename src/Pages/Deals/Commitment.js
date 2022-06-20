import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRequest } from '../../Constant/apiCall'
import Header from '../../Header/Header'

export default function Commitment() {
    const [commitData, setCommitData] = useState([])

    const getCommitmentDeal = async () => {
        try {
            var res = await getRequest('/dashboard/deal_commitment', true)
            var responseData = await res.json()
            console.log("res", responseData)
            setCommitData(responseData)
        } catch(err){
            console.log("err", err)
        }
       
    }

    useEffect(() => {
        getCommitmentDeal()
    }, [])

    const current = window.location.pathname



  return (
    <>  
      <Header />
    <div className="main">
        <div className="container">
          <div className="d-flex border-bottom">
            <span className="">
              {" "}
              <Link className={`${current === '/deal'? 'topLink-active' : 'topLink'}`} to="/deal">
                Deals
              </Link>
            </span>
            <span className="">
              <Link className={`${current === '/deal/commitment'? 'topLink-active' : 'topLink'}`} to="/deal/commitment">
                Deals Commitment
              </Link>
            </span>
          </div>
          <div className="row">
            <Typography variant="h4" className="my-4">
              Deals Commitment
            </Typography>
          </div>
          <div className="container">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-dark">
                  <tr align='center' >
                    <th scope="col">Network Name</th>
                    <th scope="col">Startup Name </th>
                    <th scope="col">Investor Name</th>
                    <th scope="col">Commitment Date</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                    {commitData.map((item,id) => (
                        <tr key={id} align='center' >
                        <td  >{item.network_name}</td>
                        <td>{item.startup_name}</td>
                        <td>{item.name}</td>
                        <td>{new Date(item.commitment_date).toLocaleDateString() }</td>
                        <td>{item.amount}</td>
                      </tr>
                    ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}