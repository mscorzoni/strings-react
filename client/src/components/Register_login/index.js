import React from 'react';
import MyButton from '../utils/button';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Cevadis im ampola pa arma uma pindureta. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
            <MyButton
                type="default"
                title="Create an account"
                linkTo="/register"
                addStyles={{
                  margin: '10px 0 0 0'
                }}
             />
          </div>
          <div className="right">
            <h2>Registered customers</h2>
            <p>If you have an accoutn please log in</p>
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;