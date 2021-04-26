import PropTypes from 'prop-types';

const productType = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};

export const DialogFormType = {
  open: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  isNewItem: PropTypes.bool,
  initialProduct: PropTypes.shape(productType),
}

export const DialogRemoveType = {
  open: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  product: PropTypes.shape(productType).isRequired,
}

export const ProductCardType = {
  product: PropTypes.shape(productType).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}
