import {chai, expect} from './imports';
import * as bookLibrary from './8_promises';

describe('Async Await', () => {

    it('should linearize even more', async () => {
        try {
            let bookReference = await bookLibrary.searchBook('Les fleurs du mal');
            expect(bookReference.title).to.equal('Les fleurs du mal');
            let book = await bookLibrary.getBook(bookReference.isbn);
            expect(book.preface).to.equal('a great book');
            let bookContent = await bookLibrary.getBookContent(book.isbn);
            expect(bookContent.text).to.equal('a lot of text');
        } catch (error) {
            console.log(error);
            throw error;
        }
    });
});
