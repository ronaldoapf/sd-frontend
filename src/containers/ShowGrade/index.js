import { useEffect, useState } from 'react';

import StudentApi from 'commons/resources/api/student';
import styles from './styles.module.css';

const ShowGrade = () => {

  const [listOfItems, setListOfItems] = useState();

  useEffect(() => {
    StudentApi.listStudents()
    .then(response => {
      const { data } = response;
      if(data) setListOfItems(data);
    })
    .catch(error => {
      const { response } = error;
      console.log(response);
    });
  }, [])
  
  return (
    <div className={styles.containerPage}>
      <div>
        <h1>Notas cadastradas</h1>
      </div>
      <div className={styles.listOfStudents}>
        {listOfItems?.map(item => {
          return (
            <div className={styles.student}>
              <p>Nome do Aluno: {item.name}</p>
              <table border="1px">
                <thead>
                  <tr>
                    <th>Nome da disciplina</th>
                    <th>Nota obtida</th>
                  </tr>
                </thead>
                <tbody>
                  {item.grades?.map(grade => {
                    return (
                      <tr>
                        <>
                          <td>{grade?.subject.subjectName}</td>
                          <td>{grade?.grade}</td>
                        </>
                      </tr>
                      )
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ShowGrade;