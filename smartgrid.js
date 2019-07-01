var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    filename: '_smart-grid', /* default smart-grid */
    outputStyle: 'scss', /* less || scss || sass || styl */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        },
        xxs: {
            width: '380px'
        }
    }
};

smartgrid('./app/libs/smart-grid/', settings);