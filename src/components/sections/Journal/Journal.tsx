import { journalPosts } from '../../../data/site'
import './Journal.css'

/** 2026-08-04 -> 04 · 08 · 26 */
function formatDate(iso: string) {
  const [year, month, day] = iso.split('-')
  return `${day} · ${month} · ${year.slice(2)}`
}

export function Journal() {
  const year = journalPosts[0]?.date.slice(0, 4)

  return (
    <section className="journal" aria-labelledby="journal-title">
      <div className="journal-head">
        <h2 className="journal-title" id="journal-title">
          From the journal
        </h2>
        <p className="journal-meta">
          Patient Resources <i>·</i> {year}
        </p>
      </div>

      <ul className="journal-list">
        {journalPosts.map((post) => (
          <li className="journal-item" key={post.title}>
            <a className="journal-link" href="#">
              <img
                className="journal-thumb"
                src={post.image}
                alt=""
                width={320}
                height={213}
                loading="lazy"
                decoding="async"
              />

              <h3 className="journal-heading">{post.title}</h3>

              <time className="journal-date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>

              <svg
                className="journal-arrow"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="M4 12 12 4M12 4H6.5M12 4v5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
