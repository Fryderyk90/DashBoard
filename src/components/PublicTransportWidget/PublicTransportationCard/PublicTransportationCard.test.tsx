import { render, screen } from '@testing-library/react';
import { PublicTransportationCard } from "./PublicTransportationCard"

describe('PublicTransportationCard', () => {
    it('renders header with correct text', () => {
        render(
            <PublicTransportationCard>
                <PublicTransportationCard.Header text='My title' isLoading={false} />
            </PublicTransportationCard>);

        const headerElement = screen.getByTestId('public-transportation-card-header');
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveTextContent('My title');

        // check if App components renders headline
    });
    it('renders spinner when loading is true', () => {
        render(
            <PublicTransportationCard>
                <PublicTransportationCard.Header text='My title' isLoading={true} />
            </PublicTransportationCard>);

        const spinner = screen.getByTestId('public-transportation-card-spinner');
        expect(spinner).toBeInTheDocument();
    });
});



