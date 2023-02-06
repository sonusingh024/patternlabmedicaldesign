import heromolecule from './heromolecule.twig';
import heromoleculeData from './heromolecule.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/heromolecule' };
export const heromolecules = () => heromolecule(heromoleculeData);
