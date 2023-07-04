import { RequestEvent, json } from "@sveltejs/kit";
import { comments } from "../../../../lib/comments";

export const GET = (requestEvent: RequestEvent) => {
    const { params } = requestEvent;
    const { commentId } = params;
    const comment = comments.find((c) => {
        const ncid = commentId ? +commentId : 0;
        return c.id === ncid;
    });
    return json(comment);
}

export const PATCH(comment: Comment) {

}