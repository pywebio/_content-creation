import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Feature from './Feature';

const testCode = `import openai
from pywebio import start_server
from pywebio.output import put_table
from pywebio.input import input
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

def openai_response(question):
    response = openai.Completion.create(
        engine="davinci",
        prompt=question,
        temperature=0.5,
        max_tokens=100,
        top_p=0.3,
        frequency_penalty=0.6,
        presence_penalty=0.0,
        stop=['']
    )
    return '{}'.format(response.choices[0].text[6:])`.trim();

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Feature code={testCode} />
      </div>
    </section>
  );
}
