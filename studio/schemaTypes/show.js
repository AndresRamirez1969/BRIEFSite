export default {
    name: 'show',
    type: 'document',
    title: 'Show',
    fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'date', type: 'datetime', title: 'Date'},
        {name: 'location', type: 'string', title: 'Location'},
        {name: 'ticketLink', type: 'url', title: 'Ticket Link'},
    ]
}