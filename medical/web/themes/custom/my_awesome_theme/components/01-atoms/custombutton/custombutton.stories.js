// Buttons Stories
import custombutton from './custombutton.twig';
import custombuttonData from './custombutton.yml';
import custombuttonsecData from './custombuttonsec.yml';
import './custombutton.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Atoms/custombutton' };
export const custombuttons = () => custombutton(custombuttonData);
export const custombuttonsec = () => custombutton(custombuttonsecData);
