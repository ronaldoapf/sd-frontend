import { Link } from 'react-router-dom';

import Button from 'components/Button';
import useAuth from 'contexts/AuthContext/useAuth';

import styles from './styles.module.css';

const Admin = () => {

  const { signOut } = useAuth();

  return (
    <>
      <div className={styles.adminContainer}>
        <div className={styles.menu}>
          <Link to="/cadastro-aluno">
            Cadastrar aluno
          </Link>

          <Link to="/alunos-cadastrados">
            Alunos cadastrados
          </Link>
        </div>
        <div className={styles.menu}>
          <Link to="/cadastro-disciplina">
            Cadastrar disciplina
          </Link>

          <Link to="/disciplinas-cadastradas">
            Disciplinas cadastradas
          </Link>
        </div>
        <div className={styles.menu}>
          <Link to="/cadastro-nota">
            Cadastrar nota
          </Link>

          <Link to="/notas-cadastradas">
            Notas cadastradas
          </Link>
        </div>

        <div className={styles.menu}>
          <Button variant="outlined" color="secondary" onClick={signOut}>
            Finalizar sessão
          </Button>
        </div>
      </div>
    </>
  );
};

export default Admin;