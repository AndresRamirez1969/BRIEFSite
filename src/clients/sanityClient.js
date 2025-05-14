import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 't9s2j5im',
    dataset: 'production',
    useCdn: true,
})