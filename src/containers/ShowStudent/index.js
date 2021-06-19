import { useEffect, useState } from 'react';

import StudentApi from 'commons/resources/api/student';

import styles from './styles.module.css';

const ShowStudent = () => {

  const [listOfStudents, setListOfStudents] = useState([]);

  useEffect(() => {
    StudentApi.listStudents().then(response => {
      const { data } = response;
      if(data) setListOfStudents(data);
    }).catch(error => {
      const { response } = error;
      console.log(response);
    });

  }, []);

  return (
    <div className={styles.containerPage}>
      <div>
        <h1>Alunos cadastrados</h1>
      </div>
      <table border="1px">
        <thead>
          <tr>
            <th>Nome do aluno</th>
            <th>E-mail do Aluno</th>
          </tr>
        </thead>
        <tbody>
          {listOfStudents.map(student => {
            return (
              <tr>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowStudent;