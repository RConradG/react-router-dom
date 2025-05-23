import { useState } from 'react';

const initialState = {
  name: '',
  weight: 0,
  height: 0,
};

const PokemonForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addPokemon(formData);
    setFormData(initialState);
  };

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value // can also used destructured syntax here
    })
  }; 

  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            />
          <label htmlFor='weight'>Weight:</label>
          <input
            type='number'
            id='weight'
            name='weight'
            value={formData.weight}
            onChange={handleChange}
            />
          <label htmlFor='height'>Height:</label>
          <input
            type='number'
            id='height'
            name='height'
            value={formData.weight}
            onChange={handleChange}
            />
            <button type='submit'>Submit</button>
      </form>
    </main>
  );  

};

export default PokemonForm;