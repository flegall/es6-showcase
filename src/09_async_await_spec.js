import {chai, expect} from './imports';
import * as bookLibrary from './08_promises';

describe.skip('Async Await', () => {

    it('should linearize even more', () => {
        return bookLibrary.searchBook('Les fleurs du mal').then((bookReference) => {
            expect(bookReference.title).to.equal('Les fleurs du mal');
            return bookLibrary.getBook(bookReference.isbn);
        }).then((book) => {
            expect(book.preface).to.equal('a great book');
            return bookLibrary.getBookContent(book.isbn);
        }).then((bookContent) => {
            expect(bookContent.text).to.equal('a lot of text');
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    });
});
