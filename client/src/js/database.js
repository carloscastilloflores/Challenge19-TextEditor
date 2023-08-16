import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Putting data into the database');
  try {
    const EdContactDB = await openDB('jate', 1);
    const tx = EdContactDB.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    await store.put({ id: 1, value: content });
    console.log('Data saved to the database');
  } catch (error) {
    console.error('Error putting data into the database:', error);
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const editDB = await openDB('jate', 1);
    const tx = editDB.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    console.log('Retrieved data from the database:', result);
    return result; // No need to access result.value directly
  } catch (error) {
    console.error('Error getting data from the database:', error);
    return []; // Return an empty array or appropriate default value on error
  }
};

initdb();
