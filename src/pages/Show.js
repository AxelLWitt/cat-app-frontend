import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Show(props) {
  // set up nav function with the useNavigate hook
  const navigate = useNavigate();
  const { id } = useParams();
  const cats = props.cats;
  const cat = cats ? cats.find((p) => p._id === id) : null;
  const [editForm, setEditForm] = useState({
    name: "",
    title: "",
    image: ""
  });
  // handleChange function for form
  const handleChange = (event) => {
    setEditForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateCats(editForm);
  };
  const handleDelete = () => {
    props.deleteCats(cat._id);
    navigate('/');
  };
  const loaded = () => {
    return (
      <>
        <h1>{cat.name}</h1>
        <h2>{cat.title}</h2>
        <img
          className="avatar-image"
          src={cat.image}
          alt={cat.name}
        />
        <button id="delete" onClick={handleDelete}>
          DELETE
        </button>
      </>
    );
  };
  const loading = () => {
    return <h1>Loading ...</h1>;
  };
  useEffect(() => {
    if(cat) {
      setEditForm(cat);
    }
  }, [cat]);
  return (
    <div className="cat">
      { cat ? loaded() : loading() }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Cat" />
      </form>
    </div>
  );
}
export default Show;
