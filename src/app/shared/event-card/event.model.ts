export interface EventModel {
    id: number;
    img: string;
    title: string;
    date: string;
    time: string;
    location: string;
    label: EventLabels;
    price: number;

}

export enum EventLabels {
    MOST_POPULAR = "Most popular",
    BEST_PRICE = "Best Price Guaranteed",
    TOP_SELLING = "Top Selling"
}