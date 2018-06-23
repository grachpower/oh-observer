import { socialsSignatures } from "../config/social";

export function matchUserAgent(req): {isSocial: boolean} {
    if (!req.useragent) {
        return {
            isSocial: false,
        }
    }

    return {
        isSocial: socialsSignatures.includes(req.useragent.source.toLowerCase()),
    };
}