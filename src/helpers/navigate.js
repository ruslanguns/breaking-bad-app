/**
 * Use to navigate to selec page and params
 * Reference cheatsheet
 * https://www.samanthaming.com/tidbits/86-window-location-cheatsheet/
 * @param {*} path 
 * @param {*} params 
 */
 export const navigateTo = (path, params) => {
     if (params) {
        window.location.href = window.location.origin.concat(`/breaking-bad-app/${path}/${params}`);
        return;
     }
     window.location.href = window.location.origin.concat(`/breaking-bad-app/${path}`);
   
  };

export const openExternalURL = (url) => window.open(url, '_blank');