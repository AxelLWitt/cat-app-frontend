import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';

function Main(props) {
  const [cats, setCats] = useState(null);
  const API_BASE_URL = 'http://localhost:3001/api/cats/';

  const getCats = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      const data = await response.json();
      setCats(data);
    } catch (error) {
      console.error("An error occurred while fetching cats:", error);
      // Optionally, show an error message to the user
    }
  };

  const createCats = async (cat) => {
    try {
      await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cat),
      });
      getCats();
    } catch (error) {
      console.error("An error occurred while creating a cat:", error);
      // Optionally, show an error message to the user
    }
  };

  const updateCats = async (cat, id) => {
    try {
      await fetch(API_BASE_URL + '/' + cat._id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cat),
      });
      getCats();
    } catch (error) {
      console.error("An error occurred while updating a cat:", error);
      // Optionally, show an error message to the user
    }
  };

  const deleteCats = async (id) => {
    try {
      await fetch(API_BASE_URL + '/' + id, {
        method: 'DELETE',
      });
      getCats();
    } catch (error) {
      console.error("An error occurred while deleting a cat:", error);
      // Optionally, show an error message to the user
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <main>
      <Routes>
        <Route 
          path="/" 
          element={
            <Index 
              cats={cats} 
              createCats={createCats} 
            />
          }
        />
        <Route
          path="/cats/:id"
          element={
            <Show
              cats={cats}
              updateCats={updateCats}
              deleteCats={deleteCats}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
