import React from 'react';

import Categorie from './Categorie';

const Categories = () => {
  return (
    <section className='p-8' id='categories'>
      <div className='grid gap-2 md:grid-cols-3 mb-2'>
        <Categorie
          name=' Football'
          image='https://media.sudouest.fr/6303544/1000x625/sudouest-photo-1-30594217.jpg?v=1633015637'
          style={{ width: '100%', height: 'auto' }}
        />
        <Categorie
          name='Fitness '
          image='https://quoifaireabordeaux.com/wp-content/uploads/2023/02/fitness-park-merignac-scaled.jpeg'
          style={{ width: '100%', height: 'auto' }}
        />
        <Categorie
          name='Basket-ball'
          image='https://cdn.vox-cdn.com/thumbor/_uZH1EiA2W5d6A7KrRe9_AvX7Wk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24096346/1243858031.jpg'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className='grid gap-2 md:grid-cols-2'>
        <Categorie
          name='Badminton'
          image='https://dicodusport.fr/wp-content/uploads/2016/01/Definition-badminton.png'
          style={{ width: '100%', height: 'auto' }}
        />
        <Categorie
          name='Tennis'
          image='https://www.letelegramme.fr/images/2018/05/30/face-a-l-italien-simone-bolelli-rafael-nadal-a-du_3969365_676x478p.jpg?v=1'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default Categories;

