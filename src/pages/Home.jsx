import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section>
        <h1>Pro Paragon Software</h1>
        <p className="lead">
          An independent studio building thoughtful games for mobile, games about thinking
          rather than reflexes.
        </p>
      </section>

      <section>
        <h2>Our games</h2>
        <div className="card">
          <h3>Blockcade</h3>
          <p>
            Slide blocks, complete the objectives, outwit the hazards trying to stop you. A
            sliding block puzzle game for Android and iOS.
          </p>
          <p>
            <Link to="/blockcade">About Blockcade</Link>
            {' · '}
            <a href="/blockcade/privacy/">Privacy Policy</a>
          </p>
        </div>
      </section>

      <section>
        <h2>Get in touch</h2>
        <p>
          Questions, feedback, press or business enquiries:{' '}
          <a href="mailto:support@proparagonsoftware.com">support@proparagonsoftware.com</a>
        </p>
      </section>
    </>
  );
}
