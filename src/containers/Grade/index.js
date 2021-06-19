import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';

import Input from 'components/Input';
import Select from 'components/Select';
import Button from 'components/Button';

import { toast, ToastContainer } from 'react-toastify';

import StudentApi from 'commons/resources/api/student';
import SubjectApi from 'commons/resources/api/subject';

import styles from './styles.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Grade = () => {
  const [listOfSubjects, setListOfSubjects] = useState();
  const [listOfStudents, setListOfStudents] = useState();

  useEffect(() => {
    SubjectApi.listSubjects().then(response => {
      const { data } = response;
      if(data) {
        const subjects = data?.map(subject => {
          return {
            value: subject.id,
            label: subject.subjectName
          }
        })
        setListOfSubjects(subjects);
      }
    }).catch(error => {
      const { response } = error;
      console.log(response.data);
    });
  }, [])

  useEffect(() => {
    StudentApi.listStudents().then(response => {
      const { data } = response;
      if(data) {
        const students = data?.map(student => {
          return {
            value: student.id,
            label: student.name
          }
        })
        setListOfStudents(students);
      }
    }).catch(error => {
      const { response } = error;
      console.log(response.data);
    })
  }, [])

  const handleSubmit = (values, { resetForm }) => {
    const { subject, student, grade } = values; 
    StudentApi.assignToASubject(student, subject, grade)
    .then(response => {
      const { data } = response;
      resetForm();
      if(data) toast.success('Nota atribuída com sucesso');
    }).catch(error => {
      const { response } = error;
      console.log(response.data);
    });
  };

  return (
    <div className={styles.containerPage}>
      <ToastContainer />
      <div className={styles.card}>
       <h1>Cadastrar nota</h1>
        <Formik
          initialValues={{}}
          validationSchema={null}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <Select
                name="subject"
                label="Disciplina"
                options={listOfSubjects || []}
              />
                <Select
                name="student"
                label="Aluno"
                options={listOfStudents || []}
              />
              <Input
                name="grade"
                label="Nota obtida"
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

export default Grade;