export const comments: Comment[] = [
    {
        id: 1,
        text: 'This is the first comment'
    },
    {
        id: 2,
        text: 'This is the second comment'
    },
    {
        id: 3,
        text: 'This is the third comment'
    }
]

export interface Comment {
    id?: number;
    text?: string;
}

