import React from 'react';
import Main from '../layouts/Main';

import VisualCell from '../components/Visuals/VisualCell';
import data from '../data/visuals';

const Visuals = () => (
  <Main
    title="Visuals"
    description="Learn about Shivam Raval's artistic abilities."
  >
    <article className="post" id="visuals">
      <header>
        <div className="title">
          <p>I make interestings visuals and art from time to time. Have a look at
            some of my creations:
          </p>
        </div>
      </header>
      {data.map((project) => (
        <VisualCell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Visuals;
