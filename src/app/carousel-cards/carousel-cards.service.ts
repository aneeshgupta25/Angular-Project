import { DUMMY_CAROUSEL_CARDS } from "../fakes/dummy_carousel_cards";
import { CarouselCardsModel } from "./carousel-cards.model";

export class CarouselCardsService {

    getData(): CarouselCardsModel[] {
        return DUMMY_CAROUSEL_CARDS;
    }
}