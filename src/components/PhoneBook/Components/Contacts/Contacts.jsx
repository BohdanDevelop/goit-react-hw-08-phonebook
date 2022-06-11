import style from './Contacts.module.scss';

import PropTypes from 'prop-types';

// const markUp = names.filter(({name}) => name.toUpperCase().includes(filter.toUpperCase().trim())).map(({name, number}) =>{
//     return  <li className={style.li} onClick={onClick} key={nanoid()}>
//         <div>{name} : {number}</div>
//         <button className={style.button} name={name} type="button">Delete</button>
//     </li>
//   })
const Contacts = ({ names, onClick }) => {
  const contactsLi = names.map(({ name, phone, id }) => {
    return (
      <li className={style.li} onClick={evt => onClick(evt, id)} key={name}>
        <div>
          {name} : {phone}
        </div>
        <button className={style.button} type="button">
          Delete
        </button>
      </li>
    );
  });

  return <ul>{contactsLi}</ul>;
};
Contacts.propTypes = {
  names: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
  onClick: PropTypes.func.isRequired,
};

export default Contacts;
