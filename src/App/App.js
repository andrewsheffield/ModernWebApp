/* @flow */
import React from 'react';
import ItunesList from './ItunesList';

type Props = {};
type State = {
  fetching: boolean,
  fetched: boolean,
  error: boolean,
  errorMessage: string,

  searchValue: string,
  searchResults: Array<*>
};

export class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      fetching: false,
      fetched: false,
      error: false,
      errorMessage: "",

      searchValue: "",
      searchResults: []
    }

  }

  _handleSearch(event: KeyboardEvent): void {
    if (event.target instanceof HTMLElement) {
      this.setState({
        searchValue: event.target.value
      })
    }
  }

  _setFetchingState() {
    this.setState({
      fetching: true,
      fetched: false,
      error: false,
      errorMessage: ""
    });
  }

  _setFetchedState() {
    this.setState({
      fetching: false,
      fetched: true,
      error: false,
      errorMessage: ""
    });
  }

  _setErrorState(errorMessage: string) {
    this.setState({
      fetching: false,
      fetched: false,
      error: true,
      errorMessage: errorMessage || "Unkown error"
    });
  }

  _handleClick(): void {
    this._setFetchingState();

    this._fetchItunesData(this.state.searchValue)
      .then( response => {
        console.log(response)
        this.setState({
          searchValue: "",
          searchResults: response.results
        });
        this._setFetchedState();
      })
      .catch( error => {
        this._setErrorState(error.message);
        console.dir(error);
      });
  }

  _fetchItunesData(searchValue: string) {
    const newSearchValue = searchValue.replace(' ', '+')
    return fetch(`api/search?term=${newSearchValue}`)
      .then( response => response.json() )
  }

  render() {
    const { fetching, fetched, error, errorMessage, searchResults } = this.state;

    return <div>
      <input value={this.state.searchValue} onChange={ e => this._handleSearch(e) } type="text" placeholder="search itunes" />
      <button onClick={ e => this._handleClick() }>Go!</button>
      <ItunesList 
        list={searchResults} 
        fetching={fetching} 
        fetched={fetched}
        error={error}
        errorMessage={errorMessage}
        />
    </div>
  }
  
}