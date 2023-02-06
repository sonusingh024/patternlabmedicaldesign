// Buttons Stories
import imagezoom from './imagezoom.twig';
import imagezoomData from './imagezoom.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Atoms/imagezoom' };
export const imagezooms = () => imagezoom(imagezoomData);
