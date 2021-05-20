/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import  ContainerPage  from '../containers/ContainerPage';

describe('Testing ContainerPage Container', () => { 
  // beforeAll(() => server.listen());
  // afterAll(() => server.close());

  it('should render a list of avatar characters and redirect to a detail page', async () => { 
    render(<MemoryRouter> <ContainerPage/> </MemoryRouter>);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});
