import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button';
import styles from './styles.module.css';

const Notes = () => {

  const [studentInformation, setStudentInformation] = useState(null);
  const history = useHistory();
  
  useEffect(() => {
    const student = JSON.parse(localStorage.getItem('student'));
    setStudentInformation(student);
  }, []);
  
  const onClick = () => {
    localStorage.removeItem('student');
    history.push('/estudante'); 
  };

  return (
    <div className={styles.containerPage}>
      <div style={{ display: "flex"}}>
        <h1 style={{ marginRight: "20px"}}>Notas cadastradas - {studentInformation?.name}</h1>
        <Button variant="outlined" color="secondary" onClick={onClick}>
          Finalizar sessão
        </Button>
      </div>
      <table border="1px">
        <thead>
          <tr>
            <th>Código da disciplina</th>
            <th>Nome da disciplina</th>
            <th>Nota obtida</th>
          </tr>
        </thead>
        <tbody>
        {studentInformation?.grades.map(item => {
          return (
            <tr>
               <td>
                {item?.subject.subjectCode}
              </td>
              <td>
                {item?.subject.subjectName}
              </td>
              <td>
                {item?.grade}
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Notes;