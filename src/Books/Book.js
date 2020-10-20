import React from 'react';
import './Books.css';
import { booksInformationList } from './books';

function Booklist() {
  return (
    <React.Fragment>
      <section className='booklist'>
        {booksInformationList.map((element) => {
          return (
            <BooksComponent key={element.id} {...element}></BooksComponent>
          );
        })}
      </section>
    </React.Fragment>
  );
}

const BooksComponent = ({ image, title, author, id }) => {
  const clickHandler = () => {
    alert('hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  const zoom = (tagId) => {
    // document.getElementById(tagId).style.margin = '10px 10px 10px 10px';
    document.getElementById(tagId).style.transition = 'transform .35s';
    document.getElementById(tagId).style.transform = 'scale(1.2)';
  };

  const withoutZoom = (tagId) => {
    document.getElementById(tagId).style.transform = 'none';
  };

  return (
    <React.Fragment>
      <div
        id={id}
        onMouseOver={() => zoom(id)}
        onMouseOut={() => withoutZoom(id)}
      >
        <article className='book'>
          <img className='book' src={image} alt='' srcSet='' />
          <h1>{title}</h1>
          <h4>{author}</h4>
          <button type='button' onClick={clickHandler}>
            Click Me
          </button>
          <button type='button' onClick={() => complexExample(author)}>
            more complex example
          </button>
        </article>
      </div>
    </React.Fragment>
  );
};

export default Booklist;
