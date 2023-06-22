import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid4 } from 'uuid';

const API_LINK = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4IBeVv3WbRMRlzmzFBne/books/';

const initialState = {
  bookList: [],
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk('books/fetchData', async () => {
  const response = await axios.get(API_LINK);
  return response.data;
});

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (bookInfo) => {
  try {
    const response = await axios.post(API_LINK, bookInfo);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to add book: ${error.message}`);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    await axios.delete(API_LINK + bookId);
    return bookId;
  } catch (error) {
    throw new Error(`Failed to remove book: ${error.message}`);
  }
});

export const addBook = createAsyncThunk('books/addBook', async ({ title, author }) => {
  const newBook = {
    item_id: uuid4(),
    title,
    author,
    category: 'Action',
  };
  return newBook;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookList = Object.entries(action.payload)
          .flatMap(([key, value]) => value.map((book) => ({ ...book, item_id: key })));
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBookToApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = true;
        state.bookList = state.bookList.filter((book) => book.item_id !== action.payload);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.bookList.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
