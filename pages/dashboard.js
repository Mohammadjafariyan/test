// pages/protected.js
import { verifyToken } from '../lib/auth'
import SampleTable from '../lib/sample-table'
import Head from 'next/head'
import ChartComponent from '../lib/samplechart'

const DashboardPage = ({ user }) => {
  let arr = [{ name: 'عنوان' }, { name: 'فروش' }, { name: 'خرید' }]
  let stock = [
    { name: 'نام سهام' },
    { name: 'تعداد' },
    { name: 'ارزش هر سهام' }
  ]

const handleExit = ()=>{
  document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

  window.location.reload();
}

  return (
    <div>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
        />

        <script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js'></script>

        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js'></script>



      </Head>


      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
      <ChartComponent />
          </a>
          <button
            className='navbar-toggler d-lg-none'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapsibleNavId'
            aria-controls='collapsibleNavId'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='collapsibleNavId' >
            <ul className='navbar-nav me-auto mt-2 mt-lg-0'>
              <li className='nav-item'>
                
              <ul className=' my-2 my-lg-0' style={{listStyle:'none'}} > 
            <li className='nav-item' >
                <a className='nav-link active' href='#' aria-current='page'>
                تعداد سهام : 35
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='#' aria-current='page'>
                ارزش کل سهام : 10,115,155,054
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#' aria-current='page'>
           تغییرات در ماه گذشته:  +152,465,156
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='#' aria-current='page'>
            نرخ رشد سالانه:  116,654,001
                </a>
              </li>


            </ul>

              </li>
            </ul>
            <ul className='navbar-nav d-flex my-2 my-lg-0'>
            
            <li>
            <ul className=' my-2 my-lg-0' style={{listStyle:'none'}} dir="rtl"> 
            <li className='nav-item'>
                <a className='nav-link active' href='#' aria-current='page'>
                نام : {user.name}
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='#' aria-current='page'>
               نام خانوادگی :  {user.lastname}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#' aria-current='page'>
              شماره ملی:  {user.code}
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='#' aria-current='page'>
              شماره تلفن:  {user.tel}
                </a>
              </li>
              <li className='nav-item'>
                <button onClick={handleExit}  href='#' aria-current='page'>
              خروج 
                </button>
              </li>
            </ul>
            </li>
            </ul>
          </div>
        </div>
      </nav>


<div className='container'>
      <div
        className='row d-flex flex-row justify-content-center align-items-center'
      >

        <div class="col-md-4 card">
          <div class="card-body">
          <SampleTable
            title={'لیست سهام/تعداد/ارزش هر سهم'}
            cols={stock}
          ></SampleTable>
          </div>
        </div>
        
   
        <div class="col-md-4 card">
          <div class="card-body">
          <SampleTable
            title={'قیمت سکه امروز مورخ 19 آذر 1402 به شرح زیر است'}
            cols={arr}
          ></SampleTable>
        </div>
        </div>

        <div class="col-md-4 card">
          <div class="card-body">
          <SampleTable
            title={'قیمت سکه امروز مورخ 19 آذر 1402 به شرح زیر است'}
            cols={arr}
          ></SampleTable>
        </div>
        </div>


        </div>
      </div>

    </div>
  )
}

export const getServerSideProps = async context => {
  const token = context.req.cookies.token

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const user = verifyToken(token)

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { user }
  }
}

export default DashboardPage
