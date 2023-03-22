import axios from 'axios';

export const SeachByName = async search => {
    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${search}`
      );
      return data.results;
    } catch (error) {
      console.log(error);
    }
  };