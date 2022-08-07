import { Component } from 'react';
import {
  SearchBarWrapper,
  SearchBarForm,
  SearchBarFormButton,
  SearchFormInput,
} from './SearchBar.styled';
import { BiSearch } from 'react-icons/bi';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <SearchBarWrapper>
        <SearchBarForm onSubmit={this.handleSubmit}>
          <SearchBarFormButton type="submit">
            <BiSearch size="40" />
          </SearchBarFormButton>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchBarForm>
      </SearchBarWrapper>
    );
  }
}