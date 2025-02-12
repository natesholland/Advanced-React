import PropTypes from 'prop-types';
import Link from 'next/link';

import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatAmount from '../lib/formatAmount';

export const Product = ({ product }) => (
  <ItemStyles>
    <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
    <Title>
      <Link href={`/product/${product.id}`}>{product.name}</Link>
    </Title>
    <PriceTag>{formatAmount(product.price)}</PriceTag>
    <p>{product.description}</p>
    {/* TODO add buttons to edit and delete */}
  </ItemStyles>
);

Product.propTypes = {
  product: PropTypes.object,
};
