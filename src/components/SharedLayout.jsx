import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';

export default function SharedLayout() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
