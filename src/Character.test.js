import { render, screen } from '@testing-library/react';
import Character from './Character';

test('renders the title', () => {
    const character = { name: 'Character1', attributes: { "strength": 10 } }
    render(<Character character={character} />);
    const attributesTitle = screen.getByText("Attributes");
    expect(attributesTitle).toBeInTheDocument();
});
