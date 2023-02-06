import iconmole from './iconmole.twig';
import iconmoleData from './iconmole.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/iconmole' };
export const iconmoles = () => iconmole(iconmoleData);
