// import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

import React, { useState } from 'react';
import { Header, SearchForm, Button, Input } from './Searchbar.styled';

// export class Searchbar extends React.Component {
//   state = {
//     value: '',
//   };

//   handleChange = event => {
//     this.setState({ value: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.value.toLocaleLowerCase().trim());
//     this.setState({ value: '' });
//   };

//   render() {
//     return (
//       <Header>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <Button type="submit">
//             <FiSearch size="16px" />
//           </Button>

//           <Input
//             type="text"
//             autocomplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </SearchForm>
//       </Header>
//     );
//   }
// }

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value.toLocaleLowerCase().trim());
    setValue('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <FiSearch size="16px" />
        </Button>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};
