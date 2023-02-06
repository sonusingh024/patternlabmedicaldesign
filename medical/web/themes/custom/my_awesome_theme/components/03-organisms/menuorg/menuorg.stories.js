import menuorg from './menuorg.twig';
import menuorgData from './menuorg.yml';
import './menu.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/menuorg' };
export const menuorgs = () => menuorg(menuorgData);
