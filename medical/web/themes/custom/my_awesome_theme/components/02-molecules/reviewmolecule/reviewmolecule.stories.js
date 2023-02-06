import reviewmolecule from './reviewmolecule.twig';
import reviewmoleculeData from './reviewmolecule.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/reviewmolecule' };
export const reviewmolecules = () => reviewmolecule(reviewmoleculeData);
