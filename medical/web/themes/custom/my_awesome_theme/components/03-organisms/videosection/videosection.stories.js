import videosection from './videosection.twig';
import videosectionData from './videosection.yml';
import './videosection.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/videosection' };
export const videosections = () => videosection({ ...videosectionData });
