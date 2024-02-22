import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import css from './sharedLayout.module.css';

export default function SharedLayout() {
  return (
    <div>
      <header>
        <Link className={css.navLink} to="/">
          Home
        </Link>
        <Link className={css.navLink} to="/movies">
          Movies
        </Link>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
