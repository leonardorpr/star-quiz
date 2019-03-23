import GoogleImages from 'google-images';

// here I would use .env, but now it's just a demo
const CSE_ID = '018057695921300292746:9ootm9o6fja';
const API_KEY = 'AIzaSyANFxwiuG17P7aFONR2qpgdo4BHMyVK3dI';

const getImage = async (name) => {
  const client = new GoogleImages(CSE_ID, API_KEY);

  const image = await client.search(`${name} star wars`);

  return image[0].url;
};

export default getImage;
