import { memo, useRef } from 'react';
import PropTypes from 'prop-types';

import { InputContainer } from './style';
import withField from '../Field/withField';

const _Input = ({
	type,
	name,
	icon: IconComponent,
	value,
	label,
	error,
	disabled,
	onChange,
	isSelect,
	...props
}) => (
	<>
		<InputContainer value={value} isSelect={isSelect} error={error} disabled={disabled}>
			<label>{label}</label>
			<input type={type} name={name} value={value ?? ''} onChange={onChange} disabled={disabled} {...props} />
			{IconComponent && <IconComponent />}
		</InputContainer>
	</>
);


_Input.propTypes = {
	icon: PropTypes.func,
	error: PropTypes.bool,
	type: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	isSelect: PropTypes.bool,
	placeholder: PropTypes.string,
};

export const Input = memo(_Input);

export default withField(Input);

