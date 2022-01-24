import { INewsItem } from "./INewsItem";

export interface IApiResponse {
    status: string,
    totalResults: number,
    results: INewsItem[],
    nextPage: number
}