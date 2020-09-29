import UpdateItem from '../components/UpdateItem';

const Sell = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />  {/* Destructuring the query, getting props from the _app */}
  </div>
);

export default Sell;

