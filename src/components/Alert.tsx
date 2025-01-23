import { CgDanger } from 'react-icons/cg';
import { AlertCompTypes } from '../types/main';
import { FaCheck, FaFontAwesomeFlag } from 'react-icons/fa';

const Alert = (props: AlertCompTypes) => {
  const types = ['danger', 'success', 'info'];
  const colors = ['red-700', 'green-700', 'blue-700'];
  const hexColors = ['#B91C1C', '#15803D', '#1D4ED8'];
  const index = types.findIndex(value => value == props?.type);
  const iconColor = colors[index];

  const icons = [
    <CgDanger size={props?.iconSize} color={iconColor} />,
    <FaCheck size={props?.iconSize} color={iconColor} />,
    <FaFontAwesomeFlag size={props?.iconSize} color={iconColor} />,
  ];

  return (
    <div
      className='w-full text-white text-[12px] flex items-center min-h-[50px] px-3 py-[10px] gap-3 capitalize bg-red-700'
      style={{
        backgroundColor: hexColors[index]
      }}
    >
      <span>
        {icons[index]}
      </span>
      <span>{props?.message}</span>
    </div>
  )
}

export default Alert