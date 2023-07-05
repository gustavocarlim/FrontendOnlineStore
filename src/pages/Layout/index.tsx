import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

export default function Layout() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <Header onSubmit={ onSubmit } />
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
      <Outlet />
    </>
  );
}
