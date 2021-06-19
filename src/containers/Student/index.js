import { Formik, Form } from 'formik';

import Input from 'components/Input';
import Button from 'components/Button';

import { toast, ToastContainer } from 'react-toastify';

import StudentApi from 'commons/resources/api/student';

import styles from './styles.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Student = () => {
  const handleSubmit = (values, { resetForm }) => {
    StudentApi.create(values)
    .then(response => {
      const { data } = response;
      resetForm();
      if(data) toast.success('Aluno cadastrado com sucesso');
    })
    .catch(error => {
      const { response } = error;
      toast.error(response.data);
      console.log(error);
    });
  };

  return (
    <div className={styles.containerPage}>
      <ToastContainer />
      <div className={styles.card}>
       <h1>Cadastro de aluno</h1>
      <Formik
          initialValues={{}}
          validationSchema={null}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <Input
                name="name"
                label="Nome completo"
                type="text"
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
              />
              <Button variant="contained" color="primary" type="submit">
                Cadastrar
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Student;