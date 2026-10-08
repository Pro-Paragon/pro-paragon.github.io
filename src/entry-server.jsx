import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';

export { PRIVACY_TITLE, PRIVACY_DESCRIPTION } from './pages/BlockcadePrivacy.jsx';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
