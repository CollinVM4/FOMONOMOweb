(function (global) {
  'use strict';

  const iconManifest = {
    at: 'fomoNomoIcons/at.svg',
    bell: 'fomoNomoIcons/bell.svg',
    block: 'fomoNomoIcons/block.svg',
    calender: 'fomoNomoIcons/calender.svg',
    camera: 'fomoNomoIcons/camera.svg',
    coffee: 'fomoNomoIcons/coffee.svg',
    commentIcon: 'fomoNomoIcons/commentIcon.svg',
    compass: 'fomoNomoIcons/compass.svg',
    createPostIcon: 'fomoNomoIcons/createPostIcon.svg',
    deleteAccount: 'fomoNomoIcons/deleteAccount.svg',
    draftIcon: 'fomoNomoIcons/draftIcon.svg',
    edit: 'fomoNomoIcons/edit.svg',
    education: 'fomoNomoIcons/education.svg',
    email: 'fomoNomoIcons/email.svg',
    eye: 'fomoNomoIcons/eye.svg',
    gear: 'fomoNomoIcons/gear.svg',
    going: 'fomoNomoIcons/going.svg',
    homeIcon: 'fomoNomoIcons/homeIcon.svg',
    leaderboard: 'fomoNomoIcons/leaderboard.svg',
    likeIcon: 'fomoNomoIcons/likeIcon.SVG',
    link: 'fomoNomoIcons/link.svg',
    loader: 'fomoNomoIcons/loader.svg',
    loadpast: 'fomoNomoIcons/loadpast.svg',
    location: 'fomoNomoIcons/location.svg',
    map: 'fomoNomoIcons/map.svg',
    menu: 'fomoNomoIcons/menu.svg',
    myPostsIcon: 'fomoNomoIcons/myPostsIcon.svg',
    password: 'fomoNomoIcons/password.svg',
    passwordIcon: 'fomoNomoIcons/passwordIcon.svg',
    path227: 'fomoNomoIcons/path227.svg',
    postsYourGoingTo: 'fomoNomoIcons/postsYourGoingTo.svg',
    premium: 'fomoNomoIcons/premium.svg',
    refresh: 'fomoNomoIcons/refresh.svg',
    removeRSVP: 'fomoNomoIcons/removeRSVP.svg',
    report: 'fomoNomoIcons/report.svg',
    rsvpIcon: 'fomoNomoIcons/rsvpIcon.svg',
    search: 'fomoNomoIcons/search.svg',
    sendComment: 'fomoNomoIcons/sendComment.svg',
    sendMessage: 'fomoNomoIcons/sendMessage.svg',
    settings: 'fomoNomoIcons/settings.svg',
    share: 'fomoNomoIcons/share.svg',
    sign: 'fomoNomoIcons/sign.svg',
    smile: 'fomoNomoIcons/smile.svg',
    startTime: 'fomoNomoIcons/startTime.svg',
    surveyCompleteIcon: 'fomoNomoIcons/surveyCompleteIcon.svg',
    surveyHeaderIcon: 'fomoNomoIcons/surveyHeaderIcon.svg',
    swearSnackbar: 'fomoNomoIcons/swearSnackbar.svg',
    tagIcon: 'fomoNomoIcons/tagIcon.svg',
    threedots: 'fomoNomoIcons/threedots.svg',
    tree: 'fomoNomoIcons/tree.svg',
    uploadIcon: 'fomoNomoIcons/uploadIcon.svg',
    user: 'fomoNomoIcons/user.svg',
    userIcon: 'fomoNomoIcons/userIcon.svg',
    yourPostHistory: 'fomoNomoIcons/yourPostHistory.svg',
    speaker: 'fomoNomoIcons/speaker.svg',
    star: 'fomoNomoIcons/star.svg',
  };

  // Add convenience aliases like coffeeIcon for icons whose source key is coffee.
  Object.keys(iconManifest).forEach(function (key) {
    if (!key.endsWith('Icon')) {
      const alias = key + 'Icon';
      if (!iconManifest[alias]) {
        iconManifest[alias] = iconManifest[key];
      }
    }
  });

  const FomoNomoIcons = Object.freeze(iconManifest);

  const IconSize = Object.freeze({
    xSmall: 12,
    small: 16,
    medium: 20,
    mediumLarge: 24,
    large: 32,
    xLarge: 40
  });

  const xSmall = 'xSmall';
  const small = 'small';
  const medium = 'medium';
  const mediumLarge = 'mediumLarge';
  const large = 'large';
  const xLarge = 'xLarge';

  function resolveIconPixels(size) {
    if (typeof size === 'number') {
      return size;
    }

    if (typeof size === 'string') {
      if (Object.prototype.hasOwnProperty.call(IconSize, size)) {
        return IconSize[size];
      }

      const parsed = Number(size);
      if (!Number.isNaN(parsed)) {
        return parsed;
      }
    }

    return IconSize.medium;
  }

  function AssetIcon(iconPath, options) {
    const resolvedOptions = options || {};
    const pixels = resolveIconPixels(resolvedOptions.size);
    const img = document.createElement('img');

    img.src = iconPath;
    img.width = pixels;
    img.height = pixels;
    img.style.width = pixels + 'px';
    img.style.height = pixels + 'px';
    img.style.display = 'block';
    img.style.flex = '0 0 auto';
    img.style.maxWidth = 'none';
    img.style.maxHeight = 'none';
    img.alt = resolvedOptions.alt || '';
    img.decoding = 'async';
    img.loading = resolvedOptions.loading || 'lazy';

    if (resolvedOptions.className) {
      img.className = resolvedOptions.className;
    }

    if (resolvedOptions.title) {
      img.title = resolvedOptions.title;
    }

    return img;
  }

  global.FomoNomoIcons = FomoNomoIcons;
  global.IconSize = IconSize;
  global.AssetIcon = AssetIcon;

  // Optional shorthand so size: mediumLarge reads naturally in object literals.
  global.xSmall = xSmall;
  global.small = small;
  global.medium = medium;
  global.mediumLarge = mediumLarge;
  global.large = large;
  global.xLarge = xLarge;
})(window);
