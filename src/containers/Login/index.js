import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';

import Input from 'components/Input';
import Button from 'components/Button';

import useAuth from 'contexts/AuthContext/useAuth';

import styles from './styles.module.css';

const Home = () => {

	const { signIn } = useAuth();
	const history = useHistory();

  const handleSubmit = (values) => {
		signIn(values, history);
  }

	return (
    <>
    <section>
      <div className={styles.card}>
        <h1>Login</h1>
        <Formik
						initialValues={{}}
						validationSchema={null}
						onSubmit={handleSubmit}
					>
						{({ values }) => (
							<Form>
								<Input
									name="email"
									label="E-mail"
									type="email"
								/>
								<Input
									name="password"
									label="Senha"
									type="password"
								/>
								<Button variant="contained" color="primary" type="submit">
									Entrar
								</Button>
							</Form>
						)}
					</Formik>
      </div>
    </section>

    </>
  );
};

export default Home;