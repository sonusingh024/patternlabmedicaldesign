import custommenu from './custommenu.twig';
import custommenuData from './custommenu.yml';
import './custommenu.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/feature' };
export const features = () => custommenu(custommenuData);
