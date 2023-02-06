import { ApplicationError } from "../Error"

export class Origins {
    origins = [
        "academic",
        "health_agent",
        "amnesic",
        "artist",
        "athlete",
        "chef",
        "criminal",
        "repentant_cultist",
        "stray",
        "enginner",
        "executive",
        "investigator",
        "figther",
        "tycoon",
        "mercenary",
        "military",
        "factory_worker",
        "police",
        "religious",
        "public_server",
        "conspiracy_theorist",
        "T.I",
        "rural_worker",
        "crook",
        "university",
        "victim",
    ]

    constructor(
        readonly origin: string
    ) {
        for (this.origin in this.origins) {
            if (!this.origins.includes(this.origin)) {
                throw new ApplicationError('This origin not exists.', 400)
            }
        }
    }
}