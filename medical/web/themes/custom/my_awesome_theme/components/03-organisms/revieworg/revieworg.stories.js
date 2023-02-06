import revieworg from './revieworg.twig';
import revieworgData from './revieworg.yml';
import reviewmoleculeData from '../../02-molecules/reviewmolecule/reviewmolecule.yml';
import './revieworg.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/revieworg' };
export const revieworgs = () =>
  revieworg({ ...revieworgData, ...reviewmoleculeData });
