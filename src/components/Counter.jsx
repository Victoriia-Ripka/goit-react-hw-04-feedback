import React from 'react';
import { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './Buttons';
import { Section } from './Section';
import { SectionStyled, Text } from './styles.styled';

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const positiveFeedback = total ? Math.round((good / total) * 100) : '0';

  const feedbackState = Object.keys({ good, neutral, bad });
  return (
    <SectionStyled>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackState}
          onLeaveFeedback={() => handleFeedback}
        />
      </Section>
      {total === 0 ? (
        <Text>No feedback given</Text>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        </Section>
      )}
    </SectionStyled>
  );
}
