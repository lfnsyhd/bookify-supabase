import { useEffect, useState } from 'react';
import { useUser } from '../context/user';
import { useNavigate } from 'react-router-dom';
import routes from "../router/routes";
import TextInput from '../components/TextInput';
import Alert from '../components/Alert';
import Button from '../components/Button';
import HeaderLogin from '../components/HeaderLogin';
import FooterLogin from '../components/FooterLogin';
import LoginLayout from '../layouts/LoginLayout';

const Login = () => {
  const { user, login } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate(routes.admin?.dashboard);
      } else {
        navigate(routes.user?.dashboard);
      }
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    setLoading(true);
    setSuccess(false);

    try {
      await login(email, password);
      setSuccess(true);
    } catch (error: any) {
      setError(error?.response?.data?.message ? error?.response?.data?.message : 'Unknown error. Try again later');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <LoginLayout>
        <HeaderLogin>
          Masuk ke Bookify
        </HeaderLogin>
        {error && (
          <Alert
            type='danger'
            iconSize={18}
            message={error}
          />
        )}

        {success && (
          <Alert
            type='success'
            iconSize={18}
            message={'Login sukses'}
          />
        )}

        <TextInput
          id='email'
          type="email"
          label="Email"
          isLabel={true}
          placeholder="Email"
          value={email}
          onUpdate={setEmail}
          onEnter={handleLogin}
        />
        <TextInput
          id='password'
          type="password"
          label="Password"
          isLabel={true}
          placeholder="Password"
          value={password}
          onUpdate={setPassword}
          isToggle={true}
          onEnter={handleLogin}
        />
        <Button onClicked={handleLogin} isLoading={loading}>
          Masuk
        </Button>
        <FooterLogin
          text="Tidak punya akun?"
          textBold="Mendaftar ke Bookify"
          to={routes.register}
        />
      </LoginLayout>
    </>
  )
}

export default Login