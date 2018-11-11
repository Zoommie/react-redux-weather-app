import { connect } from 'react-redux';
import searchHistory from './History';

function mapStoreToProps(store) {
  return {
    searchHistory: store.search.all
  };
}

export default connect(mapStoreToProps)(searchHistory);
