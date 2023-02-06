import catemole from './catemole.twig';
import catemoleData from './catemole.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/catemole' };
export const catemoles = () => catemole(catemoleData);
