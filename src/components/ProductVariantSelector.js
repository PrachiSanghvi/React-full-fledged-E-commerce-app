import React from 'react'
import { productSelectedVariant } from '../actions/productAction';
import { useDispatch } from 'react-redux';

const ProductVariantSelector = ({ product, options, variant }) => {
  let dispatch = useDispatch();
  // If we check for not null , it will rerender when its value is getting change(not null)
  if (!product) return null;
  if (!options) return null;
  if (!variant) return null;


  // When variant change , selected variant state change.
  const updateSelectedVariant = (option) => {
    const findSeletedVariant = product?.variants?.find(i => JSON.stringify(i.options) === JSON.stringify(option) && i)
    dispatch(productSelectedVariant(findSeletedVariant))
  }

  // When variant change , selected variant state change.  
  const updateVariant = (i, optionValue) => {
    debugger;
    // selected variant options
    let options = [...variant.options]
    // assigning new selected option value to that index
    options[i] = optionValue;
    // passing new selected variant options for update selected variant
    updateSelectedVariant(options)
  }
  return (
    <div className="varaint-selector-wrapper">
      {options?.map((option, i) => (
        <div key={i} className="option-list">
          <h3 className="option-title">{option.name}</h3>
          <div className='option-values'>
            {option?.values?.map((optionValue, j) => (
              <div key={j} className={`${variant[`option${i + 1}`] == optionValue && option.name == 'Color' ? 'active-option-wrapper' : ''}`}>
                {option.name == 'Color' ?
                  <div onClick={() => updateVariant(i, optionValue)} className={`${variant[`option${i + 1}`] == optionValue ? 'active-option' : ''} option-value option-${option.name}`} style={{ backgroundColor: optionValue }} value={optionValue}></div> :
                  <div onClick={() => updateVariant(i, optionValue)} className={`${variant[`option${i + 1}`] == optionValue ? 'active-option bg-black text-white' : ''} option-value option-${option.name}`} value={optionValue}>{optionValue}</div>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductVariantSelector