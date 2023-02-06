import herosection from './herosection.twig';
import herosectionData from './herosection.yml';
import heromoleculeData from '../../02-molecules/hero/heromolecule.yml';
import './herosection.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/herosection' };
export const herosections = () =>
  herosection({ ...herosectionData, ...heromoleculeData });
