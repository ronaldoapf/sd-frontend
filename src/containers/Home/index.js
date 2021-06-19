import { useHistory } from 'react-router-dom';

import Button from 'components/Button';

import styles from './styles.module.css';

const Home = () => {
  
  const history = useHistory();
  return (
    <>
    <section>
      <div className={styles.card}>
        <h1>Você é?</h1>
        <div style={{display: 'flex', width: '100%', justifyContent: 'space-evenly'}}>
          <Button variant="contained" color="primary" onClick={() => history.push('/login')}>
            Professor
          </Button>

          <Button variant="outlined" color="default" onClick={() => history.push('/estudante')}>
            Aluno
          </Button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;