function bookReference(title) {
    return {
        title,
        isbn: '8d856847592d2dc0ab56bb6098e939e3b8e10895',
    };
}


const book = {
    isbn: '8d856847592d2dc0ab56bb6098e939e3b8e10895',
    preface: 'a great book',
};

const bookContent = {
    text: 'a lot of text'
};

export function searchBookWithCallback(title, ok, error) {
    return ok(bookReference(title));
}

export function getBookWithCallback(isbn, ok, error) {
    return ok(book);
}

export function getBookContentWithCallback(isbn, ok, error) {
    return ok(bookContent);
}

export function searchBook(title) {
    return Promise.resolve(bookReference(title));
}

export function getBook(isbn) {
    return Promise.resolve(book);
}

export function getBookContent(isbn) {
    return Promise.resolve(bookContent);
}