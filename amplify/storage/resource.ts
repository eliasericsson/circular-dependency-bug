import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'chapterStore',
    access: (allow) => ({
        'chapters/*': [
            allow.authenticated.to(['read']),
            allow.groups(['ADMINS']).to(['read', 'write', 'delete']),
        ],
    }),
});
