import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App';

import { books } from './books';
import Book from './Book';
import { greeting } from './testing/testing';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function Greeting() {
  // return React.createElement('h1', {}, 'hello moni');
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, 'hello Moni')
  // );

  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Monali Gangane</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

// const firstBook = {
//   img: 'https://images-eu.ssl-images-amazon.com/images/I/51Jb9-WlnkL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
//   title: 'Monali gangane author name',
//   author: 'kajal ms',
// };

// const secondBook = {
//   img: 'https://m.media-amazon.com/images/I/61KhZdrXy3L._AC_UL320_.jpg',
//   title: 'new mind to chckup',
//   author: 'latika ms',
// };

// const books = [
//   {
//     id: 1,
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/51Jb9-WlnkL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
//     title: 'Monali gangane author name',
//     author: 'kajal ms',
//   },

//   {
//     id: 2,
//     img: 'https://m.media-amazon.com/images/I/61KhZdrXy3L._AC_UL320_.jpg',
//     title: 'new mind to chckup',
//     author: 'latika ms',
//   },
// ];

const names = ['john', 'peter', 'sussan'];
// const BookList = () => {
//   return (
//     <>
//       <section className="booklist">
//         <Book job="deverloer" />
//         <Book title="random title" number={23} />
//       </section>
//     </>
//   );
// };

// const BookList = () => {
//   return (
//     <>
//       <section className="booklist">
//         <Book
//           img={firstBook.img}
//           title={firstBook.title}
//           author={firstBook.author}
//         >
//           Lorem 23 jjgjer jdsfhjergf jkebfgej jewbfjre wejgfb3gj
//         </Book>
//         <Book
//           title={secondBook.title}
//           img={secondBook.img}
//           author={secondBook.author}
//         />
//       </section>
//     </>
//   );
// };
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);
// const BookList = () => {
//   return (
//     <>
//       <section className="booklist">{newNames}</section>
//     </>
//   );
// };
// const BookList = () => {
//   return (
//     <>
//       <section className="booklist">
//         {books.map((book) => {
//           // console.log(book);
//           const { img, title, author } = book;
//           return (
//             <div>
//               <h3>{title}</h3>
//               <h6>{author}</h6>
//             </div>
//           );
//         })}
//       </section>
//     </>
//   );
// };

// const BookList = () => {
//   return (
//     <>
//       <section className="booklist">
//         {books.map((book) => {
//           // console.log(book);
//           const { img, title, author } = book;
//           return <Book key={book.id} book={book} />;
//         })}
//       </section>
//     </>
//   );
// };

const BookList = () => {
  console.log(greeting);
  return (
    <>
      <section className="booklist">
        {books.map((book) => {
          // console.log(book);
          const { img, title, author } = book;
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
};
// const Book = () => {
//   return (
//     <>
//       <article className="book">
//         <Image />
//         <Title />
//         <Author />
//       </article>
//     </>
//   );
// };

// const Book = () => {
//   return (
//     <>
//       <article className="book">
//         <img
//           src="https://images-eu.ssl-images-amazon.com/images/I/51Jb9-WlnkL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
//           alt=""
//         />
//         <h1>Monali gangane author name</h1>
//         <h4>kajal sm</h4>
//       </article>
//     </>
//   );
// };

// const Book = (props) => {
//   console.log(props);
//   const title = 'Monali gangane author name';
//   const author = 'kajal sm';
//   const img =
//     'https://images-eu.ssl-images-amazon.com/images/I/51Jb9-WlnkL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg';
//   return (
//     <>
//       <article className="book">
//         <img src={props.img} alt="" />
//         <h1>{props.title}</h1>
//         <h4>{props.author}</h4>
//       </article>
//     </>
//   );
// };

// const Book = ({ img, title, author, children }) => {
//   // console.log(props);
//   // const { img, title, author } = props;
//   return (
//     <>
//       <article className="book">
//         <img src={img} alt="" />
//         <h1>{title}</h1>
//         <h4>{author}</h4>
//         {children}
//       </article>
//     </>
//   );
// };

// const Book = (props) => {
//   // console.log(props);
//   const { img, title, author } = props;
//   return (
//     <>
//       <article className="book">
//         <img src={img} alt="" />
//         <h1>{title}</h1>
//         <h4>{author}</h4>
//       </article>
//     </>
//   );
// };

// const Book = (props) => {
//   // console.log(props);
//   const { img, title, author } = props;
//   const clickHandler = () => {
//     alert('hello world');
//   };
//   const complexExample = (author) => {
//     console.log(author);
//   };
//   return (
//     <>
//       <article
//         className="book"
//         onMouseOver={() => {
//           console.log(title);
//         }}
//       >
//         <img src={img} alt="" />
//         <h1 onClick={() => console.log(title)}>{title}</h1>
//         <h4>{author}</h4>
//         <button type="submit" onClick={clickHandler}>
//           refrence example
//         </button>
//         <button type="button" onClick={() => complexExample(author)}>
//           complex example
//         </button>
//       </article>
//     </>
//   );
// };

// const Image = () => {
//   return (
//     <>
//       <img
//         src="https://images-eu.ssl-images-amazon.com/images/I/51Jb9-WlnkL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
//         alt=""
//       />
//     </>
//   );
// };
const Title = () => <h1>Monali gangane author name</h1>;
const Author = () => (
  <h4 style={{ colr: '#617d98', fontSize: '0.75', marginTop: '0.25rem' }}>
    kajal sm
  </h4>
);
root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <Greeting /> */}
    {/* <Greeting /> */}
    <BookList />
  </StrictMode>
);
