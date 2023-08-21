import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title', () => {
  render(<App />);
  const codingExerciseTitle = screen.getByText("React Coding Exercise");
  expect(codingExerciseTitle).toBeInTheDocument();
});
