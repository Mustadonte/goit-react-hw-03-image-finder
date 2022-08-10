import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchBarWrapper,
  SearchBarForm,
  SearchBarFormButton,
  SearchFormInput,
} from './SearchBar.styled';
import { BiSearch } from 'react-icons/bi';
import { toast } from 'react-toastify';

export class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query === '') {
      toast.warn('Введіть запит');
      return;
    }
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
            value={this.state.query.trim()}
            onChange={this.handleChange}
          />
        </SearchBarForm>
      </SearchBarWrapper>
    );
  }
}
