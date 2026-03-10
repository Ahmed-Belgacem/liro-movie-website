import React from "react";
import "./main.css";

function Main() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src="https://a.storyblok.com/f/178900/750x422/3b6e656077/35f634fae67162a4577d1a4e4c4a72191670576997_main.jpg/m/filters:quality(95)format(webp)"
          alt="background"
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="hero__badges">
          <span className="badge badge--featured">FEATURED</span>
          <span className="badge badge--new">NEW RELEASE</span>
        </div>

        <div className="hero__title">
          <h1 className="title__line title__line--white">That Time I Got</h1>
          <h1 className="title__line title__line--gradient">Reincarnated as a Slime</h1>
        </div>

        <div className="hero__meta">
          <span className="meta__match"><span className="meta__percent">97%</span> Match</span>
          <span className="meta__tag">2018</span>
          <span className="meta__plain">3 Seasons</span>
          <span className="meta__tag">HD</span>
        </div>

        <div className="hero__genres">
          <span>Isekai</span>
          <span className="genre__dot" />
          <span>Fantasy</span>
          <span className="genre__dot" />
          <span>Adventure</span>
        </div>

        <p className="hero__description">
          A 37-year-old man is killed and reincarnated in a fantasy world as a slime
          with unique abilities. As Rimuru Tempest, he builds a nation of monsters
          and forges alliances in an epic journey toward peace and power.
        </p>

        <div className="hero__actions">
          <button className="btn btn--play">
            <div className="btn__play-inner">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              <div className="btn__play-text">
                <span className="btn__continue">Continue Watching</span>
                <div className="btn__progress-bar">
                  <div className="btn__progress-fill" />
                </div>
                <span className="btn__play-label">Play Now</span>
              </div>
            </div>
          </button>

          <button className="btn btn--info">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" strokeLinecap="round" />
              <line x1="12" y1="12" x2="12" y2="16" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>More Info</span>
          </button>

          <button className="btn btn--mute">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;