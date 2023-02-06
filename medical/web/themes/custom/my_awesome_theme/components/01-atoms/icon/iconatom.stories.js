import iconatom from './iconatom.twig';
import iconatomData from './iconatom.yml';
import iconatomaltData from './iconatomalt.yml';
import iconatomyellowData from './iconatomyellow.yml';
import './iconatom.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Atoms/iconatom' };
export const iconatoms = () => iconatom(iconatomData);
export const iconatomalt = () => iconatom(iconatomaltData);
export const iconatomyellow = () => iconatom(iconatomyellowData);
