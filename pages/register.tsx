// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { generateToken } from '../lib/auth';
import Head from 'next/head';
import SampleTable from '../lib/sample-table';

const RegisterPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastName] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [tel, setTel] = useState('');
  const [err, setErr] = useState('');

   

  let arr=[
    {name:'عنوان'},
    {name:'فروش'},
    {name:'خرید'},
  ]

  const handleLogin = async () => {
    router.push('/login');

  };
  const handleRegister = async () => {
    // Your authentication API call here
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password ,name,lastname,code,tel}),
    });

    const data = await response.json();

    if (data.success) {
      // Set the token in a cookie
      document.cookie = `token=${data.token}`;
      router.push('/dashboard');
    }
    else{

        setErr('این مشخصات قبلا ثبت شده است');
      }
  };

  return (
    <div>
      

      <Head>
      <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
              rel="stylesheet"
            />
       
       <script
              src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            ></script>
        
            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            ></script>
        

      </Head>
    

    <nav
      className="navbar navbar-expand-sm navbar-light bg-light"
    >
      <div className="container">
        <a className="navbar-brand" href="#">

          قیمت روز دلار : <span className='text-danger'>50,488</span>
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page"
                >یکشبنه 19 آذر 1402
                <span className="visually-hidden">(current)</span></a
              >
            </li>
            
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    
    
    
    
    <div className="container  flex-column d-flex justify-content-center align-items-center">

    <div className='row  '>

      <div className='d-flex justify-content-center align-items-stretch flex-column text-center'>


      {err && <div
  className="alert alert-danger"
  role="alert"
>
  <strong>پیغام</strong> {err}
</div>
}
      <h1
        className='mt-2'
        >LOGO</h1>
        <h5
        className='mt-2'
        >پیشخوان نمایش آنلاین سهام</h5>
      <input
        type="text"
        placeholder="نام "
        value={name}
        className='mt-2'
        required={true}
        onChange={(e) => setName(e.target.value)}
      />

<input
        type="text"
        placeholder="نام خانوادگی "
        value={lastname}
        required
        className='mt-2'
        onChange={(e) => setLastName(e.target.value)}
      />


<input
        type="text"
        placeholder="کد ملی"
        required
        value={code}
        className='mt-2'
        onChange={(e) => setCode(e.target.value)}
      />


<input
        type="text"
        placeholder="شماره تلفن"
        value={tel}
        required
        className='mt-2'
        onChange={(e) => setTel(e.target.value)}
      />



<input
        type="text"
        placeholder="نام کاربری"
        value={username}
        required
        className='mt-2'
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="رمز عبور"
        className='mt-2'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className='mt-2'
        onClick={handleLogin}>ورود </button>
      <button 
        className='mt-2'
        onClick={handleRegister}>ثبت نام</button>
      </div>
    
    
    </div>

<br/>
    <SampleTable title={'قیمت سکه امروز مورخ 19 آذر 1402 به شرح زیر است'} cols={arr}></SampleTable>


<div
  className="table-responsive"
>
  <table
    className="table table-primary"
  >
 
    <tbody>
      <tr className="">
        <td><button>مجوز</button></td>
        <td><button>مجوز</button></td>
        <td scope="row">درباره ما</td>
      </tr>
      <tr className="">
        <td><button>مجوز</button></td>
        <td><button>مجوز</button></td>
        <td scope="row">تماس با ما</td>
      </tr> <tr className="">
        <td><button>مجوز</button></td>
        <td><button>مجوز</button></td>
        <td scope="row">پیگیری سفارش</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>

    <footer>
      <div className='container'>
        <div className='d-flex justify-content-center align-items-stretch flex-row text-center'>
        <div className='col'>Tel</div>
        <div className='col'>Telegram</div>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default RegisterPage;
