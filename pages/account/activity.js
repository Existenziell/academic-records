import Head from 'next/head'
import { useEffect, useState } from 'react'
import { localStorageKey } from '../../context/AppContext'
import Link from 'next/link'

const Activity = () => {

  const data = {
    "firstname": "John",
    "middlename": "Peter",
    "lastname": "Doe",
    "email": "john@doe.com",
    "birthdate": "02/11/1971",
    "gradelevel": "4th",
    "satScore": "960",
    "actScore": "1001",
    "cltScore": "2620",
    "date": ""
  }

  return (
    <>
      <Head>
        <title>Account Activity | Academic Records</title>
      </Head>

      <div className="pt-12">
        <h1 className='text-4xl text-center md:text-left mb-8'>Activity</h1>
        <div>
          <p className='border border-brand-dark border-opacity-50 rounded-sm p-4 mb-8'>All additions and changes are securely stored on the blockchain. You can verify every transaction by clickling on 'Verify'. </p>
          <table cellPadding="10" className='w-full text-sm'>
            <tbody className='whitespace-nowrap'>
              <tr className='bg-brand-dark/60 text-white text-base dark:bg-brand dark:text-brand-dark'>
                <td>Date</td>
                <td>IP</td>
                <td>User</td>
                <td>Action</td>
                <td>Tx</td>
              </tr>
              <tr>
                <td>May 26, 2022</td>
                <td>48.132.130.72</td>
                <td>Johnson (teacher)</td>
                <td>Added grade</td>
                <td><a href='https://ropsten.etherscan.io/tx/0x8a360917e01c35eb118de1792836f92770654f02c35d19ff51972e28de6c247a' target='_blank'>&rarr; Verify</a></td>
              </tr>
              <tr>
                <td>July 1, 2022</td>
                <td>39.68.24.198</td>
                <td>Garcia (teacher)</td>
                <td>Added grade</td>
                <td><a href='https://ropsten.etherscan.io/tx/0x8a360917e01c35eb118de1792836f92770654f02c35d19ff51972e28de6c247a' target='_blank'>&rarr; Verify</a></td>
              </tr>
              <tr>
                <td>August 25, 2022</td>
                <td>88.221.92.158</td>
                <td>Davis (admin)</td>
                <td>Changed grade</td>
                <td><a href='https://ropsten.etherscan.io/tx/0x8a360917e01c35eb118de1792836f92770654f02c35d19ff51972e28de6c247a' target='_blank'>&rarr; Verify</a></td>
              </tr>
              <tr>
                <td>October 8, 2022</td>
                <td>134.32.31.243</td>
                <td>Miller (teacher)</td>
                <td>Reviewed grade</td>
                <td><a href='https://ropsten.etherscan.io/tx/0x8a360917e01c35eb118de1792836f92770654f02c35d19ff51972e28de6c247a' target='_blank'>&rarr; Verify</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Activity
