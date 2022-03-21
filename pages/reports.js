import Head from 'next/head'

const Reports = () => {

  return (
    <>
      <Head>
        <title>Reports | Academic Records</title>
      </Head>

      <div className="pt-12">
        <h1 className='text-4xl text-center md:text-left mb-8'>Reports</h1>
        <h2 className='text-xl mb-4'>Available Reports:</h2>
        <ul className='ml-4 list-disc'>
          <li>Transcripts (PDF - CSV)</li>
          <li>Student Resume (PDF - CSV)</li>
          <li>Semester Report (PDF - CSV)</li>
        </ul>
      </div>
    </>
  )
}

export default Reports
