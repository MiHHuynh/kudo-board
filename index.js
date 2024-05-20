const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

app.use(express.json())

app.get('/books', (req, res) => {
    res.json(books)
})

app.get('/books/:bookId', (req, res) => {

})

app.post('/events', (req, res) => {
    const { name, date, location } = req.body

    const newEvent = {
        id: events.length + 1,
        name,
        date,
        location
    }

    events.push(newEvent)
    res.status(201).json(newEvent)
})

app.put('/books/:bookId', (req, res) => {
    const { bookId } = req.params
    const bookIndex = books.findIndex(book => book.id === parseInt(bookId))

    if (bookIndex !== -1) {
        const updatedBookInfo = req.body
        books[bookIndex] = { ...books[bookIndex], ...updatedBookInfo }
        res.json(books[bookIndex])
    } else {
        res.status(404).send('Book not found')
    }
})

app.delete('/contacts/:contactId', (req, res) => {
    const { contactId } = req.params
    const initialLength = contacts.length
    contacts = contacts.filter(contact => contact.id !== parseInt(contactId))

    if (contacts.length < initialLength) {
        res.status(204).send()
    } else {
        res.status(404).send('Contact not found')
    }
})