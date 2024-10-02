import { DUMMY_EVENTS_GENRE } from "../fakes/dummy_events_genre";
import { EventsGenreModel } from "./events-genre.model";

export class EventsGenreService {

    getData(): EventsGenreModel[] {
        return DUMMY_EVENTS_GENRE;
    }
}