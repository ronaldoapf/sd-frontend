import { Formik, Form } from 'formik';

import { useHistory } from 'react-router-dom';

import Input from 'components/Input';
import Button from 'components/Button';

import StudentApi from 'commons/resources/api/student';

import styles from './styles.module.css';

const ViewStudent = () => {

	const history = useHistory();

	const handleSubmit = (values) => {
		const { email } = values;
		StudentApi.getUserByEmail(email).then(response => {
			localStorage.setItem('student', JSON.stringify(response.data));
			history.push('/ver-notas');
		}).catch(error => {
			console.log(error.response.data);
		});
  }
  return (
    <>
    <section>
      <div className={styles.card}>
        <h1>Visualizar notas</h1>
        <Formik
						initialValues={{}}
						validationSchema={null}
						onSubmit={handleSubmit}
					>
						{({ values }) => (
							<Form>
								<Input
									name="email"
									label="Email do estudante"
									type="text"
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

export default ViewStudent;