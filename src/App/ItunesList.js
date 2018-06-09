/* @flow */

import React from 'react';

type ItunesResult = {
  artistId: number,
  artistName: string,
  artistViewUrl: string,
  artworkUrl100: string,
  artworkUrl30: string,
  artworkUrl60: string,
  collectionCensoredName: string,
  collectionExplicitness: string,
  collectionId: number,
  collectionName: string,
  collectionPrice: number,
  collectionViewUrl: string,
  country: string,
  currency: string,
  discCount: number,
  discNumber: number,
  isStreamable: true,
  kind: song,
  previewUrl: string,
  primaryGenreName: string,
  releaseDate: string,
  trackCensoredName: string,
  trackCount: number,
  trackExplicitness: string,
  trackId: number,
  trackName: string,
  trackNumber: number,
  trackPrice: number,
  trackTimeMillis: number,
  trackViewUrl: string,
  wrapperType: string,
};

type Props = {
  list: Array<ItunesResult>,
  fetching: boolean,
  fetching: boolean,
  error: boolean,
  errorMessage: string
};

type State = {};

export default class ItunesList extends React.Component<Props, State> {
  render() {

    const { fetched, fetching, error, errorMessage, list } = this.props;

    if (fetching) {
      return <div><span>Loading...</span></div>
    }
    else if (error) {
      return <div><span>{errorMessage || "Unkown Error Occured"}</span></div>
    }
    else if (fetched) {
      const searchResults = list.map( result => {
        return (
          <div>
            <li key={result.trackId}>{result.trackName}</li>
            <img src={result.artworkUrl100} />
          </div>
        )
      })
      return (
        <div>
          <ul>{searchResults}</ul>
        </div>
      )
    }
    else {
      return <div><span>Search above for itunes songs</span></div>
    }

    
  }
}