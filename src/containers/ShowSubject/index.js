import { useEffect, useState } from 'react';
import styles from './styles.module.css';

import SubjectApi from 'commons/resources/api/subject';

const ShowSubject = () => {
  const [listOfSubjects, setListOfSubjects] = useState([]);

  useEffect(() => {
    SubjectApi.listSubjects().then(response => {
      const { data } = response;
      if(data) setListOfSubjects(data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className={styles.containerPage}>
      <div>
        <h1>Disciplinas cadastradas</h1>
      </div>
      <table border="1px">
        <thead>
          <tr>
            <th>Código da disciplina</th>
            <th>Nome da disciplina</th>
          </tr>
        </thead>
        <tbody>
          {listOfSubjects.map(subject => {
            return (
              <tr>
                <td>{subject.subjectCode}</td>
                <td>{subject.subjectName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowSubject;