import React from 'react';
import Svg, {Path} from 'react-native-svg';
import color from "../../styles/color";

const ProjectIcon = ({active}) => {
    const cssColor = active?color.blueColorIcon:color.greyColorIcon ;
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={20} viewBox="0 0 18 20" fill="none">
            <Path xmlns="http://www.w3.org/2000/svg" d="M13.9658 0.516329C13.7762 0.197845 13.4233 0 13.045 0H9.09091V4.54545H16.3636L13.9658 0.516329Z" fill={cssColor}/>
            <Path xmlns="http://www.w3.org/2000/svg" d="M7.27273 0H3.29727C2.9197 0 2.56828 0.198204 2.3795 0.517406L0 4.54545H7.27269V0H7.27273Z" fill={cssColor}/>
            <Path xmlns="http://www.w3.org/2000/svg" d="M0 6.36364V18.646C0 19.3927 0.613455 20 1.36718 20H15.9055C16.6593 20 17.2727 19.3927 17.2727 18.646V6.36364H0ZM11.275 11.5288L8.26859 14.507C8.15505 14.6195 8.00621 14.6759 7.85742 14.6759C7.70863 14.6759 7.5598 14.6195 7.44664 14.507L6.03724 13.1112C5.81054 12.8866 5.81054 12.5219 6.03724 12.297C6.26432 12.072 6.63249 12.072 6.85957 12.297L7.85746 13.2859L10.4531 10.7146C10.6802 10.4896 11.0483 10.4896 11.275 10.7146C11.5021 10.9395 11.5021 11.3039 11.275 11.5288Z" fill={cssColor}/>
        </Svg>
    );
};

export default ProjectIcon;
