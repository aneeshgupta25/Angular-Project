import { DUMMY_TRENDING } from "../fakes/dummy_trending";
import { EventModel } from "../shared/event-card/event.model";

export class TrendingComponentService {
    getData(): EventModel[] {
        return DUMMY_TRENDING;
    }
}