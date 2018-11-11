import { connect } from 'react-redux';
import searchInformation from './Information';

function mapStoreToProps(store) {
  return {
    info: store.search.selected
  };
}

export default connect(mapStoreToProps)(searchInformation);
