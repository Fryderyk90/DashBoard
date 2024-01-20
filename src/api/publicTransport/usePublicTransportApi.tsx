import { useQuery } from "@tanstack/react-query";
import { getMetroInformation, getTrainInformation } from "./constants";
import { DeparturesResponse, TransportDataObject, UseQueryResult } from "./types";



export const usePublicTransportApi = () => {
    const { isLoading: trainsIsLoading, isError: trainsIsError, error: trainsError, data: trainsResponse } = useQuery<DeparturesResponse, Error>({
        queryKey: ['trainData'],
        queryFn: () => fetchTransportData(getTrainInformation),
        staleTime: 540000
    }) as UseQueryResult<DeparturesResponse, Error>;

    const { isLoading: metrosIsLoading, isError: metrosIsError, error: metrosError, data: metrosResponse } = useQuery<DeparturesResponse, Error>({
        queryKey: ['metroData'],
        queryFn: () => fetchTransportData(getMetroInformation),
        staleTime: 540000
    }) as UseQueryResult<DeparturesResponse, Error>;

    const trainData: TransportDataObject = {
        isLoading: trainsIsLoading,
        isError: trainsIsError,
        error: trainsError,
        response: trainsResponse
    }

    const metroData: TransportDataObject = {
        isLoading: metrosIsLoading,
        isError: metrosIsError,
        error: metrosError,
        response: metrosResponse
    }

    return { trainData, metroData };
}


const fetchTransportData = async (request: string): Promise<DeparturesResponse> => {
    try {
        // fetch request
        const response = await fetch(request);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseText = await (response.json() as Promise<DeparturesResponse>);
        console.log('Response text:', responseText);

        return responseText;
    } catch (error) {
        console.error('Failed to fetch:', error);
        throw error;
    }
};