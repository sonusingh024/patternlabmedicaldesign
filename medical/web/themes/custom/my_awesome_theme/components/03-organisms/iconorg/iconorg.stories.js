import iconorg from './iconorg.twig';
import iconorgData from './iconorg.yml';
import iconmoleData from '../../02-molecules/iconmole/iconmole.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/iconorg' };
export const iconorgs = () => iconorg({ ...iconorgData, ...iconmoleData });
