"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXTENDED_COLORS_ARRAY = exports.EXTENDED_COLORS_OBJECT = exports.DARKMODE_COLORS = exports.themeColors = exports.COLORS = void 0;
const react_native_1 = require("react-native");
let theme = react_native_1.Appearance.getColorScheme();
if (!theme || !/light|dark/.test(theme)) {
    theme = 'light';
}
exports.COLORS = {
    almostWhite: '#F9FAFC',
    black: '#000000',
    darkGrey: '#273444',
    darkerGrey: '#1F2633',
    grey: '#8492A6',
    lightGrey: '#D3DCE6',
    lighterGrey: '#E5E9F2',
    lighterGrey2: '#EFF2F7',
    white: '#ffffff',
    red: '#FF4949',
    blue: '#246EBE',
    blue2: '#3093FD',
    blue3: '#62c5f5',
    darkBlue: '#273444',
    darkerBlue: '#184A7F',
    lightBlue: '#d4e2f1',
    yellow: '#FFCD00',
    darkYellow: '#927200',
    lightYellow: '#FFFBEB',
    green: '#83E19A',
    green2: '#79f1a4',
    blueGreen: '#0364ca',
    inAppBlue: '#2051FE',
    inAppBlueBackground: '#E3E9FF',
    inAppRed: '#EC4A5E',
    inAppRedBackground: '#FDE8EB',
};
const themes = {
    dark: {
        background: exports.COLORS.almostWhite,
        contentBackground: exports.COLORS.white,
        divider: exports.COLORS.lighterGrey,
        dividerHighlighted: exports.COLORS.yellow,
        headerBackground: exports.COLORS.white,
        iconFill: exports.COLORS.darkGrey,
        link: exports.COLORS.blue,
        modalBackground: exports.COLORS.darkerGrey,
        pollAnswer: exports.COLORS.lightGrey,
        pollAnswerSelected: exports.COLORS.blue3,
        text: exports.COLORS.darkGrey,
        textReverse: exports.COLORS.white,
        textSecondary: exports.COLORS.grey,
        textPositive: exports.COLORS.green,
        textNegative: exports.COLORS.red,
        textWarning: exports.COLORS.darkYellow,
        textboxBackground: exports.COLORS.white,
        textboxText: exports.COLORS.darkGrey,
        textboxPlaceholder: exports.COLORS.grey,
        textboxPlaceholderFocused: exports.COLORS.darkGrey,
        sponsoredBackground: exports.COLORS.lightYellow,
        carouselBackground: exports.COLORS.white,
        carouselPagination: exports.COLORS.lightGrey,
        outlineButtonBorder: exports.COLORS.lightGrey,
        carouselPaginationActive: exports.COLORS.yellow,
        badgeBackground: {
            positive: exports.COLORS.green,
            negative: exports.COLORS.red,
            unread: exports.COLORS.blue2,
        },
        badgeText: {
            positive: exports.COLORS.white,
            negative: exports.COLORS.white,
            unread: exports.COLORS.white,
        },
        hexButtonBackground: {
            action: exports.COLORS.yellow,
            actionAdmit: exports.COLORS.blue,
            nav: exports.COLORS.darkBlue,
        },
        hexButtonIcon: {
            action: exports.COLORS.darkGrey,
            actionAdmit: exports.COLORS.white,
            nav: exports.COLORS.white,
        },
        hexButtonNavLabel: exports.COLORS.darkBlue,
        hexButtonNavBackground: exports.COLORS.lighterGrey2,
        shadowColor: exports.COLORS.white,
        toggleInactive: exports.COLORS.lightGrey,
        toggleActive: exports.COLORS.darkGrey,
        whiteOrBlack: exports.COLORS.white,
        whiteOrBlackTransparent: 'rgba(255, 255, 255, .8)',
        validationError: exports.COLORS.red,
        welcomeBackground: exports.COLORS.green
    },
    light: {
        background: exports.COLORS.almostWhite,
        contentBackground: exports.COLORS.white,
        divider: exports.COLORS.lighterGrey,
        dividerHighlighted: exports.COLORS.yellow,
        headerBackground: exports.COLORS.white,
        iconFill: exports.COLORS.darkGrey,
        link: exports.COLORS.blue,
        modalBackground: exports.COLORS.yellow,
        pollAnswer: exports.COLORS.lightGrey,
        pollAnswerSelected: exports.COLORS.blue3,
        text: exports.COLORS.darkGrey,
        textReverse: exports.COLORS.white,
        textSecondary: exports.COLORS.grey,
        textPositive: exports.COLORS.green,
        textNegative: exports.COLORS.red,
        textWarning: exports.COLORS.darkYellow,
        textboxBackground: exports.COLORS.white,
        textboxText: exports.COLORS.darkGrey,
        textboxPlaceholder: exports.COLORS.grey,
        textboxPlaceholderFocused: exports.COLORS.darkGrey,
        sponsoredBackground: exports.COLORS.lightYellow,
        carouselBackground: exports.COLORS.white,
        carouselPagination: exports.COLORS.lightGrey,
        outlineButtonBorder: exports.COLORS.lightGrey,
        carouselPaginationActive: exports.COLORS.yellow,
        badgeBackground: {
            positive: exports.COLORS.green,
            negative: exports.COLORS.red,
            unread: exports.COLORS.blue2,
        },
        badgeText: {
            positive: exports.COLORS.darkGrey,
            negative: exports.COLORS.white,
            unread: exports.COLORS.white,
        },
        hexButtonBackground: {
            action: exports.COLORS.yellow,
            actionAdmit: exports.COLORS.blue,
            nav: exports.COLORS.darkBlue,
        },
        hexButtonIcon: {
            action: exports.COLORS.darkGrey,
            actionAdmit: exports.COLORS.white,
            nav: exports.COLORS.white,
        },
        hexButtonNavLabel: exports.COLORS.darkBlue,
        hexButtonNavBackground: exports.COLORS.lighterGrey2,
        shadowColor: exports.COLORS.black,
        toggleInactive: exports.COLORS.lightGrey,
        toggleActive: exports.COLORS.darkGrey,
        whiteOrBlack: exports.COLORS.white,
        whiteOrBlackTransparent: 'rgba(255, 255, 255, .8)',
        validationError: exports.COLORS.red,
        welcomeBackground: exports.COLORS.green
    }
};
exports.themeColors = themes[theme];
const OLD_COLORS = {
    darkerGrey: '#1F2633',
    darkerGreyTransparent: 'rgba(31, 38, 51, .4)', // matches GRAY
    darkGrey: '#252733',
    offBlack: '#3A4047',
    yellow: '#FFCD00',
    white: '#fff',
    gray: '#a8a9ad', //matches GUNSHIP
    littleBitLighterGrey: 'rgba(37, 39, 51, 0.3)',
    midGrey: '#c5c2c1',
    lightGrey: '#D3D4D6',
    lighterGrey: '#e5e5e5',
    lighterGrey2: 'rgba(37, 39, 51, 0.1)', // .1 opacity on darkGrey
    almostWhite: '#f6f6f8', // .05 opacity on darkGrey
    almostWhite2: '#f4f4f5',
    hashtag: '#502bbb',
    blue: '#0E8ACA',
    blue2: '#6A93E2',
    purple: '#6747CD',
    red: 'red',
    delete: '#E72D2D',
    warn: '#E72D95',
    silver: '#d3d4d5', //'rgba(37, 39, 51, 0.2)',
    gunship: 'rgba(37, 39, 51, 0.4)', //matches GRAY
    softGray: '#7c7d85',
    whiteSmoke: `#f7f7f7`,
    green: '#74D8AE',
    lightGreen: '#20E3D6',
    pink: '#E72D95',
    lightGreen2: '#0DBAA7',
    lightGreen3: '#2EFFA0',
    backgroundStart: 'rgba(37, 39, 51, 0.5)',
    backgroundEnd: 'rgba(37, 39, 51, 0.9)',
    lightYellow: '#fcf7e3',
    orange: '#f7984e'
};
exports.DARKMODE_COLORS = {
    greyBlue: '#353b47', //OLD_COLORS.whiteSmoke, .1 opacity over OLD_COLORS.darkerGrey
    lightGreyBlue: '#4a505b',
    softGrey: '#949495',
    lightBlue: '#7483b1', // white, .05 opacity over OLD_COLORS.darkerGrey
    darkBlue: '#40487F',
    darkBlue2: '#282e3b',
    darkBlue3: '#32395e', //DARKMODE_COLORS.darkBlue opacity .6 over OLD_COLORS.darkerGrey
    darkBlue4: '#2a3048', //DARKMODE_COLORS.darkBlue opacity .3 over OLD_COLORS.darkerGrey
    darkerBlue: '#353c47',
    darkPurple: '#40487f'
};
exports.EXTENDED_COLORS_OBJECT = {
    one: '#2EFFA0',
    two: '#20E3D6',
    three: '#8C4AA4',
    four: '#E72D95',
    five: '#F78A35',
    six: '#B8C63D',
    seven: '#BEFF1C',
    eight: '#B77F37',
    nine: '#0E8ACA',
    ten: '#9000C7',
    eleven: '#0DBAA7',
};
exports.EXTENDED_COLORS_ARRAY = [
    '#2EFFA0',
    '#20E3D6',
    '#8C4AA4',
    '#E72D95',
    '#F78A35',
    '#B8C63D',
    '#BEFF1C',
    '#B77F37',
    '#0E8ACA',
    '#9000C7',
    '#0DBAA7'
];
exports.default = OLD_COLORS;
//# sourceMappingURL=colors.js.map