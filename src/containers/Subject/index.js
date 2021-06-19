import { Formik, Form } from 'formik';

import Input from 'components/Input';
import Button from 'components/Button';
import { toast, ToastContainer } from 'react-toastify';

import SubjectApi from 'commons/resources/api/subject';

import styles from './styles.module.css';

import 'react-toastify/dist/ReactToastify.css';


const Subject = () => {
  const handleSubmit = (values, { resetForm }) => {
    SubjectApi.create(values)
    .then(response => {
      const { data } = response;
      resetForm();
      if(data) toast.success('Disciplina cadastrada com sucesso');
    })
    .catch(error => {
      console.log(error);
    })
  };

  return (
    <div className={styles.containerPage}>
      <ToastContainer />
      <div className={styles.card}>
       <h1>Cadastro de disciplina</h1>
        <Formik
          initialValues={{}}
          validationSchema={null}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <Input
                name="subjectName"
                label="Nome da disciplina"
                type="text"
              />
              <Input
                name="subjectCode"
                label="Código da disciplina"
                type="text"
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

export default Subject;